import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Target, BarChart3, Check, Waves, LineChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import AnimatedText from '@/components/AnimatedText';
import PaymentButton from "@/components/PaymentButton";

const ResonanceAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-harmony-light/5">
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
                <BreadcrumbLink href="/services/resonance-analysis">Resonance Analysis</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-harmony-light/10 mb-8 relative">
                <Target className="h-10 w-10 text-harmony-medium" />
                <div className="absolute inset-0">
                  <RippleBackground intensity="medium" />
                </div>
              </div>
              
              <AnimatedText
                text="Resonance Analysis"
                className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light"
                animationType="reveal"
                staggerDelay={0.05}
              />
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Discover the natural frequencies of your business, where minimal input creates 
                maximum impact through perfectly tuned strategic resonance.
              </p>
            </div>

            <div className="space-y-16">
              <section className="prose prose-lg max-w-none">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10">
                  <h2 className="font-serif text-3xl mb-6 text-harmony-deep">The Resonance Journey</h2>
                  <p className="text-lg leading-relaxed mb-8">
                    Like a master violinist finding the perfect note that makes a crystal sing, 
                    our Resonance Analysis reveals the precise frequencies where your business naturally 
                    amplifies effort into extraordinary results.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                    <Card className="p-6 bg-resonance-water/20 border-resonance-water/30">
                      <Waves className="h-6 w-6 text-harmony-medium mb-4" />
                      <h3 className="font-medium text-lg mb-2">Natural Rhythms</h3>
                      <p className="text-muted-foreground">Discover your business's inherent growth patterns</p>
                    </Card>
                    
                    <Card className="p-6 bg-resonance-forest/20 border-resonance-forest/30">
                      <LineChart className="h-6 w-6 text-harmony-medium mb-4" />
                      <h3 className="font-medium text-lg mb-2">Peak Amplification</h3>
                      <p className="text-muted-foreground">Identify optimal resonance points</p>
                    </Card>
                    
                    <Card className="p-6 bg-resonance-sunset/20 border-resonance-sunset/30">
                      <BarChart3 className="h-6 w-6 text-harmony-medium mb-4" />
                      <h3 className="font-medium text-lg mb-2">Strategic Harmony</h3>
                      <p className="text-muted-foreground">Align actions with natural momentum</p>
                    </Card>
                  </div>
                </div>
              </section>

              <section className="bg-harmony-deep text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <RippleBackground intensity="strong" color="rgba(255, 255, 255, 0.1)" />
                </div>
                
                <div className="relative">
                  <h3 className="text-2xl font-serif font-semibold mb-8">
                    The Analysis Process
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-harmony-light" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xl mb-2">Deep Observation</h4>
                          <p className="text-white/80 leading-relaxed">
                            Like studying the ripples in a pond, we observe how energy moves through your organization.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-harmony-light" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xl mb-2">Pattern Recognition</h4>
                          <p className="text-white/80 leading-relaxed">
                            We identify the natural cycles and rhythms unique to your business ecosystem.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-harmony-light" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xl mb-2">Resonance Mapping</h4>
                          <p className="text-white/80 leading-relaxed">
                            Chart the points where minimal input creates maximum amplification.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-harmony-light" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xl mb-2">Strategic Attunement</h4>
                          <p className="text-white/80 leading-relaxed">
                            Align your actions with these natural amplification points for effortless growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground italic">
                  "Understanding your business's natural frequency is the first step toward amplified growth."
                </p>
                <PaymentButton 
                  priceId="price_resonance_analysis"
                  mode="subscription"
                  tier="Resonance Analysis"
                  className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-12 py-6 text-lg shadow-xl shadow-harmony-medium/20 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Your Analysis</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <RippleBackground intensity="strong" />
                  </div>
                </PaymentButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResonanceAnalysis;
