import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const LandingPage: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-500 text-white">
    <div className="w-max">
        <h3 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl text-white font-bold">Welcome to Crypto Tracker</h3>
    </div>
          <p className="text-lg mb-8">Start tracking the latest cryptocurrency prices and trends.</p>

          <Link
            to="/cryptotable"
            className="bg-white text-blue-500 px-6 py-3 rounded-md font-bold shadow-lg hover:bg-purple-600 hover:text-white transition-colors"
          >
            Get Started
          </Link>
    </div>
  );
};

export default LandingPage;
