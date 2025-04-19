import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { BarChart3, Check, ArrowUpRight, Sparkles, Gauge, LineChart } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import AnimatedText from '@/components/AnimatedText';
import HarmonicCard from '@/components/HarmonicCard';
import PaymentButton from "@/components/PaymentButton";

const MomentumOrchestration = () => {
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
                <BreadcrumbLink href="/services/momentum-orchestration">Momentum Orchestration</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-harmony-light/10 mb-8 relative">
                <BarChart3 className="h-10 w-10 text-harmony-medium z-10" />
                <div className="absolute inset-0">
                  <RippleBackground intensity="medium" />
                </div>
              </div>
              
              <AnimatedText
                text="Momentum Orchestration"
                className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light"
                animationType="reveal"
                staggerDelay={0.05}
              />
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Build self-sustaining growth cycles that cascade naturally from one success to the next.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10">
                <h2 className="font-serif text-3xl mb-8 text-harmony-deep text-center">
                  The Orchestration Process
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <HarmonicCard
                    title="Success Pattern Identification"
                    description="Map and analyze your existing growth patterns to identify natural amplification points"
                    icon={<LineChart className="h-6 w-6 text-harmony-medium" />}
                    color="water"
                  />
                  
                  <HarmonicCard
                    title="Momentum Trigger Mapping"
                    description="Design precise triggers that activate cascading success sequences"
                    icon={<ArrowUpRight className="h-6 w-6 text-harmony-medium" />}
                    color="forest"
                  />
                  
                  <HarmonicCard
                    title="Cascade Effect Optimization"
                    description="Fine-tune your success cycles for maximum natural momentum"
                    icon={<Sparkles className="h-6 w-6 text-harmony-medium" />}
                    color="sunset"
                  />
                  
                  <HarmonicCard
                    title="Self-Sustaining Design"
                    description="Create systems that gain strength and efficiency over time"
                    icon={<Gauge className="h-6 w-6 text-harmony-medium" />}
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
                  The Orchestration Advantage
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Natural Flow</h4>
                      <p className="text-white/80 leading-relaxed">
                        Growth that builds its own momentum through carefully orchestrated sequences
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Compounding Results</h4>
                      <p className="text-white/80 leading-relaxed">
                        Each success amplifies the next in an ever-strengthening cycle
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Reduced Effort</h4>
                      <p className="text-white/80 leading-relaxed">
                        Systems that gain strength over time, requiring less input for greater output
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Sustainable Growth</h4>
                      <p className="text-white/80 leading-relaxed">
                        Long-term success patterns that become part of your business DNA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground italic">
                "True momentum isn't built in bursts, but in orchestrated movements that compound over time."
              </p>
              <PaymentButton 
                priceId="price_momentum_orchestration"
                mode="subscription"
                tier="Momentum Orchestration"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-12 py-6 text-lg shadow-xl shadow-harmony-medium/20 relative overflow-hidden group"
              >
                <span className="relative z-10">Orchestrate Your Growth</span>
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

export default MomentumOrchestration;
