
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import HarmonicCard from '@/components/HarmonicCard';
import RippleBackground from '@/components/RippleBackground';
import { Check, BarChart3, Zap, Target, LineChart, Users, Gem, Award } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      {/* Hero Section */}
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
      
      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <HarmonicCard
              title="Resonance Analysis"
              description="Discover your business's natural frequency and identify the perfect resonant points for exponential growth with minimal input."
              icon={<Target className="h-6 w-6 text-harmony-medium" />}
              color="water"
            />
            
            <HarmonicCard
              title="Growth Amplification"
              description="Implement precisely calibrated strategies that create ripple effects throughout your business ecosystem, multiplying returns."
              icon={<LineChart className="h-6 w-6 text-harmony-medium" />}
              color="forest"
            />
            
            <HarmonicCard
              title="Momentum Orchestration"
              description="Build self-sustaining growth cycles that cascade naturally from one success to the next with increasingly less effort required."
              icon={<BarChart3 className="h-6 w-6 text-harmony-medium" />}
              color="sunset"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HarmonicCard
              title="Harmony Integration"
              description="Ensure all business components work in perfect concert, creating a synchronized system where every element amplifies the others."
              icon={<Users className="h-6 w-6 text-harmony-medium" />}
              color="primary"
            />
            
            <HarmonicCard
              title="Flow Automation"
              description="Develop systems that maintain your growth momentum automatically, freeing you to focus on vision and innovation."
              icon={<Zap className="h-6 w-6 text-harmony-medium" />}
              color="primary"
            />
            
            <HarmonicCard
              title="Resonant Leadership"
              description="Transform your leadership approach to create natural alignment and inspire teams to achieve extraordinary results with less friction."
              icon={<Gem className="h-6 w-6 text-harmony-medium" />}
              color="primary"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Service */}
      <section className="py-16 md:py-24 bg-harmony-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/ripple.jpg" 
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
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-0.5" />
                  <span className="text-white/90">Comprehensive Analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-0.5" />
                  <span className="text-white/90">Strategic Resonance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-0.5" />
                  <span className="text-white/90">Automated Workflows</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-0.5" />
                  <span className="text-white/90">Growth Orchestration</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-0.5" />
                  <span className="text-white/90">Harmonic Leadership</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-0.5" />
                  <span className="text-white/90">Ongoing Optimization</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-harmony-deep hover:bg-harmony-accent hover:text-harmony-deep rounded-full px-8"
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
      
      {/* Pricing */}
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
            {/* Tier 1 */}
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
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Resonance Analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Monthly Strategy Sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Basic Growth Amplification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">5x Projected ROI</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-harmony-medium hover:bg-harmony-light text-white">
                  Apply Now
                </Button>
              </div>
            </div>
            
            {/* Tier 2 - Featured */}
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
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Comprehensive Resonance Analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Bi-weekly Strategy Sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Advanced Growth Amplification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Flow Automation Suite</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">8x Projected ROI</span>
                  </li>
                </ul>
                
                <Button size="lg" className="w-full bg-harmony-light hover:bg-harmony-medium text-white">
                  Apply Now
                </Button>
              </div>
            </div>
            
            {/* Tier 3 */}
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
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">The Complete Harmonic Growth System</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Dedicated Growth Orchestrator</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Weekly Strategy Sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">Resonant Leadership Training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-medium mt-0.5" />
                    <span className="text-muted-foreground">10x+ Projected ROI</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-harmony-medium hover:bg-harmony-light text-white">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-muted-foreground text-sm">
            All partnerships are subject to application and alignment assessment. Pricing reflects quarterly investment.
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-harmony-deep to-harmony-medium text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('/ripple.jpg')] bg-cover bg-center" />
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
          >
            Request Your Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
