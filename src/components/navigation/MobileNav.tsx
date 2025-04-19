
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

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

  return (
    <div 
      className={cn(
        'fixed inset-0 flex flex-col pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out z-40 bg-white', // Changed background to solid white
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
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
              onClick={() => {
                handleSignOut();
                onClose();
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
              onClose();
            }}
            className="mt-4 bg-harmony-medium hover:bg-harmony-light text-white"
          >
            Sign In
          </Button>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
