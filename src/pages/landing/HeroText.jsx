import { motion } from "framer-motion";
import {
  slideLeft,
  fadeUp,
  drawLine,
  popRotate,
  letters,
  letter,
} from "./heroMotion";

const WORD = "HACKTØBERFEST";

export function OrgLine() {
  return (
    <motion.div className="org-line" variants={slideLeft(0.05)}>
      <span className="org-line__bar" aria-hidden="true" />
      <p className="org-line__text">
        University School of Automation &amp;
        <br />
        Robotics, GGSIPU EDC Campus
      </p>
    </motion.div>
  );
}

export function PresentsLine() {
  return (
    <div className="presents-line">
      <motion.span
        className="presents-line__rule"
        variants={drawLine(0.25)}
        aria-hidden="true"
      />
      <motion.p className="presents-line__text" variants={fadeUp(0.3)}>
        ACTS EDC PRESENTS
      </motion.p>
      <motion.span
        className="presents-line__rule presents-line__rule--right"
        variants={drawLine(0.25)}
        aria-hidden="true"
      />
    </div>
  );
}

export function Wordmark() {
  return (
    <div className="wordmark">
      <motion.h1
        className="wordmark__text"
        aria-label="Hacktoberfest"
        variants={letters}
      >
        {WORD.split("").map((ch, i) => (
          <motion.span
            key={i}
            className="wordmark__letter"
            variants={letter}
            aria-hidden="true"
          >
            {ch}
          </motion.span>
        ))}
      </motion.h1>

      <motion.span className="wordmark__badge" variants={popRotate(0.95, -25)}>
        26
      </motion.span>
    </div>
  );
}
