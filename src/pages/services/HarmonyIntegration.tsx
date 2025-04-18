
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Layers, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const HarmonyIntegration = () => {
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
                <BreadcrumbLink href="/services/harmony-integration">Harmony Integration</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-harmony-light/10 mb-6">
                <Layers className="h-8 w-8 text-harmony-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Harmony Integration
              </h1>
              <p className="text-xl text-muted-foreground">
                Synchronize all elements of your business into a perfectly tuned system where every component amplifies the others.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Our Harmony Integration service aligns every aspect of your business operations 
                into a synchronized system that works in perfect concert.
              </p>
              
              <h2>The Integration Process</h2>
              <ul>
                <li>System component mapping</li>
                <li>Harmony point identification</li>
                <li>Integration optimization</li>
                <li>Synchronization refinement</li>
              </ul>

              <h2>Integration Benefits</h2>
              <p>
                Through harmonic integration, achieve:
              </p>
              <ul>
                <li>Seamless operations flow</li>
                <li>Enhanced team collaboration</li>
                <li>Improved resource utilization</li>
                <li>Maximized system efficiency</li>
              </ul>
            </div>

            <div className="bg-harmony-deep text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                The Integration Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Perfect Sync</h4>
                    <p className="text-white/80">All systems working as one</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Enhanced Flow</h4>
                    <p className="text-white/80">Friction-free operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Unified Vision</h4>
                    <p className="text-white/80">Aligned goals and execution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Maximum Impact</h4>
                    <p className="text-white/80">Amplified business outcomes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-8"
              >
                Achieve Perfect Harmony
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
