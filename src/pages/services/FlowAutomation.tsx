
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Zap, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const FlowAutomation = () => {
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
                <BreadcrumbLink href="/services/flow-automation">Flow Automation</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-harmony-light/10 mb-6">
                <Zap className="h-8 w-8 text-harmony-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Flow Automation
              </h1>
              <p className="text-xl text-muted-foreground">
                Develop systems that maintain your growth momentum automatically, freeing you to focus on vision and innovation.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Our Flow Automation service creates intelligent systems that maintain 
                and accelerate your business growth with minimal manual intervention.
              </p>
              
              <h2>The Automation Process</h2>
              <ul>
                <li>Flow pattern analysis</li>
                <li>Automation opportunity mapping</li>
                <li>System design and implementation</li>
                <li>Continuous optimization</li>
              </ul>

              <h2>Automation Benefits</h2>
              <p>
                Through intelligent automation, achieve:
              </p>
              <ul>
                <li>Reduced manual oversight</li>
                <li>Consistent execution</li>
                <li>Scalable operations</li>
                <li>Enhanced efficiency</li>
              </ul>
            </div>

            <div className="bg-harmony-deep text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                The Automation Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Effortless Growth</h4>
                    <p className="text-white/80">Systems that work while you sleep</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Perfect Consistency</h4>
                    <p className="text-white/80">Error-free execution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Time Freedom</h4>
                    <p className="text-white/80">Focus on what matters most</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Infinite Scalability</h4>
                    <p className="text-white/80">Growth without limits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-8"
              >
                Automate Your Growth
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
