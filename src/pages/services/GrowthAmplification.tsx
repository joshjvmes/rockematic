
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import AnimatedText from '@/components/AnimatedText';
import HarmonicCard from '@/components/HarmonicCard';
import { LineChart, Target, Layers, Zap, Star, Compass, Sparkles } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const GrowthAmplification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-harmony-light/5 relative overflow-hidden">
      <NavigationHeader />
      
      <main className="pt-32 pb-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <RippleBackground intensity="soft" color="rgba(155, 135, 245, 0.03)" />
        </div>

        <div className="container mx-auto px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services/growth-amplification">Growth Amplification</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-harmony-light/10 mb-8 relative">
                <LineChart className="h-10 w-10 text-harmony-medium z-10" />
                <div className="absolute inset-0">
                  <RippleBackground intensity="medium" />
                </div>
              </div>
              
              <AnimatedText
                text="Growth Amplification"
                className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light"
                animationType="reveal"
                staggerDelay={0.05}
              />
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Transform modest investments into extraordinary returns through precision-tuned resonance engineering.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10">
                <h2 className="font-serif text-3xl mb-6 text-harmony-deep text-center">
                  The Amplification Paradigm
                </h2>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg leading-relaxed">
                    In nature's grand design, a single drop creates ripples that transform entire waters. 
                    So too in business, we discover the precise frequencies where minimal input yields 
                    maximum impact. This is not mere scaling—it's the art of finding your enterprise's 
                    natural resonance points where growth becomes not just possible, but inevitable.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                  <HarmonicCard
                    title="Strategic Leverage"
                    description="Identify and activate your business's most potent growth catalysts"
                    icon={<Target className="h-6 w-6 text-harmony-medium" />}
                    color="water"
                  />
                  
                  <HarmonicCard
                    title="Momentum Engineering"
                    description="Design systems that generate compounding, self-sustaining growth"
                    icon={<Zap className="h-6 w-6 text-harmony-medium" />}
                    color="forest"
                  />
                  
                  <HarmonicCard
                    title="Resonant Optimization"
                    description="Fine-tune your strategies to amplify results with minimal input"
                    icon={<Star className="h-6 w-6 text-harmony-medium" />}
                    color="sunset"
                  />
                </div>
              </div>
            </section>

            <section className="bg-harmony-deep text-white rounded-2xl p-8 shadow-xl relative overflow-hidden mb-16">
              <div className="absolute inset-0 opacity-10">
                <RippleBackground intensity="strong" color="rgba(255, 255, 255, 0.1)" />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-serif font-semibold mb-8 text-center">
                  Your Amplification Journey
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center relative overflow-hidden">
                        <Compass className="h-4 w-4 text-harmony-light relative z-10" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <RippleBackground intensity="medium" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">Resonance Mapping</h4>
                        <p className="text-white/80 leading-relaxed">
                          Like finding the perfect note that makes a crystal sing, we decode your 
                          business's unique harmonic signature, revealing hidden amplification points.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center relative overflow-hidden">
                        <Layers className="h-4 w-4 text-harmony-light relative z-10" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <RippleBackground intensity="medium" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">Strategic Calibration</h4>
                        <p className="text-white/80 leading-relaxed">
                          Precise interventions designed to trigger exponential growth cascades,
                          where each success naturally amplifies the next.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center relative overflow-hidden">
                        <Star className="h-4 w-4 text-harmony-light relative z-10" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <RippleBackground intensity="medium" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">Momentum Architecture</h4>
                        <p className="text-white/80 leading-relaxed">
                          Engineering growth systems that generate increasing returns with 
                          decreasing effort, like a perpetual motion machine of success.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center relative overflow-hidden">
                        <Sparkles className="h-4 w-4 text-harmony-light relative z-10" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <RippleBackground intensity="medium" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">Resonant Mastery</h4>
                        <p className="text-white/80 leading-relaxed">
                          Achieve a state where growth becomes effortless, as natural as 
                          waves building upon themselves in perfect harmony.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground italic">
                "In the symphony of business, true growth is not about playing louder, but finding the perfect note."
              </p>
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-12 py-6 text-lg shadow-xl shadow-harmony-medium/20 relative overflow-hidden group"
              >
                <span className="relative z-10">Activate Your Growth Potential</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <RippleBackground intensity="strong" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GrowthAmplification;

