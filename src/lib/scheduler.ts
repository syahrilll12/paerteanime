import cron from 'node-cron';
import { scrapeSamehadaku } from './scraper';

// Schedule task to run every hour (0 * * * *)
export const initScheduler = () => {
  console.log('[Scheduler] Initializing hourly anime update check...');
  
  cron.schedule('0 * * * *', async () => {
    console.log('[Scheduler] Running hourly scrape of Samehadaku...');
    await scrapeSamehadaku();
  });

  // Also run immediately on start for testing
  scrapeSamehadaku();
};
