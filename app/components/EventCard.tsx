// components/EventCard.tsx
import { useState } from 'react';

interface EventCardProps {

  event: {
    title: string;
    description: string;
    date: string;
    location: string;
    eventUrl: string; 
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const [email, setEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [message, setMessage] = useState('');
console.log('Event:', event);
  const handleEmailSubmit = async () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, eventUrl: event.eventUrl }),
      });
      const data = await response.json();
      if (response.ok) {
        window.location.href = event.eventUrl;
      } else {
        setMessage('Failed to submit email.');
      }
    } catch (error) {
      setMessage('Error submitting email.');
    }
  };

  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <button onClick={() => setShowEmailForm(true)}>GET TICKETS</button>

      {showEmailForm && (
        <div className="email-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleEmailSubmit}>Submit</button>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default EventCard;
