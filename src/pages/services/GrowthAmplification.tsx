
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { LineChart, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const GrowthAmplification = () => {
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
                <BreadcrumbLink href="/services/growth-amplification">Growth Amplification</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-harmony-light/10 mb-6">
                <LineChart className="h-8 w-8 text-harmony-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Growth Amplification
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform modest investments into extraordinary returns through our precision-tuned growth strategies.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Our Growth Amplification service takes your business's natural momentum and 
                multiplies it through carefully calibrated interventions and strategic optimization.
              </p>
              
              <h2>Amplification Strategies</h2>
              <ul>
                <li>Strategic leverage point activation</li>
                <li>Growth catalyst implementation</li>
                <li>Momentum optimization</li>
                <li>Scalable system design</li>
              </ul>

              <h2>Measurable Results</h2>
              <p>
                Our approach consistently delivers:
              </p>
              <ul>
                <li>5-10x return on strategic investments</li>
                <li>Accelerated growth trajectories</li>
                <li>Improved operational efficiency</li>
                <li>Sustainable scaling patterns</li>
              </ul>
            </div>

            <div className="bg-harmony-deep text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                The Amplification Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Exponential Growth</h4>
                    <p className="text-white/80">Achieve more with less through strategic amplification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Sustainable Systems</h4>
                    <p className="text-white/80">Build momentum that compounds over time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Precision Targeting</h4>
                    <p className="text-white/80">Focus resources where they matter most</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Measurable Impact</h4>
                    <p className="text-white/80">Clear metrics and proven results</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-8"
              >
                Amplify Your Growth
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
