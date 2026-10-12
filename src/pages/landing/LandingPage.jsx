import { motion, MotionConfig } from "framer-motion";
import { InteractiveHoverButton } from "./InteractiveHoverButton";
import { ActsLogoTransition } from "./ActsLogoTransition";
import { OrgLine, PresentsLine, Wordmark } from "./HeroText";
import Partners from "./Partners";
import DateBlock from "./DateBlock";
import Building from "./Building";
import { slideRight, popRotate } from "./heroMotion";
import "./LandingPage.css";

const REGISTER_URL =
  "https://events.mlh.com/events/14935-hacktoberfest-hack-day-new-delhi-x-acts-edc";

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="hero" id="hero" aria-label="Hacktoberfest 2026">
        {/* "visible" flows down to every child that has variants */}
        <motion.div className="hero-stage" initial="hidden" animate="visible">
          <div className="hero-canvas">
            <div className="hero-top">
              <div className="hero-left">
                <OrgLine />
                <PresentsLine />
                <Wordmark />
                <Partners />
              </div>

              <div className="hero-right">
                <motion.div className="hero-logo" variants={popRotate(0.9)}>
                  <ActsLogoTransition />
                </motion.div>

                <DateBlock />

                <motion.div
                  className="hero-register"
                  variants={slideRight(0.5)}
                >
                  <InteractiveHoverButton
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-register-btn"
                    title="Register for Hacktoberfest 26"
                  >
                    REGISTER NOW
                  </InteractiveHoverButton>
                </motion.div>
              </div>
            </div>

            <Building />
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
