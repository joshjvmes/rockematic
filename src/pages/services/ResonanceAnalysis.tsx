
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Target, BarChart3, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const ResonanceAnalysis = () => {
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
                <BreadcrumbLink href="/services/resonance-analysis">Resonance Analysis</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-harmony-light/10 mb-6">
                <Target className="h-8 w-8 text-harmony-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Resonance Analysis
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover your business's natural frequency and identify perfect resonant points for exponential growth.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Our signature Resonance Analysis process delves deep into your business's core operations, 
                identifying natural amplification points where minimal input can create maximum output.
              </p>
              
              <h2>The Analysis Process</h2>
              <ul>
                <li>Deep-dive assessment of current operations</li>
                <li>Identification of natural growth catalysts</li>
                <li>Mapping of resonant opportunities</li>
                <li>Strategic amplification planning</li>
              </ul>

              <h2>Expected Outcomes</h2>
              <p>
                Through our Resonance Analysis, you'll gain clear insights into:
              </p>
              <ul>
                <li>Prime amplification points in your business</li>
                <li>Natural growth patterns and cycles</li>
                <li>Efficiency optimization opportunities</li>
                <li>Strategic leverage points</li>
              </ul>
            </div>

            <div className="bg-harmony-deep text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Why Choose Resonance Analysis?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Precise Insights</h4>
                    <p className="text-white/80">Gain detailed understanding of your growth potential</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Strategic Clarity</h4>
                    <p className="text-white/80">Clear path to amplified growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Efficiency Focus</h4>
                    <p className="text-white/80">Maximize impact with minimal input</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Long-term Value</h4>
                    <p className="text-white/80">Sustainable growth strategies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-8"
              >
                Schedule Your Analysis
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResonanceAnalysis;
