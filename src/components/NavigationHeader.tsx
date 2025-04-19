
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './navigation/Logo';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import MobileMenuButton from './navigation/MobileMenuButton';

const NavigationHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10',
        isScrolled 
          ? 'py-3 bg-background/95 backdrop-blur-sm shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <DesktopNav />
        <MobileMenuButton 
          isOpen={isMobileMenuOpen} 
          onClick={toggleMobileMenu} 
        />
      </div>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default NavigationHeader;
