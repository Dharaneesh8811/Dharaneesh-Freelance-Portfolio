import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import Marquee from './Marquee.jsx'
import { skills, marqueeSkills } from '../data/skills.js'
import SkillOrbit from './SkillOrbit.jsx'

const headline = [
  ['Building', false],
  ['fast,', false],
  ['intuitive', false],
  ['React', true],
  ['interfaces', true],
  ['that', false],
  ['feel', false],
  ['effortless', false],
  ['to', false],
  ['use.', false],
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
}

const word = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
}


export default function Hero() {
  const sectionRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 })

  function handlePointerMove(e) {
    const rect = sectionRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handlePointerLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ overflow: 'hidden', paddingTop: 0, paddingBottom: 0 }}
    >
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div>
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="hero-badge-dot" /> Available for freelance work
          </motion.span>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', marginBottom: 24, marginTop: 20 }}
          >
            {headline.map(([text, accented], i) => (
              <motion.span
                key={i}
                variants={word}
                style={{ display: 'inline-block', marginRight: '0.28em' }}
                className={accented ? 'gradient-text' : undefined}
              >
                {text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 520, marginBottom: 20 }}
          >
            I'm Dharaneesh R — I design and build responsive, user-friendly web applications
            for startups, agencies, and freelance clients who care about the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.68 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Work Together <FiArrowUpRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            style={{ display: 'flex', gap: 32, marginTop: 36, flexWrap: 'wrap',}}
          >
            {[
              ['1+', 'Years building UI'],
              ['6+', 'Projects shipped'],
              ['100%', 'Responsive builds'],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="gradient-text"
                style={{  
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.5rem', 
                  fontWeight: 700,
                  }}>
                  {stat}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          className="hero-visual"
          style={{ rotateX, rotateY, transformPerspective: 900 }}
        >
          <SkillOrbit coreLabel="Dharaneesh" size={400} radiusRatio={0.4} iconSize={20} showTooltips />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ marginTop: 2 }}
        >
        <Marquee items={marqueeSkills} />
        </motion.div>

      <style>{`
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-muted);
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.28);
        }
        .hero-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
          animation: pulseDot 2s ease-in-out infinite;
        }
        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
          70% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(600px circle at 15% 20%, rgba(var(--accent-rgb), 0.18), transparent 60%),
            radial-gradient(500px circle at 85% 60%, rgba(var(--accent-secondary-rgb), 0.14), transparent 55%);
          animation: driftGradient 16s ease-in-out infinite alternate;
        }
        @keyframes driftGradient {
          0% { background-position: 0% 0%, 100% 100%; }
          100% { background-position: 10% 10%, 90% 85%; }
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          padding-top: 8px;
          padding-bottom: 54px;
          min-height: 62vh;
        }
        .hero-visual { will-change: transform; }
       @media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 48px;
    min-height: auto;
  }

  .hero-visual {
    order: -1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 24px;
    transform: none !important;
  }

  .hero-visual > * {
    margin: 0 auto;
  }
}
      `}</style>
    </section>
  )
}
