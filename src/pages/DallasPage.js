import React from 'react';

const DallasPage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-8">Fun Things to Do in Dallas</h1>
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Dallas Arboretum</h3>
        <p className="text-gray-600">Beautiful botanical gardens perfect for a stroll.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Deep Ellum</h3>
        <p className="text-gray-600">Vibrant arts district with great food and nightlife.</p>
      </div>
    </div>
  </div>
);

export default DallasPage;