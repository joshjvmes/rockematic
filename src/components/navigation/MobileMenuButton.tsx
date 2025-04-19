
import React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className="md:hidden p-2 text-foreground relative z-50"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X size={24} />
      ) : (
        <Menu size={24} />
      )}
    </button>
  );
};

export default MobileMenuButton;
