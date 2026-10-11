import { motion, MotionConfig } from "framer-motion";
import winnerTrophy from "../../assets/images/trophy 1.png";
import "./PrizePage.css";

/* =========================================
   Medal SVG — silver (2) or bronze (3)
   Now a motion.svg so it can pop in
   ========================================= */
function Medal({ type, delay = 0 }) {
  const isBronze = type === "bronze";
  return (
    <div className="prize-medal-wrap">
      <motion.svg
        viewBox="0 0 36 38"
        className="prize-medal"
        fill="none"
        stroke="#244c42"
        strokeWidth="1.4"
        aria-hidden="true"
        variants={popRotate(delay)}
      >
        <path d="M8 3h8l3 12-6 5-7-11Z" fill="#c5e0d9" />
        <path d="M28 3h-8l-3 12 6 5 7-11Z" fill="#c5e0d9" />
        <circle cx="18" cy="24" r="9" fill={isBronze ? "#e6a044" : "#d8d9cc"} />
        <circle cx="18" cy="24" r="6.5" stroke="#fff1a0" />
        <text
          x="18"
          y="27.5"
          fill="#183f35"
          stroke="none"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
        >
          {isBronze ? "3" : "2"}
        </text>
      </motion.svg>
    </div>
  );
}

/* =========================================
   Animation variants
   ========================================= */
const winnerVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 22, delay: 0.15 },
  },
};

const runnerVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 26, delay },
  },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

/* Pop: scale from 0 with a springy overshoot */
const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 12, delay },
  },
});

/* Pop + rotate (trophy, medals, chip) */
const popRotate = (delay = 0, from = -40) => ({
  hidden: { opacity: 0, scale: 0, rotate: from },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 13, delay },
  },
});

/* Slide in from the left with a small overshoot (tagline lines) */
const slideIn = (delay = 0) => ({
  hidden: { opacity: 0, x: -28, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 16, delay },
  },
});

/* Red rule draws out from the left */
const drawRule = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

/* =========================================
   Page component
   ========================================= */
export default function PrizePage() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="prize-section">
        <div className="prize-wrapper">
          {/* ── Section heading (full width) ── */}
          <motion.div
            className="prize-heading-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0)}
          >
            <h1 className="prize-heading">What's at Stake?</h1>
            <motion.p className="prize-pool-text" variants={fadeUp(0.2)}>
              ₹10,000 + $2,200 prize pool — for builders, creators &amp;
              open-source contributors
            </motion.p>
            <motion.div
              className="prize-heading-rule"
              aria-hidden="true"
              variants={drawRule(0.4)}
              style={{ transformOrigin: "left center" }}
            />
          </motion.div>

          {/* ── Two-column layout: cards left | tagline right ── */}
          <div className="prize-content-row">
            {/* Left column: winner + runner-up stacked */}
            <div className="prize-cards-col">
              {/* WINNER */}
              <motion.article
                className="prize-winner-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={winnerVariant}
              >
                <div className="prize-winner-accent" aria-hidden="true" />
                <div className="prize-winner-inner">
                  <div className="prize-winner-text">
                    <motion.p
                      className="prize-rank-label"
                      variants={fadeUp(0.45)}
                    >
                      <motion.span
                        className="prize-rank-dot"
                        aria-hidden="true"
                        variants={pop(0.4)}
                      />
                      Winner
                    </motion.p>
                    <motion.p
                      className="prize-amount"
                      variants={pop(0.55)}
                      style={{ transformOrigin: "left center" }}
                    >
                      ₹XXXX
                    </motion.p>
                    <motion.p
                      className="prize-description"
                      variants={fadeUp(0.7)}
                    >
                      Cash prize and certificates
                    </motion.p>
                  </div>
                  <div className="prize-trophy-wrap">
                    <motion.img
                      src={winnerTrophy}
                      alt="Winner trophy"
                      className="prize-trophy-img"
                      variants={popRotate(0.65, -25)}
                    />
                  </div>
                </div>
              </motion.article>

              {/* RUNNER-UP ROW */}
              <div className="prize-runner-row">
                <motion.article
                  className="prize-runner-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={runnerVariant(0.25)}
                >
                  <div className="prize-runner-inner">
                    <div className="prize-runner-text">
                      <motion.p
                        className="prize-runner-label"
                        variants={fadeUp(0.5)}
                      >
                        Runner Up
                      </motion.p>
                      <motion.p
                        className="prize-runner-amount"
                        variants={pop(0.6)}
                        style={{ transformOrigin: "left center" }}
                      >
                        ₹XXXX
                      </motion.p>
                      <motion.p
                        className="prize-runner-desc"
                        variants={fadeUp(0.7)}
                      >
                        Cash prize and certificates
                      </motion.p>
                    </div>
                    <Medal type="silver" delay={0.65} />
                  </div>
                </motion.article>

                <motion.article
                  className="prize-runner-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={runnerVariant(0.35)}
                >
                  <div className="prize-runner-inner">
                    <div className="prize-runner-text">
                      <motion.p
                        className="prize-runner-label"
                        variants={fadeUp(0.6)}
                      >
                        Second Runner Up
                      </motion.p>
                      <motion.p
                        className="prize-runner-amount"
                        variants={pop(0.7)}
                        style={{ transformOrigin: "left center" }}
                      >
                        ₹XXXX
                      </motion.p>
                      <motion.p
                        className="prize-runner-desc"
                        variants={fadeUp(0.8)}
                      >
                        Cash prize and certificates
                      </motion.p>
                    </div>
                    <Medal type="bronze" delay={0.75} />
                  </div>
                </motion.article>
              </div>
            </div>
            {/* /prize-cards-col */}

            {/* Right column: yellow tagline box — stretches to match cards height */}
            <motion.div
              className="prize-tagline-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp(0.2)}
            >
              <motion.span variants={slideIn(0.4)}>BUILD BOLD.</motion.span>
              <motion.span variants={slideIn(0.55)}>
                CONTRIBUTE MORE.
              </motion.span>
              <motion.span variants={slideIn(0.7)}>WIN BIG.</motion.span>
            </motion.div>
          </div>
          {/* /prize-content-row */}

          {/* ── Special Contribution banner — full width of content row ── */}
          <motion.div
            className="prize-special-banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp(0.45)}
          >
            <div className="prize-special-text-group">
              <motion.p className="prize-special-label" variants={fadeUp(0.6)}>
                Special Contribution Award
              </motion.p>
              <motion.p className="prize-special-sub" variants={fadeUp(0.75)}>
                To be declared by MLH
              </motion.p>
            </div>
            <motion.span
              className="prize-special-amount"
              variants={popRotate(0.85, -8)}
            >
              More than $2000
            </motion.span>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
