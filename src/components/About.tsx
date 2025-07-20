import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src="/lovable-uploads/bf2ba6c5-4aec-4045-a754-d8261266b665.png" 
                alt="Thomas Peire - Professional headshot"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Thomas
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm a passionate full-stack developer and team lead with expertise spanning frontend development 
                with <Badge variant="secondary" className="mx-1">Angular</Badge> and 
                <Badge variant="secondary" className="mx-1">TypeScript</Badge>, backend development 
                with <Badge variant="secondary" className="mx-1">C#</Badge> and 
                <Badge variant="secondary" className="mx-1">.NET</Badge>, and infrastructure 
                orchestration with <Badge variant="secondary" className="mx-1">Kubernetes</Badge>.
              </p>
              <p>
                What drives me is the intersection of development and operations - building 
                systems that not only work beautifully but are also maintainable, secure, 
                and scalable. I'm passionate about modern technologies like 
                <Badge variant="secondary" className="mx-1">GraphQL</Badge> and 
                <Badge variant="secondary" className="mx-1">RabbitMQ</Badge> for building 
                robust distributed systems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in AI integration, 
                experimenting with new DevOps tools, or documenting my technical experiments on my
                <a href="https://docs.thomaspeire.be" target="_blank" rel="noopener noreferrer" 
                   className="text-primary hover:text-accent transition-colors underline">
                   personal documentation site
                </a>. I'm always excited to tackle challenging problems and learn new technologies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
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
                <li>• Team leadership and mentoring</li>
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
                  "API Design", "GraphQL", "RabbitMQ"
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