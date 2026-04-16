import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, Route, Clock, Calendar, Star, Car, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const statsData = [
  { icon: IndianRupee, label: "Today's Earnings", value: "₹3,450", change: "+12%" },
  { icon: Route, label: "Trips Completed", value: "8", change: "+2" },
  { icon: Clock, label: "Hours Active", value: "6.5h", change: "" },
  { icon: Star, label: "Rating", value: "4.8", change: "★" },
];

const upcomingSlots = [
  { time: "02:00 PM", from: "Mumbai", to: "Pune", passengers: 2, type: "Return", fare: "₹1,700" },
  { time: "06:00 PM", from: "Pune", to: "Nashik", passengers: 3, type: "Outbound", fare: "₹2,100" },
  { time: "09:00 PM", from: "Nashik", to: "Pune", passengers: 1, type: "Return", fare: "₹1,800" },
];

const recentTrips = [
  { from: "Pune", to: "Mumbai", date: "Today, 10:00 AM", fare: "₹1,600", status: "Completed" },
  { from: "Mumbai", to: "Pune", date: "Today, 06:00 AM", fare: "₹1,500", status: "Completed" },
  { from: "Pune", to: "Nashik", date: "Yesterday", fare: "₹2,200", status: "Completed" },
];

const Dashboard = () => (
  <div className="min-h-screen pt-20 pb-10">
    <section className="gradient-hero-bg py-10">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-lg">
              R
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">Welcome back, Rajesh</h1>
              <p className="text-muted-foreground text-sm">Here's your driving overview for today</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="container mx-auto px-4 -mt-4 relative z-10">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statsData.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                {s.change && (
                  <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">{s.change}</span>
                )}
              </div>
              <p className="font-display text-xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upcoming Slots */}
        <AnimatedSection>
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" /> Upcoming Slots
            </h2>
            <div className="space-y-3">
              {upcomingSlots.map((slot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs font-semibold">{slot.time}</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{slot.from} → {slot.to}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{slot.passengers} passengers</span>
                        <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${slot.type === "Return" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                          {slot.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="font-display font-bold text-sm gradient-text">{slot.fare}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Recent Trips */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" /> Recent Trips
            </h2>
            <div className="space-y-3">
              {recentTrips.map((trip, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">{trip.from} → {trip.to}</p>
                      <p className="text-xs text-muted-foreground">{trip.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{trip.fare}</p>
                    <span className="text-xs text-primary font-medium">{trip.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Earnings Chart Placeholder */}
      <AnimatedSection className="mt-8">
        <div className="glass-card p-6">
          <h2 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" /> Weekly Earnings
          </h2>
          <div className="flex items-end gap-3 h-40">
            {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex-1 gradient-bg rounded-t-lg relative group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  ₹{Math.round(h * 50)}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <span key={d} className="flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default Dashboard;
