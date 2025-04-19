
import React from 'react';
import HarmonicCard from '@/components/HarmonicCard';
import { BarChart3, Target, LineChart, Users, Zap, Gem } from 'lucide-react';

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <HarmonicCard
            title="Resonance Analysis"
            description="Discover your business's natural frequency and identify the perfect resonant points for exponential growth with minimal input."
            icon={<Target className="h-6 w-6 text-harmony-medium" />}
            color="water"
          />
          
          <HarmonicCard
            title="Growth Amplification"
            description="Implement precisely calibrated strategies that create ripple effects throughout your business ecosystem, multiplying returns."
            icon={<LineChart className="h-6 w-6 text-harmony-medium" />}
            color="forest"
          />
          
          <HarmonicCard
            title="Momentum Orchestration"
            description="Build self-sustaining growth cycles that cascade naturally from one success to the next with increasingly less effort required."
            icon={<BarChart3 className="h-6 w-6 text-harmony-medium" />}
            color="sunset"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HarmonicCard
            title="Harmony Integration"
            description="Ensure all business components work in perfect concert, creating a synchronized system where every element amplifies the others."
            icon={<Users className="h-6 w-6 text-harmony-medium" />}
            color="primary"
          />
          
          <HarmonicCard
            title="Flow Automation"
            description="Develop systems that maintain your growth momentum automatically, freeing you to focus on vision and innovation."
            icon={<Zap className="h-6 w-6 text-harmony-medium" />}
            color="primary"
          />
          
          <HarmonicCard
            title="Resonant Leadership"
            description="Transform your leadership approach to create natural alignment and inspire teams to achieve extraordinary results with less friction."
            icon={<Gem className="h-6 w-6 text-harmony-medium" />}
            color="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
