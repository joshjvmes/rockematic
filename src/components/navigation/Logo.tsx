
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-harmony-light rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-2 border-harmony-light rounded-full"></div>
      </div>
      <span className="font-serif text-2xl font-semibold tracking-tight">RocketNow</span>
    </Link>
  );
};

export default Logo;
