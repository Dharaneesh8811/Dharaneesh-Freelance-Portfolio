import { motion } from "framer-motion";
import {
  FiSearch,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const processSteps = [
  {
    number: "01",
    icon: FiSearch,
    title: "Discovery",
    description:
      "I understand your business, goals, target audience, and what you need from the website.",
  },
  {
    number: "02",
    icon: FiPenTool,
    title: "Design",
    description:
      "I create a clean and modern interface focused on usability, branding, and a smooth user experience.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Development",
    description:
      "I turn the design into a responsive website using clean, scalable, and efficient frontend code.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Delivery",
    description:
      "I test the website across devices, fix issues, optimize the experience, and deliver the final project.",
  },
];

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function MyProcess() {
  return (
    <section id="process">
      <div className="container">

        {/* Heading */}
        <div className="process-heading">
          <span className="process-eyebrow">My Process</span>

          <h2>
            From idea to{" "}
            <span className="gradient-text">launch.</span>
          </h2>

          <p>
            A simple and transparent process to turn your ideas into
            polished, responsive web experiences.
          </p>
        </div>

        {/* Process Cards */}
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                className="process-card"
                custom={index}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                {/* White flash */}
                <div className="process-flash" />

                <div className="process-top">
                  <span className="process-number">
                    {step.number}
                  </span>

                  <span className="process-icon">
                    <Icon size={21} />
                  </span>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        #process {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
        }

        /* ---------------- HEADING ---------------- */

        .process-heading {
          max-width: 680px;
          margin-bottom: 48px;
        }

        .process-eyebrow {
          display: inline-block;
          margin-bottom: 14px;

          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .process-heading h2 {
          margin: 0 0 16px;

          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: var(--text);
        }

        .process-heading p {
          margin: 0;

          max-width: 600px;

          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
        }

        /* ---------------- GRID ---------------- */

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ---------------- CARD ---------------- */

        .process-card {
          position: relative;
          isolation: isolate;
          overflow: hidden;

          min-height: 290px;
          padding: 28px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.08);

          border: 1px solid rgba(255, 255, 255, 0.35);

          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            inset 0 -1px 0 rgba(255, 255, 255, 0.08),
            0 15px 40px rgba(70, 60, 150, 0.08);

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        /* ---------------- WHITE FLASH ---------------- */

        .process-flash {
          position: absolute;

          top: -30%;
          left: -120%;

          width: 45%;
          height: 160%;

          pointer-events: none;

          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 25%,
            rgba(255, 255, 255, 0.08) 40%,
            rgba(255, 255, 255, 0.75) 50%,
            rgba(255, 255, 255, 0.12) 60%,
            transparent 75%
          );

          transform: skewX(-20deg);

          transition: left 0.8s ease;

          z-index: 1;
        }

        .process-card:hover .process-flash {
          left: 150%;
        }

        /* ---------------- HOVER ---------------- */

        .process-card:hover {
          transform: translateY(-8px);

          background: rgba(255, 255, 255, 0.14);

          border-color: rgba(255, 255, 255, 0.65);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.75),
            0 22px 50px rgba(70, 60, 150, 0.14),
            0 0 25px rgba(130, 120, 255, 0.08);
        }

        /* ---------------- CARD CONTENT ---------------- */

        .process-card > *:not(.process-flash) {
          position: relative;
          z-index: 2;
        }

        .process-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 35px;
        }

        .process-number {
          font-family: var(--font-display);

          font-size: 0.85rem;
          font-weight: 700;

          color: var(--accent);

          opacity: 0.9;
        }

        .process-icon {
          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;

          color: var(--accent);

          background: rgba(255, 255, 255, 0.10);

          border: 1px solid rgba(255, 255, 255, 0.32);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.5);

          transition:
            transform 0.4s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .process-card:hover .process-icon {
          transform: rotate(-360deg) scale(1.08);

          background: rgba(255, 255, 255, 0.18);

          border-color: rgba(255, 255, 255, 0.6);
        }

        .process-card h3 {
          margin: 0 0 12px;

          font-family: var(--font-display);

          font-size: 1.2rem;
          font-weight: 700;

          color: var(--text);
        }

        .process-card p {
          margin: 0;

          color: var(--text-muted);

          font-size: 0.9rem;
          line-height: 1.7;
        }

        /* ---------------- ARROW ---------------- */

        .process-arrow {
          position: absolute;

          right: 20px;
          bottom: 20px;

          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--text-muted);

          opacity: 0.5;

          transition:
            transform 0.3s ease,
            color 0.3s ease,
            opacity 0.3s ease;
        }

        .process-card:hover .process-arrow {
          transform: translateX(5px);

          color: var(--accent);

          opacity: 1;
        }

        /* ---------------- DARK MODE ---------------- */

        [data-theme="dark"] .process-card {
          background: rgba(20, 25, 45, 0.18);

          border-color: rgba(255, 255, 255, 0.18);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            0 15px 40px rgba(0, 0, 0, 0.20);
        }

        [data-theme="dark"] .process-card:hover {
          background: rgba(35, 40, 65, 0.26);

          border-color: rgba(255, 255, 255, 0.32);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            0 22px 50px rgba(0, 0, 0, 0.28);
        }

        /* ---------------- TABLET ---------------- */

        @media (max-width: 960px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-card {
            min-height: 270px;
          }
        }

        /* ---------------- MOBILE ---------------- */

        @media (max-width: 640px) {
          #process {
            padding: 75px 0;
          }

          .process-heading {
            text-align: center;
            margin: 0 auto 38px;
          }

          .process-heading p {
            font-size: 0.95rem;
          }

          .process-grid {
            grid-template-rows: 1fr;
            gap: 16px;
          }

          .process-card {
            min-height: auto;
            padding: 24px;
          }

          .process-top {
            margin-bottom: 24px;
          }

          .process-card p {
            padding-right: 15px;
          }

          .process-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}