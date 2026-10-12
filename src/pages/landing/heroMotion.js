// Shared entrance variants. Change the delay numbers to speed up or slow down the sequence.

export const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 90, damping: 15, delay },
  },
});

export const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 90, damping: 15, delay },
  },
});

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

export const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 12, delay },
  },
});

export const popRotate = (delay = 0, from = -30) => ({
  hidden: { opacity: 0, scale: 0, rotate: from },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 13, delay },
  },
});

export const drawLine = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay, ease: "easeOut" } },
});

export const rise = (delay = 0) => ({
  hidden: { opacity: 0, y: 120, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 14, delay },
  },
});

/* Wordmark: letters pop in one after another */
export const letters = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.35 } },
};

export const letter = {
  hidden: { opacity: 0, y: 70, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 14 },
  },
};
