import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to connect with me for discussions about technology, development, or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-scale-in">
            <Card className="gradient-card border-border/50 p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:thomas@thomaspeire.be"
                  className="flex items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 mr-4 group-hover:bg-primary/30 transition-smooth">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">thomas@thomaspeire.be</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/thomaspeire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-accent/20 mr-4 group-hover:bg-accent/30 transition-smooth">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-muted-foreground">Professional Profile</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/thomaspeire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 mr-4 group-hover:bg-primary/30 transition-smooth">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-muted-foreground">Code Portfolio</div>
                  </div>
                </a>

                <div className="flex items-center p-4 rounded-lg bg-secondary/50">
                  <div className="p-2 rounded-lg bg-accent/20 mr-4">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Belgium</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Card className="gradient-card border-border/50 p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-center">Documentation & Resources</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://docs.thomaspeire.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-smooth group"
                >
                  <h4 className="font-semibold text-primary mb-2 group-hover:text-primary/80">
                    📚 Personal Documentation Site
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Technical documentation, guides, and knowledge sharing
                  </p>
                  <div className="text-xs text-primary mt-2">
                    docs.thomaspeire.be →
                  </div>
                </a>

                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">💼 Professional Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Team leadership, mentoring, and technical architecture experience
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">🛠️ Technical Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-stack development, DevOps, and modern infrastructure solutions
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;