
import React from 'react';
import { cn } from '@/lib/utils';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className="md:hidden p-2 text-foreground relative w-8 h-8"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          className={cn(
            "w-6 h-0.5 bg-current transition-all duration-300",
            isOpen 
              ? "rotate-45 translate-y-[3px] bg-foreground" 
              : "-translate-y-0.5"
          )}
        />
        <span 
          className={cn(
            "w-6 h-0.5 bg-current transition-all duration-300 mt-1.5",
            isOpen 
              ? "-rotate-45 -translate-y-0 bg-foreground" 
              : "translate-y-0"
          )}
        />
      </div>
    </button>
  );
};

export default MobileMenuButton;
