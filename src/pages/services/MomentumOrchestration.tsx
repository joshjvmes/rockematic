
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { BarChart3, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const MomentumOrchestration = () => {
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
                <BreadcrumbLink href="/services/momentum-orchestration">Momentum Orchestration</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-harmony-light/10 mb-6">
                <BarChart3 className="h-8 w-8 text-harmony-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Momentum Orchestration
              </h1>
              <p className="text-xl text-muted-foreground">
                Build self-sustaining growth cycles that cascade naturally from one success to the next.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Our Momentum Orchestration service creates a symphony of coordinated actions 
                that build upon each other, generating unstoppable forward momentum for your business.
              </p>
              
              <h2>The Orchestration Process</h2>
              <ul>
                <li>Success pattern identification</li>
                <li>Momentum trigger mapping</li>
                <li>Cascade effect optimization</li>
                <li>Self-sustaining cycle design</li>
              </ul>

              <h2>Growth Outcomes</h2>
              <p>
                Through precise orchestration, you'll achieve:
              </p>
              <ul>
                <li>Predictable growth patterns</li>
                <li>Reduced operational friction</li>
                <li>Accelerating success cycles</li>
                <li>Compounding momentum gains</li>
              </ul>
            </div>

            <div className="bg-harmony-deep text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                The Orchestration Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Natural Flow</h4>
                    <p className="text-white/80">Growth that builds its own momentum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Compounding Results</h4>
                    <p className="text-white/80">Each success amplifies the next</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Reduced Effort</h4>
                    <p className="text-white/80">Systems that gain strength over time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Sustainable Growth</h4>
                    <p className="text-white/80">Long-term success patterns</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-8"
              >
                Start Your Momentum Journey
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MomentumOrchestration;
