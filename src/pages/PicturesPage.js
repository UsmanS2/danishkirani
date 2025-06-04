import React from 'react';
import { Camera } from 'lucide-react';

const PicturesPage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-8">Pictures</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Add your pictures here */}
      <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
        <Camera className="w-12 h-12 text-gray-400" />
      </div>
    </div>
  </div>
);

export default PicturesPage;