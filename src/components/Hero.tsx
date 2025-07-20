import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary animate-float"></div>
        <div className="absolute top-40 right-32 w-20 h-20 rounded-full bg-accent animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-24 h-24 rounded-full bg-primary animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-accent animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Thomas Peire
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Full-Stack Developer & DevOps Engineer
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building scalable applications with <span className="text-primary font-semibold">C#</span> and <span className="text-primary font-semibold">.NET</span>, 
            orchestrating infrastructure with <span className="text-accent font-semibold">Kubernetes</span>, 
            and implementing modern <span className="text-accent font-semibold">DevOps</span> practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary hover-glow text-lg px-8 py-3"
              onClick={() => window.location.href = 'mailto:thomas.peire@outlook.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift"
                onClick={() => window.open('https://github.com/ThomasPeire', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift"
                onClick={() => window.open('https://www.linkedin.com/in/thomaspeire/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom of page */}
      <div 
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-0 transition-opacity duration-300"
        style={{ 
          opacity: arrowOpacity * 0.6,
          animation: 'bounce 3s infinite'
        }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;