import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced background effects with smoother transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(120,119,198,0.08),transparent_60%)] bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,119,198,0.08),transparent_60%)]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Modern section header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8">
            <Send className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Let's Connect
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight block">
              Get In
            </span>
            <span className="bg-gradient-to-r from-accent via-primary to-foreground bg-clip-text text-transparent leading-tight block">
              Touch
            </span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's discuss technology,
            development opportunities, or share knowledge about modern
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-scale-in">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-lg border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              {/* Card background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Contact Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:thomas.peire@outlook.com"
                    className="group/item flex items-center p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-primary/20 hover:to-primary/10 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-xl bg-primary/20 mr-4 group-hover/item:bg-primary/30 transition-all duration-300 group-hover/item:scale-110">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">
                        Email
                      </div>
                      <div className="text-muted-foreground group-hover/item:text-primary/80 transition-colors">
                        thomas.peire@outlook.com
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/item:text-primary opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                  </a>

                  <a
                    href="https://linkedin.com/in/thomaspeire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex items-center p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-accent/20 hover:to-accent/10 border border-border/30 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-xl bg-accent/20 mr-4 group-hover/item:bg-accent/30 transition-all duration-300 group-hover/item:scale-110">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover/item:text-accent transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-muted-foreground group-hover/item:text-accent/80 transition-colors">
                        Professional Profile
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/item:text-accent opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                  </a>

                  <a
                    href="https://github.com/ThomasPeire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex items-center p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-primary/20 hover:to-primary/10 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-xl bg-primary/20 mr-4 group-hover/item:bg-primary/30 transition-all duration-300 group-hover/item:scale-110">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">
                        GitHub
                      </div>
                      <div className="text-muted-foreground group-hover/item:text-primary/80 transition-colors">
                        Code Portfolio & Projects
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/item:text-primary opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                  </a>

                  <div className="flex items-center p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-border/30">
                    <div className="p-3 rounded-xl bg-accent/20 mr-4">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Location
                      </div>
                      <div className="text-muted-foreground">
                        Belgium, Europe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 group-hover:scale-125 transition-transform"></div>
            </Card>
          </div>

          <div className="animate-scale-in">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-lg border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20">
              {/* Card background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Resources & Expertise
                  </h3>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://docs.thomaspeire.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item block p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 hover:border-primary/50 hover:bg-primary/25 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/30 group-hover/item:bg-primary/40 transition-colors">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary mb-2 group-hover/item:text-primary/90 transition-colors">
                          📚 Documentation Hub
                        </h4>
                        <p className="text-sm text-foreground/80 group-hover/item:text-primary/80 transition-colors mb-2">
                          Technical documentation, guides, tutorials, and
                          knowledge sharing
                        </p>
                        <div className="flex items-center gap-2 text-xs text-primary group-hover/item:text-primary/80 transition-colors">
                          <span>docs.thomaspeire.be</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/30">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-accent mb-2">
                          💼 Leadership & Mentoring
                        </h4>
                        <p className="text-sm text-foreground/80">
                          Team leadership experience, technical mentoring, and
                          collaborative development practices
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/30">
                        <Wrench className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          🛠️ Technical Solutions
                        </h4>
                        <p className="text-sm text-foreground/80">
                          Full-stack development, DevOps automation, cloud
                          infrastructure, and modern architecture patterns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full opacity-60 group-hover:scale-125 transition-transform"></div>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() =>
              (window.location.href = 'mailto:thomas.peire@outlook.com')
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Send className="mr-3 h-5 w-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            <span className="relative z-10">Start a Conversation</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;