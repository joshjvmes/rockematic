
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-harmony-light/5 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Harmonic Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover how our suite of services orchestrates exponential growth through resonance and natural amplification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
