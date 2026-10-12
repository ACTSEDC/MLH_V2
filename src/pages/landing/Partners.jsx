import { motion } from "framer-motion";
import { fadeUp, popRotate } from "./heroMotion";
import mlhLogo from "../../assets/images/image 6.png";
import digitalOceanLogo from "../../assets/images/DigitalOcean.png";

function Partner({ label, delay, className = "", children }) {
  return (
    <motion.div
      className={`partner ${className}`.trim()}
      variants={fadeUp(delay)}
    >
      <p className="partner__label">{label}</p>
      <motion.div
        className="partner__badge"
        variants={popRotate(delay + 0.15, -12)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function MlhBadge({ logoSrc = mlhLogo }) {
  return (
    <span className="partner__logo partner__logo--mlh">
      <img className="partner__img" src={logoSrc} alt="Major League Hacking" />
    </span>
  );
}

export function DigitalOceanBadge({ logoSrc = digitalOceanLogo }) {
  return (
    <span className="partner__logo partner__logo--digitalocean">
      <img className="partner__img" src={logoSrc} alt="DigitalOcean" />
    </span>
  );
}

export default function Partners({ mlhSrc, doSrc }) {
  return (
    <div className="partners">
      <Partner label="POWERED BY" delay={0.9}>
        <MlhBadge logoSrc={mlhSrc} />
      </Partner>
      <Partner label="PRESENTING PARTNER" delay={1.05}>
        <DigitalOceanBadge logoSrc={doSrc} />
      </Partner>
    </div>
  );
}
