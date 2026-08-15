import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'dharaneeshr.official@gmail.com', href: 'mailto:dharaneeshr.official@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 93635 78811', href: 'tel:+91 9363578811' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'LinkedIn', href: 'https://www.linkedin.com/in/dharaneeshr-10d11d' },
  { icon: FiGithub, label: 'GitHub', value: 'GitHub', href: 'https://github.com/Dharaneesh8811' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
  e.preventDefault();
  setStatus('sending');

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('EmailJS Error:', error);
    setStatus('error');
  }
}

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-heading"
          style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Contact
          </span>
          <h2>Let's Build Something Great Together</h2>
          <p>Have a project in mind? Tell me a bit about it and I'll get back to you within a day.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
  className="card contact-left-card"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <h3 className="contact-left-title">Reach me directly</h3>

  <ul className="contact-list">
    {contactInfo.map((item) => (
      <li key={item.label}>
        <a href={item.href} className="contact-info-item">
          <span className="contact-icon">
            <item.icon size={18} />
          </span>
          <div>
            <div className="contact-label">{item.label}</div>
            <div className="contact-value">{item.value}</div>
          </div>
        </a>
      </li>
    ))}
  </ul>
</motion.div>

          <motion.form
            className="card contact-form"
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
<div className="form-row">
  <div className="field">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      type="text"
      required
      value={form.name}
      onChange={handleChange}
      placeholder="Your name"
    />
  </div>

  <div className="field">
    <label htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      value={form.email}
      onChange={handleChange}
      placeholder="you@company.com"
    />
  </div>
</div>

<div className="field">
  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="message"
    required
    rows={5}
    value={form.message}
    onChange={handleChange}
    placeholder="Tell me about your project"
  />
</div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'sent' ? (
                <>
                  <FiCheck /> Message Sent
                </>
              ) : status === 'sending' ? (
                'Sending…'
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
            {status === 'sent' && (
              <p role="status" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 12, textAlign: 'center' }}>
                Thanks for reaching out — I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" style={{ color: '#f87171', fontSize: '0.85rem', marginTop: 12, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <FiAlertCircle size={14} /> Something went wrong — please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
/* =========================================================
   CONTACT GRID
========================================================= */

.contact-grid {
  display: grid;
  grid-template-columns: 0.7fr 1.15fr;

  gap: 20px;

  margin-top: 52px;

  align-items: stretch;
}


/* =========================================================
   COMMON GLASS CARD
   Same glass material as Services / Skills / Why Choose Me
========================================================= */

.card.contact-left-card,
.card.contact-form {
  position: relative;
  overflow: hidden;
  isolation: isolate;

  border-radius: 28px;

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
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}


/* =========================================================
   TOP GLASS SHINE
========================================================= */

.contact-left-card::after,
.contact-form::after {
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

.contact-left-card::before,
.contact-form::before {
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
   CARD HOVER
========================================================= */

.contact-left-card:hover,
.contact-form:hover {
  transform: translateY(-6px);

  background: rgba(255, 255, 255, 0.16) !important;

  border-color: rgba(255, 255, 255, 0.65);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.80),
    inset 0 -1px 0 rgba(255, 255, 255, 0.15),
    0 20px 45px rgba(70, 60, 150, 0.14),
    0 0 25px rgba(130, 120, 255, 0.08);
}

.contact-left-card:hover::before,
.contact-form:hover::before {
  left: 150%;
}


/* =========================================================
   CONTENT ABOVE GLASS
========================================================= */

.contact-left-card > *,
.contact-form > * {
  position: relative;
  z-index: 3;
}


/* =========================================================
   LEFT CARD
========================================================= */

.contact-left-card {
  padding: 30px;
}

.contact-left-title {
  font-size: 1.35rem;

  font-weight: 700;

  margin-bottom: 26px;

  color: var(--text);
}


/* =========================================================
   CONTACT LIST
========================================================= */

.contact-list {
  display: flex;

  flex-direction: column;

  gap: 14px;
}


/* =========================================================
   CONTACT INFO ITEM — GLASS
========================================================= */

.contact-info-item {
  position: relative;

  overflow: hidden;

  display: flex;

  align-items: center;

  gap: 16px;

  padding: 14px 16px;

  border-radius: 50px;

  /*
    Transparent mini glass
  */
  background: rgba(255, 255, 255, 0.07);

  border: 1px solid rgba(255, 255, 255, 0.22);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}


/* =========================================================
   CONTACT ITEM LIGHT SWEEP
========================================================= */

.contact-info-item::before {
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
    rgba(255, 255, 255, 0.35),
    rgba(130, 140, 255, 0.12),
    transparent
  );

  transform: skewX(-20deg);

  transition: left 0.75s ease;

  pointer-events: none;
}

.contact-info-item:hover::before {
  left: 150%;
}


/* =========================================================
   CONTACT ITEM HOVER
========================================================= */

.contact-info-item:hover {
  transform: translateX(6px);

  background: rgba(255, 255, 255, 0.13);

  border-color: rgba(255, 255, 255, 0.42);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.35),
    0 10px 25px rgba(70, 60, 150, 0.10);
}


/* =========================================================
   CONTACT ICON
========================================================= */

