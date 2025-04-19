import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import AnimatedText from '@/components/AnimatedText';
import HarmonicCard from '@/components/HarmonicCard';
import { LineChart, Target, Layers, Zap, Star, Compass, Sparkles, Code } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import PaymentButton from "@/components/PaymentButton";

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
                <Code className="h-10 w-10 text-harmony-medium z-10" />
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
                Orchestrate seamless operations and amplify efficiency through intelligent automation solutions.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10">
                <h2 className="font-serif text-3xl mb-6 text-harmony-deep text-center">
                  The Automation Advantage
                </h2>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg leading-relaxed">
                    In the modern business landscape, efficiency is the key to unlocking exponential growth. 
                    Flow Automation is not just about streamlining processes; it's about creating a self-propelled 
                    system where each action triggers a cascade of positive outcomes, freeing your team to focus 
                    on innovation and strategic initiatives.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                  <HarmonicCard
                    title="Process Streamlining"
                    description="Identify and eliminate bottlenecks to create frictionless workflows"
                    icon={<Target className="h-6 w-6 text-harmony-medium" />}
                    color="water"
                  />
                  
                  <HarmonicCard
                    title="Intelligent Triggers"
                    description="Automate actions based on real-time data and predictive analytics"
                    icon={<Zap className="h-6 w-6 text-harmony-medium" />}
                    color="forest"
                  />
                  
                  <HarmonicCard
                    title="Resource Optimization"
                    description="Maximize resource utilization by automating repetitive tasks"
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
                  Your Automation Journey
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
                        <h4 className="font-medium text-xl mb-2">Workflow Analysis</h4>
                        <p className="text-white/80 leading-relaxed">
                          We begin by mapping your existing workflows to identify areas ripe for automation, 
                          uncovering hidden inefficiencies and bottlenecks.
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
                        <h4 className="font-medium text-xl mb-2">System Integration</h4>
                        <p className="text-white/80 leading-relaxed">
                          Seamlessly integrate automation tools with your existing systems, ensuring data flows 
                          smoothly and actions are triggered intelligently.
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
                        <h4 className="font-medium text-xl mb-2">Automation Architecture</h4>
                        <p className="text-white/80 leading-relaxed">
                          Design a robust automation architecture that adapts to your evolving business needs, 
                          ensuring long-term efficiency and scalability.
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
                        <h4 className="font-medium text-xl mb-2">Continuous Optimization</h4>
                        <p className="text-white/80 leading-relaxed">
                          Monitor and fine-tune your automated systems to ensure they continue to deliver optimal 
                          performance, adapting to new challenges and opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground italic">
                "Like a well-tuned instrument, automated systems create perfect harmony in business operations."
              </p>
              <PaymentButton 
                priceId="price_flow_automation"
                mode="subscription"
                tier="Flow Automation"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-12 py-6 text-lg shadow-xl shadow-harmony-medium/20 relative overflow-hidden group"
              >
                <span className="relative z-10">Automate Your Flow</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <RippleBackground intensity="strong" />
                </div>
              </PaymentButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FlowAutomation;
