import { motion } from "framer-motion";

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

export function Reveal({ children, className, delay = 0, as = "div" }) {
  const Component = as === "p" ? motion.p : as === "h3" ? motion.h3 : motion.div;

  return (
    <Component
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      {children}
    </Component>
  );
}