import { experience, links, profile, projects, skills } from "@/data/content";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        skip to content
      </a>

      <header className="hero">
        <p className="eyebrow">hi, i&apos;m</p>
        <h1>{profile.name}</h1>
        <p className="lede">{profile.lede}</p>
        <p className="status">
          <span className="dot" aria-hidden="true" />
          {profile.status}
        </p>
        <nav className="links" aria-label="contact">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={link.primary ? "primary" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section aria-labelledby="projects-title">
          <h2 id="projects-title">projects</h2>
          {projects.map((project) => (
            <article key={project.name} className="card">
              <div className="card-head">
                <h3>{project.href ? <a href={project.href}>{project.name}</a> : project.name}</h3>
                <span className="badge">{project.badge}</span>
              </div>
              <p>{project.summary}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="tags">{project.tags.join(" · ")}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="experience-title">
          <h2 id="experience-title">experience</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.role + job.when}>
                <div className="when">{job.when}</div>
                <div>
                  <h3>{job.role}</h3>
                  <p className="where">{job.where}</p>
                  <p>{job.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="skills-title">
          <h2 id="skills-title">skills</h2>
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.label} className="skill-row">
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer>
        <p>built with next.js · hosted on github pages</p>
      </footer>
    </>
  );
}
