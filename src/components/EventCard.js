import React, { useState } from 'react';

const EventCard = ({ title, description, maxGuests, onRSVP }) => {
  const [guestCount, setGuestCount] = useState(1);

  const handleRSVP = () => {
    onRSVP(title.toLowerCase(), guestCount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex items-center space-x-4 mb-4">
        <label className="text-sm text-gray-700">
          Enter how many guests will be coming:
        </label>
        <select
          value={guestCount}
          onChange={(e) => setGuestCount(parseInt(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          {Array.from({ length: maxGuests }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      
      <button
        onClick={handleRSVP}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 font-semibold"
      >
        RSVP
      </button>
    </div>
  );
};

export default EventCard;