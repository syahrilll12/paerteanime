import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import db from './db';
import { chromium } from 'playwright';

const DB_PATH = path.join(process.cwd(), 'src/data/scraped_anime.json');
const BASE_URL = 'https://v12.kuramanime.tel';

export interface ScrapedAnime {
  id: string;
  title: string;
  episode: string;
  link: string;
  image: string;
  updatedAt: string;
  releaseTime?: string;
  type?: string;
  origin?: string;
}

const upgradeImageToHD = (url: string) => {
  if (!url) return url;
  let cleanUrl = url;
  if (cleanUrl.includes('i0.wp.com/') || cleanUrl.includes('i1.wp.com/') || cleanUrl.includes('i2.wp.com/') || cleanUrl.includes('i3.wp.com/')) {
    cleanUrl = cleanUrl.replace(/https:\/\/i\d\.wp\.com\//, 'https://');
  }
  if (cleanUrl.includes('?')) {
    cleanUrl = cleanUrl.split('?')[0];
  }
  return cleanUrl;
};

const parseRelativeTime = (timeStr: string): string => {
  const now = new Date();
  const match = timeStr.match(/(\d+)\s+(menit|jam|hari|minggu)\s+yang\s+lalu/i);
  if (!match) return now.toISOString();

  const val = parseInt(match[1]);
  const unit = match[2].toLowerCase();

  switch (unit) {
    case 'menit': now.setMinutes(now.getMinutes() - val); break;
    case 'jam': now.setHours(now.getHours() - val); break;
    case 'hari': now.setDate(now.getDate() - val); break;
    case 'minggu': now.setDate(now.getDate() - (val * 7)); break;
  }
  return now.toISOString();
};

export const scrapeSamehadaku = async () => {
  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const results: ScrapedAnime[] = [];

    $('.product__item').each((i, el) => {
      const title = $(el).find('.product__item__text h5 a').text().trim();
      const link = $(el).find('.product__item__text h5 a').attr('href') || '';
      const episode = $(el).find('.ep span').text().trim();
      let image = $(el).find('.product__item__pic').attr('data-setbg') || '';
      image = upgradeImageToHD(image);
      
      const timeText = $(el).find('.product__item__pic .comment').text().trim() || 'Baru saja';
      const actualDate = parseRelativeTime(timeText);
      
      // Better origin detection
      let origin = 'Japan';
      if (link.includes('/donghua/') || title.toLowerCase().includes('donghua')) {
        origin = 'China';
      }

      const id = link.split('/').filter(Boolean).pop() || Math.random().toString(36).substr(2, 9);

      if (title && link && image) {
        results.push({
          id,
          title,
          episode,
          link,
          image,
          updatedAt: actualDate,
          releaseTime: timeText,
          origin
        });

        try {
            const animeId = id.includes('episode') ? id.split('-episode')[0] : id;
            db.prepare('INSERT OR IGNORE INTO anime (id, title, image, type) VALUES (?, ?, ?, ?)').run(
                animeId,
                title.split(' Episode')[0],
                image,
                origin
            );
            
            db.prepare('INSERT OR IGNORE INTO episodes (anime_id, title, url) VALUES (?, ?, ?)').run(
                animeId,
                title,
                link
            );
        } catch (e) {}
      }
    });

    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const uniqueResults = results.filter((anime, index, self) =>
      index === self.findIndex((t) => t.id === anime.id)
    );

    fs.writeFileSync(DB_PATH, JSON.stringify(uniqueResults, null, 2));
    return uniqueResults;
  } catch (error) {
    console.error('[Scraper] Error scraping Kuramanime:', error);
    return [];
  }
};

