import React from "react";
import { OptimizedCard } from "@/components/ui/optimized-card";
import { Trophy, Users, Code } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });
  const highlights = [
    {
      icon: Trophy,
      title: "Top 4% in Amazon HackOn (2025)",
      description: "Built scalable web application among top 2,000 teams"
    },
    {
      icon: Code,
      title: "SIH 2024 Full-Stack Web App",
      description: "Developed consumer-facing platform in 36 hours"
    },
    {
      icon: Users,
      title: "Microsoft Learn Student Ambassador",
      description: "Led technical workshops and cross-functional collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            About Me: Product Engineer Driving Measurable Impact
          </h2>

          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transform-gpu transition-all duration-700 ${hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I am a <strong>Product Engineer</strong> specializing in <strong>Data Analytics</strong>, combining full-stack
                engineering with data-driven decision making to build products that deliver measurable business outcomes.
                I take end-to-end ownership of features—from conception through implementation to impact measurement—ensuring
                every line of code drives real results.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                With expertise in React, TypeScript, backend integration, and analytics, I've built consumer-facing applications
                serving thousands of users while achieving <strong>40% improvement in user engagement</strong> and <strong>20%
                  performance gains</strong>. My unique blend of engineering skills and data analytics background enables me to
                make informed product decisions, optimize for business metrics, and deliver features that move the needle.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <OptimizedCard key={index} className="card-professional hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </OptimizedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;