import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkle
} from "lucide-react";
import { SectionHeading } from "@/src/components/SectionHeading";
import {
  experiences,
  metrics,
  principles,
  profile,
  projects
} from "@/src/data/portfolio";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Site header">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span>{profile.initials}</span>
          {profile.name}
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">
            <Sparkle size={14} aria-hidden="true" />
            {profile.availability}
          </p>
          <h1>{profile.name}</h1>
          <p className="role-line">{profile.role}</p>
          <p className="intro">
            {profile.headline} {profile.intro}
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
            <a className="button" href={profile.linkedin} target="_blank">
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="icon-button" href={profile.github} target="_blank" aria-label="GitHub">
              <Github size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract workspace visual">
          <Image
            src="/hero-workspace.png"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="quick-info" aria-label="Profile summary">
        <div className="location">
          <MapPin size={16} aria-hidden="true" />
          {profile.location}
        </div>
        <div className="chips">
          {profile.focusAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="metrics" aria-label="Portfolio metrics">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="content-section" id="experience">
        <SectionHeading eyebrow="Experience" title="Proof, not posture">
          <p>
            Paste your LinkedIn roles into the data file and this section becomes a
            timeline of scope, decisions, and outcomes.
          </p>
        </SectionHeading>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.role}`}>
              <div>
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="company">
                  {item.company}
                  {item.location ? ` / ${item.location}` : ""}
                </p>
              </div>
              <div>
                <p>{item.summary}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="work">
        <SectionHeading eyebrow="Selected work" title="A system for case studies">
          <p>
            Start with two or three substantial projects. Each card is designed for
            context, credibility, stack, and a clear next link.
          </p>
        </SectionHeading>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="category">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <strong>{project.impact}</strong>
              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {project.href ? (
                <a href={project.href} target="_blank">
                  View work <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split" id="principles">
        <SectionHeading eyebrow="Principles" title="How the work should feel" />
        <ol className="principles">
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ol>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p>Contact</p>
          <h2>Let’s build the sharp version.</h2>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank">
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank">
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
