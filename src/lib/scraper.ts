import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import db from './db';
import { chromium } from 'playwright';

const DB_PATH = path.join(process.cwd(), 'src/data/scraped_anime.json');

export interface ScrapedAnime {
  id: string;
  title: string;
  episode: string;
  link: string;
  image: string;
  updatedAt: string;
}

const upgradeImageToHD = (url: string) => {
  if (!url) return url;
  let cleanUrl = url;
  if (cleanUrl.includes('?')) {
    cleanUrl = cleanUrl.split('?')[0];
  }
  if (cleanUrl.includes('i0.wp.com/') || cleanUrl.includes('i1.wp.com/') || cleanUrl.includes('i2.wp.com/') || cleanUrl.includes('i3.wp.com/')) {
    cleanUrl = cleanUrl.replace(/https:\/\/i\d\.wp\.com\//, 'https://');
  }
  return cleanUrl;
};

export const scrapeSamehadaku = async () => {
  try {
    const { data } = await axios.get('https://samehadaku.li/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const results: ScrapedAnime[] = [];

    $('.listupd .bs').each((i, el) => {
      const title = $(el).find('.tt h2').text().trim();
      const link = $(el).find('a').attr('href') || '';
      const episode = $(el).find('.epx').text().trim(); 
      let image = $(el).find('img').attr('src') || '';
      image = upgradeImageToHD(image);
      
      const id = link.split('/').filter(Boolean).pop() || Math.random().toString(36).substr(2, 9);

      if (title && link) {
        results.push({
          id,
          title,
          episode,
          link,
          image,
          updatedAt: new Date().toISOString()
        });

        // Save to SQLite
        try {
            const animeId = id.includes('episode') ? id.split('-episode')[0] : id;
            db.prepare('INSERT OR IGNORE INTO anime (id, title, image, type) VALUES (?, ?, ?, ?)').run(
                animeId,
                title.split(' Episode')[0],
                image,
                'TV'
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
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const uniqueResults = results.filter((anime, index, self) =>
      index === self.findIndex((t) => t.id === anime.id)
    );

    fs.writeFileSync(DB_PATH, JSON.stringify(uniqueResults, null, 2));
    return uniqueResults;
  } catch (error) {
    console.error('[Scraper] Error scraping Samehadaku:', error);
    return [];
  }
};

export const searchAnime = async (query: string) => {
  try {
    const localResults = db.prepare("SELECT id, title, image FROM anime WHERE title LIKE ? LIMIT 5").all(`%${query}%`) as any[];
    
    const { data } = await axios.get(`https://samehadaku.li/?s=${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const results: any[] = [];

    $('.listupd .bs, .listupd article').each((i, el) => {
      const title = $(el).find('.tt h2').text().trim() || $(el).find('h2').text().trim();
      const link = $(el).find('a').attr('href') || '';
      let image = $(el).find('img').attr('src') || '';
      image = upgradeImageToHD(image);
      const score = $(el).find('.score').text().trim();

      if (title && link) {
        results.push({
          title,
          link,
          image,
          score
        });

        try {
            const id = link.split('/').filter(Boolean).pop() || '';
            db.prepare('INSERT OR IGNORE INTO anime (id, title, image, type) VALUES (?, ?, ?, ?)').run(id, title, image, 'TV');
        } catch (e) {}
      }
    });

    return results.length > 0 ? results : localResults.map(r => ({
        title: r.title,
        link: `https://samehadaku.li/anime/${r.id}/`,
        image: r.image
    }));
  } catch (error) {
    console.error('[Scraper] Error searching anime:', error);
    return [];
  }
};

export const getDirectVideoLink = async (streamUrl: string) => {
  try {
    if (streamUrl.includes('blogger.com')) {
      const { data } = await axios.get(streamUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'Referer': 'https://samehadaku.li/'
        }
      });
      
      const match = data.match(/"streams":\[(.*?)]/);
      if (match) {
        const streams = JSON.parse(`[${match[1]}]`);
        const bestStream = streams.sort((a: any, b: any) => b.format_id - a.format_id)[0];
        return bestStream.play_url;
      }
    }
    return streamUrl;
  } catch (error) {
    console.error('[Scraper] Error getting direct link:', error);
    return streamUrl;
  }
};

export const getLatestEpisodes = async (animeUrl: string) => {
  try {
    const { data } = await axios.get(animeUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const episodes: { title: string; url: string; date: string }[] = [];

    $('.lstepsiode.listeps li, .eplister ul li').each((i, el) => {
        const linkEl = $(el).find('.eps a, a');
        const title = linkEl.text().trim();
        const url = linkEl.attr('href') || '';
        const date = $(el).find('.date, .epl-date').text().trim();

        if (url && (url.includes('subtitle') || url.includes('episode'))) {
            episodes.push({ title, url, date });
        }
    });

    if (episodes.length === 0) {
        $('.lastend .inepcx a').each((i, el) => {
            const url = $(el).attr('href');
            const title = $(el).find('.epcur').text().trim();
            if (url && url !== '#') {
                episodes.push({ title: title || 'Full Movie', url, date: '' });
            }
        });
    }

    return episodes;
  } catch (error) {
    console.error('[Scraper] Error getting episodes:', error);
    return [];
  }
};

export const scrapeEpisodeDetails = async (url: string) => {
  try {
    const cached = db.prepare('SELECT title, stream_data, episode_list, download_links FROM episodes WHERE url = ?').get(url) as any;
    
    if (cached?.stream_data && cached.stream_data !== '[]') {
        const streams = JSON.parse(cached.stream_data);
        const sortedStreams = [...streams].sort((a, b) => {
          const res = (s: any) => parseInt(s.provider.match(/\d+p/)?.[0] || '0');
          return res(b) - res(a);
        });
        
        return {
            title: cached.title || '', 
            streams: sortedStreams,
            episodes: cached.episode_list ? JSON.parse(cached.episode_list) : [],
            downloads: cached.download_links ? JSON.parse(cached.download_links) : []
        };
    }

    console.log(`[Scraper] Launching Playwright for: ${url}`);
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
        console.log(`[Scraper] Navigating to: ${url}`);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForTimeout(2000); 
        
        title = await page.$eval('.entry-title', el => el.textContent?.trim() || '').catch(() => '');
        if (!title) title = await page.title();

        const options = await page.$$eval('.mirror option', (els) => 
            els.map(el => ({ 
                value: (el as HTMLOptionElement).value, 
                label: el.textContent?.trim() || '' 
            }))
        );

        for (const opt of options) {
            if (opt.value && opt.value.length > 10) {
                try {
                    const decoded = Buffer.from(opt.value, 'base64').toString('utf-8');
                    let streamUrl = decoded.match(/src=\\"([^\\"]+)\\\"/)?.[1] || decoded.match(/href=\\"([^\\"]+)\\\"/)?.[1];
                    if (!streamUrl && decoded.startsWith('http')) streamUrl = decoded;
                    
                    if (streamUrl) {
                        if (streamUrl.startsWith('//')) streamUrl = 'https:' + streamUrl;
                        streams.push({ provider: opt.label, url: streamUrl });
                    }
                } catch {}
            }
        }

        const tsmmedia = await page.evaluate(() => (window as any).tsmmedia);
        if (tsmmedia && tsmmedia.sources) {
            tsmmedia.sources.forEach((source: any) => {
                if (source.file) {
                    streams.push({
                        provider: source.label || 'Direct',
                        url: source.file
                    });
                }
            });
        }

        const iframeSrc = await page.getAttribute('#pembed iframe', 'src');
        if (iframeSrc && !streams.some(s => s.url === iframeSrc)) {
            streams.push({ provider: 'Default', url: iframeSrc });
        }

        downloadLinks = await page.$$eval('.download-eps li', (els) => {
            return els.flatMap(el => {
                const quality = el.querySelector('strong')?.textContent?.trim() || 'Unknown';
                const links = Array.from(el.querySelectorAll('a'));
                return links.map(a => ({
                    quality,
                    provider: a.textContent?.trim() || 'Download',
                    url: (a as HTMLAnchorElement).href
                }));
            });
        });

        const seriesUrl = await page.getAttribute('.naveps .nvsc a', 'href');
        if (seriesUrl) {
            const seriesPage = await context.newPage();
            await seriesPage.goto(seriesUrl, { waitUntil: 'domcontentloaded' });
            
            episodeList = await seriesPage.$$eval('.eplister ul li, .lstepsiode.listeps li', (els) => {
                return els.map(el => {
                    const a = el.querySelector('a');
                    const date = el.querySelector('.date, .epl-date')?.textContent?.trim() || '';
                    return {
                        title: a?.textContent?.trim() || '',
                        url: (a as HTMLAnchorElement)?.href || '',
                        date
                    };
                }).filter(ep => ep.url !== '');
            });
            await seriesPage.close();
        }

    } finally {
        await browser.close();
    }

    if (streams.length > 0) {
        streams = [...streams].sort((a, b) => {
          const getRes = (s: any) => {
            const match = s.provider.match(/\d+p/);
            return match ? parseInt(match[0]) : 0;
          };
          return getRes(b) - getRes(a);
        });

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
    console.error('[Scraper] Error scraping episode details with Playwright:', error);
    return null;
  }
};

export const scrapeSeasons = async (season: string) => {
  try {
    const { data } = await axios.get(`https://samehadaku.li/season/${season}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const results: any[] = [];

    $('.newseason .listseries .card').each((i, el) => {
      const title = $(el).find('h2').text().trim();
      const link = $(el).find('a').attr('href') || '';
      let image = $(el).find('img').attr('src') || '';
      image = upgradeImageToHD(image);
      const score = $(el).find('.right').text().trim();
      const cat = $(el).find('.card-info-bottom a').first().text().trim();

      if (title && link && image) {
        results.push({
          id: link.split('/').filter(Boolean).pop() || '',
          title,
          link,
          image,
          rating: score === '?' ? '0.0' : score,
          category: cat || 'Anime'
        });
      }
    });

    return results;
  } catch (error) {
    console.error(`[Scraper] Error scraping season ${season}:`, error);
    return [];
  }
};
