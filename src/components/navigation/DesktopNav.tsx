
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
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

const DesktopNav: React.FC = () => {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

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
            <DropdownMenuContent align="end" className="bg-white shadow-lg border border-gray-200">
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
  );
};

export default DesktopNav;
