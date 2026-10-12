import { motion } from "framer-motion";
import { fadeUp, popRotate } from "./heroMotion";

export default function DateBlock() {
  return (
    <div className="date-block">
      <motion.div
        className="date-block__num"
        variants={popRotate(0.7, -18)}
        role="img"
        aria-label="21st"
      >
        <span aria-hidden="true">21</span>
        <sup className="date-block__st" aria-hidden="true">
          ST
        </sup>
      </motion.div>
      <motion.p className="date-block__month" variants={fadeUp(1)}>
        OCTOBER
      </motion.p>
    </div>
  );
}
