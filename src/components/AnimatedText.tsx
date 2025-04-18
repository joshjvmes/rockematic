
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animationDelay?: number;
  animationType?: 'fade' | 'reveal' | 'typewriter';
  staggerDelay?: number;
  as?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  animationDelay = 0,
  animationType = 'fade',
  staggerDelay = 0.05,
  as: Component = 'span'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);
    
    return () => clearTimeout(timer);
  }, [animationDelay]);
  
  if (animationType === 'typewriter') {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
      if (!isVisible) return;
      
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, staggerDelay * 1000);
      
      return () => clearInterval(interval);
    }, [isVisible, text, staggerDelay]);
    
    return (
      <Component className={className}>
        {displayText}
        <span className="inline-block w-0.5 h-5 bg-harmony-light animate-pulse ml-0.5" 
              style={{ opacity: displayText.length === text.length ? 0 : 1 }} />
      </Component>
    );
  }
  
  if (animationType === 'reveal') {
    return (
      <Component className={cn('overflow-hidden', className)}>
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2 overflow-hidden">
            <span
              className="inline-block transform translate-y-full transition-transform duration-700 ease-out"
              style={{ 
                transitionDelay: `${animationDelay + wordIndex * staggerDelay}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Component>
    );
  }
  
  // Default fade animation
  return (
    <Component 
      className={className}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: `opacity 1s ease-out ${animationDelay}s`
      }}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
