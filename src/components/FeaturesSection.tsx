import { Brain, Activity, Target } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Personalized AI Workout Plans",
      description: "Experience tailor-made routines that adapt to your fitness level and goals using advanced AI.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Activity,
      title: "Real-Time Performance Tracking",
      description: "Monitor your progress with live feedback and analytics to stay motivated.",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: Target,
      title: "Adaptive Fitness Recommendations",
      description: "Receive smart suggestions to improve every session based on ongoing performance.",
      gradient: "from-accent to-accent-glow"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advanced Technology
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge AI and VR technology work together to deliver an unparalleled fitness experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-surface-elevated rounded-xl p-8 border border-muted/30 hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }} />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:shadow-glow transition-all duration-300`}>
                <feature.icon className="w-full h-full text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-primary text-sm font-semibold">Learn More →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;