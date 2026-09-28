import {
  events,
  experience,
  globalView,
  links,
  profile,
  projects,
  skills,
  techAndEducation,
  writing,
  type EventItem,
  type Link,
  type Project,
} from "@/data/content";

function EventRow({ event }: { event: EventItem }) {
  const details = [event.where, event.role].filter(Boolean).join(" · ");
  return (
    <li className="event">
      <div className="card-head">
        <h3>{event.name}</h3>
        <span className={event.upcoming ? "badge" : "badge badge-muted"}>
          {event.upcoming ? `coming up · ${event.when}` : event.when}
        </span>
      </div>
      {details && <p className="where">{details}</p>}
    </li>
  );
}

function LinkRow({ items }: { items?: Link[] }) {
  if (!items?.length) return null;
  return (
    <p className="link-row">
      {items.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </p>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
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
      <LinkRow items={project.links} />
      {project.tags && <p className="tags">{project.tags.join(" · ")}</p>}
    </article>
  );
}

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
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section aria-labelledby="projects-title">
          <h2 id="projects-title">projects</h2>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>

        <section aria-labelledby="experience-title">
          <h2 id="experience-title">experience</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.role + job.when}>
                <div className="when">{job.when}</div>
                <div>
                  <h3>{job.href ? <a href={job.href}>{job.role}</a> : job.role}</h3>
                  <p className="where">{job.where}</p>
                  <p>{job.summary}</p>
                  {job.highlights && (
                    <ul className="plain-list">
                      {job.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  <LinkRow items={job.links} />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="global-title">
          <h2 id="global-title">global view</h2>
          <p className="section-intro">{globalView.intro}</p>
          <ul className="questions" aria-label="driving questions">
            {globalView.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <ol className="timeline">
            {globalView.places.map((place) => (
              <li key={place.country + place.city}>
                <div className="when">{place.when}</div>
                <div>
                  <h3>
                    {place.city}, {place.country}
                  </h3>
                  <p>{place.summary}</p>
                  {place.highlights && (
                    <ul className="plain-list">
                      {place.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="events-title">
          <h2 id="events-title">events</h2>
          <ul className="event-list">
            {events
              .filter((event) => event.upcoming)
              .map((event) => (
                <EventRow key={event.name + event.when} event={event} />
              ))}
            {events
              .filter((event) => !event.upcoming)
              .map((event) => (
                <EventRow key={event.name + event.when} event={event} />
              ))}
          </ul>
        </section>

        <section aria-labelledby="writing-title">
          <h2 id="writing-title">writing pieces</h2>
          {writing.length === 0 ? (
            <div className="card-head">
              <p className="muted-note">my first pieces are on the way.</p>
              <span className="badge">coming up</span>
            </div>
          ) : (
            <ul className="event-list">
              {writing.map((piece) => (
                <li key={piece.href} className="event">
                  <div className="card-head">
                    <h3>
                      <a href={piece.href}>{piece.title}</a>
                    </h3>
                    <span className="badge badge-muted">{piece.when}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="love-title">
          <h2 id="love-title">love = tech + education</h2>
          <p className="stat">
            <span className="stat-number">{techAndEducation.impact.number}</span>
            <span className="stat-label">{techAndEducation.impact.label}</span>
          </p>
          {techAndEducation.story.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="story">
              {paragraph}
            </p>
          ))}
          <details className="toggle">
            <summary>see the projects behind this number ({techAndEducation.projects.length})</summary>
            <div className="toggle-body">
              {techAndEducation.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </details>
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
