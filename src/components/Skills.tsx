import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Cloud, 
  GitBranch, 
  Brain, 
  Server, 
  Container,
  Settings,
  Database
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code2,
      skills: ["C#", ".NET Core", ".NET Framework", "ASP.NET", "Entity Framework", "Microservices"],
      description: "Building robust, scalable backend systems"
    },
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["AngularJS", "Angular", "TypeScript", "JavaScript", "HTML/CSS"],
      description: "Creating modern, responsive user interfaces"
    },
    {
      title: "DevOps & Infrastructure",
      icon: Cloud,
      skills: ["Kubernetes", "Docker", "Proxmox", "GitOps", "CI/CD"],
      description: "Orchestrating and automating infrastructure"
    },
    {
      title: "Version Control & Collaboration",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Azure DevOps", "GitLab", "Code Review"],
      description: "Collaborative development and workflow management"
    },
    {
      title: "AI & Modern Tech",
      icon: Brain,
      skills: ["Machine Learning", "AI Integration", "GraphQL", "RabbitMQ"],
      description: "Integrating cutting-edge AI solutions and modern technologies"
    },
    {
      title: "Containerization",
      icon: Container,
      skills: ["Docker", "Kubernetes", "Helm", "Container Orchestration"],
      description: "Modern application deployment strategies"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning modern development practices, 
            infrastructure management, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="gradient-card border-border/50 hover-lift p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/20 mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover-glow transition-smooth"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;