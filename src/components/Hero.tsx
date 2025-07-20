import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Github, Linkedin, Mail, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const arrowOpacity = Math.max(0, 1 - scrollY / 200);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced modern background effects with smoother transitions */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]"></div>
        
        {/* Consistent background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
        
        {/* Smooth bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>        {/* Floating elements */}
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-float blur-sm"></div>
        <div
          className="absolute top-[30%] right-[15%] w-20 h-20 rounded-full bg-gradient-to-br from-accent/25 to-accent/10 animate-float blur-sm"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-[30%] left-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 animate-float blur-sm"
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className="absolute bottom-20 right-[25%] w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 animate-float blur-sm"
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Gradient orbs */}
        <div className="absolute top-[20%] left-[70%] w-64 h-64 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-[25%] right-[80%] w-80 h-80 bg-gradient-to-tl from-accent/8 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-none block">
              Thomas Peire
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                Full-Stack Developer
              </span>
            </div>
            <div className="w-2 h-2 bg-border rounded-full"></div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-lg font-semibold text-foreground">
                DevOps Engineer
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Building scalable applications with{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
              C#
            </span>{' '}
            and{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
              .NET
            </span>
            , orchestrating infrastructure with{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold">
              Kubernetes
            </span>
            , and implementing cutting-edge{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold">
              DevOps
            </span>{' '}
            practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() =>
                (window.location.href = 'mailto:thomas.peire@outlook.com')
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="mr-3 h-5 w-5 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 text-lg px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open('https://github.com/ThomasPeire', '_blank')
                }
              >
                <Github className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:bg-accent/5 text-lg px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/thomaspeire/',
                    '_blank'
                  )
                }
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:text-accent transition-colors" />
                <span className="group-hover:text-accent transition-colors">
                  LinkedIn
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-300"
        style={{ opacity: arrowOpacity }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-medium">
            Scroll to explore
          </span>
          <div className="p-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
            <ChevronDown className="h-4 w-4 text-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
