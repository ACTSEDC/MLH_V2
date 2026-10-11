import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <strong>HACKTOBERFEST<span>26</span></strong>
          <p>ACTS EDC · University School of Automation &amp; Robotics</p>
        </div>

        <nav className="site-footer__social" aria-label="Social links">
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#medium">Medium</a>
        </nav>

        <address className="site-footer__contact">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <span>East Delhi Campus, Surajmal Vihar</span>
        </address>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 ACTS EDC. All rights reserved.</p>
        <div className="site-footer__marks" aria-hidden="true">
          <span className="site-footer__mark site-footer__mark--red" />
          <span className="site-footer__mark site-footer__mark--blue" />
          <span className="site-footer__mark site-footer__mark--yellow" />
          <span className="site-footer__mark site-footer__mark--cream" />
        </div>
      </div>
    </footer>
  );
}
