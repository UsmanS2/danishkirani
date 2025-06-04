import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import Countdown from './Countdown';
import { mockDatabase } from '../data/mockDatabase';

const LandingPage = ({ onAccessCodeSubmit }) => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mockDatabase.accessCodes[accessCode]) {
      onAccessCodeSubmit(accessCode);
      setError('');
    } else {
      setError('Invalid access code. Please try again.');
    }
  };

  // Wedding date - update this to your actual date
  const weddingDate = '2025-12-01T00:00:00';

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="text-center">
        <Countdown targetDate={weddingDate} />
        
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-serif">
            DanishKiRani
          </h1>
          <div className="flex justify-center mb-6">
            <Heart className="text-pink-300 w-8 h-8 animate-pulse" />
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <label htmlFor="accessCode" className="block text-white text-sm mb-2">
                Enter access code
              </label>
              <input
                id="accessCode"
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Access code"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="mt-6 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 p-3 rounded-lg hover:bg-opacity-30 transition-all duration-200 text-white"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          {error && (
            <p className="text-pink-200 text-sm mt-2">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;