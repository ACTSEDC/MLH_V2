import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const REGISTER_URL =
  "https://events.mlh.com/events/14935-hacktoberfest-hack-day-new-delhi-x-acts-edc";

const NAV_LINKS = [
  ["HOME", "#hero"],
  ["ABOUT", "#about"],
  ["TIMELINE", "#timeline"],
  ["PRIZES", "#prizes"],
  ["SPONSORS", "#sponsors"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-header-row">
        <a href="#hero" className="logo hacktoberfest-logo" onClick={closeMenu}>
          <span className="logo-text">HACKTOBERFEST</span>
          <span className="logo-badge">26</span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links">
        {NAV_LINKS.map(([label, href]) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <li>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-register-btn"
          >
            REGISTER
          </a>
        </li>
      </ul>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <ul className="mobile-nav-links">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-cta">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="mobile-drawer-register-btn"
              onClick={closeMenu}
            >
              REGISTER NOW ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
