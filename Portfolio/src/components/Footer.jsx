import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg">Made with</span>
            <Heart className="text-red-400 animate-pulse" size={20} />
            <span className="text-lg">by Deepika Negi</span>
          </div>
          
          <div className="text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Deepika Negi. All rights reserved.</p>
            <p className="text-sm mt-2">Frontend Developer | React.js Enthusiast</p>
          </div>
          
          <div className="w-24 h-0.5 bg-blue-300"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;