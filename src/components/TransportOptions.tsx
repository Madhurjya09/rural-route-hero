import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bus, Car, Bike, Train, Users, MapPin, Clock, IndianRupee } from "lucide-react";

const TransportOptions = () => {
  const transportTypes = [
    {
      icon: Bus,
      title: "Public Buses",
      description: "Real-time tracking of local and intercity buses",
      features: ["Live GPS tracking", "Schedule updates", "Seat availability"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Car,
      title: "Shared Rides",
      description: "Connect with travelers going your way",
      features: ["Split costs", "Verified drivers", "Flexible timing"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Bike,
      title: "Bike Rentals",
      description: "Rent bicycles for short distance travel",
      features: ["Hourly rentals", "Multiple locations", "Eco-friendly"],
      color: "text-transport-success",
      bgColor: "bg-transport-success/10"
    },
    {
      icon: Train,
      title: "Train Services",
      description: "Local and express train schedules",
      features: ["Real-time delays", "Platform info", "Ticket booking"],
      color: "text-transport-info",
      bgColor: "bg-transport-info/10"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4A2728' }}>
            All Transport Options
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From buses to bikes, find every way to get around in one app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transportTypes.map((transport, index) => {
            const IconComponent = transport.icon;
            return (
              <Card key={index} className="glass-card p-8 hover:glow-effect transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${transport.bgColor}`}>
                    <IconComponent className={`w-8 h-8 ${transport.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{transport.title}</h3>
                    <p className="text-muted-foreground mb-4">{transport.description}</p>
                    <ul className="space-y-2 mb-6">
                      {transport.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full hover:bg-accent transition-colors">
                      Explore {transport.title}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Live Status Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Live Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Status Cards */}
            {/* Bus Status */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Bus className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Bus #234</h4>
                    <p className="text-sm text-muted-foreground">Delhi → Gurugram</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-transport-success rounded-full animate-pulse-soft"></div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>Arriving in 8 mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>CP Metro Station</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>12 seats available</span>
                </div>
              </div>
            </Card>

            {/* Shared Ride Status */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Car className="w-6 h-6 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Shared Ride</h4>
                    <p className="text-sm text-muted-foreground">Mumbai → Pune</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-transport-warning rounded-full animate-pulse-soft"></div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>Departing at 2:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>2/4 seats filled</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-muted-foreground" />
                  <span>₹300 per person</span>
                </div>
              </div>
            </Card>

            {/* Bike Status */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Bike className="w-6 h-6 text-transport-success" />
                  <div>
                    <h4 className="font-semibold">Bike Station</h4>
                    <p className="text-sm text-muted-foreground">Sector 18, Noida</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-transport-success rounded-full animate-pulse-soft"></div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Bike className="w-4 h-4 text-muted-foreground" />
                  <span>8 bikes available</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-muted-foreground" />
                  <span>₹20/hour</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>500m from you</span>
                </div>
              </div>
            </Card>

          </div>

        </div>
      </div>
      {/* Train Animation */}
      <div className="absolute bottom-10 w-full flex justify-end z-0">
        <div className="text-4xl animate-train">🚂</div>
      </div>

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

  /* Fixed train animation */
  @keyframes trainMove {
    0% { transform: translateX(120vw); }
    100% { transform: translateX(-120vw); }
  }

  .animate-light1 { animation: lightMove1 25s ease-in-out infinite; }
  .animate-light2 { animation: lightMove2 30s ease-in-out infinite; }
  .animate-light3 { animation: lightMove3 35s ease-in-out infinite; }

  .animate-train {
    position: absolute;
    bottom: 2.5rem;
    font-size: 2.5rem;
    animation: trainMove 20s linear infinite;
    z-index: 0;
  }
`}
      </style>

    </section>
  );
};

export default TransportOptions;
