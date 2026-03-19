import { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section className="section-gap px-6 sm:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Headshot */}
        <div className={`mb-8 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="headshot-wrap mx-auto" style={{ maxWidth: '16rem' }}>
            <img
              src="/lovable-uploads/bf2ba6c5-4aec-4045-a754-d8261266b665.png"
              alt="Thomas Peire"
              width="250"
              height="250"
              style={{
                transform: 'scale(2) translateX(6%) translateY(6%)',
                transformOrigin: 'center 30%',
              }}
            />
          </div>
        </div>

        {/* Intro */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug mb-6 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '80ms' }}
        >
          Hey, I'm Thomas.
          <br />
          <span className="text-muted-foreground font-normal">
            I build things for the web.
          </span>
        </h1>

        <p
          className={`text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '160ms' }}
        >
          I'm a full-stack developer and DevOps engineer from Belgium with a
          passion for building scalable, well-architected systems. Part
          developer, part infrastructure nerd, part team lead.
        </p>

        {/* Links */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="mailto:thomas.peire@outlook.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            Say hello
          </a>
          <a
            href="https://github.com/ThomasPeire"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thomaspeire/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://docs.thomaspeire.be"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-all"
          >
            PeerNotes
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
