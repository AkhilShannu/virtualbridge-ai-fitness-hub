import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vr-fitness.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="VR Fitness Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionizing Workouts with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Driven Precision
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience a new era of fitness where data-driven insights ensure every workout is optimized for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Health Metrics */}
        <div className="absolute top-10 right-10 hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
            <div className="text-sm text-muted-foreground mb-1">Heart Rate</div>
            <div className="text-2xl font-bold text-primary">128 BPM</div>
          </div>
        </div>

        <div className="absolute bottom-20 left-10 hidden lg:block animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-4 border border-secondary/20">
            <div className="text-sm text-muted-foreground mb-1">Calories</div>
            <div className="text-2xl font-bold text-secondary">245 kcal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;