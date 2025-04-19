
import React from 'react';
import { Check } from 'lucide-react';
import PaymentButton from '@/components/PaymentButton';

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Exclusive Partnership Tiers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our carefully curated ensemble of growth-minded businesses at the partnership tier that resonates with your ambitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Harmonic Initiate Tier */}
          <div className="bg-white border border-harmony-light/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
            <div className="bg-harmony-deep p-6 text-white text-center">
              <h3 className="font-serif text-2xl font-bold mb-2">Harmonic Initiate</h3>
              <p className="text-white/70">Begin your resonant journey</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$9,700</span>
                <span className="text-muted-foreground">/quarter</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['Resonance Analysis', 'Monthly Strategy Sessions', 
                  'Basic Growth Amplification', '5x Projected ROI'].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <PaymentButton
                priceId="price_H1nYzX2eZvZYx7"
                mode="subscription"
                className="w-full bg-harmony-medium hover:bg-harmony-light text-white"
                tier="Harmonic Initiate"
              >
                Apply Now
              </PaymentButton>
            </div>
          </div>
          
          {/* Resonant Partner Tier */}
          <div className="bg-white border-2 border-harmony-light rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] relative">
            <div className="absolute top-0 right-0 bg-harmony-light text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
              Most Popular
            </div>
            <div className="bg-harmony-medium p-8 text-white text-center">
              <h3 className="font-serif text-2xl font-bold mb-2">Resonant Partner</h3>
              <p className="text-white/70">Our signature partnership</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$18,900</span>
                <span className="text-muted-foreground">/quarter</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['Comprehensive Resonance Analysis', 'Bi-weekly Strategy Sessions',
                  'Advanced Growth Amplification', 'Flow Automation Suite',
                  '8x Projected ROI'].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <PaymentButton
                priceId="price_H1nYzX2eZvZYx8"
                mode="subscription"
                className="w-full bg-harmony-light hover:bg-harmony-medium text-white"
                tier="Resonant Partner"
              >
                Apply Now
              </PaymentButton>
            </div>
          </div>
          
          {/* Symphony Conductor Tier */}
          <div className="bg-white border border-harmony-light/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
            <div className="bg-harmony-deep p-6 text-white text-center">
              <h3 className="font-serif text-2xl font-bold mb-2">Symphony Conductor</h3>
              <p className="text-white/70">Elite partnership experience</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$32,500</span>
                <span className="text-muted-foreground">/quarter</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['The Complete Harmonic Growth System', 'Dedicated Growth Orchestrator',
                  'Weekly Strategy Sessions', 'Resonant Leadership Training',
                  '10x+ Projected ROI'].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <PaymentButton
                priceId="price_H1nYzX2eZvZYx9"
                mode="subscription"
                className="w-full bg-harmony-medium hover:bg-harmony-light text-white"
                tier="Symphony Conductor"
              >
                Apply Now
              </PaymentButton>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-muted-foreground text-sm">
          All partnerships are subject to application and alignment assessment. Pricing reflects quarterly investment.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
