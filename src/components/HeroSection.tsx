import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Professional Headshot Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="headshot-placeholder group">
              <span className="text-primary-foreground">US</span>
              <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Upload Personal Photo</span>
              </div>
            </div>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
            Uday Singh
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4 animate-fade-in">
            Data-Driven Innovator | Aspiring Associate Data Scientist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in">
            Crafting Scalable Solutions with Machine Learning & Analytics for Real-World Impact
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button 
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              Explore My Data Science Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              asChild
              className="btn-secondary"
            >
              <a 
                href="https://linkedin.com/in/udaysingh2626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;