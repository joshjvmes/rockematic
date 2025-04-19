
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ApplicationViewProps {
  application: any;
  onUpdate?: () => void;
  editable?: boolean;
}

const ApplicationView: React.FC<ApplicationViewProps> = ({ 
  application, 
  onUpdate,
  editable = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: application?.submission_data?.first_name || '',
    lastName: application?.submission_data?.last_name || '',
    companyName: application?.submission_data?.company_name || '',
    website: application?.submission_data?.website || '',
    linkedin: application?.submission_data?.linkedin || '',
    applicationDetails: application?.submission_data?.application_details || '',
  });
  const { toast } = useToast();

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get status color based on application status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!application) return;
    
    setLoading(true);
    
    try {
      // Update the submission_data field with the new form data
      const updatedSubmissionData = {
        ...application.submission_data,
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        website: formData.website,
        linkedin: formData.linkedin,
        application_details: formData.applicationDetails,
      };
      
      const { error } = await supabase
        .from('applications')
        .update({ submission_data: updatedSubmissionData })
        .eq('id', application.id);
        
      if (error) throw error;
      
      toast({
        title: "Application Updated",
        description: "Your application details have been successfully updated.",
      });
      
      // Exit edit mode and trigger update callback if provided
      setIsEditing(false);
      if (onUpdate) onUpdate();
      
    } catch (error: any) {
      console.error('Error updating application:', error);
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: error.message || "Failed to update application. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!application) {
    return (
      <Card className="mb-6">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">No application found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Your Application</CardTitle>
            <CardDescription>
              Submitted on {formatDate(application.created_at)}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(application.status)}>
            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="applicationDetails">Application Details</Label>
              <Textarea
                id="applicationDetails"
                name="applicationDetails"
                value={formData.applicationDetails}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">First Name</h3>
                <p className="text-muted-foreground">{application.submission_data?.first_name || 'Not provided'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Last Name</h3>
                <p className="text-muted-foreground">{application.submission_data?.last_name || 'Not provided'}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-1">Company Name</h3>
              <p className="text-muted-foreground">{application.submission_data?.company_name || 'Not provided'}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Website</h3>
                <p className="text-muted-foreground">{application.submission_data?.website || 'Not provided'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">LinkedIn Profile</h3>
                <p className="text-muted-foreground">{application.submission_data?.linkedin || 'Not provided'}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-1">Application Details</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">
                {application.submission_data?.application_details || 'Not provided'}
              </p>
            </div>
            
            {application.feedback && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="text-sm font-medium mb-1">Feedback from our team</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{application.feedback}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      {editable && (
        <CardFooter className="flex justify-end gap-2">
          {isEditing ? (
            <>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit} 
                disabled={loading}
                className="bg-harmony-medium hover:bg-harmony-light"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </>
          ) : (
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-harmony-medium hover:bg-harmony-light"
            >
              Edit Application
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ApplicationView;
