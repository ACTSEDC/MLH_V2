import { motion } from 'framer-motion';
import winnerTrophy from '../../assets/images/trophy 1.png';
import './PrizePage.css';

/* =========================================
   Medal SVG — silver (2) or bronze (3)
   ========================================= */
function Medal({ type }) {
  const isBronze = type === 'bronze';
  return (
    <svg
      viewBox="0 0 36 38"
      className="prize-medal"
      fill="none"
      stroke="#244c42"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M8 3h8l3 12-6 5-7-11Z" fill="#c5e0d9" />
      <path d="M28 3h-8l-3 12 6 5 7-11Z" fill="#c5e0d9" />
      <circle cx="18" cy="24" r="9" fill={isBronze ? '#e6a044' : '#d8d9cc'} />
      <circle cx="18" cy="24" r="6.5" stroke="#fff1a0" />
      <text x="18" y="27.5" fill="#183f35" stroke="none"
        textAnchor="middle" fontSize="9" fontWeight="bold">
        {isBronze ? '3' : '2'}
      </text>
    </svg>
  );
}

/* =========================================
   Animation variants
   ========================================= */
const winnerVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 22, delay: 0.15 },
  },
};

const runnerVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 26, delay },
  },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  },
});

/* =========================================
   Page component
   ========================================= */
export default function PrizePage() {
  return (
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
          <p className="prize-pool-text">
            ₹10,000 + $2,200 prize pool — for builders, creators &amp; open-source contributors
          </p>
          <div className="prize-heading-rule" aria-hidden="true" />
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
              viewport={{ once: true, margin: '-60px' }}
              variants={winnerVariant}
            >
              <div className="prize-winner-accent" aria-hidden="true" />
              <div className="prize-winner-inner">
                <div className="prize-winner-text">
                  <p className="prize-rank-label">
                    <span className="prize-rank-dot" aria-hidden="true" />
                    Winner
                  </p>
                  <p className="prize-amount">₹XXXX</p>
                  <p className="prize-description">Cash prize and certificates</p>
                </div>
                <div className="prize-trophy-wrap">
                  <img src={winnerTrophy} alt="Winner trophy" className="prize-trophy-img" />
                </div>
              </div>
            </motion.article>

            {/* RUNNER-UP ROW */}
            <div className="prize-runner-row">
              <motion.article
                className="prize-runner-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={runnerVariant(0.25)}
              >
                <div className="prize-runner-inner">
                  <div className="prize-runner-text">
                    <p className="prize-runner-label">Runner Up</p>
                    <p className="prize-runner-amount">₹XXXX</p>
                    <p className="prize-runner-desc">Cash prize and certificates</p>
                  </div>
                  <Medal type="silver" />
                </div>
              </motion.article>

              <motion.article
                className="prize-runner-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={runnerVariant(0.35)}
              >
                <div className="prize-runner-inner">
                  <div className="prize-runner-text">
                    <p className="prize-runner-label">Second Runner Up</p>
                    <p className="prize-runner-amount">₹XXXX</p>
                    <p className="prize-runner-desc">Cash prize and certificates</p>
                  </div>
                  <Medal type="bronze" />
                </div>
              </motion.article>
            </div>

          </div>{/* /prize-cards-col */}

          {/* Right column: yellow tagline box — stretches to match cards height */}
          <motion.div
            className="prize-tagline-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp(0.2)}
          >
            <span>BUILD BOLD.</span>
            <span>CONTRIBUTE MORE.</span>
            <span>WIN BIG.</span>
          </motion.div>

        </div>{/* /prize-content-row */}

        {/* ── Special Contribution banner — full width of content row ── */}
        <motion.div
          className="prize-special-banner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp(0.45)}
        >
          <div className="prize-special-text-group">
            <p className="prize-special-label">Special Contribution Award</p>
            <p className="prize-special-sub">To be declared by MLH</p>
          </div>
          <span className="prize-special-amount">More than $2000</span>
        </motion.div>

      </div>
    </section>
  );
}
