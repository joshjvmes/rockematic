import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import RippleBackground from '@/components/RippleBackground';
import { Button } from '@/components/ui/button';
import { Wand2, Sparkles, Lightbulb, Music } from 'lucide-react';

const Philosophy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Update metadata when component mounts
    document.title = "Our Philosophy | RocketNow";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover RocketNow\'s unique philosophy of business growth through resonance, harmony, and natural amplification. Join our selective ensemble of success.');
    }
  }, []);

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-harmony-light/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Harmonic Philosophy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The principles that guide our approach to business growth through resonance, harmony, and natural amplification.
            </p>
          </div>
        </div>
      </section>
      
      {/* Philosophy Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="inline-flex items-center space-x-2 bg-resonance-water/20 px-3 py-1 rounded-full mb-4">
                <Wand2 className="h-4 w-4 text-harmony-medium" />
                <span className="text-sm font-medium text-harmony-medium">Principle One</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Resonant Returns</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                RocketNow finds the <span className="text-harmony-medium font-medium">right frequency</span> for your growth so that even a quiet initiative booms loudly in outcome. By tuning strategy to the precise resonance of your market, a small move can trigger outsized echoes of success.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                It's like planting a single seed and reaping an entire field's harvest – <span className="text-harmony-medium font-medium">tenfold rewards from one-tenth the usual cost</span>. In this harmonic system, <span className="text-harmony-medium font-medium">value</span> doesn't just add up; it <span className="text-harmony-medium font-medium">multiplies</span>.
              </p>
              <blockquote className="border-l-4 border-harmony-light pl-4 italic text-muted-foreground mb-6">
                "Every dollar, every effort comes back amplified, ringing with compounded benefit in the balance sheet."
              </blockquote>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square rounded-full overflow-hidden bg-harmony-deep/5">
                <RippleBackground intensity="medium" color="rgba(155, 135, 245, 0.1)" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square bg-white rounded-full border border-harmony-light/20 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <h3 className="text-5xl font-serif font-bold text-harmony-medium mb-2">10x</h3>
                  <p className="text-muted-foreground">Amplification</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1">
              <img 
                src="/rockematic-kael-2.png" 
                alt="Cascading Growth" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-resonance-forest/20 px-3 py-1 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-harmony-medium" />
                <span className="text-sm font-medium text-harmony-medium">Principle Two</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Effortless Flow</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A well-designed stream carries itself forward – <span className="text-harmony-medium font-medium">momentum building naturally</span> as it flows. In RocketNow's orchestrated process, each success cascades into the next, much like a waterfall spilling over step by step into new pools of opportunity.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                One action triggers another automatically, creating a <span className="text-harmony-medium font-medium">chain reaction of growth</span> that gains speed with each stage. This cascading automation means your growth journey develops its own effortless rhythm.
              </p>
              <blockquote className="border-l-4 border-harmony-light pl-4 italic text-muted-foreground mb-6">
                "The heavy lifting is handled in the flow, allowing you to step back as the system carries you from one milestone to the next with gravity-like ease."
              </blockquote>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-resonance-sunset/20 px-3 py-1 rounded-full mb-4">
                <Music className="h-4 w-4 text-harmony-medium" />
                <span className="text-sm font-medium text-harmony-medium">Principle Three</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Selective Harmony</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Not every note fits in a chord – true harmony emerges only when the right notes <span className="text-harmony-medium font-medium">play together</span>. In that spirit, RocketNow partners only with businesses that are <span className="text-harmony-medium font-medium">in tune</span> with our vision of exponential, sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This is a <span className="text-harmony-medium font-medium">private ensemble</span> of clients, chosen carefully for resonance in values and ambition. By keeping our circle exclusive, we ensure each partnership is deeply aligned and built on unshakable trust.
              </p>
              <blockquote className="border-l-4 border-harmony-light pl-4 italic text-muted-foreground mb-6">
                "You're not a customer; you're a co-creator in this symphony. Within this alignment, every collaboration feels fluid and intuitive, as if we've been playing the same melody all along."
              </blockquote>
            </div>
            <div className="relative">
              <div className="bg-harmony-deep rounded-2xl p-8 text-white">
                <Lightbulb className="h-12 w-12 text-harmony-light mb-6" />
                <h3 className="text-2xl font-serif font-semibold mb-4">Our Selective Process</h3>
                <p className="text-white/80 mb-6">
                  We carefully select partners who share our values and vision for sustainable, ethical growth. Our exclusive approach ensures each client receives personalized attention and extraordinary results.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-harmony-light">✓</span>
                    <span className="text-white/80">Alignment in values and vision</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-harmony-light">✓</span>
                    <span className="text-white/80">Commitment to sustainable growth</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-harmony-light">✓</span>
                    <span className="text-white/80">Openness to innovative approaches</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-harmony-light">✓</span>
                    <span className="text-white/80">Long-term partnership mindset</span>
                  </li>
                </ul>
                <Button 
                  className="bg-white text-harmony-deep hover:bg-harmony-accent hover:text-harmony-deep w-full"
                  onClick={handleApplyClick}
                >
                  Apply for Partnership
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-20 md:py-32 bg-harmony-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/rockematic-kael-1.png" 
            alt="Harmonic Resonance" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-harmony-deep via-harmony-deep/90 to-harmony-deep opacity-95" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join the Symphony
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            If you can <span className="text-harmony-light font-medium">hear this call</span> – if these words strike a chord in your own growth aspirations – consider it your invitation to join our symphony of success.
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Welcome to growth in harmony. Welcome to <span className="text-harmony-light font-medium">RocketNow</span>.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-harmony-deep hover:bg-harmony-accent rounded-full px-10 py-6 text-lg"
            onClick={handleApplyClick}
          >
            Start Your Harmonic Journey
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Philosophy;
