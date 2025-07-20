import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Github, Linkedin, Mail, Zap, FileText, BookOpen } from 'lucide-react';
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
      {/* Small logo/brand in top corner */}
      <div className="absolute top-6 right-6 z-20">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/40 border border-border/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-200 cursor-pointer group"
             onClick={() => window.open('https://docs.thomaspeire.be', '_blank')}>
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <BookOpen className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
            PeerNotes
          </span>
        </div>
      </div>
      {/* Enhanced modern background effects with smoother transitions */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]"></div>
        {/* Consistent background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
        {/* Smooth bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>{' '}
        {/* Floating elements */}
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

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced typography */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-none block">
              Thomas Peire
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                Full-Stack Developer
              </span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-border rounded-full"></div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                DevOps Engineer
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
            Building scalable applications with{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-medium text-sm">
              C#
            </span>{' '}
            and{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-medium text-sm">
              .NET
            </span>
            , orchestrating infrastructure with{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-medium text-sm">
              Kubernetes
            </span>
            , and implementing cutting-edge{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-medium text-sm">
              DevOps
            </span>{' '}
            practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() =>
                (window.location.href = 'mailto:thomas.peire@outlook.com')
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </Button>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open('https://github.com/ThomasPeire', '_blank')
                }
              >
                <Github className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:bg-accent/5 text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/thomaspeire/',
                    '_blank'
                  )
                }
              >
                <Linkedin className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:text-accent transition-colors" />
                <span className="group-hover:text-accent transition-colors">
                  LinkedIn
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator - hidden on mobile */}
      <div
        className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-300"
        style={{ opacity: arrowOpacity }}
      >
        <div className="p-2 rounded-full bg-card/50 border border-border/40 backdrop-blur-sm hover:bg-card/70 transition-all duration-200">
          <ChevronDown className="h-4 w-4 text-muted-foreground/80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
