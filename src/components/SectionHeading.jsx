import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      className="section-heading"
      style={center ? { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' } : undefined}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
