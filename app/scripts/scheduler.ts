import cron from 'node-cron';
import scrapeEvents from './scrapEvents';

console.log('Scheduler started...');

// Runs every 6 hours (adjust as needed)
cron.schedule('0 */6 * * *', async () => {
  console.log('Running event scraper...');
  await scrapeEvents();
});
