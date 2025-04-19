
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RippleBackground from '@/components/RippleBackground';

const FeaturedService = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-harmony-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/rockematic-kael-2.png" 
          alt="Water Ripple Effect" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-harmony-deep via-harmony-deep/90 to-harmony-deep opacity-95" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-harmony-light/20 px-3 py-1 rounded-full mb-4">
              <Award className="h-4 w-4 text-harmony-light" />
              <span className="text-sm font-medium text-harmony-light">Featured Service</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              The Harmonic Growth System
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Our signature end-to-end solution that orchestrates all elements of your business into a perfectly tuned growth engine. This comprehensive system integrates all our methodologies into a bespoke symphony of success tailored to your unique business.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              The result is a business that achieves <span className="text-harmony-light font-medium">consistent 10x returns</span> while requiring progressively less input and management as the harmonic system builds momentum.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Comprehensive Analysis', 'Strategic Resonance', 'Automated Workflows', 
                'Growth Orchestration', 'Harmonic Leadership', 'Ongoing Optimization'].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-harmony-deep hover:bg-harmony-accent hover:text-harmony-deep rounded-full px-8"
              onClick={() => navigate('/services/harmonic-growth-system')}
            >
              Learn More
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square w-full flex items-center justify-center">
              <RippleBackground intensity="strong" color="rgba(155, 135, 245, 0.1)" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center z-10">
                      <h3 className="text-5xl md:text-6xl font-serif font-bold text-harmony-light mb-2">10x</h3>
                      <p className="text-white/70">Return on Investment</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-4 border-harmony-light/30 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
