import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectChurn from "@/assets/project-churn.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";
import projectCNN from "@/assets/project-cnn.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      overview: "Machine learning model to predict customer churn using advanced analytics",
      problem: "Telecom companies face significant revenue loss due to customer churn",
      role: "Built end-to-end ML pipeline with feature engineering and model optimization",
      methodology: "Logistic Regression and Random Forest with hyperparameter tuning",
      results: "Achieved 85% accuracy on telecom dataset, providing actionable retention insights",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      image: projectChurn,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Real-Time Sentiment Analyzer",
      overview: "Python application for real-time sentiment analysis of social media feeds",
      problem: "Need for real-time market sentiment monitoring from social media data",
      role: "Developed NLP pipeline with data preprocessing and sentiment classification",
      methodology: "Natural Language Processing using TextBlob and NLTK libraries",
      results: "Achieved 90% F1-score on live Twitter feeds for market sentiment analysis",
      techStack: ["Python", "NLTK", "TextBlob", "Pandas", "Streamlit"],
      image: projectSentiment,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Image Classification with CNN",
      overview: "Deep learning model for robust image recognition using convolutional neural networks",
      problem: "Accurate image classification for automated visual recognition systems",
      role: "Designed and trained CNN architecture with data augmentation techniques",
      methodology: "Convolutional Neural Network with TensorFlow/Keras and optimization",
      results: "Achieved 93% accuracy with robust performance across diverse image categories",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
      image: projectCNN,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            My Data Science Projects
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