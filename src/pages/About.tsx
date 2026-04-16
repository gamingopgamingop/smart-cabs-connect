import { Target, Eye, TrendingDown, Lightbulb, Users, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const objectives = [
  { icon: TrendingDown, title: "Reduce Dead Mileage", desc: "Cut empty return trips by up to 40% through smart matching algorithms" },
  { icon: Lightbulb, title: "Predictive Scheduling", desc: "Use data-driven insights to forecast demand and pre-schedule return rides" },
  { icon: Users, title: "Driver Empowerment", desc: "Give drivers control over their slots, routes, and earnings" },
  { icon: BarChart3, title: "Affordable Travel", desc: "Pass savings to passengers through lower inter-city fares" },
];

const About = () => (
  <div className="min-h-screen pt-20">
    {/* Hero */}
    <section className="gradient-hero-bg py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <AnimatedSection>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-6">
            Making Inter-City Travel <span className="gradient-text">Efficient</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            40% of inter-city cab trips return empty. That's wasted fuel, time, and money. Smart-Link Cabs was built to solve this industry-wide inefficiency.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Problem */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">The Problem</span>
            <h2 className="font-display text-3xl font-bold mt-2 mb-4">40% Empty Returns</h2>
            <p className="text-muted-foreground mb-4">
              In India's inter-city cab market, drivers often complete a trip and return empty-handed. This "dead mileage" leads to:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Higher operational costs passed to passengers</li>
              <li>• Environmental waste from unnecessary trips</li>
              <li>• Lower income for drivers despite long hours</li>
              <li>• Unpredictable supply for passengers</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card p-8 text-center">
              <p className="font-display text-6xl font-extrabold gradient-text mb-2">40%</p>
              <p className="text-muted-foreground">of inter-city trips have empty return legs</p>
              <div className="mt-6 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full gradient-bg rounded-full" style={{ width: "40%" }} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Objectives */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl font-bold mb-3">Our Objectives</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A data-driven approach to solve the dead mileage problem.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {objectives.map((o, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card p-6 flex gap-4">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <o.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{o.title}</h3>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass-card p-8 h-full">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                To revolutionize inter-city cab travel by eliminating dead mileage through intelligent technology, making travel affordable for passengers and profitable for drivers.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card p-8 h-full">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm">
                A future where every inter-city cab journey is fully utilized — zero empty returns, maximum efficiency, and shared prosperity for riders and drivers alike.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default About;
