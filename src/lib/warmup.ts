import { scrapeSamehadaku, scrapeEpisodeDetails } from './scraper';
import db from './db';

export const warmUpCache = async (limit: number = 10) => {
    console.log(`[WarmUp] Starting sync for latest ${limit} titles...`);
    const latest = await scrapeSamehadaku();
    
    // Process only the top 'limit' titles to keep it fast
    const titlesToSync = latest.slice(0, limit);
    
    for (const anime of titlesToSync) {
        try {
            console.log(`[WarmUp] Syncing: ${anime.title}`);
            // This will trigger the Playwright scraper and save to SQLite
            await scrapeEpisodeDetails(anime.link);
        } catch (error) {
            console.error(`[WarmUp] Failed to sync ${anime.title}:`, error);
        }
    }
    
    console.log('[WarmUp] Sync complete.');
};
