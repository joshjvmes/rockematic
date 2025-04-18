
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Wand2, ArrowRight, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const HarmonicGrowthSystem = () => {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      <main className="pt-32 pb-20">
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
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-harmony-light/10 mb-6">
                <Wand2 className="h-8 w-8 text-harmony-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                The Harmonic Growth System
              </h1>
              <p className="text-xl text-muted-foreground">
                A complete symphony of growth methodologies, perfectly orchestrated to create exponential success with natural momentum.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead">
                Our signature end-to-end solution orchestrates all elements of your business into 
                a perfectly tuned growth engine. This comprehensive system integrates all our 
                methodologies into a bespoke symphony of success tailored to your unique business rhythm.
              </p>
              
              <h2>The Complete Symphony</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
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
                  <a 
                    key={service.title}
                    href={service.link}
                    className="block p-6 bg-harmony-deep/5 hover:bg-harmony-deep/10 rounded-xl transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center text-harmony-medium">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </a>
                ))}
              </div>

              <h2>The Harmonic Difference</h2>
              <div className="bg-harmony-deep text-white rounded-2xl p-8 not-prose mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-light mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Complete Integration</h4>
                      <p className="text-white/80">Every element works in perfect harmony</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-light mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Natural Amplification</h4>
                      <p className="text-white/80">Growth that builds its own momentum</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-light mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Sustained Results</h4>
                      <p className="text-white/80">Long-term, compounding success</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-harmony-light mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Bespoke Design</h4>
                      <p className="text-white/80">Tailored to your unique rhythm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center not-prose">
                <Button 
                  size="lg"
                  className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-8"
                >
                  Begin Your Harmonic Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HarmonicGrowthSystem;
