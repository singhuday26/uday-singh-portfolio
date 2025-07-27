import React from "react";
import { OptimizedCard } from "@/components/ui/optimized-card";
import { Code, Database, BarChart3, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const SkillsSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "Java", "C/C++", "JavaScript"],
      featured: ["Python", "SQL"]
    },
    {
      icon: BarChart3,
      title: "Data Science & ML",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      featured: ["TensorFlow", "Keras", "Scikit-learn"]
    },
    {
      icon: Database,
      title: "Web & Databases",
      skills: ["HTML/CSS", "MySQL", "PostgreSQL", "MongoDB", "REST APIs"],
      featured: ["MySQL", "PostgreSQL"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Firebase", "Tableau", "Power BI", "Google Colab", "Spark (Learning)"],
      featured: ["Tableau", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            My Technical Toolkit
          </h2>
          
          <div className={`grid md:grid-cols-2 gap-8 transform-gpu transition-all duration-700 ${
            hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {skillCategories.map((category, index) => (
              <OptimizedCard key={index} className="card-professional hover-glow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`skill-tag ${
                        category.featured.includes(skill) 
                          ? 'bg-primary text-primary-foreground ring-2 ring-primary/20' 
                          : ''
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </OptimizedCard>
            ))}
          </div>
          
          {/* Special Emphasis Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Core Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Python", "SQL", "Tableau", "TensorFlow", "Keras", "Scikit-learn"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 will-change-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;