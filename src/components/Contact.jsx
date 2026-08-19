import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiPhone, FiLinkedin } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    emailjs
      .sendForm(
        "service_lf54dnw",
        "template_cjjbhzd",
        form.current,
        {
          publicKey: "deR4_ZGG94LzrG2zF",
        }
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSending(false);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">

        <SectionHeading
          eyebrow="Contact"
          title={<>
          Let's build <span className='gradient-text'> something together</span>
          </>}
          description="Have a project in mind? Tell me what you're looking to build and I'll get back to you."
        />

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card">

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FiMail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:dharaneeshr.official@gmail.com">
                    dharaneeshr.official@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FiPhone size={20} />
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+91 93635 78811">
                    +91 93635 78811
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FiLinkedin size={20} />
                </div>

                <div>
                  <span>LinkedIn</span>
                  <a href="https://linkedin.com/in/dharaneeshr-10d11d">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <p>Salem, Tamil Nadu</p>
                </div>
              </div>

            </div>

            <div className="contact-note">
              <span className="contact-status-dot"></span>
              Currently available for freelance projects
            </div>
          </motion.div>


          {/* FORM */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <form ref={form} onSubmit={sendEmail}>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

              </div>


              <div className="form-group">
                <label htmlFor="project">Project type</label>

                <select
                  id="project"
                  name="project_type"
                  required
                >
                  <option value="">
                    Select a project type
                  </option>

                  <option value="Landing Page">
                    Landing Page
                  </option>

                  <option value="Business Website">
                    Business Website
                  </option>

                  <option value="React Website">
                    React Website
                  </option>

                  <option value="Website Redesign">
                    Website Redesign
                  </option>

                  <option value="Web Application">
                    Web Application
                  </option>

                  <option value="Bug Fixing">
                    Bug Fixing
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>


              {/* <div className="form-group">
                <label htmlFor="budget">Budget</label>

                <select
                  id="budget"
                  name="budget"
                >
                  <option value="">
                    Select your budget
                  </option>

                  <option value="₹5,000 - ₹15,000">
                    ₹5,000 - ₹15,000
                  </option>

                  <option value="₹15,000 - ₹30,000">
                    ₹15,000 - ₹30,000
                  </option>

                  <option value="₹30,000 - ₹60,000">
                    ₹30,000 - ₹60,000
                  </option>

                  <option value="₹60,000+">
                    ₹60,000+
                  </option>

                  <option value="Not sure">
                    I'm not sure yet
                  </option>
                </select>
              </div> */}


              <div className="form-group">
                <label htmlFor="message">Tell me about your project</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me what you want to build..."
                  required
                ></textarea>
              </div>


              {success && (
                <div className="form-message success">
                  <FiCheckCircle />
                  Thanks! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="form-message error">
                  {error}
                </div>
              )}


              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={sending}
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend />
                  </>
                )}
              </button>

            </form>

          </motion.div>

        </div>
      </div>


      <style>{`

        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 32px;
          align-items: start;
          margin-top: 40px;
        }

        .contact-info-card,
        .contact-form-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;

          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.30);

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.45),
            0 15px 40px rgba(70,60,150,0.10);

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        /* WHITE FLASH */

        .contact-info-card::before,
        .contact-form-card::before {
          content: "";
          position: absolute;

          top: -20%;
          left: -120%;

          width: 45%;
          height: 140%;

          background: linear-gradient(
            110deg,
            transparent,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.55),
            rgba(180,190,255,0.15),
            transparent
          );

          transform: skewX(-20deg);

          transition: left 0.8s ease;

          pointer-events: none;
        }

        .contact-info-card:hover::before,
        .contact-form-card:hover::before {
          left: 150%;
        }

        .contact-info-card:hover,
        .contact-form-card:hover {
          transform: translateY(-5px);

          border-color: rgba(255,255,255,0.55);

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.60),
            0 22px 50px rgba(70,60,150,0.15);
        }

        .contact-info-card {
          padding: 28px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 0;
        }

        .contact-info-item + .contact-info-item {
          border-top: 1px solid var(--border);
        }

        .contact-icon {
          width: 46px;
          height: 46px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 14px;

          color: var(--accent);

          background: rgba(var(--accent-rgb),0.10);

          border: 1px solid rgba(var(--accent-rgb),0.25);
        }

        .contact-info-item span {
          display: block;
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-bottom: 4px;
        }

        .contact-info-item a,
        .contact-info-item p {
          color: var(--text);
          font-size: 0.95rem;
        }

        .contact-info-item a:hover {
          color: var(--accent);
        }

        .contact-note {
          margin-top: 16px;
          color: var(--text-muted);
          font-size: 0.85rem;

          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52,211,153,0.6);
        }

        .contact-form-card {
          padding: 30px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;

          font-size: 0.85rem;
          font-weight: 600;

          color: var(--text);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {

          width: 100%;

          padding: 12px 14px;

          border-radius: 12px;

          border: 1px solid var(--border);

          background: rgba(255,255,255,0.06);

          color: var(--text);

          outline: none;

          font-family: inherit;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {

          border-color: var(--accent);

          background: rgba(var(--accent-rgb),0.05);

          box-shadow:
            0 0 0 3px rgba(var(--accent-rgb),0.10);
        }

        .form-group select option {
          background: var(--bg-card);
          color: var(--text);
        }

        .contact-submit {
          width: 100%;
          justify-content: center;
          gap: 8px;
          margin-top: 4px;
        }

        .contact-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .form-message {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 12px 14px;

          border-radius: 12px;

          margin-bottom: 16px;

          font-size: 0.85rem;
        }

        .form-message.success {
          color: #34d399;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.20);
        }

        .form-message.error {
          color: #f87171;
          background: rgba(248,113,113,0.08);
          border: 1px solid rgba(248,113,113,0.20);
        }


        /* DARK MODE */

        [data-theme="dark"] .contact-info-card,
        [data-theme="dark"] .contact-form-card {

          background: rgba(20,25,45,0.20);

          border-color: rgba(255,255,255,0.18);

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.16),
            0 15px 40px rgba(0,0,0,0.20);
        }

        [data-theme="dark"] .contact-info-card:hover,
        [data-theme="dark"] .contact-form-card:hover {

          background: rgba(35,40,65,0.28);

          border-color: rgba(255,255,255,0.30);
        }


        @media (max-width: 800px) {

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 640px) {

          .contact-info-card,
          .contact-form-card {
            padding: 20px;
          }

          .contact-info-item {
            padding: 14px 0;
          }

        }

      `}</style>
    </section>
  );
}