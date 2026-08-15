import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(var(--bg-primary-rgb), 0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
        aria-label="Primary"
      >
        <a
          href="#top"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }}
        >
          Dharaneesh R<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="leftcontent" style={{ gap: 18, display: 'flex', alignItems: 'center' }}>
          <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ display: 'inline-flex' }}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.span>
        </button>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <a href="#contact" className="btn btn-primary nav-cta">
          Hire Me
        </a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
            className="nav-mobile-panel"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: 4 }}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();

                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }

                      setOpen(false);
                    }}
                    style={{ display: 'block', padding: '12px 0', fontWeight: 500 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ paddingTop: 8 }}>
                <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)} style={{ width: '100%' }}>
                  Hire Me
                </a>
              </li>
              <li style={{ paddingTop: 12, display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={toggleTheme}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: '0.9rem' }}
                >
                  {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                  Switch to {theme === 'dark' ? 'light' : 'dark'} theme
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .nav-link {
          position: relative;
          transition: color 0.2s ease;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .nav-link:hover {
          color: var(--accent);
        }

        .nav-toggle {
          display: none;
          color: var(--text);
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .nav-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .theme-toggle {
            margin-left: 0;
          }
        }
      `}</style>
    </header>
  )
}
