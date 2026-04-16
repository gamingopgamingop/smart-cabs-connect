import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Car, Users, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";

const routes = [
  { from: "Pune", to: "Mumbai", distance: "150 km", duration: "2h 30m" },
  { from: "Pune", to: "Nashik", distance: "210 km", duration: "3h 15m" },
  { from: "Mumbai", to: "Pune", distance: "150 km", duration: "2h 30m" },
  { from: "Mumbai", to: "Surat", distance: "280 km", duration: "4h 00m" },
];

const timeSlots = [
  { time: "06:00 AM", price: 850, seats: 3, type: "Sedan" },
  { time: "08:00 AM", price: 900, seats: 1, type: "SUV" },
  { time: "10:00 AM", price: 800, seats: 4, type: "Sedan" },
  { time: "12:00 PM", price: 750, seats: 2, type: "Sedan" },
  { time: "02:00 PM", price: 900, seats: 3, type: "SUV" },
  { time: "04:00 PM", price: 850, seats: 1, type: "Sedan" },
  { time: "06:00 PM", price: 950, seats: 4, type: "SUV" },
  { time: "08:00 PM", price: 1000, seats: 2, type: "Sedan" },
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filteredRoutes = routes.filter(
    (r) =>
      (!from || r.from.toLowerCase().includes(from.toLowerCase())) &&
      (!to || r.to.toLowerCase().includes(to.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-20">
      <section className="gradient-hero-bg py-14">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-3">
              Book Your <span className="gradient-text">Smart Slot</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Choose your route, pick a time slot, and confirm — just like booking a train ticket.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Progress */}
      <div className="container mx-auto px-4 -mt-6 relative z-10 max-w-3xl">
        <div className="glass-card p-4">
          <div className="flex items-center justify-between">
            {["Select Route", "Choose Slot", "Confirm"].map((label, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                    step > i + 1 ? "gradient-bg text-primary-foreground" : step === i + 1 ? "gradient-bg text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm hidden sm:block ${step >= i + 1 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                  {label}
                </span>
                {i < 2 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-1 sm:mx-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="glass-card p-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">From</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                      <Input placeholder="Enter city" value={from} onChange={(e) => setFrom(e.target.value)} className="pl-9" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">To</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                      <Input placeholder="Enter city" value={to} onChange={(e) => setTo(e.target.value)} className="pl-9" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {filteredRoutes.map((route, i) => (
                  <button
                    key={i}
                    onClick={() => { setSelectedRoute(i); setStep(2); }}
                    className={`w-full glass-card p-5 text-left hover:shadow-elevated transition-all duration-200 ${selectedRoute === i ? "ring-2 ring-primary" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                          <Car className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-display font-semibold">{route.from} → {route.to}</p>
                          <p className="text-sm text-muted-foreground">{route.distance} • {route.duration}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </button>
                ))}
                {filteredRoutes.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">No routes found. Try a different city.</p>
                )}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold">Available Slots</h2>
                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>← Back</Button>
              </div>

              <div className="grid gap-3">
                {timeSlots.map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => { setSelectedSlot(i); setStep(3); }}
                    className={`glass-card p-5 text-left hover:shadow-elevated transition-all duration-200 ${selectedSlot === i ? "ring-2 ring-primary" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <Clock className="w-5 h-5 text-primary mb-1" />
                          <span className="text-xs text-muted-foreground">{slot.type}</span>
                        </div>
                        <div>
                          <p className="font-display font-semibold">{slot.time}</p>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {slot.seats} seats left</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-display font-bold text-lg gradient-text">₹{slot.price}</p>
                        <p className="text-xs text-muted-foreground">per seat</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && selectedRoute !== null && selectedSlot !== null && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold">Confirm Booking</h2>
                <Button variant="ghost" size="sm" onClick={() => setStep(2)}>← Back</Button>
              </div>

              <div className="glass-card p-8">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Route</p>
                      <p className="font-semibold">{filteredRoutes[selectedRoute]?.from} → {filteredRoutes[selectedRoute]?.to}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Departure</p>
                      <p className="font-semibold">{timeSlots[selectedSlot].time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Vehicle</p>
                      <p className="font-semibold">{timeSlots[selectedSlot].type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold">{new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-5 flex items-center justify-between">
                    <p className="text-muted-foreground">Total Fare</p>
                    <p className="font-display text-2xl font-extrabold gradient-text">₹{timeSlots[selectedSlot].price}</p>
                  </div>
                </div>
                <Button className="w-full mt-6 gradient-bg text-primary-foreground hover:opacity-90 h-12 text-base" onClick={() => alert("Booking confirmed! 🎉")}>
                  Confirm & Pay
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