export const searchAnime = async (query: string) => {
  try {
    const localResults = db.prepare("SELECT id, title, image, type FROM anime WHERE title LIKE ? LIMIT 5").all(`%${query}%`) as any[];
    
    const { data } = await axios.get(`${BASE_URL}/anime?search=${encodeURIComponent(query)}&order_by=latest`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const results: any[] = [];

    $('.product__item').each((i, el) => {
      const title = $(el).find('.product__item__text h5 a').text().trim();
      const link = $(el).find('.product__item__text h5 a').attr('href') || '';
      let image = $(el).find('.product__item__pic').attr('data-setbg') || '';
      image = upgradeImageToHD(image);
      
      let origin = 'Japan';
      if (link.includes('/donghua/')) origin = 'China';

      if (title && link && image) {
        results.push({ title, link, image, origin });
        try {
            const id = link.split('/').filter(Boolean).pop() || '';
            db.prepare('INSERT OR IGNORE INTO anime (id, title, image, type) VALUES (?, ?, ?, ?)').run(id, title, image, origin);
        } catch (e) {}
      }
    });

    return results.length > 0 ? results : localResults.map(r => ({
        title: r.title,
        link: `${BASE_URL}/anime/${r.id}/`,
        image: r.image,
        origin: r.type
    }));
  } catch (error) {
    console.error('[Scraper] Error searching anime:', error);
    return [];
  }
};

export const scrapeEpisodeDetails = async (url: string) => {
  try {
    const cached = db.prepare('SELECT title, stream_data, episode_list, download_links FROM episodes WHERE url = ?').get(url) as any;
    if (cached?.stream_data && cached.stream_data !== '[]') {
        const streams = JSON.parse(cached.stream_data);
        return {
            title: cached.title || '', 
            streams,
            episodes: cached.episode_list ? JSON.parse(cached.episode_list) : [],
            downloads: cached.download_links ? JSON.parse(cached.download_links) : []
        };
    }

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    
    let streams: { provider: string; url: string }[] = [];
    let episodeList: { title: string; url: string; date: string }[] = [];
    let downloadLinks: { quality: string; provider: string; url: string }[] = [];
    let title = '';

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForTimeout(3000); 
        
        title = await page.$eval('.anime__details__title h3', el => el.textContent?.trim() || '').catch(() => '');
        if (!title) title = await page.title();

        const videoSrc = await page.getAttribute('video source', 'src').catch(() => null);
        if (videoSrc) {
            streams.push({ provider: 'KuramaStream', url: videoSrc });
        }

        const serverOptions = await page.$$eval('#serverForm select option', (opts) => 
            opts.map(o => ({ label: o.textContent?.trim() || 'Server', value: (o as HTMLOptionElement).value }))
        );
        
        if (serverOptions.length > 0) {
            for (const opt of serverOptions) {
                streams.push({ provider: opt.label, url: `${url}?server=${opt.value}` });
            }
        }

        episodeList = await page.$$eval('#animeEpisodes a', (els) => {
            return els.map(el => ({
                title: el.textContent?.trim() || '',
                url: (el as HTMLAnchorElement).href,
                date: ''
            })).filter(ep => ep.url !== '');
        });

    } finally {
        await browser.close();
    }

    if (streams.length > 0) {
        db.prepare('UPDATE episodes SET title = ?, stream_data = ?, episode_list = ?, download_links = ?, updated_at = CURRENT_TIMESTAMP WHERE url = ?').run(
            title,
            JSON.stringify(streams),
            JSON.stringify(episodeList),
            JSON.stringify(downloadLinks),
            url
        );
    }

    return { title, streams, episodes: episodeList, downloads: downloadLinks };
  } catch (error) {
    console.error('[Scraper] Error scraping Kuramanime episode:', error);
    return null;
  }
};

export const scrapeSeasons = async (season: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/properties/season/${season}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const results: any[] = [];

    $('.product__item').each((i, el) => {
      const title = $(el).find('.product__item__text h5 a').text().trim();
      const link = $(el).find('.product__item__text h5 a').attr('href') || '';
      let image = $(el).find('.product__item__pic').attr('data-setbg') || '';
      image = upgradeImageToHD(image);
      const score = $(el).find('.ep span').text().trim();

      if (title && link && image) {
        results.push({
          id: link.split('/').filter(Boolean).pop() || '',
          title,
          link,
          image,
          rating: score.split('/')[0] || '0.0',
          category: 'Anime',
          origin: link.includes('/donghua/') ? 'China' : 'Japan'
        });
      }
    });

    return results;
  } catch (error) {
    console.error(`[Scraper] Error scraping season ${season}:`, error);
    return [];
  }
};

export const getDirectVideoLink = async (streamUrl: string) => {
    return streamUrl;
};
