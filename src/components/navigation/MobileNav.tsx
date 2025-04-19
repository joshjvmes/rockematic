
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    onClose();
  };

  // Handle clicks outside the menu content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={cn(
        'fixed inset-0 md:hidden transition-opacity duration-300 ease-in-out z-40',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      onClick={handleBackdropClick}
    >
      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      
      {/* Menu content */}
      <div 
        className={cn(
          'absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out pt-20 px-6',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <nav className="flex flex-col space-y-6 pt-6">
          <Link 
            to="/" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            to="/philosophy" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={onClose}
          >
            Philosophy
          </Link>
          <Link 
            to="/services" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={onClose}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="text-xl text-foreground py-2 border-b border-border"
            onClick={onClose}
          >
            Contact
          </Link>
          
          {user ? (
            <>
              <Link 
                to="/apply" 
                className="text-xl text-foreground py-2 border-b border-border"
                onClick={onClose}
              >
                Apply
              </Link>
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="text-xl text-foreground py-2 border-b border-border"
                  onClick={onClose}
                >
                  Admin
                </Link>
              )}
              <Link 
                to="/dashboard" 
                className="text-xl text-foreground py-2 border-b border-border"
                onClick={onClose}
              >
                Dashboard
              </Link>
              <Button 
                onClick={handleSignOut}
                className="mt-4 bg-harmony-medium hover:bg-harmony-light text-white"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button 
              onClick={() => {
                navigate('/auth');
                onClose();
              }}
              className="mt-4 bg-harmony-medium hover:bg-harmony-light text-white"
            >
              Sign In
            </Button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
