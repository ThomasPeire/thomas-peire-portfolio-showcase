import { Card } from "@/components/ui/card";
import {
  Brain,
  Cloud,
  Code2,
  Container,
  GitBranch,
  Sparkles,
  Zap,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Code2,
      color: 'primary',
      skills: [
        'C#',
        '.NET Core',
        '.NET Framework',
        'ASP.NET',
        'Entity Framework',
        'Microservices',
        'GraphQL',
        'RabbitMQ',
        'DDD',
        'Neo4j',
        'Event Sourcing',
        'Azure',
      ],
      description: 'Building robust, scalable backend systems',
    },
    {
      title: 'Frontend Development',
      icon: Sparkles,
      color: 'accent',
      skills: ['AngularJS', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      description: 'Creating modern, responsive user interfaces',
    },
    {
      title: 'DevOps & Infrastructure',
      icon: Cloud,
      color: 'primary',
      skills: ['Kubernetes', 'Docker', 'Proxmox', 'GitOps', 'CI/CD'],
      description: 'Orchestrating and automating infrastructure',
    },
    {
      title: 'Version Control & Collaboration',
      icon: GitBranch,
      color: 'accent',
      skills: ['Git', 'GitHub', 'Azure DevOps', 'Bitbucket', 'Code Review'],
      description: 'Collaborative development and workflow management',
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'primary',
      skills: [
        'Machine Learning',
        'AI Integration',
        'Automation',
        'Data Analysis',
      ],
      description: 'Integrating cutting-edge AI solutions',
    },
    {
      title: 'Containerization',
      icon: Container,
      color: 'accent',
      skills: ['Docker', 'Kubernetes', 'Helm', 'Container Orchestration'],
      description: 'Modern application deployment strategies',
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced background effects with smoother transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(120,119,198,0.08),transparent_60%)] bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,119,198,0.08),transparent_60%)]"></div>

      {/* Smooth top transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Modern section header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Technical Skills
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight block">
              Technical Expertise
            </span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set covering modern development practices,
            infrastructure management, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`group relative overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-lg border border-border/50 hover:border-${category.color}/30 transition-all duration-500 hover:shadow-2xl hover:shadow-${category.color}/20 animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card background pattern */}
              <div
                className={`absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,${
                  category.color === 'primary' ? '0.1' : '0.05'
                }),transparent_50%)]`}
              ></div>
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${category.color}/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}
              ></div>

              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`relative p-4 rounded-2xl bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon
                      className={`h-7 w-7 text-${category.color}`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold text-foreground group-hover:text-${category.color} transition-colors`}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`group/badge relative px-4 py-2 bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground rounded-full text-sm font-medium hover:from-${category.color}/20 hover:to-${category.color}/10 hover:text-${category.color} hover:scale-105 transition-all duration-200 cursor-default border border-border/30 hover:border-${category.color}/30 backdrop-blur-sm`}
                      style={{
                        animationDelay: `${index * 100 + skillIndex * 50}ms`,
                      }}
                    >
                      {skill}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-${
                          category.color
                        }/20 to-${
                          category.color === 'primary' ? 'accent' : 'primary'
                        }/20 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 -z-10`}
                      ></div>
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modern section divider */}
        <div className="flex items-center justify-center mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md"></div>
          <div className="px-4">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;