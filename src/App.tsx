import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Philosophy from "./pages/Philosophy";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Application from "./pages/Application";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import ResonanceAnalysis from "./pages/services/ResonanceAnalysis";
import GrowthAmplification from "./pages/services/GrowthAmplification";
import MomentumOrchestration from "./pages/services/MomentumOrchestration";
import HarmonyIntegration from "./pages/services/HarmonyIntegration";
import FlowAutomation from "./pages/services/FlowAutomation";
import ResonantLeadership from "./pages/services/ResonantLeadership";
import HarmonicGrowthSystem from "./pages/services/HarmonicGrowthSystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/resonance-analysis" element={<ResonanceAnalysis />} />
            <Route path="/services/growth-amplification" element={<GrowthAmplification />} />
            <Route path="/services/momentum-orchestration" element={<MomentumOrchestration />} />
            <Route path="/services/harmony-integration" element={<HarmonyIntegration />} />
            <Route path="/services/flow-automation" element={<FlowAutomation />} />
            <Route path="/services/resonant-leadership" element={<ResonantLeadership />} />
            <Route path="/services/harmonic-growth-system" element={<HarmonicGrowthSystem />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<AuthPage />} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/apply" element={
              <ProtectedRoute>
                <Application />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
