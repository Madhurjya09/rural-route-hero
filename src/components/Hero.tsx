import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF9E6] via-[#FFE1A1] to-[#FFD27F]">
      {/* Moving Light Spots */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_0%,transparent_70%)] animate-light1 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,transparent_70%)] animate-light2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_0%,transparent_70%)] animate-light3 pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#4A2728]">
            सफर
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#7A5C3E]">
            Rural Transport Made Simple
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Track buses, share rides, rent bikes, and buy tickets - all in one lightweight app designed for rural India.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="glass-card p-4 transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Real-time Tracking</h3>
            </Card>
            <Card className="glass-card p-4 transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-transport-success mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Live Schedules</h3>
            </Card>
            <Card className="glass-card p-4 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Ride Sharing</h3>
            </Card>
            <Card className="glass-card p-4 transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 text-transport-warning mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Low Bandwidth</h3>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#C46200] text-white font-semibold px-8 py-4 text-lg hover:bg-[#B45309] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Plan Your Journey
            </Button>

            <Button
              size="lg"
              className="bg-[#C46200] text-white font-semibold px-8 py-4 text-lg hover:bg-[#9A3D00] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Share a Ride
            </Button>
          </div>
        </div>
      </div>

      {/* Tractor Animation */}
      <div className="absolute bottom-10 right-0 w-full flex justify-end animate-tractor">
        <div className="text-6xl">🚜</div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes tractorMove {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-110%); }
          }
          .animate-tractor {
            animation: tractorMove 15s linear infinite;
          }

          /* Moving Light Spots */
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

          .animate-light1 {
            animation: lightMove1 25s ease-in-out infinite;
          }
          .animate-light2 {
            animation: lightMove2 30s ease-in-out infinite;
          }
          .animate-light3 {
            animation: lightMove3 35s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
