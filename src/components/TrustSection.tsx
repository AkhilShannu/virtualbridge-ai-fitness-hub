import { Star, Users, Award, Verified } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Virtualbridge transformed my fitness journey. The AI recommendations are incredibly accurate!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "Finally found a workout solution that fits my busy schedule. The VR experience is amazing.",
      rating: 5
    },
    {
      name: "Anitha Reddy",
      role: "Fitness Enthusiast",
      content: "The real-time analytics help me push my limits while staying safe. Highly recommended!",
      rating: 5
    }
  ];

  const logos = [
    { name: "TechStar", icon: Verified },
    { name: "FitPro", icon: Award },
    { name: "HealthTech", icon: Users },
    { name: "InnovateLab", icon: Star }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hyderabad's Fitness Enthusiasts
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied users who have transformed their fitness journey with our AI-powered VR workouts.
          </p>
        </div>

        {/* Trust Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <logo.icon className="w-6 h-6" />
              <span className="font-medium">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-surface-elevated rounded-xl p-6 border border-muted/30 hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-background font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Workouts Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">User Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">AI Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">500+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;