import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced background with smoother transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(120,119,198,0.08),transparent_60%)] bg-[radial-gradient(ellipse_at_80%_80%,rgba(255,119,198,0.08),transparent_60%)]"></div>

      {/* Smooth top and bottom transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          <div className="relative group order-2 xl:order-1">
            {/* Enhanced background effects */}
            <div className="headshot-glow-bg"></div>
            <div className="headshot-glow-accent"></div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-8 -left-6 w-12 h-12 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-md animate-pulse delay-1000"></div>

            {/* Main image container */}
            <div className="headshot-container">
              {/* Animated border ring */}
              <div className="headshot-border"></div>

              {/* Professional headshot image */}
              <img
                src="/lovable-uploads/bf2ba6c5-4aec-4045-a754-d8261266b665.png"
                alt="Thomas Peire - Professional headshot"
                className="headshot-image"
              />

              {/* Subtle overlay gradient */}
              <div className="headshot-overlay"></div>

              {/* Highlight effect */}
              <div className="headshot-highlight"></div>
            </div>
          </div>

          <div className="animate-fade-in-up order-1 xl:order-2">
            {/* Modern section header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8">
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight block">
                Thomas
              </span>
              <span className="text-2xl md:text-3xl font-normal text-muted-foreground block mt-2">
                Full-Stack Developer
              </span>
            </h2>

            <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                I'm a passionate full-stack developer and team lead with
                expertise across backend development with{' '}
                <Badge
                  variant="secondary"
                  className="mx-1 hover:scale-110 transition-transform"
                >
                  C#
                </Badge>{' '}
                and
                <Badge
                  variant="secondary"
                  className="mx-1 hover:scale-110 transition-transform"
                >
                  .NET
                </Badge>
                , frontend development with{' '}
                <Badge
                  variant="secondary"
                  className="mx-1 hover:scale-110 transition-transform"
                >
                  Angular
                </Badge>{' '}
                and
                <Badge
                  variant="secondary"
                  className="mx-1 hover:scale-110 transition-transform"
                >
                  TypeScript
                </Badge>
                , and infrastructure orchestration with{' '}
                <Badge
                  variant="secondary"
                  className="mx-1 hover:scale-110 transition-transform"
                >
                  Kubernetes
                </Badge>
                . According to my family, I should also be great at installing
                printers, fixing WiFi, and magically making their phones
                faster.
              </p>
              
              <p>
                What drives me is the intersection of development and
                operations - building systems that not only work beautifully
                but are also maintainable, secure, and scalable. I'm excited
                about modern technologies like
                <Badge
                  variant="secondary"
                  className="mx-1 hover:scale-110 transition-transform"
                >
                  GraphQL
                </Badge>{' '}
                and
                <Badge
                  variant="secondary"
                  className="mx-1 hover:scale-110 transition-transform"
                >
                  RabbitMQ
                </Badge>{' '}
                for building robust distributed systems. (Still working on
                that printer installation expertise though.)
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest in AI
                integration (and yes, AI helped me write this very text -
                practicing what I preach!), experimenting with new DevOps
                tools, or documenting my technical experiments on my{' '}
                <a
                  href="https://docs.thomaspeire.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-accent transition-colors underline decoration-primary/50 hover:decoration-accent/50 underline-offset-4"
                >
                  personal documentation site
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                . I'm always excited to tackle challenging problems and learn
                new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
