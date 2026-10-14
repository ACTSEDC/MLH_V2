import { motion, MotionConfig } from "framer-motion";
import winnerTrophy from "../../assets/images/trophy 1.png";
import "./PrizePage.css";

const PRIZES = [
  {
    id: "winner",
    label: "First Place — Winner",
    shortLabel: "First Place — Winner",
    amount: "₹5,000",
    rewards: [
      "Arduino UNO Q 4GB",
      "$5 Backboard credit",
      "$10 Tinker credit",
      "$25 DigitalOcean credit",
      "$50 Render credit",
      "MLH bag",
      "Hacktoberfest T-shirt",
      "Stickers",
    ],
  },
  {
    id: "runner-up",
    label: "Second Place — Runner-up",
    shortLabel: "Second Place — Runner-up",
    amount: "₹3,000",
    medal: "silver",
    rewards: [
      "$5 Backboard credit",
      "$10 Tinker credit",
      "$25 DigitalOcean credit",
      "$50 Render credit",
      "MLH bag",
      "Hacktoberfest T-shirt",
      "Stickers",
    ],
  },
  {
    id: "second-runner-up",
    label: "Third Place — Second Runner-up",
    shortLabel: "Third Place — Second Runner-up",
    amount: "₹2,000",
    medal: "bronze",
    rewards: [
      "$5 Backboard credit",
      "$10 Tinker credit",
      "$25 DigitalOcean credit",
      "$50 Render credit",
      "Hacktoberfest T-shirt",
      "Stickers",
    ],
  },
];

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
        <text x="18" y="27.5" fill="#183f35" stroke="none" textAnchor="middle" fontSize="9" fontWeight="bold">
          {isBronze ? "3" : "2"}
        </text>
      </motion.svg>
    </div>
  );
}

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

const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 12, delay },
  },
});

const popRotate = (delay = 0, from = -40) => ({
  hidden: { opacity: 0, scale: 0, rotate: from },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 13, delay },
  },
});

const slideIn = (delay = 0) => ({
  hidden: { opacity: 0, x: -28, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 16, delay },
  },
});

const drawRule = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

function RewardList({ rewards, prominent = false }) {
  return (
    <ul className={`prize-reward-list ${prominent ? "prize-reward-list--prominent" : ""}`}>
      {rewards.map((reward) => (
        <li key={reward} className="prize-reward-tag">
          <span className="prize-reward-check" aria-hidden="true">✓</span>
          {reward}
        </li>
      ))}
    </ul>
  );
}

function PrizeCard({ prize, index }) {
  const isWinner = prize.id === "winner";

  if (isWinner) {
    return (
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
            <motion.p className="prize-rank-label" variants={fadeUp(0.45)}>
              <motion.span className="prize-rank-dot" aria-hidden="true" variants={pop(0.4)} />
              {prize.shortLabel}
            </motion.p>
            <motion.p className="prize-amount" variants={pop(0.55)} style={{ transformOrigin: "left center" }}>
              {prize.amount}
            </motion.p>
            <motion.p className="prize-description" variants={fadeUp(0.7)}>
              Cash prize + winner rewards
            </motion.p>
            <RewardList rewards={prize.rewards} prominent />
          </div>
          <div className="prize-trophy-wrap">
            <motion.img src={winnerTrophy} alt="Winner trophy" className="prize-trophy-img" variants={popRotate(0.65, -25)} />
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="prize-runner-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={runnerVariant(0.2 + index * 0.1)}
    >
      <div className="prize-runner-inner">
        <div className="prize-runner-text">
          <motion.p className="prize-runner-label" variants={fadeUp(0.5)}>{prize.label}</motion.p>
          <motion.p className="prize-runner-amount" variants={pop(0.6)} style={{ transformOrigin: "left center" }}>
            {prize.amount}
          </motion.p>
          <motion.p className="prize-runner-desc" variants={fadeUp(0.7)}>Cash prize + rewards</motion.p>
          <RewardList rewards={prize.rewards} />
        </div>
        <Medal type={prize.medal} delay={0.65} />
      </div>
    </motion.article>
  );
}

export default function PrizePage() {
  const [winner, ...supportingPrizes] = PRIZES;

  return (
    <MotionConfig reducedMotion="user">
      <section className="prize-section">
        <div className="prize-wrapper">
          <motion.div className="prize-heading-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)}>
            <h1 className="prize-heading">What's at Stake?</h1>
            <motion.p className="prize-pool-text" variants={fadeUp(0.2)}>
              ₹50,000 prize pool — for builders, creators &amp; open-source contributors
            </motion.p>
            <motion.div className="prize-heading-rule" aria-hidden="true" variants={drawRule(0.4)} style={{ transformOrigin: "left center" }} />
          </motion.div>

          <div className="prize-content-row">
            <div className="prize-cards-col">
              <PrizeCard prize={winner} index={0} />
              <div className="prize-runner-row">
                {supportingPrizes.map((prize, index) => (
                  <PrizeCard key={prize.id} prize={prize} index={index + 1} />
                ))}
              </div>
            </div>

            <motion.div className="prize-tagline-box" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp(0.2)}>
              <motion.span variants={slideIn(0.4)}>BUILD BOLD.</motion.span>
              <motion.span variants={slideIn(0.55)}>CONTRIBUTE MORE.</motion.span>
              <motion.span variants={slideIn(0.7)}>WIN BIG.</motion.span>
            </motion.div>
          </div>

          <motion.div className="prize-goodies-banner" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp(0.45)}>
            <div className="prize-goodies-text-group">
              <motion.p className="prize-goodies-label" variants={fadeUp(0.6)}>Goodies for Every Participant</motion.p>
              <motion.p className="prize-goodies-sub" variants={fadeUp(0.75)}>
                Every participant gets stickers and swag. Join us, build something meaningful, and take home a little Hacktoberfest spirit!
              </motion.p>
            </div>
            <motion.span className="prize-goodies-chip" variants={popRotate(0.85, -8)}>STICKERS + SWAG</motion.span>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
