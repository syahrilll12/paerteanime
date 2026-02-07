export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Import secara dinamis untuk menghindari masalah build pada edge runtime
    const { warmUpCache } = await import('./lib/warmup');
    const cron = await import('node-cron');

    console.log('[Scheduler] Initializing automation sync...');
    
    // Jalankan sekali saat startup (tanpa await agar tidak memblokir)
    warmUpCache(10).catch(err => console.error('[WarmUp] Initial error:', err));

    // Jadwalkan setiap 1 jam
    cron.default.schedule('0 * * * *', async () => {
      console.log('[Scheduler] Running hourly anime sync...');
      try {
        await warmUpCache(15);
      } catch (error) {
        console.error('[Scheduler] Hourly sync failed:', error);
      }
    });
  }
}
