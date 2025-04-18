
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NavigationHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-harmony-light rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-harmony-light rounded-full"></div>
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight">RocketNow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/philosophy" className="text-foreground/80 hover:text-foreground transition-colors">
            Philosophy
          </Link>
          <Link to="/services" className="text-foreground/80 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
          <Button className="bg-harmony-medium hover:bg-harmony-light text-white">
            Join the Symphony
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background flex flex-col pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out z-40',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 pt-6">
          <Link 
            to="/" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/philosophy" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Philosophy
          </Link>
          <Link 
            to="/services" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button 
            className="mt-4 bg-harmony-medium hover:bg-harmony-light text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join the Symphony
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