.contact-icon {
  width: 42px;
  height: 42px;

  border-radius: 50px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  background: rgba(255, 255, 255, 0.10);

  color: var(--accent);

  border: 1px solid rgba(255, 255, 255, 0.30);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  transition:
    transform 0.4s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


/* ICON HOVER */

.contact-info-item:hover .contact-icon {
  background: color-mix(
    in srgb,
    var(--accent) 15%,
    rgba(255, 255, 255, 0.15)
  );

  border-color: color-mix(
    in srgb,
    var(--accent) 40%,
    rgba(255, 255, 255, 0.30)
  );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.50),
    0 0 16px color-mix(
      in srgb,
      var(--accent) 15%,
      transparent
    );

  transform: scale(1.08);
}


/* =========================================================
   CONTACT TEXT
========================================================= */

.contact-label {
  font-size: 0.8rem;

  color: var(--text-muted);

  margin-bottom: 4px;
}

.contact-value {
  font-size: 0.95rem;

  font-weight: 600;

  color: var(--text);
}


/* =========================================================
   FORM CARD
========================================================= */

.contact-form {
  padding: 32px;
}


/* =========================================================
   FORM ROW
========================================================= */

.form-row {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 16px;
}


/* =========================================================
   FIELD
========================================================= */

.field {
  display: flex;

  flex-direction: column;

  gap: 10px;

  margin-bottom: 22px;
}

.field label {
  font-size: 0.85rem;

  font-weight: 500;

  color: var(--text-muted);
}


/* =========================================================
   GLASS INPUT
========================================================= */

.field input,
.field textarea {
  width: 100%;

  /*
    Transparent input glass
  */
  background: rgba(255, 255, 255, 0.07);

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 999px;

  padding: 16px 18px;

  color: var(--text);

  font-family: inherit;

  font-size: 0.96rem;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.20);

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}


.field textarea {
  border-radius: 20px;

  min-height: 180px;

  resize: vertical;
}


/* =========================================================
   PLACEHOLDER
========================================================= */

.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-muted);

  opacity: 0.7;
}


/* =========================================================
   INPUT FOCUS
========================================================= */

.field input:focus,
.field textarea:focus {
  outline: none;

  background: rgba(255, 255, 255, 0.12);

  border-color: color-mix(
    in srgb,
    var(--accent) 50%,
    rgba(255, 255, 255, 0.30)
  );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.30),
    0 0 0 3px color-mix(
      in srgb,
      var(--accent) 12%,
      transparent
    ),
    0 0 20px color-mix(
      in srgb,
      var(--accent) 8%,
      transparent
    );
}


/* =========================================================
   SUBMIT BUTTON
========================================================= */

.contact-submit {
  width: 100%;

  justify-content: center;

  padding: 16px 24px;

  border-radius: 999px;

  background: linear-gradient(
    90deg,
    #6366f1,
    #4f46e5
  );

  color: #ffffff;

  border: none;

  font-weight: 700;

  font-size: 1rem;

  box-shadow:
    0 14px 30px rgba(79, 70, 229, 0.28);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease;
}

.contact-submit:hover {
  transform: translateY(-2px);

  filter: brightness(1.08);

  box-shadow:
    0 18px 36px rgba(79, 70, 229, 0.36);
}


/* =========================================================
   DARK MODE
========================================================= */

.dark .card.contact-left-card,
.dark .card.contact-form,
[data-theme='dark'] .card.contact-left-card,
[data-theme='dark'] .card.contact-form {
  background: rgba(20, 25, 45, 0.16) !important;

  backdrop-filter: blur(14px) saturate(130%);
  -webkit-backdrop-filter: blur(14px) saturate(130%);

  border-color: rgba(255, 255, 255, 0.18);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -1px 0 rgba(0, 0, 0, 0.10),
    0 15px 40px rgba(0, 0, 0, 0.20);
}

.dark .card.contact-left-card:hover,
.dark .card.contact-form:hover,
[data-theme='dark'] .card.contact-left-card:hover,
[data-theme='dark'] .card.contact-form:hover {
  background: rgba(35, 40, 65, 0.22) !important;

  border-color: rgba(255, 255, 255, 0.30);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.24),
    0 22px 50px rgba(0, 0, 0, 0.28);
}


/* =========================================================
   DARK MODE — CONTACT ITEMS
========================================================= */

.dark .contact-info-item,
[data-theme='dark'] .contact-info-item {
  background: rgba(255, 255, 255, 0.05);

  border-color: rgba(255, 255, 255, 0.14);
}

.dark .contact-info-item:hover,
[data-theme='dark'] .contact-info-item:hover {
  background: rgba(255, 255, 255, 0.09);

  border-color: rgba(255, 255, 255, 0.25);
}


/* =========================================================
   DARK MODE — INPUTS
========================================================= */

.dark .field input,
.dark .field textarea,
[data-theme='dark'] .field input,
[data-theme='dark'] .field textarea {
  background: rgba(255, 255, 255, 0.05);

  border-color: rgba(255, 255, 255, 0.16);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.10);
}

.dark .field input:focus,
.dark .field textarea:focus,
[data-theme='dark'] .field input:focus,
[data-theme='dark'] .field textarea:focus {
  background: rgba(255, 255, 255, 0.08);
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;

    gap: 20px;
  }

  .contact-left-card,
  .contact-form {
    padding: 24px;
  }
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;

    gap: 0;
  }
}      
      `}</style>
    </section>
  )
}
