import { InteractiveHoverButton } from "./InteractiveHoverButton";
import { ActsLogoTransition } from "./ActsLogoTransition";
import "./LandingPage.css";

const REGISTER_URL =
  "https://events.mlh.com/events/14935-hacktoberfest-hack-day-new-delhi-x-acts-edc";

export default function LandingPage() {
  return (
    <div className="figma-vector-wrapper" id="hero">
      <div className="artwork-container">
        {/* Figma export lives in /public/hacktoberfest_full.svg */}
        <object
          data="/hacktoberfest_full.svg"
          type="image/svg+xml"
          className="figma-master-canvas"
          aria-label="Hacktoberfest 2026 Official Figma Landing Page"
        >
          <img
            src="/hacktoberfest_full.svg"
            alt="Hacktoberfest 2026 Design"
            className="figma-master-canvas"
          />
        </object>

        {/* Clickable overlay aligned with the REGISTER NOW button in the artwork */}
        <div className="hero-register-btn-wrapper">
          <InteractiveHoverButton
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="hero-register-btn"
            title="Register for Hacktoberfest 26"
          >
            REGISTER NOW
          </InteractiveHoverButton>
        </div>

        {/* ACTS logo theme transition, hero top-right */}
        <div className="hero-acts-logo-wrapper">
          <ActsLogoTransition />
        </div>
      </div>
    </div>
  );
}
