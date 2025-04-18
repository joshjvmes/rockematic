import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import RippleBackground from '@/components/RippleBackground';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  interest: z.string({
    required_error: 'Please select an area of interest.',
  }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      interest: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          company: data.company,
          interest: data.interest,
          message: data.message,
        });

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      form.reset();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to start your harmonic growth journey? Reach out to discuss how we can amplify your business success.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below to connect with our team. We'll respond within 24 hours to schedule your initial resonance consultation.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Area of Interest</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="resonance-analysis">Resonance Analysis</SelectItem>
                              <SelectItem value="growth-amplification">Growth Amplification</SelectItem>
                              <SelectItem value="flow-automation">Flow Automation</SelectItem>
                              <SelectItem value="harmonic-system">Complete Harmonic System</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your growth goals and challenges..." 
                            className="min-h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-harmony-medium hover:bg-harmony-light text-white w-full md:w-auto px-8"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-harmony-deep text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <RippleBackground intensity="soft" color="rgba(214, 188, 250, 0.1)" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-6 relative z-10">Contact Information</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="bg-harmony-light/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Email</h4>
                      <a href="mailto:harmony@rocketnow.com" className="text-white/70 hover:text-white transition-colors">
                        harmony@rocketnow.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-harmony-light/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Phone</h4>
                      <a href="tel:+15555551234" className="text-white/70 hover:text-white transition-colors">
                        +1 (555) 555-1234
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-harmony-light/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-harmony-light" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Address</h4>
                      <address className="not-italic text-white/70">
                        Symphony Tower<br />
                        123 Harmonic Way<br />
                        Resonance City, RC 90210
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden h-80 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.8167343201774!2d-122.33232388415213!3d47.60673627918407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3f905c4b1%3A0xcafb360b5c02aa87!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sus!4v1587120783245!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RocketNow Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-harmony-light/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services, process, and partnership model.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-serif font-semibold mb-3">
                What is the Harmonic Growth Engine?
              </h3>
              <p className="text-muted-foreground">
                Our Harmonic Growth Engine is a comprehensive business growth system that applies principles of resonance and amplification to create outsized returns with minimal input, resulting in self-sustaining business growth.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-serif font-semibold mb-3">
                How does the application process work?
              </h3>
              <p className="text-muted-foreground">
                After submitting your contact form, we'll arrange an initial consultation to assess alignment. If there's mutual resonance, we'll proceed with a detailed discovery session, followed by a tailored partnership proposal.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-serif font-semibold mb-3">
                What types of businesses do you work with?
              </h3>
              <p className="text-muted-foreground">
                We partner with growth-oriented businesses across various industries who share our values of sustainable, ethical growth and are open to innovative approaches. Our selective process ensures we only work with businesses where we can create significant value.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-serif font-semibold mb-3">
                How is your approach different?
              </h3>
              <p className="text-muted-foreground">
                Unlike traditional growth consultancies that focus on incremental improvements, we orchestrate fundamental resonant change that creates self-amplifying results. Our methods leverage natural business rhythms to achieve exponential rather than linear growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
