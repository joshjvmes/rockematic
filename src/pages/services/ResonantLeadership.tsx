
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Users, Waves, Heart, Sparkles, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';

const ResonantLeadership = () => {
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
                <BreadcrumbLink href="/services/resonant-leadership">Resonant Leadership</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-harmony-light/10 mb-8 relative">
                <Users className="h-10 w-10 text-harmony-medium" />
                <div className="absolute inset-0">
                  <RippleBackground intensity="medium" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-harmony-medium to-harmony-light">
                Resonant Leadership
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Discover the art of leading through natural resonance, where authority flows not from position, 
                but from the harmonious alignment of vision, values, and authentic presence.
              </p>
            </div>

            <div className="space-y-16">
              <section className="prose prose-lg max-w-none">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-harmony-light/10">
                  <h2 className="font-serif text-3xl mb-6 text-harmony-deep">The Essence of Resonant Leadership</h2>
                  <p className="text-lg leading-relaxed mb-8">
                    Just as a crystal bowl sings with its natural frequency, authentic leadership emerges 
                    from finding your true resonance. It's not about forcing change, but about creating 
                    the conditions where transformation naturally unfolds.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                    <Card className="p-6 bg-resonance-water/20 border-resonance-water/30">
                      <Waves className="h-6 w-6 text-harmony-medium mb-4" />
                      <h3 className="font-medium text-lg mb-2">Natural Flow</h3>
                      <p className="text-muted-foreground">Lead with the current, not against it</p>
                    </Card>
                    
                    <Card className="p-6 bg-resonance-forest/20 border-resonance-forest/30">
                      <Heart className="h-6 w-6 text-harmony-medium mb-4" />
                      <h3 className="font-medium text-lg mb-2">Deep Connection</h3>
                      <p className="text-muted-foreground">Build trust through authentic presence</p>
                    </Card>
                    
                    <Card className="p-6 bg-resonance-sunset/20 border-resonance-sunset/30">
                      <Sparkles className="h-6 w-6 text-harmony-medium mb-4" />
                      <h3 className="font-medium text-lg mb-2">Collective Wisdom</h3>
                      <p className="text-muted-foreground">Amplify your team's natural gifts</p>
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
                    The Journey to Resonant Leadership
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-harmony-light" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xl mb-2">Self-Discovery</h4>
                          <p className="text-white/80 leading-relaxed">
                            Uncover your authentic leadership frequency through deep inner work and conscious awareness.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-harmony-light" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xl mb-2">Team Attunement</h4>
                          <p className="text-white/80 leading-relaxed">
                            Learn to sense and amplify the natural strengths and rhythms of your team.
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
                          <h4 className="font-medium text-xl mb-2">Vision Alignment</h4>
                          <p className="text-white/80 leading-relaxed">
                            Create a compelling future that naturally draws forth everyone's best contribution.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-harmony-light/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-harmony-light" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xl mb-2">Harmonic Growth</h4>
                          <p className="text-white/80 leading-relaxed">
                            Foster an environment where growth and innovation emerge organically.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground italic">
                  "The most powerful leadership creates ripples that continue long after the initial action."
                </p>
                <Button 
                  size="lg"
                  className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-12 py-6 text-lg shadow-xl shadow-harmony-medium/20 relative overflow-hidden group"
                >
                  <span className="relative z-10">Begin Your Leadership Journey</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <RippleBackground intensity="strong" />
                  </div>
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

export default ResonantLeadership;
