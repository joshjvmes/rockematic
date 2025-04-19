
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Loader2 } from 'lucide-react';

const Application = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [hasExistingApplications, setHasExistingApplications] = useState(false);
  const [existingApplication, setExistingApplication] = useState(null);
  const [selectedTier, setSelectedTier] = useState('');
  const [priceId, setPriceId] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    website: '',
    linkedin: '',
    applicationDetails: '',
  });

  useEffect(() => {
    // Check if user came from service page with a selected tier
    if (location.state?.selectedTier) {
      setSelectedTier(location.state.selectedTier);
    }
    if (location.state?.priceId) {
      setPriceId(location.state.priceId);
    }

    // Pre-fill email if user is logged in
    if (user?.email) {
      setFormData(prev => ({ ...prev, email: user.email }));
    }

    // Check if user already has an application
    const checkExistingApplication = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .eq('user_id', user.id);

        if (error) throw error;

        if (data && data.length > 0) {
          setHasExistingApplications(true);
          setExistingApplication(data[0]);
        }
      } catch (error) {
        console.error('Error checking for existing applications:', error);
      }
    };

    checkExistingApplication();
  }, [user, location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !selectedTier || !priceId) {
      toast({
        title: "Error",
        description: "Missing user or tier information. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Package all form data into the submission_data JSON field
      const submissionData = {
        tier: selectedTier,
        price_id: priceId,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company_name: formData.companyName,
        website: formData.website,
        linkedin: formData.linkedin,
        application_details: formData.applicationDetails,
      };

      console.log("Submitting application with data:", submissionData);

      const { data, error } = await supabase
        .from('applications')
        .insert([
          {
            user_id: user.id,
            submission_data: submissionData,
            status: 'pending', // Set initial status
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully!",
      });

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Application submission error:', error);
      toast({
        title: "Error",
        description: `There was a problem submitting your application. Please try again. ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationHeader />
      
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Apply to Join Our Symphony
            </h1>
            <p className="text-muted-foreground">
              Complete the application below to begin your journey with our Harmonic Growth Engine
            </p>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center p-12">
              <Loader2 className="h-8 w-8 animate-spin text-harmony-medium" />
            </div>
          ) : hasExistingApplications ? (
            <Card>
              <CardHeader>
                <CardTitle>Application Already Submitted</CardTitle>
                <CardDescription>
                  You have already submitted an application to join our Harmonic Growth program.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  Your application is currently {existingApplication?.status}. Our team will review it shortly.
                </p>
                <p className="text-muted-foreground">
                  You can check the status of your application on your dashboard.
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
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Tell us about yourself and your business
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="website">Website (Optional)</Label>
                      <Input
                        id="website"
                        name="website"
                        placeholder="Your company website"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                      <Input
                        id="linkedin"
                        name="linkedin"
                        placeholder="Your LinkedIn profile URL"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="applicationDetails">Why are you interested in our Harmonic Growth program?</Label>
                    <Textarea
                      id="applicationDetails"
                      name="applicationDetails"
                      placeholder="Tell us about your business goals and what you hope to achieve..."
                      value={formData.applicationDetails}
                      onChange={handleInputChange}
                      rows={6}
                      required
                    />
                  </div>
                  
                  {selectedTier && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="font-medium">Selected Tier: {selectedTier}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="bg-harmony-medium hover:bg-harmony-light"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Application;
