import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center mb-8">
      <div className="flex justify-center space-x-4 text-white">
        <div className="bg-pink-500 bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-3xl font-bold">{timeLeft.days || 0}</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="bg-pink-500 bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-3xl font-bold">{timeLeft.hours || 0}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div className="bg-pink-500 bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-3xl font-bold">{timeLeft.minutes || 0}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="bg-pink-500 bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-3xl font-bold">{timeLeft.seconds || 0}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;