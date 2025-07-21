import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HealthDashboard from "@/components/HealthDashboard";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HealthDashboard />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
