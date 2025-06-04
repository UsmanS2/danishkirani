import React from 'react';
import { Calendar, Camera, MapPin, Heart } from 'lucide-react';

const Sidebar = ({ currentPage, onPageChange, guestData }) => {
  const menuItems = [
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'pictures', label: 'Pictures', icon: Camera },
    { id: 'dallas', label: 'Fun things to do in Dallas', icon: MapPin },
    // Add more pages here as needed
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-pink-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="mb-8">
        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Heart className="w-12 h-12 text-pink-200" />
        </div>
        <h2 className="text-center text-lg font-semibold">
          Welcome, {guestData?.properName}!
        </h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                currentPage === item.id
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'hover:bg-white hover:bg-opacity-10 text-pink-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;