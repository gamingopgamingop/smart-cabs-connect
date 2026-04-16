import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => (
  <div className="min-h-screen pt-20">
    <section className="gradient-hero-bg py-16">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <AnimatedSection>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-3">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </AnimatedSection>
      </div>
    </section>

    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: "hello@smartlinkcabs.com" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            { icon: MapPin, label: "Address", value: "Pune, Maharashtra, India" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-sm">{item.value}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="md:col-span-2">
          <div className="glass-card p-8">
            <h2 className="font-display text-xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent! 📩"); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Name</label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Subject</label>
                <Input placeholder="How can we help?" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <Textarea placeholder="Tell us more..." rows={5} required />
              </div>
              <Button type="submit" className="gradient-bg text-primary-foreground hover:opacity-90 gap-2">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default Contact;
