import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={elementRef} className="relative min-h-screen flex items-center justify-center overflow-hidden transform-gpu">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transform-gpu">
        <LazyImage 
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center transform-gpu transition-all duration-1000 ${
        hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto">
          {/* Professional Headshot */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105 transform-gpu">
              <LazyImage
                src="/lovable-uploads/fad2ceb6-ecf8-49a9-8205-afa3d6191650.png"
                alt="Uday Singh - Professional Headshot"
                className="w-full h-full object-cover"
              />
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce will-change-transform">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center transform-gpu">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;