
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import RippleBackground from '@/components/RippleBackground';

const applicationSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  industry: z.string().min(1, "Industry is required"),
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  yearsInBusiness: z.string().min(1, "Please select years in business"),
  employeeCount: z.string().min(1, "Please select employee count"),
  annualRevenue: z.string().min(1, "Please select annual revenue"),
  growthGoals: z.string().min(10, "Please describe your growth goals"),
  currentChallenges: z.string().min(10, "Please describe your current challenges"),
  resonanceExperience: z.string().min(10, "Please share your experience with harmonic growth concepts"),
  preferredTier: z.string().min(1, "Please select your preferred membership tier"),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const Application = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tiers, setTiers] = useState<any[]>([]);
  const [hasExistingApplications, setHasExistingApplications] = useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      businessName: '',
      industry: '',
      website: '',
      yearsInBusiness: '',
      employeeCount: '',
      annualRevenue: '',
      growthGoals: '',
      currentChallenges: '',
      resonanceExperience: '',
      preferredTier: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check for existing applications
        const { data: applications, error: applicationsError } = await supabase
          .from('applications')
          .select('id, status')
          .eq('user_id', user?.id);
          
        if (applicationsError) throw applicationsError;
        setHasExistingApplications(applications && applications.length > 0);
        
        // Fetch membership tiers
        const { data: tiersData, error: tiersError } = await supabase
          .from('membership_tiers')
          .select('*');
          
        if (tiersError) throw tiersError;
        setTiers(tiersData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    if (user) {
      fetchData();
    }
  }, [user]);

  const onSubmit = async (data: ApplicationFormValues) => {
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('applications')
        .insert({
          user_id: user.id,
          submission_data: {
            businessName: data.businessName,
            industry: data.industry,
            website: data.website,
            yearsInBusiness: data.yearsInBusiness,
            employeeCount: data.employeeCount,
            annualRevenue: data.annualRevenue,
            growthGoals: data.growthGoals,
            currentChallenges: data.currentChallenges,
            resonanceExperience: data.resonanceExperience,
            preferredTier: data.preferredTier,
          },
        });
        
      if (error) throw error;
      
      setIsSubmitted(true);
      toast({
        title: "Application submitted",
        description: "Your application has been successfully submitted for review.",
      });
      
      // Scroll to top
      window.scrollTo(0, 0);
      
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error.message || "An error occurred while submitting your application",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationHeader />
      
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <RippleBackground intensity="soft" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <Card className="border-harmony-light/30 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-harmony-light/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-harmony-light" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-serif">Application Submitted</CardTitle>
                <CardDescription className="text-lg">
                  Thank you for applying to join our Harmonic Growth Engine
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  We've received your application and our team will review it shortly. 
                  You'll be notified once we've made a decision.
                </p>
                <div className="flex justify-center">
                  <Sparkles className="text-harmony-light h-8 w-8 animate-pulse" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-harmony-medium hover:bg-harmony-light"
                >
                  Return to Dashboard
                </Button>
              </CardFooter>
            </Card>
          ) : hasExistingApplications ? (
            <Card className="border-harmony-light/30 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-serif">Application Already Submitted</CardTitle>
                <CardDescription className="text-lg">
                  You have already submitted an application
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  Your application is currently being reviewed. You can check the status 
                  in your dashboard.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-harmony-medium hover:bg-harmony-light"
                >
                  Return to Dashboard
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Join the Symphony
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Complete the application below to begin your journey with our 
                  Harmonic Growth Engine. We carefully review each application to 
                  ensure resonance with our approach.
                </p>
              </div>
              
              <Card className="border-harmony-light/30 shadow-md">
                <CardHeader>
                  <CardTitle>Application Form</CardTitle>
                  <CardDescription>
                    Tell us about your business and growth aspirations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Business Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Business Name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Industry</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Industry" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="https://your-website.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <FormField
                            control={form.control}
                            name="yearsInBusiness"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Years in Business</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="0-1">0-1 years</SelectItem>
                                    <SelectItem value="2-5">2-5 years</SelectItem>
                                    <SelectItem value="6-10">6-10 years</SelectItem>
                                    <SelectItem value="11+">11+ years</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="employeeCount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Employees</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1-5">1-5</SelectItem>
                                    <SelectItem value="6-20">6-20</SelectItem>
                                    <SelectItem value="21-50">21-50</SelectItem>
                                    <SelectItem value="51-200">51-200</SelectItem>
                                    <SelectItem value="201+">201+</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="annualRevenue"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Annual Revenue</FormLabel>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="0-100k">$0-$100K</SelectItem>
                                    <SelectItem value="100k-500k">$100K-$500K</SelectItem>
                                    <SelectItem value="500k-1m">$500K-$1M</SelectItem>
                                    <SelectItem value="1m-5m">$1M-$5M</SelectItem>
                                    <SelectItem value="5m+">$5M+</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="growthGoals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Growth Goals</FormLabel>
                              <FormDescription>
                                What are your primary goals for growth in the next 6-12 months?
                              </FormDescription>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your growth goals..." 
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="currentChallenges"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Challenges</FormLabel>
                              <FormDescription>
                                What challenges are you currently facing in achieving your growth objectives?
                              </FormDescription>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your current challenges..." 
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="resonanceExperience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Harmonic Resonance Experience</FormLabel>
                              <FormDescription>
                                What experience do you have with harmonic growth concepts, and how do you believe they could impact your business?
                              </FormDescription>
                              <FormControl>
                                <Textarea 
                                  placeholder="Share your experience and thoughts..." 
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="preferredTier"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Membership Tier</FormLabel>
                              <FormDescription>
                                Which membership tier are you most interested in?
                              </FormDescription>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a tier" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {tiers.map((tier) => (
                                    <SelectItem key={tier.id} value={tier.id}>
                                      {tier.name} (${tier.price})
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-harmony-medium hover:bg-harmony-light"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Application;
