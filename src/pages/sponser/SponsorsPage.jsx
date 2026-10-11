import { motion, MotionConfig } from "framer-motion";
import { SPONSORS_CONFIG } from "../../data/sponsorsData.js";
import "./SponsorsPage.css";

/* =========================================
   Animation variants
   ========================================= */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

/* Whole tier card slides up with a soft spring */
const cardVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 24, delay },
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

/* Pop + rotate (logos) */
const popRotate = (delay = 0, from = -20) => ({
  hidden: { opacity: 0, scale: 0, rotate: from },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 13, delay },
  },
});

/* Red lines draw out from the left */
const drawRule = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.45, delay, ease: "easeOut" },
  },
});

/**
 * SponsorsPage Component
 * Renders the exact neo-brutalist sponsor showcase using semantic list items.
 */
export default function SponsorsPage({ tiers = SPONSORS_CONFIG }) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="sponsors-container">
        <div className="sponsors-wrapper">
          {/* Header Row */}
          <motion.header
            className="sponsors-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0)}
          >
            <h1 className="sponsors-heading">BACKED BY BUILDERS.</h1>
            <motion.p className="sponsors-subtitle" variants={fadeUp(0.2)}>
              Grateful to our sponsors supporting Hacktoberfest 2026.
            </motion.p>
            <motion.div
              className="sponsors-header-accent"
              aria-hidden="true"
              variants={drawRule(0.4)}
              style={{ transformOrigin: "left center" }}
            />
          </motion.header>

          {/* Sponsor Tier List (ul > li) */}
          <ul className="sponsors-cards-list">
            {tiers.map((tier) => {
              const hasSponsors = tier.sponsors && tier.sponsors.length > 0;
              const isSingleLogo = tier.sponsors?.length === 1;
              // Each card's own scroll trigger fires separately, so a
              // small base delay is enough; children offset from it.
              const base = 0.1;

              return (
                <motion.li
                  key={tier.id}
                  className={`sponsor-card tier-${tier.id}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={cardVariant(base)}
                >
                  {/* Left Column: Tier Info */}
                  <div className="sponsor-meta-col">
                    <motion.span
                      className={`sponsor-tier-badge badge-${tier.id}`}
                      variants={pop(base + 0.3)}
                      style={{ transformOrigin: "left center" }}
                    >
                      {tier.tierLabel}
                    </motion.span>

                    <motion.div
                      className="sponsor-red-line"
                      variants={drawRule(base + 0.45)}
                      style={{ transformOrigin: "left center" }}
                    />

                    <motion.p
                      className="sponsor-tier-subtitle"
                      variants={fadeUp(base + 0.55)}
                    >
                      {tier.subtitle}
                    </motion.p>
                  </div>

                  {/* Right Column: Sponsor Logos */}
                  <div
                    className={`sponsor-logos-area ${isSingleLogo ? "centered" : ""}`}
                  >
                    {hasSponsors &&
                      tier.sponsors.map((sponsor, i) => (
                        <SponsorLogoItem
                          key={sponsor.id || sponsor.name}
                          sponsor={sponsor}
                          delay={base + 0.5 + i * 0.12}
                        />
                      ))}
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}

/**
 * SponsorLogoItem Helper Component
 * The wrapper (link/div) does the pop-in; the <img> keeps its CSS hover,
 * so the two transforms never fight.
 */
function SponsorLogoItem({ sponsor, delay = 0 }) {
  const logoContent = (
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      className="sponsor-logo-img"
      style={{ height: sponsor.logoHeight || "42px" }}
    />
  );

  if (!sponsor.website) {
    return (
      <motion.div className="sponsor-logo-link" variants={popRotate(delay)}>
        {logoContent}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="sponsor-logo-link"
      title={sponsor.name}
      variants={popRotate(delay)}
    >
      {logoContent}
    </motion.a>
  );
}
