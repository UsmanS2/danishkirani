import React from 'react';
import EventCard from '../components/EventCard';

const EventsPage = ({ guestData, onRSVP }) => {
  const events = [
    {
      name: 'Mehndi',
      description: 'Join us for a beautiful evening of henna, music, and celebration!',
      maxGuests: guestData?.mehndiValue || 0,
      show: (guestData?.mehndiValue || 0) > 0
    },
    {
      name: 'Baraat',
      description: 'The groom\'s procession - a joyous celebration with family and friends!',
      maxGuests: guestData?.baraatValue || 0,
      show: (guestData?.baraatValue || 0) > 0
    },
    {
      name: 'Valima',
      description: 'Reception celebration to honor the newly married couple!',
      maxGuests: guestData?.valimaValue || 0,
      show: (guestData?.valimaValue || 0) > 0
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Wedding Events</h1>
      <div className="max-w-2xl">
        {events.filter(event => event.show).map((event) => (
          <EventCard
            key={event.name}
            title={event.name}
            description={event.description}
            maxGuests={event.maxGuests}
            onRSVP={onRSVP}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;