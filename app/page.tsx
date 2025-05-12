// app/page.tsx4
"use client";
import React, { useEffect, useState } from 'react';
import EventCard from './components/EventCard';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data.events);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Upcoming Events in Sydney</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
