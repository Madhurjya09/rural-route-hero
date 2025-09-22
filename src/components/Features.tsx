import { Card } from "@/components/ui/card";
import { Smartphone, Wifi, Battery, Shield, Zap, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Works on Any Phone",
      description: "Optimized for budget smartphones and older devices",
      detail: "Lightweight app that runs smoothly on phones as old as Android 6"
    },
    {
      icon: Wifi,
      title: "Low Bandwidth Mode",
      description: "Functions perfectly even on 2G networks",
      detail: "Compressed data transfer and offline caching reduce data usage by 80%"
    },
    {
      icon: Battery,
      title: "Battery Efficient",
      description: "Smart location updates save your phone's battery",
      detail: "Uses 60% less battery than typical transport apps"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your location data is encrypted and never sold",
      detail: "End-to-end encryption and local data storage priority"
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Real-time notifications about your transport",
      detail: "Get alerts about delays, arrivals, and changes instantly"
    },
    {
      icon: Globe,
      title: "Offline First",
      description: "Access schedules and routes without internet",
      detail: "Core functionality works offline with smart sync when connected"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#FFF9E6] via-[#FFE1A1] to-[#FFD27F]">
      
      {/* Moving Light Spots */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_0%,transparent_70%)] animate-light1 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,transparent_70%)] animate-light2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_0%,transparent_70%)] animate-light3 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#4A2728' }}
          >
            Built for Rural India
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Every feature is designed to work in challenging conditions - poor network,
            old phones, and limited resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="glass-card p-8 hover:glow-effect transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transport-success mb-2">1M+</div>
              <div className="text-muted-foreground">Rides Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transport-info mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes lightMove1 {
            0% { transform: translate(0,0); }
            50% { transform: translate(80px, 60px); }
            100% { transform: translate(0,0); }
          }
          @keyframes lightMove2 {
            0% { transform: translate(0,0); }
            50% { transform: translate(-60px, 40px); }
            100% { transform: translate(0,0); }
          }
          @keyframes lightMove3 {
            0% { transform: translate(0,0); }
            50% { transform: translate(100px, -50px); }
            100% { transform: translate(0,0); }
          }

          .animate-light1 { animation: lightMove1 25s ease-in-out infinite; }
          .animate-light2 { animation: lightMove2 30s ease-in-out infinite; }
          .animate-light3 { animation: lightMove3 35s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default Features;
