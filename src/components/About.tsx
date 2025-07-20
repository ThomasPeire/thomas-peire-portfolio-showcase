import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Thomas
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a deep love for creating robust, 
                scalable applications using modern technologies. My expertise spans from 
                backend development with <Badge variant="secondary" className="mx-1">C#</Badge> 
                and <Badge variant="secondary" className="mx-1">.NET</Badge> to orchestrating 
                complex infrastructure with <Badge variant="secondary" className="mx-1">Kubernetes</Badge>.
              </p>
              <p>
                What drives me is the intersection of development and operations - building 
                systems that not only work beautifully but are also maintainable, secure, 
                and scalable. I believe in the power of automation, clean code, and 
                continuous learning.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in AI integration, 
                experimenting with new DevOps tools, or contributing to open-source projects. 
                I'm always excited to tackle challenging problems and learn new technologies.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-scale-in">
            <Card className="gradient-card border-border/50 p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/20 mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Professional Focus</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack application development</li>
                <li>• Cloud-native architecture design</li>
                <li>• DevOps pipeline implementation</li>
                <li>• Infrastructure automation</li>
                <li>• AI/ML integration</li>
              </ul>
            </Card>

            <Card className="gradient-card border-border/50 p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-accent/20 mr-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Specializations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Microservices", "Container Orchestration", "GitOps", 
                  "API Design", "Database Architecture", "Security Best Practices"
                ].map((spec) => (
                  <Badge key={spec} variant="outline" className="hover-glow">
                    {spec}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;