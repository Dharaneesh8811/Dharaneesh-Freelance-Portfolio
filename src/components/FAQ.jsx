import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";

const faqs = [
  {
    question: "What type of websites do you build?",
    answer:
      "I build responsive landing pages, business websites, portfolio websites, and modern React-based web applications. I focus on clean UI, responsive layouts, and a smooth user experience.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. I make websites responsive for mobile, tablet, laptop, and desktop screens so the design works smoothly across different devices.",
  },
  {
    question: "Can you build a website from a Figma design?",
    answer:
      "Yes. I can convert Figma designs into responsive and interactive websites using HTML, CSS, JavaScript, React, and other suitable frontend technologies.",
  },
  {
    question: "Can you add API integrations?",
    answer:
      "Yes. I can integrate REST APIs and connect your frontend with external services such as product APIs, weather APIs, movie APIs, and other required services.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different, so I provide custom pricing based on the number of pages, features, design requirements, integrations, and project timeline. Contact me with your requirements and I'll provide a clear quote.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project scope. A simple landing page can take a few days, while a larger React website or web application may take longer. I'll provide an estimated timeline before starting.",
  },
  {
    question: "Can you help after the website is launched?",
    answer:
      "Yes. I can help with updates, bug fixes, content changes, improvements, and other frontend maintenance after the website is launched.",
  },
  {
    question: "How can I start a project with you?",
    answer:
      "Simply send me a message through the contact section with a short description of your project, your requirements, and your preferred timeline. I'll get back to you and we can discuss the details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions you <span className='gradient-text'>may have</span>
            </>
          }
          description="A few answers to help you understand how I work and what to expect."
        />

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <FiPlus size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                    >
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="faq-bottom"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>Still have a question?</p>

          <a href="#contact" className="faq-contact-btn">
            Let's talk about your project
            <span>↗</span>
          </a>
        </motion.div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;

          border-radius: 20px;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.10),
              rgba(255, 255, 255, 0.045)
            );

          border: 1px solid rgba(255, 255, 255, 0.22);

          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            inset 0 -1px 0 rgba(255, 255, 255, 0.06),
            0 12px 35px rgba(70, 60, 150, 0.08);

          transition:
            transform 0.35s ease,
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        /* White flash / light sweep */
        .faq-card::before {
          content: "";
          position: absolute;

          top: -30%;
          left: -120%;

          width: 45%;
          height: 160%;

          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.42),
            rgba(255, 255, 255, 0.10),
            transparent
          );

          transform: skewX(-20deg);

          transition: left 0.85s ease;

          pointer-events: none;
          z-index: 1;
        }

        /* Top glass highlight */
        .faq-card::after {
          content: "";

          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.7),
            transparent
          );

          opacity: 0.7;
          pointer-events: none;
          z-index: 2;
        }

        .faq-card:hover {
          transform: translateY(-3px);

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.15),
              rgba(255, 255, 255, 0.065)
            );

          border-color: rgba(255, 255, 255, 0.38);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.48),
            0 18px 45px rgba(70, 60, 150, 0.14),
            0 0 25px rgba(var(--accent-rgb), 0.06);
        }

        .faq-card:hover::before {
          left: 150%;
        }

        .faq-card-open {
          border-color: rgba(var(--accent-rgb), 0.35);
        }

        .faq-question {
          position: relative;
          z-index: 3;

          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          padding: 22px 24px;

          color: var(--text);
          text-align: left;

          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;

          cursor: pointer;
        }

        .faq-question > span:first-child {
          line-height: 1.5;
        }

        .faq-icon {
          flex-shrink: 0;

          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          color: var(--accent);

          background: rgba(var(--accent-rgb), 0.08);

          border: 1px solid rgba(var(--accent-rgb), 0.22);

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .faq-card:hover .faq-icon,
        .faq-card-open .faq-icon {
          background: rgba(var(--accent-rgb), 0.14);

          border-color: rgba(var(--accent-rgb), 0.38);

          box-shadow:
            0 0 18px rgba(var(--accent-rgb), 0.12);
        }

        .faq-answer-wrapper {
          position: relative;
          z-index: 3;

          overflow: hidden;
        }

        .faq-answer {
          padding: 0 70px 23px 24px;

          color: var(--text-muted);

          font-size: 0.94rem;
          line-height: 1.75;
        }

        .faq-bottom {
          max-width: 900px;

          margin: 35px auto 0;

          padding: 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          border-radius: 18px;

          background: rgba(var(--accent-rgb), 0.055);

          border: 1px solid rgba(var(--accent-rgb), 0.16);

          text-align: center;
        }

        .faq-bottom p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .faq-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          color: var(--accent);

          font-weight: 600;
          font-size: 0.92rem;

          transition:
            gap 0.25s ease,
            color 0.25s ease;
        }

        .faq-contact-btn:hover {
          gap: 12px;
          color: var(--text);
        }

        .faq-contact-btn span {
          font-size: 1.1rem;
        }

        /* Dark theme */
        [data-theme="dark"] .faq-card {
          background:
            linear-gradient(
              135deg,
              rgba(25, 30, 55, 0.32),
              rgba(15, 20, 40, 0.20)
            );

          border-color: rgba(255, 255, 255, 0.15);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.16),
            0 15px 40px rgba(0, 0, 0, 0.18);
        }

        [data-theme="dark"] .faq-card:hover {
          background:
            linear-gradient(
              135deg,
              rgba(40, 45, 75, 0.38),
              rgba(20, 25, 50, 0.25)
            );

          border-color: rgba(255, 255, 255, 0.27);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 20px 50px rgba(0, 0, 0, 0.25),
            0 0 25px rgba(var(--accent-rgb), 0.05);
        }

        @media (max-width: 640px) {
          .faq-section {
            padding: 75px 0;
          }

          .faq-list {
            gap: 10px;
          }

          .faq-question {
            padding: 18px 16px;

            font-size: 0.92rem;
          }

          .faq-icon {
            width: 30px;
            height: 30px;
          }

          .faq-answer {
            padding: 0 16px 20px;

            font-size: 0.88rem;
            line-height: 1.7;
          }

          .faq-bottom {
            flex-direction: column;
            padding: 22px 16px;
          }

          .faq-contact-btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}