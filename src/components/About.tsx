const About = () => {
  return (
    <section id="about" className="section-gap px-6 sm:px-8 bg-muted/40">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
          About me
        </h2>

        <div className="space-y-5 text-[15px] sm:text-base text-muted-foreground leading-[1.85]">
          <p>
            I've been building software professionally for over 10 years,
            working across the full stack — from crafting backend APIs with{' '}
            <strong className="text-foreground font-medium">C#</strong> and{' '}
            <strong className="text-foreground font-medium">.NET</strong> to
            building rich frontends with{' '}
            <strong className="text-foreground font-medium">Angular</strong> and{' '}
            <strong className="text-foreground font-medium">TypeScript</strong>.
          </p>

          <p>
            What makes me tick is the intersection of development and
            operations. I don't just write the code — I think about how it gets
            deployed, monitored, and scaled. That means{' '}
            <strong className="text-foreground font-medium">Kubernetes</strong>,{' '}
            <strong className="text-foreground font-medium">Docker</strong>,{' '}
            CI/CD pipelines, and a healthy obsession with infrastructure as
            code.
          </p>

          <p>
            I'm also a team lead, which means I spend a good amount of time
            mentoring developers, reviewing architecture decisions, and making
            sure the team is shipping quality work. According to my family, I
            should also be great at installing printers, fixing WiFi, and
            magically making their phones faster. Still working on that.
          </p>

          <p>
            When I'm not coding, I'm documenting what I've learned on my{' '}
            <a
              href="https://docs.thomaspeire.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              personal documentation site
            </a>{' '}
            or experimenting with AI integration and new DevOps tooling. Yes, AI
            helped write this text — practicing what I preach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
