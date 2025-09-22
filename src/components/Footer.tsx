import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">सफर</h3>
              <p className="text-muted-foreground">
                Making rural transport accessible, affordable, and efficient for everyone.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Find Routes", "Share Ride", "Rent Bike", "Bus Tracking", "Train Status", "Support"].map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "Safety Guidelines", "Terms of Service", "Privacy Policy", "Accessibility", "Feedback"].map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>help@safar.app</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 9876 543 210</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>New Delhi, India</span>
              </div>
              
              <Card className="glass-card p-4 mt-6">
                <h5 className="font-medium mb-3">Newsletter</h5>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Your email" 
                    className="bg-background/50 border-border/50 focus:border-primary flex-1"
                  />
                  <Button size="sm" className="gradient-primary text-primary-foreground">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Safar. All rights reserved. Made with ❤️ for rural India.
            </p>
            <div className="flex gap-6">
              <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy
              </button>
              <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms
              </button>
              <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;