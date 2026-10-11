import './Footer.css';
import instagramIcon from '../assets/logos/Instagram.svg';
import linkedinIcon from '../assets/logos/linkedin.svg';
import { ActsLogoTransition } from '../pages/landing/ActsLogoTransition';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <div className="site-footer__brand-row">
            <ActsLogoTransition className="site-footer__acts-logo" />
            <strong>HACKTOBERFEST<span>26</span></strong>
          </div>
          <p>ACTS EDC · University School of Automation &amp; Robotics</p>
        </div>

        <nav className="site-footer__social" aria-label="Social links">
          <a
            href="https://www.instagram.com/acts_edc?xtok=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
            <span>@acts_edc</span>
          </a>
          <a
            href="https://www.linkedin.com/company/acts-edc/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
            <span>ACTS EDC</span>
          </a>
        </nav>

        <address className="site-footer__contact">
          <a href="mailto:acts.edc@gmail.com">acts.edc@gmail.com</a>
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
