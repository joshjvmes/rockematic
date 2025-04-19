import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Wand2, ArrowRight, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import AnimatedText from '@/components/AnimatedText';
import HarmonicCard from '@/components/HarmonicCard';

const HarmonicGrowthSystem = () => {
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
                <BreadcrumbLink href="/services/harmonic-growth-system">Harmonic Growth System</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-harmony-light/10 mb-8 relative">
                <Wand2 className="h-10 w-10 text-harmony-medium z-10" />
                <div className="absolute inset-0">
                  <RippleBackground intensity="medium" />
                </div>
              </div>
              
              <AnimatedText
                text="The Harmonic Growth System"
                className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light"
                animationType="reveal"
                staggerDelay={0.05}
              />
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A complete symphony of growth methodologies, perfectly orchestrated to create exponential success with natural momentum.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-lg text-muted-foreground">
                Our signature end-to-end solution orchestrates all elements of your business into 
                a perfectly tuned growth engine. This comprehensive system integrates all our 
                methodologies into a bespoke symphony of success tailored to your unique business rhythm.
              </p>
            </div>

            <section className="mb-16">
              <h2 className="font-serif text-3xl mb-8 text-harmony-deep text-center">
                The Complete Symphony
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Resonance Analysis",
                    description: "Discover your perfect frequency",
                    link: "/services/resonance-analysis"
                  },
                  {
                    title: "Growth Amplification",
                    description: "Multiply your impact",
                    link: "/services/growth-amplification"
                  },
                  {
                    title: "Momentum Orchestration",
                    description: "Build unstoppable flow",
                    link: "/services/momentum-orchestration"
                  },
                  {
                    title: "Harmony Integration",
                    description: "Synchronize all elements",
                    link: "/services/harmony-integration"
                  },
                  {
                    title: "Flow Automation",
                    description: "Create effortless systems",
                    link: "/services/flow-automation"
                  },
                  {
                    title: "Resonant Leadership",
                    description: "Lead with natural authority",
                    link: "/services/resonant-leadership"
                  }
                ].map((service) => (
                  <HarmonicCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={<ArrowRight className="h-6 w-6 text-harmony-medium" />}
                    color="water"
                    className="hover:translate-y-[-5px] transition-transform duration-300"
                    href={service.link}
                  />
                ))}
              </div>
            </section>

            <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10 mb-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <RippleBackground intensity="soft" />
              </div>
              
              <div className="relative">
                <h2 className="text-2xl font-serif font-semibold mb-8 text-center">
                  The Harmonic Difference
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-medium" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Complete Integration</h4>
                      <p className="text-muted-foreground">Every element works in perfect harmony</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-medium" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Natural Amplification</h4>
                      <p className="text-muted-foreground">Growth that builds its own momentum</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-medium" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Sustained Results</h4>
                      <p className="text-muted-foreground">Long-term, compounding success</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-harmony-medium" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-2">Bespoke Design</h4>
                      <p className="text-muted-foreground">Tailored to your unique rhythm</p>
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
                <span className="relative z-10">Begin Your Harmonic Journey</span>
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

export default HarmonicGrowthSystem;
