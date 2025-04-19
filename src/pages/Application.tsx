
// We need to make sure the Application.tsx file correctly stores all the form data

// Update the handleSubmit function to ensure all fields are saved properly:
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
