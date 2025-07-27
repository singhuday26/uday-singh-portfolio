import { Card } from "@/components/ui/card";
import { Trophy, Users, Code } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "Top 4% in Amazon HackOn (2025)",
      description: "Advanced to Round 3 among top 2,000 teams"
    },
    {
      icon: Code,
      title: "SIH 2024 Full-Stack Prototype",
      description: "Built complete web app in 36 hours"
    },
    {
      icon: Users,
      title: "Microsoft Learn Student Ambassador",
      description: "Conducted workshops for 100+ students"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            About Me: Passionate About Data & Impact
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I am a results-driven Computer Science student specializing in Data Analytics at 
                VIT-AP University, passionate about competitive problem-solving and building scalable, 
                data-driven software solutions. My academic excellence (9.02/10.0 CGPA) is complemented 
                by a proven ability to excel in high-pressure environments, as demonstrated in national-level hackathons.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                With a strong foundation in machine learning and data analytics, I am eager to tackle 
                complex challenges and innovate. I thrive in collaborative, fast-paced settings and am 
                committed to leveraging data to generate impactful insights and contribute meaningfully 
                to the tech community. My goal is to grow as a data-driven software engineer, making 
                significant contributions to projects like those at MotorQ. I am also actively exploring 
                concepts in Generative AI and Distributed Computing (Spark).
              </p>
            </div>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-professional hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;