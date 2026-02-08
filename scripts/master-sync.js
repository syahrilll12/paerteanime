const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const BASE_URL = 'https://v12.kuramanime.tel';

const upgradeImageToHD = (url) => {
  if (!url) return url;
  return url.replace(/https:\/\/i\d\.wp\.com\//, 'https://').split('?')[0];
};

async function masterSync() {
  console.log('--- [MasterSync] Memulai "The Great Reset & Fetch All" ---');

  try {
    // 1. Reset Database
    console.log('[MasterSync] Mengosongkan data lama di PostgreSQL...');
    await prisma.episode.deleteMany({});
    await prisma.anime.deleteMany({});

    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
    const dayMap = {
      'senin': 'monday', 'selasa': 'tuesday', 'rabu': 'wednesday', 
      'kamis': 'thursday', 'jumat': 'friday', 'sabtu': 'saturday', 'minggu': 'sunday'
    };

    // 2. Fetch by Schedule (Akurasi Filter Hari)
    for (const day of days) {
      console.log(`[MasterSync] Fetching schedule for: ${day}...`);
      const { data } = await axios.get(`${BASE_URL}/schedule?scheduled_day=${day}&page=1`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const $ = cheerio.load(data);
      
      const dayAnimes = [];
      $('.product__item').each((i, el) => {
        const title = $(el).find('.product__item__text h5 a').text().trim();
        const link = $(el).find('.product__item__text h5 a').attr('href') || '';
        let image = $(el).find('.product__item__pic').attr('data-setbg') || '';
        const id = link.split('/').filter(Boolean).pop() || '';

        if (title && id) {
          dayAnimes.push({
            id,
            title,
            url: link,
            image: upgradeImageToHD(image),
            type: link.includes('/donghua/') ? 'China' : 'Japan',
            scheduledDay: dayMap[day]
          });
        }
      });

      for (const anime of dayAnimes) {
        await prisma.anime.upsert({
          where: { id: anime.id },
          update: { scheduledDay: anime.scheduledDay, type: anime.type },
          create: anime
        });
      }
    }

    // 3. Fetch Seasons (Winter 2026 & Fall 2025)
    const seasons = ['winter-2026', 'fall-2025'];
    for (const season of seasons) {
      console.log(`[MasterSync] Fetching full season: ${season}...`);
      let page = 1;
      let hasMore = true;

      while (hasMore && page <= 5) { // Limit to 5 pages for speed, can be increased
        const { data } = await axios.get(`${BASE_URL}/properties/season/${season}?page=${page}`, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $ = cheerio.load(data);
        const cards = $('.product__item');
        
        if (cards.length === 0) {
          hasMore = false;
          break;
        }

        const seasonAnimes = [];
        cards.each((i, el) => {
          const title = $(el).find('.product__item__text h5 a').text().trim();
          const link = $(el).find('.product__item__text h5 a').attr('href') || '';
          let image = $(el).find('.product__item__pic').attr('data-setbg') || '';
          const id = link.split('/').filter(Boolean).pop() || '';

          if (title && id) {
            seasonAnimes.push({
              id,
              title,
              url: link,
              image: upgradeImageToHD(image),
              type: link.includes('/donghua/') ? 'China' : 'Japan',
              season: season
            });
          }
        });

        for (const anime of seasonAnimes) {
          await prisma.anime.upsert({
            where: { id: anime.id },
            update: { season: anime.season, type: anime.type },
            create: anime
          });
        }
        
        console.log(`[MasterSync] ${season} Page ${page} complete.`);
        page++;
      }
    }

    console.log('[MasterSync] Sinkronisasi Selesai!');
  } catch (error) {
    console.error('[MasterSync] Error:', error.message);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

masterSync();
