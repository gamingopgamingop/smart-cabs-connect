import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Car, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const API_BASE_URL = "http://localhost:8000";

const OtpLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/request-otp?phone=${encodeURIComponent(phone)}`, {
        method: "POST",
      });
      
      if (response.ok) {
        toast({ title: "OTP Sent!", description: "Check your phone (mock console in backend)" });
        setStep("otp");
      } else {
        const error = await response.json();
        toast({ title: "Error", description: error.detail || "Failed to send OTP", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Network Error", description: "Backend might not be running", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-otp?phone=${encodeURIComponent(phone)}&code=${otp}`, {
        method: "POST",
      });
      
      if (response.ok) {
        const data = await response.json();
        // Store token in localStorage or context
        localStorage.setItem("token", data.access_token);
        toast({ title: "Login Successful! 🎉" });
        navigate("/dashboard");
      } else {
        const error = await response.json();
        toast({ title: "Verification Failed", description: error.detail || "Invalid OTP", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Network Error", description: "Backend might not be running", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero-bg flex items-center justify-center pt-16 pb-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
            <Car className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold">OTP Authentication</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {step === "phone" ? "Enter your phone number to continue" : "Enter the 6-digit code sent to you"}
          </p>
        </div>

        <div className="glass-card p-8">
          {step === "phone" ? (
            <form onSubmit={handleRequestOtp} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="tel" 
                    placeholder="+91 9876543210" 
                    className="pl-9" 
                    required 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                  />
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full gradient-bg text-primary-foreground hover:opacity-90 h-11">
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Get OTP
              </Button>
            </form>
          ) : (
            <div className="space-y-6 flex flex-col items-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
                className="gap-2"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <Button 
                onClick={handleVerifyOtp} 
                disabled={loading || otp.length !== 6} 
                className="w-full gradient-bg text-primary-foreground hover:opacity-90 h-11"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Verify & Sign In
              </Button>

              <button 
                onClick={() => setStep("phone")} 
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" /> Back to Phone
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default OtpLogin;
