
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Layers, ArrowRight, Check, Zap, Users, Settings } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import AnimatedText from '@/components/AnimatedText';
import HarmonicCard from '@/components/HarmonicCard';

const HarmonyIntegration = () => {
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
                <BreadcrumbLink href="/services/harmony-integration">Harmony Integration</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-harmony-light/10 mb-8 relative">
                <Layers className="h-10 w-10 text-harmony-medium z-10" />
                <div className="absolute inset-0">
                  <RippleBackground intensity="medium" />
                </div>
              </div>
              
              <AnimatedText
                text="Harmony Integration"
                className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light"
                animationType="reveal"
                staggerDelay={0.05}
              />
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Synchronize all elements of your business into a perfectly tuned system where every component amplifies the others.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10">
                <h2 className="font-serif text-3xl mb-8 text-harmony-deep text-center">
                  The Integration Process
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <HarmonicCard
                    title="System Mapping"
                    description="Create a comprehensive map of your business components and their interactions"
                    icon={<Settings className="h-6 w-6 text-harmony-medium" />}
                    color="water"
                  />
                  
                  <HarmonicCard
                    title="Harmony Analysis"
                    description="Identify natural resonance points and optimization opportunities"
                    icon={<Zap className="h-6 w-6 text-harmony-medium" />}
                    color="forest"
                  />
                  
                  <HarmonicCard
                    title="Integration Design"
                    description="Craft seamless connections between all business elements"
                    icon={<ArrowRight className="h-6 w-6 text-harmony-medium" />}
                    color="sunset"
                  />
                  
                  <HarmonicCard
                    title="Team Alignment"
                    description="Ensure everyone moves in perfect synchronization"
                    icon={<Users className="h-6 w-6 text-harmony-medium" />}
                    color="primary"
                  />
                </div>
              </div>
            </section>

            <section className="bg-harmony-deep text-white rounded-2xl p-8 mb-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <RippleBackground intensity="strong" color="rgba(255, 255, 255, 0.1)" />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-serif font-semibold mb-8 text-center">
                  Integration Benefits
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Perfect Sync</h4>
                      <p className="text-white/80 leading-relaxed">
                        All systems working together in perfect harmony
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Enhanced Flow</h4>
                      <p className="text-white/80 leading-relaxed">
                        Friction-free operations across all departments
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Unified Vision</h4>
                      <p className="text-white/80 leading-relaxed">
                        Aligned goals and execution throughout the organization
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Maximum Impact</h4>
                      <p className="text-white/80 leading-relaxed">
                        Amplified results through synchronized efforts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center">
              <p className="text-lg text-muted-foreground italic mb-8">
                "True harmony emerges when every part knows its role in the greater symphony."
              </p>
              
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-12 py-6 text-lg shadow-xl shadow-harmony-medium/20 relative overflow-hidden group"
              >
                <span className="relative z-10">Begin Your Integration Journey</span>
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

export default HarmonyIntegration;
