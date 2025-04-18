
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const NavigationHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

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

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
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
          
          {user ? (
            <>
              <Link to="/apply" className="text-foreground/80 hover:text-foreground transition-colors">
                Apply
              </Link>
              {isAdmin && (
                <Link to="/admin" className="text-foreground/80 hover:text-foreground transition-colors">
                  Admin
                </Link>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer h-9 w-9 hover:ring-2 hover:ring-harmony-light transition-all">
                    <AvatarFallback className="bg-harmony-medium text-white">
                      {user.user_metadata.full_name 
                        ? getInitials(user.user_metadata.full_name) 
                        : user.email?.substring(0, 2).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button
              className="bg-harmony-medium hover:bg-harmony-light text-white"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
          )}
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
          
          {user ? (
            <>
              <Link 
                to="/apply" 
                className="text-xl text-foreground py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply
              </Link>
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="text-xl text-foreground py-2 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              <Link 
                to="/dashboard" 
                className="text-xl text-foreground py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Button 
                onClick={() => {
                  handleSignOut();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 bg-harmony-medium hover:bg-harmony-light text-white"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button 
              onClick={() => {
                navigate('/auth');
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 bg-harmony-medium hover:bg-harmony-light text-white"
            >
              Sign In
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
