import { useEffect, useRef } from 'react'

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  duration: 14 + ((i * 7) % 18),
  delay: -((i * 3) % 20),
  drift: `${((i % 5) - 2) * 30}px`,
}))

export default function AmbientBackground() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    function handleMove(e) {
      if (!spotlightRef.current) return
      spotlightRef.current.style.setProperty('--mx', `${e.clientX}px`)
      spotlightRef.current.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return (
    <>
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-sheen" />
        <div className="ambient-grid" />
        <div className="ambient-blob ambient-blob--1" />
        <div className="ambient-blob ambient-blob--2" />
        <div className="ambient-blob ambient-blob--3" />
        <div className="ambient-blob ambient-blob--4" />
        <div className="ambient-blob ambient-blob--5" />

        <div className="ambient-particles">
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="ambient-particle"
              style={{
                left: p.left,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                '--drift': p.drift,
              }}
            />
          ))}
        </div>
      </div>
      <div className="ambient-spotlight" ref={spotlightRef} aria-hidden="true" />
    </>
  )
}
