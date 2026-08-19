import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { whyChooseMe } from "../data/whyChooseMe.js";

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6 });

  return (
    <>
      <motion.div
        className={`why-node ${inView ? "active" : ""}`}
        animate={inView ? { scale: 1.08 } : { scale: 1 }}
        transition={{ duration: 0.25 }}
        style={{ gridRow: index + 1 }}
      >
        <item.icon size={20} />
      </motion.div>

      <motion.div
        ref={ref}
        className={`card why-card ${inView ? "active" : ""}`}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{ gridRow: index + 1 }}
      >
        <div className="why-card-heading">
          <span className="why-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
        </div>
        <p>{item.description}</p>
      </motion.div>
    </>
  );
}

export default function WhyChooseMe() {
  const timelineRef = useRef(null);
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 30%'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="why-choose-me" ref={sectionRef}
      className="why-section"
      >
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Me"
          title={
          <>
          What working with me <span className='gradient-text'>actually looks like</span>
          </>}
          description="Five things I hold myself to on every project, from the first call to handover."
        />

        <div className="why-timeline" ref={timelineRef}>
          <div className="timeline-line" />
          <motion.div
            className="timeline-progress"
            style={{ height: progressHeight }}
          />

          {whyChooseMe.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
      <style>{`
      
      .why-section {
        position: relative;
      }

      .why-timeline {
        position: relative;
        display: grid;
        grid-template-columns: 64px 1fr;
        column-gap: 28px;
        row-gap: 26px;
        margin-top: 36px;
      }

      .timeline-line {
        position: absolute;
        left: 31px;
        top: 28px;
        bottom: 28px;
        width: 2px;
        background: var(--timeline-line);
      }

      :root {
        --timeline-line: rgba(15, 23, 42, 0.12);
      }

      .dark {
        --timeline-line: rgba(255, 255, 255, 0.08);
      }

      .timeline-progress {
        position: absolute;
        left: 31px;
        top: 28px;
        width: 2px;
        background: linear-gradient(
          to bottom,
          #8b5cf6,
          #6366f1,
          #4f46e5
        );
        box-shadow: 0 0 22px rgba(99, 102, 241, 0.55);
        transform-origin: top;
      }

      .why-node {
        grid-column: 1;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--node-bg);
        border: 1px solid rgba(99, 102, 241, 0.22);
        color: #6366f1;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }

      :root {
        --node-bg: #ffffff;
      }

      .dark {
        --node-bg: #081325;
      }

      .why-node.active,
      .why-node:hover {
        transform: translateX(10px) translateY(-4px);

        border-color: rgba(99, 102, 241, 0.5);

        box-shadow:
          0 18px 36px rgba(0, 0, 0, 0.28),
          0 0 24px rgba(99, 102, 241, 0.18),
          inset 0 1px 0 rgba(255, 255, 255, 0.04);

        background: linear-gradient(
          180deg,
          rgba(14, 24, 46, 0.96),
          rgba(10, 18, 36, 0.98)
        );

        color: #f8fafc;
      }
        .why-card:hover .why-card-heading h3 {
        color: #f8fafc;
      }

      .why-card:hover p {
        color: #cbd5e1;
      }

      .why-card:hover .why-index {
        color: #a5b4fc;
      }

      .why-card {
        --card-text: var(--text);
        --card-muted: var(--text-muted);

        color: var(--card-text);

        position: relative;
        overflow: hidden;
        grid-column: 2;
        padding: 24px 28px;
        border-radius: 22px;

        /* Theme-aware */
        background: var(--card-bg);
        border: 1px solid var(--border);

        color: var(--text);

        transition:
          transform 0.35s ease,
          border-color 0.35s ease,
          box-shadow 0.35s ease,
          background 0.35s ease;
      }

      .why-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: -120%;
        width: 60%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent,
          rgba(99, 102, 241, 0.18),
          rgba(129, 140, 248, 0.35),
          transparent
        );
        transition: left 0.7s ease;
      }

      .why-card:hover {
        transform: translateX(10px) translateY(-4px);
        border-color: rgba(85, 87, 213, 0.5);

        // background: linear-gradient(
        //   180deg,
        //   rgba(14, 24, 46, 0.96),
        //   rgba(10, 18, 36, 0.98)
        // );
      }

      .why-card:hover::before {
        left: 140%;
      }

      .why-card-heading {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 10px;
      }

      .why-card-heading h3 {
        font-size: 1.08rem;
        color: var(--card-text);
      }

      .why-card:hover .why-card-heading h3 {
        color: var(--card-text);
      }

      .why-card:hover p {
        color: var(--card-muted);
      }

      .why-index {
        font-size: 0.84rem;
        font-weight: 700;
        color: #818cf8;
        letter-spacing: 0.08em;
      }

      .why-card p {
        color: var(--card-muted);
        line-height: 1.6;
      }

      @media (max-width: 640px) {
        .why-timeline {
          grid-template-columns: 46px 1fr;
          column-gap: 18px;
        }

        .timeline-line,
        .timeline-progress {
          left: 22px;
        }

      .why-node {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #081325;
        border: 1px solid rgba(99, 102, 241, 0.22);
        color: #818cf8;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:
          transform 0.3s ease,
          background 0.3s ease,
          border-color 0.3s ease,
          box-shadow 0.3s ease;
      }

      .why-node:hover {
        transform: scale(1.12) rotate(6deg);
        background: #6366f1;
        color: #ffffff;
        border-color: rgba(129, 140, 248, 0.9);
        box-shadow:
          0 0 0 10px rgba(99, 102, 241, 0.12),
          0 0 28px rgba(99, 102, 241, 0.45);
      }

        .why-card {
          padding: 20px;
        }
      }
    `}</style>
    </section>
  );
}
