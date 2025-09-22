import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-soft"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            सफर
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-foreground">
            Rural Transport Made Simple
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Track buses, share rides, rent bikes, and buy tickets - all in one lightweight app designed for rural India.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="glass-card p-4 hover:glow-effect transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Real-time Tracking</h3>
            </Card>
            <Card className="glass-card p-4 hover:glow-effect transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-transport-success mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Live Schedules</h3>
            </Card>
            <Card className="glass-card p-4 hover:glow-effect transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Ride Sharing</h3>
            </Card>
            <Card className="glass-card p-4 hover:glow-effect transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 text-transport-warning mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Low Bandwidth</h3>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 py-4 text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Plan Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-accent px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
              Share a Ride
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float hidden md:block"></div>
      <div className="absolute top-20 right-20 w-16 h-16 border border-secondary/20 rounded-lg rotate-45 animate-float hidden md:block" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;