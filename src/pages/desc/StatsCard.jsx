import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Custom smooth count-up hook
function useCountUp(endVal, duration = 1000, startTrigger = false) {
  const [count, setCount] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return endVal;
    }
    return 0;
  });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!startTrigger || startedRef.current) return;
    startedRef.current = true;

    // Honor prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeOut * endVal));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(endVal); // Ensure exact final value
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [endVal, duration, startTrigger]);

  return count;
}

export function StatsCard() {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.25 });

  // Count up values
  const count24 = useCountUp(24, 900, isInView);
  const count500 = useCountUp(500, 1100, isInView);
  const count50 = useCountUp(50, 1000, isInView);

  // Card entrance motion variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const quadrantVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="stats-card-container"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label="Hacktoberfest Event Statistics"
    >
      {/* 2x2 Quadrant Grid */}
      <div className="stats-grid">
        {/* Quadrant 1: 24H - BUILD TIME (Yellow) */}
        <motion.div
          className="stat-quadrant quadrant-yellow"
          variants={quadrantVariants}
        >
          <div className="stat-number">
            <span>{count24}</span>
            <span className="stat-suffix">H</span>
          </div>
          <div className="stat-label">BUILD TIME</div>
        </motion.div>

        {/* Quadrant 2: 500+ - PARTICIPANTS (Light Blue) */}
        <motion.div
          className="stat-quadrant quadrant-blue"
          variants={quadrantVariants}
        >
          <div className="stat-number">
            <span>{count500}</span>
            <span className="stat-suffix">+</span>
          </div>
          <div className="stat-label">PARTICIPANTS</div>
        </motion.div>

        {/* Quadrant 3: 50+ - TEAMS (Coral Red) */}
        <motion.div
          className="stat-quadrant quadrant-coral"
          variants={quadrantVariants}
        >
          <div className="stat-number">
            <span>{count50}</span>
            <span className="stat-suffix">+</span>
          </div>
          <div className="stat-label">TEAMS</div>
        </motion.div>

        {/* Quadrant 4: ₹XXK+ - IN PRIZES (Warm Off-White) */}
        <motion.div
          className="stat-quadrant quadrant-white"
          variants={quadrantVariants}
        >
          <div className="stat-number">
            <span>₹XXK+</span>
          </div>
          <div className="stat-label">IN PRIZES</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
