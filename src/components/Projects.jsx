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
          title={
            <>
              A few things <span className='gradient-text'>I've built</span>
            </>
          }
          description="Selected projects that show how I approach structure, state, and interface design."
        />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card">
  {/* Normal content */}
  <div className="project-content">
    <span className="project-number">
      {String(i + 1).padStart(2, '0')}
    </span>

    <h3>{project.title}</h3>

    <p>{project.description}</p>

    <div className="project-tags">
      {project.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  </div>

  {/* Hover layer */}
  <div className="project-hover">
    <img
      src={project.image}
      alt={project.title}
      className="project-hover-image"
    />

    <div className="project-hover-overlay">
      <h3>{project.title}</h3>

      <div className="project-links">
        {project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            rel="noopener noreferrer"
            className="project-link primary"
          >
            Live Demo ↗
          </a>
        )}

        {project.githubUrl !== '#' && (
          <a
            href={project.githubUrl}
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  </div>
</div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .project-card {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: 20px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  isolation: isolate;
}

.project-card:hover {
  transform: translateY(-6px);

  border-color: rgba(255, 255, 255, 0.35);

  box-shadow:
    0 20px 45px rgba(60, 70, 180, 0.18);
}
    .project-content {
  position: relative;
  z-index: 1;

  height: 100%;
  padding: 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-number {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.project-content h3 {
  font-size: 1.35rem;
  margin: 0 0 10px;
  color: var(--text);
}

.project-content p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;

  max-width: 500px;
  margin-bottom: 16px;
}

.project-tags {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}

.project-tags span {
  padding: 5px 10px;

  border-radius: 999px;

  font-size: 0.7rem;

  color: var(--accent);

  background: rgba(var(--accent-rgb), 0.08);

  border: 1px solid rgba(var(--accent-rgb), 0.22);
}


/* =========================
   HOVER IMAGE
========================= */

.project-hover {
  position: absolute;
  inset: 0;

  z-index: 5;

  opacity: 0;

  transform: scale(1.04);

  transition:
    opacity 0.35s ease,
    transform 0.45s ease;

  pointer-events: none;
}

.project-card:hover .project-hover {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
  .project-card::before {
  content: "";

  position: absolute;

  top: -30%;
  left: -120%;

  width: 45%;
  height: 160%;

  background: linear-gradient(
    110deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.45),
    rgba(170, 180, 255, 0.12),
    transparent
  );

  transform: skewX(-20deg);

  transition: left 0.8s ease;

  z-index: 10;

  pointer-events: none;
}

.project-card:hover::before {
  left: 150%;
}


/* IMAGE */

.project-hover-image {
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;
}


/* DARK OVERLAY */

.project-hover::after {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(8, 10, 25, 0.15),
      rgba(8, 10, 25, 0.88)
    );

  z-index: 1;
}


/* =========================
   HOVER CONTENT
========================= */

.project-hover-overlay {
  position: absolute;

  left: 24px;
  right: 24px;
  bottom: 22px;

  z-index: 2;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 20px;
}

.project-hover-overlay h3 {
  color: white;

  font-size: 1.15rem;

  margin: 0;
}


/* LINKS */

.project-links {
  display: flex;
  gap: 8px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 9px 14px;

  border-radius: 10px;

  font-size: 0.78rem;
  font-weight: 600;

  color: white;

  background: rgba(255, 255, 255, 0.10);

  border: 1px solid rgba(255, 255, 255, 0.25);

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.project-link:hover {
  background: rgba(255, 255, 255, 0.22);

  transform: translateY(-2px);
}

.project-link.primary {
  background: var(--accent);

  border-color: transparent;
}

    .project-link.primary:hover {
      background: var(--accent);
      filter: brightness(1.12);
    }

    @media (max-width: 860px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
          @media (max-width: 640px) {

           .projects-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .project-card {
    height: 260px;
  }

  .project-hover {
    opacity: 1;
    transform: none;
  }

  .project-content {
    opacity: 0;
  }

  .project-hover-overlay {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
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
