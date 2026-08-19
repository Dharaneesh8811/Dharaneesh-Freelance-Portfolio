import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import VisiterCount from './VisiterCount';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-left">
          <span>Made by</span>
          <span className="footer-name">Dharaneesh R</span>
          <span>© 2026</span>
        </div>

        <div className="footer-center">
          <VisiterCount />
        </div>

        <div className="footer-socials">
          <a href="https://github.com/Dharaneesh8811" rel="noreferrer">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/dharaneeshr-10d11d" rel="noreferrer">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:dharaneeshr.official@gmail.com">
            <FiMail size={18} />
          </a>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid rgba(99,102,241,0.16);
          padding: 16px 0;
          background: rgba(var(--bg-secondary-rgb), 0.45);
          backdrop-filter: blur(10px);
        }

        .footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .footer-name {
          color: var(--accent);
          font-weight: 600;
        }

        .footer-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-socials a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
          border: 1px solid rgba(99,102,241,0.18);
          background: rgba(10,18,36,0.72);
          transition: all 0.25s ease;
        }

        .footer-socials a:hover {
          transform: translateY(-2px);
          border-color: rgba(129,140,248,0.42);
          box-shadow: 0 0 16px rgba(99,102,241,0.18);
        }

        @media (max-width: 640px) {
  .footer {
    padding: 18px 0;
  }

  .footer-content {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    text-align: center;
  }

  .footer-text {
    font-size: 0.8rem;
  }

  .footer-count {
    display: flex;
    align-items: center;
  }

  .footer-socials {
    gap: 8px;
  }

  .footer-socials a {
    width: 38px;
    height: 38px;
  }

  .footer-socials a svg {
    width: 17px;
    height: 17px;
  }
}
      `}</style>
    </footer>
  );
}