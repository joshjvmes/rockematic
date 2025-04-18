
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

const Application = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [priceId, setPriceId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    website: '',
    linkedin: '',
    applicationDetails: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state && location.state.selectedTier && location.state.priceId) {
      setSelectedTier(location.state.selectedTier);
      setPriceId(location.state.priceId);
      setFormData(prev => ({ ...prev, email: user?.email || '' }));
    } else {
      // Redirect to services page if no tier is selected
      navigate('/services');
    }
  }, [location.state, navigate, user?.email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  if (!selectedTier) {
    return <div>Loading...</div>; // Or a more appropriate loading state
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationHeader />

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-6">Application for {selectedTier}</h1>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={formData.email}
              required
              disabled={!!user?.email}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
              Company Name
            </Label>
            <Input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={formData.companyName}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="website" className="block text-gray-700 text-sm font-bold mb-2">
              Website
            </Label>
            <Input
              type="url"
              id="website"
              name="website"
              placeholder="Website URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={formData.website}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="linkedin" className="block text-gray-700 text-sm font-bold mb-2">
              LinkedIn Profile
            </Label>
            <Input
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="LinkedIn Profile URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={formData.linkedin}
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="applicationDetails" className="block text-gray-700 text-sm font-bold mb-2">
              Why are you applying?
            </Label>
            <Textarea
              id="applicationDetails"
              name="applicationDetails"
              placeholder="Tell us more about your business and why you're interested in this tier."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={formData.applicationDetails}
              rows={4}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Button
              className="bg-harmony-medium hover:bg-harmony-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Application;
