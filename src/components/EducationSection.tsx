import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy, Users, Award } from "lucide-react";
import { useEducation, useAchievements } from "@/services/api";
import { EducationCardSkeleton, AchievementCardSkeleton } from "@/components/ui/skeletons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Users,
  Award
};

const EducationSection = () => {
  const { data: educationData, isLoading: isEduLoading } = useEducation();
  const { data: achievements, isLoading: isAchLoading } = useAchievements();

  const isLoading = isEduLoading || isAchLoading;

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            Education, Achievements & Community
          </h2>

          {isLoading ? (
            <div className="space-y-8">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <EducationCardSkeleton key={i} />
                ))}
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <AchievementCardSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Education */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold mb-8 text-center text-primary">Academic Background</h3>
                <div className="space-y-6">
                  {educationData?.map((edu, index) => (
                    <Card key={edu.id || index} className={`card-professional ${edu.highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                          <p className="text-lg text-muted-foreground mb-1">{edu.degree}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span>{edu.duration}</span>
                            <span>•</span>
                            <span>{edu.location}</span>
                            <span>•</span>
                            <span className={`font-semibold ${edu.highlight ? 'text-primary' : ''}`}>
                              {edu.cgpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Achievements & Leadership */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center text-primary">Achievements & Leadership</h3>
                <div className="grid md:grid-cols-1 gap-6">
                  {achievements?.map((achievement, index) => {
                    const IconComponent = iconMap[achievement.icon_name] || Award;
                    return (
                      <Card key={achievement.id || index} className="card-professional hover-lift">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h4 className="text-xl font-semibold">{achievement.title}</h4>
                              <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                                {achievement.category}
                              </span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;