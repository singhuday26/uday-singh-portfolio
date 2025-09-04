import React from "react";
import { OptimizedCard } from "@/components/ui/optimized-card";
import { OptimizedLazyImage } from "@/components/ui/optimized-lazy-image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import projectChurn from "@/assets/project-churn.jpg";
import projectCnn from "@/assets/project-cnn.jpg";
import projectMedicare from "@/assets/project-medicare.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";

const ProjectsSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const projects = [
    {
      title: "MediSafe – Comprehensive Hospital Management System",
      overview: "Built a full-stack hospital platform using React.js, Node.js, MongoDB, managing patients, doctors, and staff. Designed reusable UI components, responsive layouts, and optimized state management.",
      problem: "Need for efficient hospital operations and streamlined healthcare workflows",
      role: "Full-stack development with focus on scalable application design and user experience",
      methodology: "Implemented secure REST APIs, streamlined scheduling/billing workflows, and deployed with Docker + CI/CD",
      results: "Showcased skills in scalable application design, user experience, and cross-functional collaboration",
      techStack: ["React.js", "Node.js", "MongoDB", "Docker", "REST APIs", "CI/CD"],
      image: projectMedicare,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "EduSphere360 – Customer-Facing EdTech Platform",
      overview: "Developed a scalable MERN platform with secure APIs as Co-Founder, improving backend efficiency by 20%. Applied Agile sprints, CI/CD pipelines, and user-first design principles.",
      problem: "Need for scalable educational technology platform with efficient backend systems",
      role: "Co-Founder and Lead Developer focusing on backend optimization and user experience",
      methodology: "Agile development methodology with CI/CD pipelines and user-first design principles",
      results: "Improved backend efficiency by 20% and delivered scalable educational platform",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "CI/CD", "Agile"],
      image: projectCnn,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Customer Churn Prediction – ML Project",
      overview: "Processed 5k+ records, engineered features, and applied ML models (Logistic Regression, Random Forest) with 85% accuracy, generating actionable insights.",
      problem: "Need to predict customer churn patterns for business decision making",
      role: "Data Scientist and ML Engineer focusing on feature engineering and model optimization",
      methodology: "Data preprocessing, feature engineering, and comparative analysis of ML algorithms",
      results: "Achieved 85% accuracy in churn prediction and generated actionable business insights",
      techStack: ["Python", "Scikit-learn", "Logistic Regression", "Random Forest", "Feature Engineering", "Data Analysis"],
      image: projectChurn,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Automatic Waste Segregation – IoT System",
      overview: "Programmed Arduino + Python sensor modules, achieving 90% classification accuracy. Highlighted problem-solving and teamwork skills in IoT implementation.",
      problem: "Need for automated waste classification and segregation system",
      role: "IoT Developer and Systems Programmer focusing on sensor integration and classification",
      methodology: "Arduino programming with Python integration for real-time waste classification",
      results: "Achieved 90% classification accuracy and demonstrated effective problem-solving and teamwork",
      techStack: ["Arduino", "Python", "IoT Sensors", "Machine Learning", "Embedded Systems"],
      image: projectSentiment,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            Featured Projects
          </h2>
          
          <div className={`grid gap-8 transform-gpu transition-all duration-700 ${
            hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {projects.map((project, index) => (
              <OptimizedCard key={index} className="card-project overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Image */}
                  <div className="lg:col-span-1">
                    <div className="relative h-64 lg:h-full min-h-[200px] rounded-lg overflow-hidden transform-gpu">
                      <OptimizedLazyImage
                        src={project.image}
                        alt={`${project.title} - Screenshot showing project interface and features`}
                        className="w-full h-full hover:scale-105 transition-transform duration-300 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.overview}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Problem Statement:</h4>
                        <p className="text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">My Role:</h4>
                        <p className="text-muted-foreground">{project.role}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Methodology:</h4>
                        <p className="text-muted-foreground">{project.methodology}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Key Results:</h4>
                        <p className="text-muted-foreground font-medium">{project.results}</p>
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button asChild size="sm" className="btn-hero">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <Github className="mr-2 w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                      {project.demoLink && (
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <ExternalLink className="mr-2 w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </OptimizedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;