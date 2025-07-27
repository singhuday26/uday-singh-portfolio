import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMedicare from "@/assets/project-medicare.jpg";
import projectSafesafe from "@/assets/project-safesafe.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Uday Singh | Data Science & Full-Stack Portfolio",
      overview: "My personal portfolio website, showcasing expertise in Data Science, Machine Learning, and Full-Stack Development. Built with modern web technologies, it highlights my ability to create scalable, data-driven solutions and tackle complex challenges.",
      problem: "Need for a comprehensive showcase of technical skills and professional experience",
      role: "Full-stack development, UI/UX design, and technical implementation",
      methodology: "Modern React architecture with TypeScript, responsive design principles, and performance optimization",
      results: "Demonstrates modern web development practices, professional design principles, and comprehensive technical implementation",
      techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Query", "Lucide React"],
      image: projectPortfolio,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "MediCare - Hospital Management System",
      overview: "A comprehensive healthcare management system built with React, TypeScript, Tailwind CSS, and Supabase, designed to streamline hospital operations and enhance patient care.",
      problem: "Need for efficient hospital operations and enhanced patient care management",
      role: "Full-stack development with focus on healthcare workflows and data security",
      methodology: "Component-based architecture with role-based access control and real-time data synchronization",
      results: "Provides visual reports on hospital performance metrics, enhances patient data management, and ensures secure access control",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "React Query", "shadcn/ui"],
      image: projectMedicare,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "SafeSafe: Protect Your Financial Future",
      overview: "An advanced financial security platform offering comprehensive fraud detection and protection for individuals and businesses with real-time monitoring and smart alerts.",
      problem: "Rising financial fraud threats requiring proactive protection and real-time monitoring",
      role: "Security architecture design, fraud detection algorithms, and user experience optimization",
      methodology: "Real-time monitoring systems with machine learning-based fraud detection and multi-layered security protocols",
      results: "Provides peace of mind, prevents fraudulent actions, offers security insights, and is trusted by thousands of users",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Machine Learning", "Security APIs"],
      image: projectSafesafe,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            Featured Projects
          </h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-project overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Image */}
                  <div className="lg:col-span-1">
                    <div className="relative h-64 lg:h-full min-h-[200px] rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;