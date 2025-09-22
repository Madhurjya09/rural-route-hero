import Hero from "@/components/Hero";
import RouteSearch from "@/components/RouteSearch";
import TransportOptions from "@/components/TransportOptions";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <RouteSearch />
      <TransportOptions />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
