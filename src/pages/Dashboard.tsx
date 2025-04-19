import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Loader2, ArrowRight, FileText, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import ApplicationView from '@/components/ApplicationView';

const Dashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState<any[]>([]);
  const [memberships, setMemberships] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // Fetch applications
        const { data: applicationsData, error: applicationsError } = await supabase
          .from('applications')
          .select('*')
          .eq('user_id', user?.id);
          
        if (applicationsError) throw applicationsError;
        setApplications(applicationsData || []);
        
        // Fetch memberships with tier info
        const { data: membershipsData, error: membershipsError } = await supabase
          .from('user_memberships')
          .select(`
            *,
            membership_tiers (*)
          `)
          .eq('user_id', user?.id)
          .eq('active', true);
          
        if (membershipsError) throw membershipsError;
        setMemberships(membershipsData || []);
        
        // Fetch messages
        const { data: messagesData, error: messagesError } = await supabase
          .from('messages')
          .select('*')
          .eq('recipient_id', user?.id)
          .order('created_at', { ascending: false });
          
        if (messagesError) throw messagesError;
        setMessages(messagesData || []);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      case 'pending':
      default:
        return 'bg-yellow-500';
    }
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const markMessageAsRead = async (messageId: string) => {
    try {
      await supabase
        .from('messages')
        .update({ read: true })
        .eq('id', messageId);
        
      // Update local state
      setMessages(prevMessages => 
        prevMessages.map(message => 
          message.id === messageId 
            ? { ...message, read: true } 
            : message
        )
      );
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleApplyClick = () => {
    navigate('/services');  // Redirect to services page to select a tier
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Welcome, {user?.user_metadata.full_name || 'Harmonizer'}
            </h1>
            <p className="text-muted-foreground">
              Your personal dashboard for harmonic growth
            </p>
          </div>
          
          <Tabs defaultValue="memberships" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="memberships">Memberships</TabsTrigger>
              <TabsTrigger value="applications">
                <FileText className="mr-2 h-4 w-4" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="messages">
                Messages
                {messages.filter(m => !m.read).length > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {messages.filter(m => !m.read).length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="memberships">
              {memberships.length > 0 ? (
                <div className="grid gap-6">
                  {memberships.map((membership) => (
                    <Card key={membership.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">
                              {membership.membership_tiers?.name}
                            </CardTitle>
                            <CardDescription>
                              Active since {formatDate(membership.start_date)}
                            </CardDescription>
                          </div>
                          <Badge className="bg-harmony-medium hover:bg-harmony-light">
                            Active
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {membership.membership_tiers?.description}
                        </p>
                        <div className="space-y-2">
                          {membership.membership_tiers?.features?.features?.map((feature: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-harmony-light mr-2"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>No Active Memberships</CardTitle>
                    <CardDescription>
                      You don't have any active membership plans yet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Join our Harmonic Growth program to unlock the full potential of your business journey.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleApplyClick}
                      className="bg-harmony-medium hover:bg-harmony-light text-white"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="applications">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">Your Applications</h2>
                {applications.length > 0 ? (
                  applications.map((application) => (
                    <ApplicationView 
                      key={application.id} 
                      application={application} 
                      onUpdate={fetchUserData}
                      editable={application.status === 'pending'}
                    />
                  ))
                ) : (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-muted-foreground mb-4">You haven't submitted any applications yet.</p>
                      <Button 
                        onClick={() => navigate('/apply')}
                        className="bg-harmony-medium hover:bg-harmony-light"
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="messages">
              {messages.length > 0 ? (
                <div className="grid gap-6">
                  {messages.map((message) => (
                    <Card 
                      key={message.id}
                      className={cn(
                        "transition-all",
                        !message.read && "border-harmony-light/50 shadow-md"
                      )}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">
                              {message.subject}
                            </CardTitle>
                            <CardDescription>
                              Received on {formatDate(message.created_at)}
                            </CardDescription>
                          </div>
                          {!message.read && (
                            <Badge className="bg-harmony-light">New</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="whitespace-pre-line">
                          {message.content}
                        </p>
                      </CardContent>
                      {!message.read && (
                        <CardFooter>
                          <Button 
                            variant="outline"
                            onClick={() => markMessageAsRead(message.id)}
                          >
                            Mark as Read
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>No Messages</CardTitle>
                    <CardDescription>
                      You don't have any messages in your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-6">
                      <MessageSquare className="h-16 w-16 text-muted-foreground opacity-50" />
                    </div>
                    <p className="text-center text-muted-foreground">
                      Messages from our team will appear here
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
