// scripts/scrapeEvents.ts
import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapeEvents() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.eventbrite.com.au/d/australia--sydney/events/', { waitUntil: 'domcontentloaded' });

  const events = await page.evaluate(() => {
    const eventElements = document.querySelectorAll('.search-event-card'); 
    return Array.from(eventElements).map(event => {
      const title = event.querySelector('.eds-event-card-content__primary-content .eds-text-bs')?.textContent || 'No title';
      const description = event.querySelector('.eds-event-card-content__primary-content .eds-text-color--theme-alternate')?.textContent || 'No description';
      const date = event.querySelector('.eds-text-color--ui-500')?.textContent || 'No date';
      const location = event.querySelector('.eds-event-card-content__sub-content')?.textContent || 'No location';
      const eventUrl = event.querySelector('a')?.href || ''; 
      return { title, description, date, location, eventUrl };
    });
  });

  await browser.close();

  fs.writeFileSync('data/events.json', JSON.stringify(events, null, 2));

  console.log(`Scraped ${events.length} events from Eventbrite.`);
}

scrapeEvents().catch(console.error);
export default scrapeEvents;