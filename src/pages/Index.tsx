import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Route, Clock, TrendingUp, Shield, Zap, Users, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  { icon: Route, title: "Smart Route Matching", desc: "AI matches return rides to reduce empty trips by up to 40%" },
  { icon: Clock, title: "Slot-Based Booking", desc: "Railway-style time slots for predictable scheduling" },
  { icon: TrendingUp, title: "Higher Earnings", desc: "Drivers earn more with optimized round-trip utilization" },
  { icon: Shield, title: "Verified Drivers", desc: "All drivers are background-checked and verified" },
  { icon: Zap, title: "Instant Confirmation", desc: "Book and get confirmed in under 30 seconds" },
  { icon: Users, title: "Ride Sharing", desc: "Share inter-city rides to split costs affordably" },
];

const stats = [
  { value: "40%", label: "Dead Mileage Reduced" },
  { value: "15K+", label: "Rides Completed" },
  { value: "500+", label: "Active Drivers" },
  { value: "50+", label: "Cities Connected" },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative gradient-hero-bg pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> Smarter Inter-City Travel
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            No More Empty Returns.{" "}
            <span className="gradient-text">Ride Smarter.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Smart-Link Cabs uses predictive scheduling & slot-based booking to match passengers with return rides — saving money for riders and maximizing earnings for drivers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/booking">
              <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 gap-2 px-8">
                Book a Ride <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Quick Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mt-14"
        >
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">From</p>
                  <p className="font-medium text-sm">Pune</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">To</p>
                  <p className="font-medium text-sm">Mumbai</p>
                </div>
              </div>
              <Link to="/booking">
                <Button className="w-full h-full gradient-bg text-primary-foreground hover:opacity-90 gap-2">
                  <Car className="w-4 h-4" /> Search Slots
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <p className="font-display text-3xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Problem vs Solution */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl font-bold mb-3">The Problem We Solve</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Traditional cab services lose up to 40% revenue on empty return trips. We fix that.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
              <h3 className="font-display font-bold text-lg mb-4 text-destructive">❌ Without Smart-Link</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Cabs return empty after drop-off</li>
                <li>• 40% dead mileage = wasted fuel & time</li>
                <li>• Higher fares for passengers</li>
                <li>• Lower earnings for drivers</li>
                <li>• No predictable scheduling</li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="font-display font-bold text-lg mb-4 text-primary">✅ With Smart-Link Cabs</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• AI matches return passengers automatically</li>
                <li>• Slot-based booking like railways</li>
                <li>• Up to 30% lower fares</li>
                <li>• Higher driver utilization & earnings</li>
                <li>• Predictable, reliable schedules</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl font-bold mb-3">Why Choose Smart-Link?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Built for efficiency, designed for convenience.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover:shadow-elevated transition-shadow duration-300">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto gradient-bg rounded-3xl p-10 text-center text-primary-foreground">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Ride Smarter?</h2>
            <p className="opacity-90 mb-8 max-w-md mx-auto">
              Join thousands of riders and drivers who are saving money and time with Smart-Link Cabs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/booking">
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 gap-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Join as Driver
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Index;
