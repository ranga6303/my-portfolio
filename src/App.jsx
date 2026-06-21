import profilePhoto from './assets/profile.png'
import './App.css'

const contacts = [
  {
    label: 'Phone',
    value: '+91-6303707080',
    href: 'tel:+916303707080',
    icon: 'TEL',
  },
  {
    label: 'Email',
    value: 'rangaswamyjngm@gmail.com',
    href: 'mailto:rangaswamyjngm@gmail.com',
    icon: '@',
  },
  {
    label: 'GitHub',
    value: 'github.com/ranga6303',
    href: 'https://github.com/ranga6303',
    icon: 'GH',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rangaswamy-jangam-474566334',
    href: 'https://www.linkedin.com/in/rangaswamy-jangam-474566334',
    icon: 'IN',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/ramaking',
    href: 'https://leetcode.com/u/ramaking',
    icon: 'LC',
  },
]

const navItems = ['About', 'Projects', 'Skills', 'Achievements', 'Contact']

const projects = [
  {
    name: 'College Attendance Management System',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React Native', 'Railway'],
    github: 'https://github.com/ranga6303',
    features: [
      'JWT authentication from scratch with refresh token rotation, BCrypt hashing, OTP registration/password reset, and 5-attempt lockout',
      'Role-based access control with 20+ granular permissions across Student, Teacher, HOD, and Admin roles via Spring Security',
      'ECDSA-signed attendance marking using P-256 key pairs to prevent replay and impersonation attacks',
      'Hidden session code system to eliminate code-sharing fraud',
      'BLE beacon-based physical presence verification',
      'Full attendance lifecycle APIs with teacher review buffer before final records',
      'Role-specific reporting for student, teacher, and HOD analytics',
      'Companion React Native app built with Expo Router, Zustand, and React Query',
    ],
  },
  {
    name: 'JSON Formatter & Validator',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://digital-heros-liart.vercel.app/',
    githubNote: 'GitHub available on request',
    description:
      'A browser-based tool to validate and pretty-print raw JSON instantly, with copy-to-clipboard support.',
  },
]

const skillGroups = [
  ['Languages', ['Java', 'TypeScript', 'SQL']],
  ['Frameworks', ['Spring Boot', 'Spring Security', 'JPA/Hibernate', 'React Native', 'Expo']],
  ['Security', ['JWT', 'BCrypt', 'ECDSA', 'P-256', 'RBAC', 'OTP flows', 'session management']],
  ['Databases', ['MySQL', 'H2', 'schema design', 'indexing', 'optimistic locking']],
  ['Tools', ['Git', 'GitHub', 'Postman', 'Maven', 'Railway', 'VS Code', 'IntelliJ IDEA']],
]

function ContactLinks({ compact = false }) {
  return (
    <div className={compact ? 'contact-links compact' : 'contact-links'}>
      {contacts.map((contact) => (
        <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer">
          <span aria-hidden="true">{contact.icon}</span>
          <span>{compact ? contact.label : contact.value}</span>
        </a>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Rangaswamy Jangam home">
          RJ
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Backend Developer | Java & Spring Boot</p>
            <h1>Rangaswamy Jangam</h1>
            <p className="tagline">Building secure, production-grade backend systems</p>
            <ContactLinks />
          </div>
          <img className="hero-avatar" src={profilePhoto} alt="Rangaswamy Jangam" />
        </section>

        <section className="section split-section" id="about">
          <div>
            <p className="section-kicker">About</p>
            <h2>Computer Science student building practical backend systems.</h2>
          </div>
          <div className="section-body">
            <p>
              I am a 3rd Year B.Tech Computer Science student at Gates Institute of
              Technology with a CGPA of 8.6.
            </p>
            <p>
              My work focuses on backend development, security-focused system design, and
              authentication architecture. I enjoy building APIs that combine clean data
              modeling, Spring Security, JWT flows, and production-minded reliability.
            </p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>Selected backend and developer-tool work.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-header">
                  <h3>{project.name}</h3>
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                    {project.githubNote && <span>{project.githubNote}</span>}
                  </div>
                </div>

                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {project.description && <p className="project-description">{project.description}</p>}

                {project.features && (
                  <ul className="feature-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Tools and technologies I use to ship backend systems.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map(([group, skills]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="tag-list">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section achievement-section" id="achievements">
          <div>
            <p className="section-kicker">Achievements</p>
            <h2>Smart India Hackathon internal selection winner.</h2>
          </div>
          <p>
            Selected based on the system design and technical depth of the attendance
            management system.
          </p>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <p>(c) {new Date().getFullYear()} Rangaswamy Jangam. All rights reserved.</p>
        <ContactLinks compact />
      </footer>
    </div>
  )
}

export default App
