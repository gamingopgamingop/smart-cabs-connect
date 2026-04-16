import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">Smart-Link Cabs</span>
          </div>
          <p className="text-sm opacity-70">
            Reducing dead mileage through intelligent slot-based inter-city cab scheduling.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
            <Link to="/booking" className="hover:opacity-100 transition-opacity">Book a Ride</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">For Drivers</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/dashboard" className="hover:opacity-100 transition-opacity">Dashboard</Link>
            <Link to="/signup" className="hover:opacity-100 transition-opacity">Join as Driver</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@smartlinkcabs.com</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Pune, Maharashtra</div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Smart-Link Cabs. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
