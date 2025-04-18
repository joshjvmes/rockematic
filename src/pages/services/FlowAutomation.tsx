
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import AnimatedText from '@/components/AnimatedText';
import HarmonicCard from '@/components/HarmonicCard';
import { Zap, Cog, Gauge, Link2, Binary, Sparkles } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const FlowAutomation = () => {
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
                <BreadcrumbLink href="/services/flow-automation">Flow Automation</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-harmony-light/10 mb-8 relative">
                <Zap className="h-10 w-10 text-harmony-medium z-10" />
                <div className="absolute inset-0">
                  <RippleBackground intensity="medium" />
                </div>
              </div>
              
              <AnimatedText
                text="Flow Automation"
                className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light"
                animationType="reveal"
                staggerDelay={0.05}
              />
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Transform manual processes into effortless symphonies of efficiency, letting your business flow like water.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10">
                <h2 className="font-serif text-3xl mb-6 text-harmony-deep text-center">
                  The Art of Effortless Flow
                </h2>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg leading-relaxed">
                    Just as a river finds its most efficient path, your business processes can 
                    achieve a state of natural, effortless flow. Through intelligent automation, 
                    we transform complex operations into seamless cascades of productivity.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                  <HarmonicCard
                    title="Intelligent Systems"
                    description="Create self-maintaining workflows that adapt and evolve"
                    icon={<Cog className="h-6 w-6 text-harmony-medium" />}
                    color="water"
                  />
                  
                  <HarmonicCard
                    title="Process Optimization"
                    description="Streamline operations for maximum efficiency"
                    icon={<Gauge className="h-6 w-6 text-harmony-medium" />}
                    color="forest"
                  />
                  
                  <HarmonicCard
                    title="Seamless Integration"
                    description="Connect all parts of your business ecosystem"
                    icon={<Link2 className="h-6 w-6 text-harmony-medium" />}
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
                  Your Automation Journey
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                        <Binary className="h-4 w-4 text-harmony-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">Flow Mapping</h4>
                        <p className="text-white/80 leading-relaxed">
                          We analyze your current processes, identifying opportunities 
                          for automation and optimization.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                        <Cog className="h-4 w-4 text-harmony-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">System Design</h4>
                        <p className="text-white/80 leading-relaxed">
                          Custom automation solutions are crafted to match your 
                          unique business rhythms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                        <Link2 className="h-4 w-4 text-harmony-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">Integration</h4>
                        <p className="text-white/80 leading-relaxed">
                          Seamlessly connect systems and processes into a 
                          harmonious whole.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-harmony-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-2">Optimization</h4>
                        <p className="text-white/80 leading-relaxed">
                          Continuous refinement ensures your automated systems 
                          evolve with your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground italic">
                "True automation is not about replacing human effort, but amplifying human potential."
              </p>
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-12 py-6 text-lg shadow-xl shadow-harmony-medium/20 relative overflow-hidden group"
              >
                <span className="relative z-10">Begin Your Automation Journey</span>
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

export default FlowAutomation;
