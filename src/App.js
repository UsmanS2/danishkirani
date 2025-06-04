import React, { useState } from 'react';
import LandingPage from './components/LandingPage.js';
import Sidebar from './components/Sidebar';
import EventsPage from './pages/EventsPage';
import PicturesPage from './pages/PicturesPage';
import DallasPage from './pages/DallasPage';
import { mockDatabase } from './data/mockDatabase';

const WeddingWebsite = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('events');
  const [currentUser, setCurrentUser] = useState(null);

  const handleAccessCodeSubmit = (accessCode) => {
    const userData = mockDatabase.accessCodes[accessCode];
    if (userData) {
      setCurrentUser({ accessCode, ...userData });
      setIsAuthenticated(true);
    }
  };

  const handleRSVP = (eventType, guestCount) => {
    console.log(`RSVP for ${eventType}: ${guestCount} guests`);
    
    const responseField = `${eventType}Response`;
    setCurrentUser(prev => ({
      ...prev,
      [responseField]: guestCount
    }));
    
    alert(`Thank you! Your RSVP for ${eventType} has been submitted for ${guestCount} guest(s).`);
  };

  if (!isAuthenticated) {
    return <LandingPage onAccessCodeSubmit={handleAccessCodeSubmit} />;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'events':
        return <EventsPage guestData={currentUser} onRSVP={handleRSVP} />;
      case 'pictures':
        return <PicturesPage />;
      case 'dallas':
        return <DallasPage />;
      default:
        return <EventsPage guestData={currentUser} onRSVP={handleRSVP} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        guestData={currentUser}
      />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
    </div>
  );
};

export default WeddingWebsite;