import { skills } from '../data/skills.js'

export default function SkillOrbit({ coreLabel = 'React Developer', size = 560, radiusRatio = 0.41, iconSize = 22, showTooltips = true }) {
  return (
    <div
      className="orbit-wrapper"
      style={{ '--orbit-size': `min(${size}px, 92vw)`, '--orbit-radius': `calc(var(--orbit-size) * ${radiusRatio})` }}
    >
      <div className="orbit-ring orbit-ring--outer" aria-hidden="true" />
      <div className="orbit-ring orbit-ring--inner" aria-hidden="true" />

      <div className="orbit-core">
        <span className="orbit-core-label">{coreLabel}</span>
      </div>

      <div className="orbit" role="list" aria-label="Skills">
        {skills.map((skill, i) => {
          const angle = (360 / skills.length) * i
          return (
            <div key={skill.name} className="orbit-item" style={{ '--angle': `${angle}deg` }} role="listitem">
              <div className="orbit-item-counter">
                <button type="button" className="skill-node" style={skill.color ? { '--skill-color': skill.color } : undefined}>
                  <skill.icon size={iconSize} />
                  {showTooltips && <span className="skill-tooltip">{skill.name}</span>}
                  <span className="visually-hidden">{skill.name}</span>
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        .orbit-wrapper {
          position: relative;
          width: var(--orbit-size);
          aspect-ratio: 1 / 1;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed var(--border);
        }
        .orbit-ring--outer { inset: 0; }
        .orbit-ring--inner { inset: 18%; border-style: solid; opacity: 0.5; }

        .orbit-core {
          position: relative;
          z-index: 2;
          width: 34%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(var(--accent-rgb), 0.35), var(--bg-card));
          border: 1px solid var(--accent);
          box-shadow: 0 0 0 1px rgba(var(--accent-rgb),0.18), 0 20px 50px rgba(var(--accent-rgb), 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12px;
        }
        .orbit-core-label {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(0.8rem, 2vw, 1.05rem);
          letter-spacing: -0.01em;
          color: var(--text);
        }

        .orbit {
          position: absolute;
          inset: 0;
          animation: orbitSpin 42s linear infinite;
        }

        .orbit-wrapper:hover .orbit,
        .orbit-wrapper:hover .orbit-item-counter {
          animation-play-state: paused;
        }

        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform: rotate(var(--angle)) translateX(var(--orbit-radius));
        }

        .orbit-item-counter {
          animation: counterSpin 42s linear infinite;
          transform: rotate(calc(-1 * var(--angle)));
        }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .skill-node {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--skill-color, var(--accent-hover));
          transform: translate(-26px, -26px);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .skill-node:hover,
        .skill-node:focus-visible {
          transform: translate(-26px, -26px) scale(1.12);
          border-color: var(--skill-color, var(--accent));
          box-shadow: 0 10px 24px rgba(0,0,0,0.35);
        }

        .skill-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .skill-node:hover .skill-tooltip,
        .skill-node:focus-visible .skill-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 640px) {
          .skill-node { width: 40px; height: 40px; transform: translate(-20px, -20px); }
          .skill-node:hover, .skill-node:focus-visible { transform: translate(-20px, -20px) scale(1.12); }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit, .orbit-item-counter { animation: none; }
        }
      `}</style>
    </div>
  )
}
