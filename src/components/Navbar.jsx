import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(var(--bg-primary-rgb), 0.72)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
        aria-label="Primary"
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.3rem",
            letterSpacing: "-0.02em",
          }}
        >
          Dharaneesh R<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="leftcontent"
          style={{ gap: 18, display: "flex", alignItems: "center" }}
        >
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ display: "inline-flex" }}
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.span>
          </button>

          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
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
      className="nav-mobile-panel"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <ul className="mobile-nav-list">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}

        <li className="mobile-hire">
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </li>

        <li className="mobile-theme">
          <button onClick={toggleTheme}>
            {theme === 'dark' ? (
              <FiSun size={16} />
            ) : (
              <FiMoon size={16} />
            )}
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
        
        .nav-mobile-panel {
  position: relative;
  z-index: 9999;
  width: 100%;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-nav-link {
  display: block;
  width: 100%;
  padding: 14px 0;
  color: var(--text);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}

.mobile-nav-link:hover {
  color: var(--accent);
}

.mobile-hire {
  padding-top: 10px;
}

.mobile-hire a {
  width: 100%;
  display: block;
  text-align: center;
}

.mobile-theme {
  padding-top: 14px;
  display: flex;
  justify-content: center;
}

.mobile-theme button {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  cursor: pointer;
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
  );
}
