
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServicesCtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-harmony-deep to-harmony-medium text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/rockematic-kael-4.png')" }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Ready to Amplify Your Growth?
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Take the first step toward harmonically amplified growth with a no-obligation resonance consultation.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-harmony-deep hover:bg-harmony-accent hover:text-harmony-deep rounded-full px-10 py-6 text-lg"
          onClick={() => navigate('/contact')}
        >
          Request Your Consultation
        </Button>
      </div>
    </section>
  );
};

export default ServicesCtaSection;
