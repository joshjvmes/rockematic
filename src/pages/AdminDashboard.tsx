import React, { useEffect, useState } from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Users, Send, FileText, CheckCircle, XCircle } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [messageRecipient, setMessageRecipient] = useState<any>(null);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);
  const { toast } = useToast();

  const messageSchema = z.object({
    subject: z.string().min(1, "Subject is required"),
    content: z.string().min(1, "Message content is required"),
  });

  const applicationUpdateSchema = z.object({
    status: z.enum(["pending", "approved", "rejected"]),
    feedback: z.string().optional(),
  });

  const messageForm = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      subject: '',
      content: '',
    },
  });

  const applicationForm = useForm<z.infer<typeof applicationUpdateSchema>>({
    resolver: zodResolver(applicationUpdateSchema),
    defaultValues: {
      status: "pending",
      feedback: '',
    },
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      setLoading(true);
      try {
        const { data: applicationsData, error: applicationsError } = await supabase
          .from('applications')
          .select(`
            *,
            profiles:user_id (full_name, email)
          `)
          .order('created_at', { ascending: false });
          
        if (applicationsError) throw applicationsError;
        setApplications(applicationsData || []);
        
        const { data: usersData, error: usersError } = await supabase
          .from('profiles')
          .select('*');
          
        if (usersError) throw usersError;
        setUsers(usersData || []);
        
        const { data: submissionsData, error: submissionsError } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (submissionsError) throw submissionsError;
        setContactSubmissions(submissionsData || []);
        
      } catch (error) {
        console.error('Error fetching admin data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (user) {
      fetchAdminData();
    }
  }, [user]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleSendMessage = async (data: z.infer<typeof messageSchema>) => {
    try {
      if (!messageRecipient || !user) return;
      
      const { error } = await supabase
        .from('messages')
        .insert({
          sender_id: user.id,
          recipient_id: messageRecipient.id,
          subject: data.subject,
          content: data.content,
        });
        
      if (error) throw error;
      
      toast({
        title: "Message sent",
        description: `Message sent to ${messageRecipient.full_name}`,
      });
      
      messageForm.reset();
      setIsMessageDialogOpen(false);
      
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: error.message || "An error occurred",
      });
    }
  };

  const handleUpdateApplication = async (data: z.infer<typeof applicationUpdateSchema>) => {
    try {
      if (!selectedApplication) return;
      
      const { error } = await supabase
        .from('applications')
        .update({
          status: data.status,
          feedback: data.feedback,
        })
        .eq('id', selectedApplication.id);
        
      if (error) throw error;
      
      setApplications(prevApplications => 
        prevApplications.map(app => 
          app.id === selectedApplication.id 
            ? { ...app, status: data.status, feedback: data.feedback } 
            : app
        )
      );
      
      toast({
        title: "Application updated",
        description: `Application status changed to ${data.status}`,
      });
      
      setSelectedApplication(null);
      applicationForm.reset();
      
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to update application",
        description: error.message || "An error occurred",
      });
    }
  };

  const markSubmissionAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;

      setContactSubmissions(prev =>
        prev.map(sub =>
          sub.id === id ? { ...sub, read: true } : sub
        )
      );

      toast({
        title: "Updated",
        description: "Marked submission as read",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavigationHeader />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-harmony-medium" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationHeader />
      
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage applications, users, and communications
          </p>
        </div>
        
        <Tabs defaultValue="applications" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="applications">
              <FileText className="mr-2 h-4 w-4" />
              Applications
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="mr-2 h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="contact">Contact Submissions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="applications">
            <div className="grid gap-6">
              {applications.length > 0 ? (
                applications.map((application) => (
                  <Card key={application.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">
                            Application from {application.profiles?.full_name || 'Unknown User'}
                          </CardTitle>
                          <CardDescription>
                            Submitted on {formatDate(application.created_at)}
                          </CardDescription>
                        </div>
                        <Badge 
                          className={
                            application.status === 'approved' 
                              ? 'bg-green-500' 
                              : application.status === 'rejected' 
                                ? 'bg-red-500' 
                                : 'bg-yellow-500'
                          }
                        >
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h3 className="font-medium mb-2">Application Details:</h3>
                        <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
                          {JSON.stringify(application.submission_data, null, 2)}
                        </pre>
                      </div>
                      
                      {application.feedback && (
                        <div className="p-4 bg-muted rounded-lg mb-4">
                          <h4 className="font-medium mb-1">Feedback:</h4>
                          <p>{application.feedback}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-4">
                        <Button 
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            setSelectedApplication(application);
                            applicationForm.reset({
                              status: application.status,
                              feedback: application.feedback || '',
                            });
                          }}
                        >
                          Update Status
                        </Button>
                        <Button 
                          className="flex-1 bg-harmony-medium hover:bg-harmony-light"
                          onClick={() => {
                            setMessageRecipient({
                              id: application.user_id,
                              full_name: application.profiles?.full_name || 'User',
                            });
                            setIsMessageDialogOpen(true);
                          }}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Message Applicant
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>No Applications</CardTitle>
                    <CardDescription>
                      There are no applications to review
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-6">
                      <FileText className="h-16 w-16 text-muted-foreground opacity-50" />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="users">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {users.length > 0 ? (
                users.map((user) => (
                  <Card key={user.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{user.full_name || 'Unnamed User'}</CardTitle>
                          <CardDescription>
                            Joined {formatDate(user.created_at)}
                          </CardDescription>
                        </div>
                        {user.is_admin && (
                          <Badge className="bg-harmony-deep">Admin</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {user.company && (
                          <div>
                            <span className="font-medium">Company:</span> {user.company}
                          </div>
                        )}
                        {user.position && (
                          <div>
                            <span className="font-medium">Position:</span> {user.position}
                          </div>
                        )}
                      </div>
                      <Button 
                        className="w-full bg-harmony-medium hover:bg-harmony-light"
                        onClick={() => {
                          setMessageRecipient(user);
                          setIsMessageDialogOpen(true);
                        }}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="col-span-full bg-muted/40">
                  <CardHeader>
                    <CardTitle>No Users</CardTitle>
                    <CardDescription>
                      There are no users registered yet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-6">
                      <Users className="h-16 w-16 text-muted-foreground opacity-50" />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="grid gap-6">
              {contactSubmissions.length > 0 ? (
                contactSubmissions.map((submission) => (
                  <Card key={submission.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">
                            {submission.name} - {submission.company}
                          </CardTitle>
                          <CardDescription>
                            Submitted on {formatDate(submission.created_at)}
                          </CardDescription>
                        </div>
                        {!submission.read && (
                          <Badge className="bg-blue-500">New</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium mb-1">Email:</p>
                          <p className="text-muted-foreground">{submission.email}</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Interest:</p>
                          <p className="text-muted-foreground">{submission.interest}</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Message:</p>
                          <p className="text-muted-foreground whitespace-pre-wrap">
                            {submission.message}
                          </p>
                        </div>
                      </div>
                      
                      {!submission.read && (
                        <Button 
                          onClick={() => markSubmissionAsRead(submission.id)}
                          className="mt-4"
                        >
                          Mark as Read
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No Contact Submissions</CardTitle>
                    <CardDescription>
                      There are no contact form submissions to review
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Send Message</DialogTitle>
            <DialogDescription>
              Send a message to {messageRecipient?.full_name || 'user'}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...messageForm}>
            <form onSubmit={messageForm.handleSubmit(handleSendMessage)} className="space-y-4">
              <FormField
                control={messageForm.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Message subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={messageForm.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        rows={6}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsMessageDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-harmony-medium hover:bg-harmony-light">
                  Send Message
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {selectedApplication && (
        <Dialog 
          open={!!selectedApplication} 
          onOpenChange={(open) => !open && setSelectedApplication(null)}
        >
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Update Application Status</DialogTitle>
              <DialogDescription>
                Change the status and provide feedback for this application
              </DialogDescription>
            </DialogHeader>
            
            <Form {...applicationForm}>
              <form onSubmit={applicationForm.handleSubmit(handleUpdateApplication)} className="space-y-4">
                <FormField
                  control={applicationForm.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={applicationForm.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide feedback to the applicant..." 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setSelectedApplication(null)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className={
                      applicationForm.watch('status') === 'approved' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : applicationForm.watch('status') === 'rejected'
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-harmony-medium hover:bg-harmony-light'
                    }
                  >
                    {applicationForm.watch('status') === 'approved' ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve
                      </>
                    ) : applicationForm.watch('status') === 'rejected' ? (
                      <>
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject
                      </>
                    ) : (
                      'Update'
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      )}
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
