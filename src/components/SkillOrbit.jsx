import { useEffect, useState } from 'react';
import { skills } from '../data/skills.js';

export default function SkillOrbit({
  coreLabel = 'React Developer',
  size = 560,
  radiusRatio = 0.41,
  iconSize = 22,
  showTooltips = true,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Delay animation until after first render
    const id = setTimeout(() => setAnimate(true), 250);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className="orbit-wrapper"
      style={{
        '--orbit-size': `min(${size}px, 92vw)`,
        '--orbit-radius': `calc(var(--orbit-size) * ${radiusRatio})`,
      }}
    >
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--inner" />

      <div className="orbit-core">
        <span className="orbit-core-label">{coreLabel}</span>
      </div>

      <div className={`orbit ${animate ? 'animate' : ''}`}>
        {skills.map((skill, i) => {
          const angle = (360 / skills.length) * i;

          return (
            <div
              key={skill.name}
              className="orbit-item"
              style={{ '--angle': `${angle}deg` }}
            >
              <div className={`orbit-item-counter ${animate ? 'animate' : ''}`}>
                <button
                  type="button"
                  className="skill-node"
                  style={skill.color ? { '--skill-color': skill.color } : undefined}
                >
                  <skill.icon size={iconSize} />
                  {showTooltips && (
                    <span className="skill-tooltip">{skill.name}</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .orbit-wrapper {
          position: relative;
          width: var(--orbit-size);
          aspect-ratio: 1;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed var(--border);
        }

        .orbit-ring--inner {
          inset: 18%;
          border-style: solid;
          opacity: 0.45;
        }

        .orbit-core {
          position: relative;
          z-index: 2;
          width: 34%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(var(--accent-rgb), 0.35), var(--bg-card));
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 16px 36px rgba(var(--accent-rgb), 0.18);
        }

        .orbit-core-label {
          font-weight: 700;
          font-size: clamp(0.8rem, 2vw, 1.05rem);
        }

        .orbit {
          position: absolute;
          inset: 0;

          animation: orbitSpin 60s linear infinite;

          will-change: transform;
          transform: translateZ(0);
        }

        .orbit.animate {
          animation: orbitSpin 60s linear infinite;
        }

        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform: rotate(var(--angle)) translateX(var(--orbit-radius));
        }

        .orbit-item-counter.animate {
          animation: counterSpin 60s linear infinite;
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
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--skill-color, var(--accent-hover));
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-24px, -24px);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .skill-node:hover {
          transform: translate(-24px, -24px) scale(1.08);
          border-color: var(--skill-color, var(--accent));
        }

        .skill-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.2s ease;
          font-size: 0.75rem;
          padding: 5px 10px;
          border-radius: 8px;
          white-space: nowrap;
          background: var(--bg-card);
          border: 1px solid var(--border);
        }

        .skill-node:hover .skill-tooltip {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .skill-node {
            width: 38px;
            height: 38px;
            transform: translate(-19px, -19px);
          }
          .orbit {
            animation-duration: 75s;
          }

          .orbit.animate,
          .orbit-item-counter.animate {
            animation-duration: 90s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit.animate,
          .orbit-item-counter.animate {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}