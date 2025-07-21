import { Heart, Zap, TrendingUp, Clock } from "lucide-react";

const HealthDashboard = () => {
  const metrics = [
    { label: "HRV", value: "112 bpm", icon: Heart, color: "text-primary" },
    { label: "VO₂ Max", value: "20%", icon: Zap, color: "text-secondary" },
    { label: "Performance", value: "+15%", icon: TrendingUp, color: "text-success" },
    { label: "Session Time", value: "42 min", icon: Clock, color: "text-accent" }
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real-Time{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Health Analytics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your vital statistics and performance metrics in real-time with our advanced AI-powered dashboard.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Dashboard */}
          <div className="bg-surface-elevated rounded-2xl p-8 border border-primary/20 shadow-card backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-surface/50 border border-muted/20 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary/10 mb-3`}>
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Progress Visualization */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Workout Intensity</span>
                <span className="text-sm text-primary">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-primary h-3 rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Goal Progress</span>
                <span className="text-sm text-secondary">72%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-secondary to-secondary-glow h-3 rounded-full transition-all duration-500" style={{ width: '72%' }}></div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="mt-6 flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-success font-medium">AI Analysis Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthDashboard;