
import React from 'react';
import { cn } from '@/lib/utils';
import RippleBackground from './RippleBackground';
import { Link } from 'react-router-dom';

interface HarmonicCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'water' | 'forest' | 'sunset';
  className?: string;
  iconClass?: string;
  href?: string;
}

const HarmonicCard: React.FC<HarmonicCardProps> = ({
  title,
  description,
  icon,
  color = 'primary',
  className,
  iconClass,
  href
}) => {
  const colorMap = {
    primary: {
      bg: 'bg-white dark:bg-harmony-deep',
      border: 'border-harmony-light/20',
      iconBg: 'bg-harmony-light/10',
      ripple: 'rgba(155, 135, 245, 0.07)'
    },
    water: {
      bg: 'bg-resonance-water/20',
      border: 'border-resonance-water/40',
      iconBg: 'bg-resonance-water/30',
      ripple: 'rgba(211, 228, 253, 0.15)'
    },
    forest: {
      bg: 'bg-resonance-forest/20',
      border: 'border-resonance-forest/40',
      iconBg: 'bg-resonance-forest/30',
      ripple: 'rgba(242, 252, 226, 0.15)'
    },
    sunset: {
      bg: 'bg-resonance-sunset/20',
      border: 'border-resonance-sunset/40',
      iconBg: 'bg-resonance-sunset/30',
      ripple: 'rgba(253, 225, 211, 0.15)'
    }
  };

  const CardContent = () => (
    <>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <RippleBackground color={colorMap[color].ripple} intensity="soft" />
      </div>
      
      {icon && (
        <div className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center mb-4',
          colorMap[color].iconBg,
          iconClass
        )}>
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </>
  );

  return href ? (
    <Link 
      to={href}
      className={cn(
        'relative rounded-2xl border p-6 overflow-hidden transition-all duration-500 hover:shadow-lg block',
        colorMap[color].bg,
        colorMap[color].border,
        'group',
        className
      )}
    >
      <CardContent />
    </Link>
  ) : (
    <div className={cn(
      'relative rounded-2xl border p-6 overflow-hidden transition-all duration-500 hover:shadow-lg',
      colorMap[color].bg,
      colorMap[color].border,
      'group',
      className
    )}>
      <CardContent />
    </div>
  );
};

export default HarmonicCard;
