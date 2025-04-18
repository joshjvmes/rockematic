
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface PaymentButtonProps {
  priceId: string;
  mode: "payment" | "subscription";
  className?: string;
  children: React.ReactNode;
  tier?: string;
}

export const PaymentButton = ({ priceId, mode, className, children, tier }: PaymentButtonProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to continue with the application process.",
        variant: "destructive",
      });
      // Redirect to auth page with a return destination
      navigate("/auth", { state: { returnTo: "/apply", mode: "signup" } });
      return;
    }

    setLoading(true);

    try {
      // Check if user already has an application
      const { data: existingApplications, error: fetchError } = await supabase
        .from('applications')
        .select('id, status')
        .eq('user_id', user.id)
        .single();

      if (fetchError && fetchError.code !== 'PGSQL_NO_ROWS_RETURNED') {
        throw fetchError;
      }

      if (existingApplications) {
        // User has an existing application
        if (existingApplications.status === 'approved') {
          // If approved, proceed to payment
          redirectToPayment();
        } else {
          // If pending or rejected, redirect to the dashboard to see status
          toast({
            title: "Application Already Submitted",
            description: "You already have an application in our system. Check its status on your dashboard.",
          });
          navigate('/dashboard');
        }
      } else {
        // No existing application, redirect to application form with selected tier
        navigate('/apply', { state: { selectedTier: tier, priceId } });
      }
    } catch (error) {
      console.error('Error checking application status:', error);
      toast({
        title: "Error",
        description: "There was a problem checking your application status. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const redirectToPayment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId, mode },
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Error",
        description: "There was a problem initiating the payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      className={className}
    >
      {loading ? "Processing..." : children}
    </Button>
  );
};

export default PaymentButton;
