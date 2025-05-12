# 🎉 Events in Sydney

A full-stack web application that displays upcoming events in Sydney, Australia by automatically scraping public event websites. Users can view event details and book tickets via the original source after submitting their email address.

---

## 🌐 Live Demo

https://loader-assignment.vercel.app/
---

## 🚀 Tech Stack

- **Frontend:** Next.js 13+ (App Router)
- **Backend:** API Routes in Next.js
- **Scraping:** Puppeteer
- **Language:** TypeScript
- **Storage:** JSON (can be extended to MongoDB/Supabase)

---

## 📸 Features

- ✅ Automatically scrapes latest events from [whatson.cityofsydney.nsw.gov.au](https://whatson.cityofsydney.nsw.gov.au/)
- ✅ Shows all events with title, image, description, and time
- ✅ “GET TICKETS” button opens a modal to collect user's email address
- ✅ After email submission, user is redirected to the original event source
- ✅ Admin scheduler script keeps events data updated automatically

---

🧪 API Endpoints
GET /api/events: Returns the list of scraped events

POST /api/subscribe: Accepts an email address and logs/stores it for opt-in

---


🛠️ Challenges Faced
Handling dynamic DOM content with Puppeteer required manual waits for selectors.

Some event pages didn’t include expected fields like images or venue.

Puppeteer needs a headless-friendly environment; deployment can be tricky on platforms like Vercel.

Running TypeScript-based schedulers needed configuration for ts-node with ESM loader.


---


🔮 Improvements & Future Scope
Integrate with a database (e.g., MongoDB) for persistent storage

Add filters for event type, location, or date range

Send confirmation emails using services like SendGrid or Mailchimp

Add infinite scrolling, search, and UI loading states

Deploy scraper as a background job or serverless function (AWS Lambda, Vercel Cron, etc.)
