import { motion } from 'framer-motion'
import { FiCode, FiFeather } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" style={{ background: 'rgba(var(--bg-secondary-rgb), 0.55)', backdropFilter: 'blur(6px)' }}>
      <div className="container about-grid">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <span className="eyebrow">About Me</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: 20 }}>
            I build interfaces I'd actually want to use.
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '1.05rem' }}>
            I'm a React frontend developer who spends most of my time in the space between design
            and code — turning ideas and Figma files into responsive, intuitive web applications
            that hold up under real use.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.05rem' }}>
            I care about the details most people scroll past: the way a button responds to a
            hover, how a layout reflows on a small screen, whether a form actually feels easy to
            fill out. That attention to UI/UX is what separates a site that works from one that
            feels good to use.
          </p>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={iconBadge}>
                <FiCode size={18} />
              </span>
              <div>
                <div style={{ fontWeight: 600 }}>Frontend Development</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>React, JavaScript, BootStrap</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={iconBadge}>
                <FiFeather size={18} />
              </span>
              <div>
                <div style={{ fontWeight: 600 }}>UI/UX Design</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Figma, design systems</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="card about-card"
        >
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 20 }}>
            How I like to work
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'Start from the user, not the component library',
              'Ship in small, reviewable pieces',
              'Keep code readable for the next developer — including future me',
              'Treat responsive design as a requirement, not a pass',
            ].map((line) => (
              <li key={line} style={{ display: 'flex', gap: 12, color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                {line}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: start;
        }
.about-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;

  padding: 40px;
  margin-top: 50px;

  border-radius: 24px;

  /* Transparent glass */
  background: rgba(255, 255, 255, 0.10) !important;

  /* Frosted glass */
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  /* Glass border */
  border: 1px solid rgba(255, 255, 255, 0.45);

  /* Glass depth */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.65),
    inset 0 -1px 0 rgba(255, 255, 255, 0.12),
    0 12px 35px rgba(70, 60, 150, 0.10);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
}


/* =========================================================
   TOP GLASS SHINE
========================================================= */

.about-card::after {
  content: '';

  position: absolute;

  top: 0;
  left: 8%;
  right: 8%;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.85),
    transparent
  );

  opacity: 0.8;

  pointer-events: none;
  z-index: 1;
}


/* =========================================================
   LIGHT SWEEP
========================================================= */

.about-card::before {
  content: '';

  position: absolute;

  top: -20%;
  left: -120%;

  width: 45%;
  height: 140%;

  background: linear-gradient(
    110deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.45),
    rgba(170, 180, 255, 0.12),
    transparent
  );

  transform: skewX(-20deg);

  transition: left 0.85s ease;

  pointer-events: none;
  z-index: 2;
}


/* =========================================================
   HOVER
========================================================= */

.about-card:hover {
  transform: translateY(-8px);

  background: rgba(255, 255, 255, 0.16) !important;

  border-color: rgba(255, 255, 255, 0.65);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.80),
    inset 0 -1px 0 rgba(255, 255, 255, 0.15),
    0 20px 45px rgba(70, 60, 150, 0.14),
    0 0 25px rgba(130, 120, 255, 0.08);
}

.about-card:hover::before {
  left: 150%;
}


/* =========================================================
   KEEP CONTENT ABOVE GLASS EFFECT
========================================================= */

.about-card > * {
  position: relative;
  z-index: 3;
}


/* =========================================================
   DARK MODE
========================================================= */

.dark .about-card,
[data-theme='dark'] .about-card {
  background: rgba(20, 25, 45, 0.16) !important;

  backdrop-filter: blur(14px) saturate(130%);
  -webkit-backdrop-filter: blur(14px) saturate(130%);

  border-color: rgba(255, 255, 255, 0.18);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -1px 0 rgba(0, 0, 0, 0.10),
    0 15px 40px rgba(0, 0, 0, 0.20);
}

.dark .about-card:hover,
[data-theme='dark'] .about-card:hover {
  background: rgba(35, 40, 65, 0.22) !important;

  border-color: rgba(255, 255, 255, 0.30);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.24),
    0 22px 50px rgba(0, 0, 0, 0.28);
}
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}

const iconBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: 12,
  background: 'rgba(var(--accent-rgb), 0.14)',
  color: 'var(--accent-hover)',
  flexShrink: 0,
}
