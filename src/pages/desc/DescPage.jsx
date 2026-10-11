import React from "react";
import { motion } from "framer-motion";
import { StatsCard } from "./StatsCard";
import "./DescPage.css";

export function DescPage() {
  // Editorial entrance transition defaults
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay: customDelay,
      },
    }),
  };

  return (
    <section
      id="about"
      className="about-section"
      aria-label="About Hacktoberfest"
    >
      <div className="about-container">
        {/* Top Split Layout: Heading + Intro Paragraph on Left, Stats Card on Right */}
        <div className="about-top-grid">
          {/* Left Column: Heading & Intro Paragraph */}
          <div className="about-left-col">
            {/* Editorial Heading Reveal */}
            <motion.div
              className="about-heading-wrapper"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <h2 className="about-main-heading">
                <span className="heading-line-1">ABOUT</span>
                <span className="heading-line-2">
                  <span className="heading-text-hacktoberfest">
                    HACKTOBERFEST
                  </span>
                  <span className="about-badge-26">26</span>
                </span>
              </h2>
            </motion.div>

            {/* Intro Paragraph */}
            <motion.p
              className="about-intro-paragraph"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.12}
            >
              Every October, the global tech community comes together for
              Hacktoberfest—a month-long celebration of open-source software,
              collaboration, and shared knowledge, proudly brought to you by
              DigitalOcean and DEV. Whether you are writing your very first line
              of code or you are a seasoned maintainer, this movement belongs to
              everyone. This year, the spirit of innovation takes an exciting
              new turn with a special focus on building alongside open-weight
              models and open-source AI. It’s free, it’s global, and it’s an
              open invitation to shape the future of technology together.
            </motion.p>
          </div>

          {/* Right Column: Four-Quadrant Statistics Card */}
          <div className="about-right-col">
            <StatsCard />
          </div>
        </div>

        {/* Bottom Section: Milestone Moment Subheading & Full-Width Story Paragraphs */}
        <div className="about-bottom-content">
          <motion.h3
            className="about-milestone-subheading"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.08}
          >
            A MILESTONE MOMENT AT GGSIPU EDC
          </motion.h3>

          <motion.p
            className="about-body-paragraph"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.18}
          >
            We are thrilled to bring this international celebration right to our
            campus. ACTS is proud to make history as the very first club to
            organize an official Hacktoberfest event in India, hosted right here
            at GGSIPU EDC! This is more than just a tech event—it is a gathering
            of curious minds, creators, and changemakers stepping up to build,
            learn, and grow as a community.
          </motion.p>

          <motion.p
            className="about-body-paragraph"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.28}
          >
            Whether you want to dive into open-source AI, collaborate on
            projects, or simply experience the magic of building together, we
            want you there.
          </motion.p>

          <motion.p
            className="about-body-paragraph about-closing-paragraph"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.38}
          >
            Mark your calendar for October 21st and come be a part of something
            special. Let’s make history together!
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default DescPage;
