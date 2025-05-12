import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const eventsData = fs.readFileSync(path.join(process.cwd(), 'app/data/events.json'), 'utf-8');
    const events = JSON.parse(eventsData);

    return NextResponse.json({ events });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
