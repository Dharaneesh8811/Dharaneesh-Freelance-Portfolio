import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Marquee from "./Marquee.jsx";
import { skills, marqueeSkills } from "../data/skills.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.05 },
  }),
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Tools I use to <span className='gradient-text'>bring ideas to life</span>
            </>
          }
          description="A focused stack for building and designing modern, responsive web interfaces."
        />

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="card skill-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="skill-card-top">
                <span
                  className="skill-card-icon"
                  style={{ "--skill-color": skill.color }}
                >
                  <skill.icon size={22} />
                </span>
                <div>
                  <div className="skill-card-name">{skill.name}</div>
                  <div className="skill-card-category">{skill.category}</div>
                </div>
              </div>

              <div className="skill-bar-track">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: 0.15 + i * 0.05,
                  }}
                />
              </div>
              <div className="skill-card-level">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .card.skill-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;

          padding: 18px 20px;
          border-radius: 18px;

          background: rgba(255, 255, 255, 0.10) !important;

          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);

          border: 1px solid rgba(255, 255, 255, 0.45);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.65),
            inset 0 -1px 0 rgba(255, 255, 255, 0.12),
            0 12px 35px rgba(70, 60, 150, 0.10);

          transition:
            transform 0.35s ease,
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .skill-card::after {
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

        .skill-card::before {
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

        .card.skill-card:hover {
          transform: translateY(-8px);

          background: rgba(255, 255, 255, 0.16) !important;

          border-color: rgba(255, 255, 255, 0.65);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.80),
            inset 0 -1px 0 rgba(255, 255, 255, 0.15),
            0 20px 45px rgba(70, 60, 150, 0.14),
            0 0 25px rgba(130, 120, 255, 0.08);
        }

        .skill-card:hover::before {
          left: 150%;
        }

        .skill-card > * {
          position: relative;
          z-index: 3;
        }

        .skill-card-top {
          display: flex;
          align-items: center;

          gap: 14px;

          margin-bottom: 18px;
        }

        .skill-card-icon {
          width: 44px;
          height: 44px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 12px;

          background: rgba(255, 255, 255, 0.14);

          border: 1px solid rgba(255, 255, 255, 0.42);

          color: var(--accent);

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            0 4px 15px rgba(80, 70, 150, 0.06);

          transition:
            transform 0.5s ease,
            background 0.35s ease,
            border-color 0.35s ease,
            color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .skill-card:hover .skill-card-icon {
          background: color-mix(
            in srgb,
            var(--accent) 15%,
            rgba(255, 255, 255, 0.20)
          );

          border-color: color-mix(
            in srgb,
            var(--accent) 45%,
            rgba(255, 255, 255, 0.35)
          );

          color: var(--accent);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.65),
            0 0 20px color-mix(
              in srgb,
              var(--accent) 18%,
              transparent
            );

          transform: rotate(-360deg) scale(1.12);
        }

        .skill-card-name {
          font-weight: 600;
          font-size: 0.98rem;

          color: var(--text);
        }

        .skill-card-category {
          margin-top: 2px;

          color: var(--text-muted);

          font-size: 0.78rem;
        }

        .skill-bar-track {
          height: 6px;

          border-radius: 999px;

          overflow: hidden;

          background: rgba(255, 255, 255, 0.12);

          border: 1px solid rgba(255, 255, 255, 0.30);

          box-shadow:
            inset 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .skill-bar-fill {
          height: 100%;

          border-radius: 999px;

          background: linear-gradient(
            90deg,
            var(--accent),
            var(--accent-secondary)
          );

          box-shadow:
            0 0 8px color-mix(
              in srgb,
              var(--accent) 30%,
              transparent
            );
        }

        .skill-card-level {
          margin-top: 8px;

          text-align: right;

          font-size: 0.76rem;

          color: var(--text-muted);

          font-weight: 500;
        }

        .dark .card.skill-card,
        [data-theme='dark'] .card.skill-card {
          background: rgba(20, 25, 45, 0.16) !important;

          backdrop-filter: blur(14px) saturate(130%);
          -webkit-backdrop-filter: blur(14px) saturate(130%);

          border-color: rgba(255, 255, 255, 0.18);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(0, 0, 0, 0.10),
            0 15px 40px rgba(0, 0, 0, 0.20);
        }

        .dark .card.skill-card:hover,
        [data-theme='dark'] .card.skill-card:hover {
          background: rgba(35, 40, 65, 0.22) !important;

          border-color: rgba(255, 255, 255, 0.30);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.24),
            0 22px 50px rgba(0, 0, 0, 0.28);
        }

        .dark .skill-card-icon,
        [data-theme='dark'] .skill-card-icon {
          background: rgba(255, 255, 255, 0.06);

          border-color: rgba(255, 255, 255, 0.20);
        }

        .dark .skill-bar-track,
        [data-theme='dark'] .skill-bar-track {
          background: rgba(255, 255, 255, 0.06);

          border-color: rgba(255, 255, 255, 0.18);
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .skill-card {
            padding: 16px;
          }
        }

        @media (max-width: 420px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
