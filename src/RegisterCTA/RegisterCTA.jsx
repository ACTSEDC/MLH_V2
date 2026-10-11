import { motion, MotionConfig } from "framer-motion";
import "./RegisterCTA.css";
import defaultArt from "./assets/cta-art.webp";
import defaultQr from "../../QR code.svg";

/* Parent just orchestrates; children carry their own delays */
const container = { hidden: {}, visible: {} };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

/* Soft pop: scale up with a small overshoot */
const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 16, delay },
  },
});

const swatches = ["#E53927", "#8BB2DE", "#F5B726", "#E97B77"];

/**
 * "Ready to build something unforgettable?" section (page 8).
 *
 * Optional props:
 *   qrSrc  - replace the QR image (defaults to ./assets/qr.png)
 *   artSrc - replace the illustration (defaults to ./assets/cta-art.webp)
 */
export default function RegisterCTA({
  qrSrc = defaultQr,
  artSrc = defaultArt,
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className="register-cta"
        id="register"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        <div className="register-cta__inner">
          <div className="register-cta__content">
            <div className="register-cta__swatches" aria-hidden="true">
              {swatches.map((color, i) => (
                <motion.span
                  key={color}
                  style={{ background: color }}
                  variants={pop(i * 0.08)}
                />
              ))}
            </div>

            <motion.h2 className="register-cta__title" variants={fadeUp(0.3)}>
              Ready to build something unforgettable?
            </motion.h2>

            <motion.div className="register-cta__text" variants={fadeUp(0.45)}>
              <p className="register-cta__kicker">
                Many minds. Infinite possibilities.
              </p>
              <p className="register-cta__body">
                One gathering. Countless perspectives. A world of possibilities
                waiting to unfold
              </p>
            </motion.div>

            <motion.div className="register-cta__scan" variants={pop(0.6)}>
              <img
                className="register-cta__qr"
                src={qrSrc}
                alt="QR code to register"
              />
              <span className="register-cta__divider" aria-hidden="true" />
              <p className="register-cta__scan-label">
                Scan to
                <br />
                register !
              </p>
            </motion.div>
          </div>

          <motion.div className="register-cta__art" variants={pop(0.4)}>
            <img src={artSrc} alt="" />
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
