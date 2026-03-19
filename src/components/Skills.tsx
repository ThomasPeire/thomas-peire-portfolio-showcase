import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';

/* ─── Skill data ─── */

const developerSkills = [
  { name: 'C# / .NET', level: 95 },
  { name: 'Angular / TypeScript', level: 90 },
  { name: 'GraphQL', level: 80 },
  { name: 'RabbitMQ / Event Sourcing', level: 75 },
  { name: 'Entity Framework', level: 90 },
  { name: 'Microservices / DDD', level: 85 },
];

const opsSkills = [
  { name: 'Kubernetes', level: 90 },
  { name: 'Docker', level: 90 },
  { name: 'CI/CD Pipelines', level: 85 },
  { name: 'GitOps', level: 80 },
  { name: 'Proxmox', level: 75 },
  { name: 'Azure Cloud', level: 80 },
];

const toolsList = [
  'Git',
  'GitHub',
  'Azure DevOps',
  'Bitbucket',
  'Neo4j',
  'Machine Learning',
  'AI Integration',
  'Helm',
  'Automation',
  'HTML/CSS',
  'JavaScript',
  'AngularJS',
  'Data Analysis',
  'Code Review',
];

const contactLinks = [
  {
    label: 'Email',
    value: 'thomas.peire@outlook.com',
    href: 'mailto:thomas.peire@outlook.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/thomaspeire',
    href: 'https://linkedin.com/in/thomaspeire',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/ThomasPeire',
    href: 'https://github.com/ThomasPeire',
    icon: Github,
    external: true,
  },
  {
    label: 'Location',
    value: 'Belgium, Europe',
    icon: MapPin,
  },
];

/* ─── Skill bar component ─── */

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => (
  <div className="mb-4 last:mb-0">
    <div className="flex justify-between items-baseline mb-1.5">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-bar-fill"
        style={{
          width: `${level}%`,
          animationDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

/* ─── Main component ─── */

const Skills = () => {
  return (
    <>
      {/* ─── Skills ─── */}
      <section id="skills" className="section-gap px-6 sm:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            My skills
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Part developer, part ops engineer. Here's what I bring to the table.
          </p>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-14">
            {/* Developer */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pop" />
                Part developer
              </h3>
              {developerSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={200 + i * 80}
                />
              ))}
            </div>

            {/* Ops */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pop" />
                Part ops engineer
              </h3>
              {opsSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={200 + i * 80}
                />
              ))}
            </div>
          </div>

          {/* Additional tools */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Also working with
            </h3>
            <div className="flex flex-wrap gap-2">
              {toolsList.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="section-gap px-6 sm:px-8 bg-muted/40">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Get in touch
          </h2>
          <p className="text-muted-foreground mb-10">
            Want to exchange ideas or just geek out about tech? Always happy to
            connect.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map((link) => {
              const content = (
                <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-foreground/15 transition-colors group">
                  <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {link.label}
                    </div>
                    <div className="text-sm text-foreground truncate">
                      {link.value}
                    </div>
                  </div>
                  {link.external && (
                    <ExternalLink className="w-3 h-3 text-muted-foreground/40 ml-auto flex-shrink-0" />
                  )}
                </div>
              );

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              );
            })}
          </div>

          {/* PeerNotes */}
          <a
            href="https://docs.thomaspeire.be"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-background hover:border-foreground/15 transition-colors group"
          >
            <div>
              <div className="text-sm font-semibold text-foreground">
                PeerNotes
              </div>
              <div className="text-sm text-muted-foreground">
                Technical docs, guides & knowledge sharing
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-colors flex-shrink-0 ml-4" />
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-6 sm:px-8 border-t border-border">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Thomas Peire
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/ThomasPeire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/40 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/thomaspeire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/40 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Skills;
