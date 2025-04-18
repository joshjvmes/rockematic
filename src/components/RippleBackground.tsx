
import React from 'react';
import { cn } from '@/lib/utils';

interface RippleBackgroundProps {
  className?: string;
  intensity?: 'soft' | 'medium' | 'strong';
  color?: string;
  backgroundImage?: string;  // New optional prop for custom background
}

const RippleBackground: React.FC<RippleBackgroundProps> = ({ 
  className, 
  intensity = 'medium',
  color = 'rgba(155, 135, 245, 0.05)',
  backgroundImage  // New prop
}) => {
  const intensityConfig = {
    soft: { count: 3, opacity: 0.03 },
    medium: { count: 5, opacity: 0.05 },
    strong: { count: 7, opacity: 0.08 }
  };
  
  const { count, opacity } = intensityConfig[intensity];
  
  const ripples = Array.from({ length: count }).map((_, i) => {
    const delay = `${i * 1.5}s`;
    const size = 100 + (i * 15); // % of container
    const customOpacity = opacity - (i * 0.005);
    
    return (
      <div 
        key={i}
        className="absolute inset-0 rounded-full animate-ripple"
        style={{ 
          animationDelay: delay, 
          backgroundColor: color,
          width: `${size}%`,
          height: `${size}%`,
          opacity: customOpacity,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    );
  });
  
  return (
    <div 
      className={cn('relative w-full h-full overflow-hidden', className)}
      style={backgroundImage ? { 
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {ripples}
    </div>
  );
};

export default RippleBackground;
