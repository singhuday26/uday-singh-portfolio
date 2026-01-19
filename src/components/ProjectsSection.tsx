import React from "react";
import { OptimizedCard } from "@/components/ui/optimized-card";
import { OptimizedLazyImage } from "@/components/ui/optimized-lazy-image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useProjects } from "@/services/api";
import { ProjectCardSkeleton } from "@/components/ui/skeletons";

const ProjectsSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-20 bg-gradient-subtle" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            Featured Projects
          </h2>

          {isLoading ? (
            <div className="grid gap-8">
              {[1, 2, 3].map((i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className={`grid gap-8 transform-gpu transition-all duration-700 ${hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              {projects?.map((project, index) => (
                <OptimizedCard key={project.id || index} className="card-project overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project Image */}
                    <div className="lg:col-span-1">
                      <div className="relative h-64 lg:h-full min-h-[200px] rounded-lg overflow-hidden transform-gpu">
                        <OptimizedLazyImage
                          src={project.image}
                          alt={`${project.title} - Screenshot showing project interface and features`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 will-change-transform"
                        />
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
                          {project.tech_stack.map((tech, techIndex) => (
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
                        {project.github_link && (
                          <Button asChild size="sm" className="btn-hero">
                            <a
                              href={project.github_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center"
                            >
                              <Github className="mr-2 w-4 h-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.demo_link && (
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={project.demo_link}
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
          )}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;