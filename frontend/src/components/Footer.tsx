import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">AI Content Idea Generator</h2>
            <p className="text-gray-400">Powering your content creation journey</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400">About</a>
            <a href="#" className="hover:text-indigo-400">Privacy</a>
            <a href="#" className="hover:text-indigo-400">Terms</a>
            <a href="#" className="hover:text-indigo-400">Contact</a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Content Idea Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
