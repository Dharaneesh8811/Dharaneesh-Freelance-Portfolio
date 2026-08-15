import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/projects.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="A few things I've built"
          description="Selected projects that show how I approach structure, state, and interface design."
        />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="card project-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="project-thumb" style={{ '--project-accent': project.accent }} role="img" aria-label={`${project.title} preview`}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-body">
                <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: 18 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <a href={project.liveUrl} className="btn btn-primary" style={{ flex: 1, padding: '11px 18px', fontSize: '0.88rem' }}>
                    Live Demo <FiExternalLink size={15} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '11px 18px', fontSize: '0.88rem' }}
                  >
                    <FiGithub size={15} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .project-card { overflow: hidden; display: flex; flex-direction: column; transition: transform 0.3s ease, border-color 0.3s ease; }
        .project-card:hover { transform: translateY(-6px); border-color: var(--accent); }
        .project-thumb {
          aspect-ratio: 15 / 9;
          background:
            radial-gradient(120% 140% at 10% 0%, color-mix(in srgb, var(--project-accent) 22%, transparent), transparent 60%),
            var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-body { padding: 28px; }
        @media (max-width: 860px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

function ProjectGlyph() {
  return (
    <svg width="120" height="72" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="118" height="70" rx="10" stroke="var(--border)" strokeWidth="1" />
      <circle cx="16" cy="14" r="2.5" fill="var(--project-accent)" opacity="0.8" />
      <circle cx="26" cy="14" r="2.5" fill="var(--border)" />
      <circle cx="36" cy="14" r="2.5" fill="var(--border)" />
      <rect x="14" y="28" width="60" height="6" rx="3" fill="var(--project-accent)" opacity="0.65" />
      <rect x="14" y="40" width="92" height="5" rx="2.5" fill="var(--border)" />
      <rect x="14" y="50" width="70" height="5" rx="2.5" fill="var(--border)" />
    </svg>
  )
}
