
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, recipient, subject, content, applicationId } = await req.json();
    
    // This is where you would integrate with an email service like SendGrid, Mailgun, etc.
    // For now, we'll just log the email that would be sent
    
    console.log(`Email type: ${type}`);
    console.log(`To: ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Content: ${content}`);
    
    if (applicationId) {
      console.log(`Related to application: ${applicationId}`);
    }
    
    // In a real implementation, you would call your email service here
    // Example with SendGrid (pseudocode):
    // 
    // const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY');
    // await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: recipient }] }],
    //     from: { email: 'harmonicgrowth@rocketnow.com' },
    //     subject: subject,
    //     content: [{ type: 'text/html', value: content }],
    //   }),
    // });

    return new Response(
      JSON.stringify({ success: true, message: "Email would be sent in production" }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in send-email function:", error);
    
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
