
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, BarChart3, Zap, ChevronsUp, Users } from 'lucide-react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import HarmonicCard from '@/components/HarmonicCard';
import AnimatedText from '@/components/AnimatedText';
import RippleBackground from '@/components/RippleBackground';

const Index = () => {
  const firstSectionRef = useRef<HTMLDivElement>(null);

  const scrollToFirstSection = () => {
    firstSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-harmony-light/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-harmony-light/10 border border-harmony-light/20">
              <AnimatedText
                text="The Future of Business Growth"
                className="text-harmony-medium"
                animationType="fade"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              <AnimatedText
                text="RocketNow – The"
                as="span"
                className="block mb-2"
                animationType="reveal"
                animationDelay={0.3}
              />
              <AnimatedText
                text="Harmonic Growth Engine"
                as="span"
                className="block bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light"
                animationType="reveal"
                animationDelay={0.8}
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed">
              <AnimatedText
                text="Where growth moves to a natural rhythm, and every success resonates with purpose."
                animationType="fade"
                animationDelay={1.5}
              />
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-harmony-medium hover:bg-harmony-light text-white font-medium rounded-full px-8"
              >
                Join the Symphony
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-harmony-medium text-harmony-medium hover:bg-harmony-light/10 rounded-full px-8"
              >
                Our Philosophy
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-harmony-medium hover:text-harmony-light hover:bg-harmony-light/10"
              onClick={scrollToFirstSection}
            >
              <ChevronDown size={24} />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Resonant Returns Section */}
      <section ref={firstSectionRef} className="py-20 md:py-32 bg-harmony-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/ripple.jpg" 
            alt="Water Ripple Effect" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-harmony-deep via-harmony-deep/90 to-harmony-deep opacity-95" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Resonant Returns
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                RocketNow finds the <span className="text-harmony-light font-medium">right frequency</span> for your growth so that even a quiet initiative booms loudly in outcome. By tuning strategy to the precise resonance of your market, a small move can trigger outsized echoes of success.
              </p>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                It's like planting a single seed and reaping an entire field's harvest – <span className="text-harmony-light font-medium">tenfold rewards from one-tenth the usual cost</span>. In this harmonic system, <span className="text-harmony-light font-medium">value</span> doesn't just add up; it <span className="text-harmony-light font-medium">multiplies</span>.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="text-harmony-light" size={18} />
                  <span className="text-white/80">10x ROI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="text-harmony-light" size={18} />
                  <span className="text-white/80">Accelerated Growth</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full aspect-square rounded-full overflow-hidden">
                <RippleBackground intensity="strong" color="rgba(155, 135, 245, 0.1)" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-harmony-light/5 rounded-full border border-harmony-light/20 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-serif font-bold text-harmony-light mb-2">10x</h3>
                  <p className="text-white/70">Growth Multiplier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Effortless Flow Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-harmony-light/5 to-white/0" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Effortless Flow
            </h2>
            <p className="text-muted-foreground text-lg">
              A well-designed stream carries itself forward – <span className="text-harmony-medium font-medium">momentum building naturally</span> as it flows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HarmonicCard
              title="Automated Momentum"
              description="One action triggers another automatically, creating a chain reaction of growth that gains speed with each stage."
              icon={<ChevronsUp className="h-6 w-6 text-harmony-medium" />}
              color="water"
            />
            
            <HarmonicCard
              title="Cascading Success"
              description="Each success cascades into the next, much like a waterfall spilling over step by step into new pools of opportunity."
              icon={<BarChart3 className="h-6 w-6 text-harmony-medium" />}
              color="forest"
            />
            
            <HarmonicCard
              title="Growth While You Sleep"
              description="This cascading automation means your growth journey develops its own effortless rhythm while you focus on what matters most."
              icon={<Zap className="h-6 w-6 text-harmony-medium" />}
              color="sunset"
            />
          </div>
        </div>
      </section>
      
      {/* Selective Harmony Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-harmony-deep to-harmony-medium text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('/ripple.jpg')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                  <img 
                    src="/cascade.jpg" 
                    alt="Cascading Waterfall" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-harmony-medium/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-harmony-light/20 rounded-full w-12 h-12 flex items-center justify-center">
                      <Users className="h-6 w-6 text-harmony-light" />
                    </div>
                    <div>
                      <p className="text-harmony-deep font-semibold">Private Ensemble</p>
                      <p className="text-muted-foreground text-sm">Exclusive Partnership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Selective Harmony
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Not every note fits in a chord – true harmony emerges only when the right notes <span className="text-harmony-accent font-medium">play together</span>. In that spirit, RocketNow partners only with businesses that are <span className="text-harmony-accent font-medium">in tune</span> with our vision of exponential, sustainable growth.
              </p>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                This is a <span className="text-harmony-accent font-medium">private ensemble</span> of clients, chosen carefully for resonance in values and ambition. By keeping our circle exclusive, we ensure each partnership is deeply aligned and built on unshakable trust.
              </p>
              <Button 
                className="bg-white text-harmony-deep hover:bg-harmony-accent hover:text-harmony-deep rounded-full px-8"
              >
                Apply for Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join the Symphony CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <RippleBackground intensity="medium" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Join the Symphony
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If you can <span className="text-harmony-medium font-medium">hear this call</span> – if these words strike a chord in your own growth aspirations – consider it your invitation to join our symphony of success.
            </p>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              <span className="text-harmony-medium font-medium">Step into the rhythm</span> that countless others miss, and let's create a cadence of progress that <span className="text-harmony-medium font-medium">echoes for years to come</span>.
            </p>
            <Button 
              size="lg" 
              className="bg-harmony-medium hover:bg-harmony-light text-white font-medium rounded-full px-10 py-6 text-lg"
            >
              Start Your Harmonic Journey
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
