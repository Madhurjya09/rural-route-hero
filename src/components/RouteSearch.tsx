import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight, Search, Calendar } from "lucide-react";

const RouteSearch = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Journey</h2>
          <p className="text-muted-foreground text-lg">
            Find the best transport options between any two locations
          </p>
        </div>

        <Card className="glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* From Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                From
              </label>
              <Input
                placeholder="Enter starting location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>

            {/* To Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                To
              </label>
              <Input
                placeholder="Enter destination"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </label>
              <Input
                type="date"
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            {/* Search Button */}
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </Card>

        {/* Quick Routes */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Routes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { from: "Delhi", to: "Gurugram", time: "45 min", price: "₹50" },
              { from: "Mumbai", to: "Pune", time: "3.5 hrs", price: "₹300" },
              { from: "Chennai", to: "Bangalore", time: "5 hrs", price: "₹450" }
            ].map((route, index) => (
              <Card key={index} className="glass-card p-4 hover:glow-effect transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{route.to}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{route.time}</span>
                  <span className="text-transport-success font-semibold">{route.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSearch;