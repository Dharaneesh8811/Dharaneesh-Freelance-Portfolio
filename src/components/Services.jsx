import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/services.js";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.06 },
  }),
};

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          description="From a single landing page to a full product interface — here's where I can help."
        />

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="card service-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="service-top">
                <span className="service-icon">
                  <service.icon size={22} />
                </span>

                <span className="service-arrow">
                  <FiArrowUpRight />
                </span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .service-card {
            position: relative;
            overflow: hidden;
            isolation: isolate;

            padding: 30px;
            border-radius: 24px;

            background: rgba(255, 255, 255, 0.10);

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

          .service-card::after {
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

          .service-card::before {
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

          .service-card:hover {
            transform: translateY(-8px);

            /*
              Slightly brighter glass on hover
            */
            background: rgba(255, 255, 255, 0.16);

            border-color: rgba(255, 255, 255, 0.65);

            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.80),
              inset 0 -1px 0 rgba(255, 255, 255, 0.15),
              0 20px 45px rgba(70, 60, 150, 0.14),
              0 0 25px rgba(130, 120, 255, 0.08);
          }

          .service-card:hover::before {
            left: 150%;
          }

          .service-card > * {
            position: relative;
            z-index: 3;
          }

          .service-top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 22px;
          }

          .service-icon {
            width: 56px;
            height: 56px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border-radius: 18px;

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
              box-shadow 0.35s ease;
          }

          .service-card:hover .service-icon {
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

            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.65),
              0 0 20px color-mix(
                in srgb,
                var(--accent) 18%,
                transparent
              );

            transform: rotate(-360deg) scale(1.12);
          }

          .service-arrow {
            width: 36px;
            height: 36px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: rgba(255, 255, 255, 0.10);

            border: 1px solid rgba(255, 255, 255, 0.30);

            color: var(--accent);

            font-size: 1rem;

            opacity: 0;

            transform: translateX(-8px);

            transition:
              opacity 0.3s ease,
              transform 0.3s ease,
              background 0.3s ease;
          }

          .service-card:hover .service-arrow {
            opacity: 1;
            transform: translateX(0);

            background: rgba(255, 255, 255, 0.18);
          }

          .service-title {
            font-size: 1.15rem;
            font-weight: 700;

            margin-bottom: 12px;

            color: var(--text);
          }

          .service-description {
            color: var(--text-muted);

            font-size: 0.95rem;
            line-height: 1.7;
          }

          .dark .service-card,
          [data-theme='dark'] .service-card {
            background: rgba(20, 25, 45, 0.16);

            backdrop-filter: blur(14px) saturate(130%);
            -webkit-backdrop-filter: blur(14px) saturate(130%);

            border-color: rgba(255, 255, 255, 0.18);

            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.18),
              inset 0 -1px 0 rgba(0, 0, 0, 0.10),
              0 15px 40px rgba(0, 0, 0, 0.20);
          }

          .dark .service-card:hover,
          [data-theme='dark'] .service-card:hover {
            background: rgba(35, 40, 65, 0.22);

            border-color: rgba(255, 255, 255, 0.30);

            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.24),
              0 22px 50px rgba(0, 0, 0, 0.28);
          }

          .dark .service-icon,
          [data-theme='dark'] .service-icon {
            background: rgba(255, 255, 255, 0.06);

            border-color: rgba(255, 255, 255, 0.20);
          }

          .dark .service-arrow,
          [data-theme='dark'] .service-arrow {
            background: rgba(255, 255, 255, 0.05);

            border-color: rgba(255, 255, 255, 0.16);
          }

          @media (max-width: 960px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
          }
      `}</style>
    </section>
  );
}
