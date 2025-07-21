const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What We Do at{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Virtualbridge
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Based in the vibrant city of{" "}
            <span className="text-primary font-semibold">Hyderabad</span>, we specialize in creating 
            personalized workout routines powered by advanced AI algorithms. Our mission is to help 
            individuals achieve their fitness goals with precision and performance tracking.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Goal Achievement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;