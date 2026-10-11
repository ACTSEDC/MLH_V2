import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import './TimelinePage.css';

/* =========================================
   Icon SVGs — one per milestone type
   ========================================= */
function MilestoneIcon({ type }) {
  const base = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.3,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (type) {
    case 'megaphone':
      return (
        <svg {...base}>
          <path d="M3 10v4h4l9 5V5l-9 5H3Z" fill="currentColor" />
          <path d="m7 14 2 6h4l-3-5M19 9l2-1m-2 7 2 1" />
        </svg>
      );
    case 'lock':
      return (
        <svg {...base}>
          <rect x="4" y="10" width="16" height="11" rx="1.5" fill="currentColor" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="15" r="1" fill="#ffe477" />
        </svg>
      );
    case 'code':
      return (
        <svg {...base}>
          <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-1-13-5 16" />
        </svg>
      );
    case 'users':
      return (
        <svg {...base}>
          <circle cx="12" cy="7" r="3" fill="currentColor" />
          <circle cx="5" cy="9" r="2.5" fill="currentColor" />
          <circle cx="19" cy="9" r="2.5" fill="currentColor" />
          <path d="M5 19v-2a7 7 0 0 1 14 0v2H5Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

/* =========================================
   Milestone data
   Set active: true for milestones that have
   already occurred. The rail fill animates
   from left up to the last active item.
   ========================================= */
const milestones = [
  {
    day: '10',
    month: 'OCT',
    title: 'OPEN',
    description: ['Registrations', 'open'],
    icon: 'megaphone',
    active: true,   // ← past: registrations opened
  },
  {
    day: '18',
    month: 'OCT',
    title: 'CLOSE',
    description: ['Registrations', 'close'],
    icon: 'lock',
    active: false,  // ← future
  },
  {
    day: '19',
    month: 'OCT',
    title: 'REPO REVEAL',
    description: ['Project repository', 'is revealed'],
    icon: 'code',
    active: false,
  },
  {
    day: '21',
    month: 'OCT',
    title: 'OPEN',
    subtitle: 'CONTRIBUTION',
    description: ['Start contributing'],
    icon: 'users',
    active: false,
  },
];

/* =========================================
   Page component
   ========================================= */
export default function TimelinePage() {
  const railRef = useRef(null);
  const isInView = useInView(railRef, { once: true, margin: '-80px' });

  /**
   * Compute the percentage of the rail that should be highlighted.
   * Mirrors TimelineRail's lastActive logic:
   *   activePercent = lastActiveIndex / (totalItems - 1) * 100
   */
  const { lastActiveIdx, activePercent } = useMemo(() => {
    let idx = -1;
    milestones.forEach((m, i) => { if (m.active) idx = i; });
    const pct = milestones.length > 1
      ? (idx / (milestones.length - 1)) * 100
      : 0;
    return { lastActiveIdx: idx, activePercent: pct };
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-wrapper">

        {/* ── Section heading ── */}
        <motion.h1
          className="timeline-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Your path to the finale.
        </motion.h1>

        {/* ── Rail + steps ── */}
        <div className="timeline-rail-container" ref={railRef}>

          {/*
            Horizontal rail line — desktop only (CSS hides on mobile).
            Inspired by TimelineRail's separated rail element.
            Two layers: dim base track + animated active-progress fill.
          */}
          <div className="timeline-rail" aria-hidden="true">
            <div className="timeline-rail-track" />
            <motion.div
              className="timeline-rail-active"
              initial={{ width: '0%' }}
              animate={isInView ? { width: `${activePercent}%` } : { width: '0%' }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            />
          </div>

          {/*
            Milestone list — <ol> for semantic order (inspired by TimelineRail).
            Each <li> gets .is-past when its milestone has already occurred,
            and aria-current="step" when it is the most-recent active item.
          */}
          <ol className="timeline-grid" role="list">
            {milestones.map((m, i) => {
              const isPast = m.active;
              const isCurrent = i === lastActiveIdx;

              return (
                <motion.li
                  key={m.day}
                  className={`timeline-step${isPast ? ' is-past' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {/* Month label (tiny badge above icon) */}
                  <p className="timeline-month-badge">{m.month}</p>

                  {/* Icon circle */}
                  <div className="timeline-icon-circle" aria-hidden="true">
                    <MilestoneIcon type={m.icon} />
                  </div>

                  {/* Vertical connector icon → date */}
                  <div className="timeline-v-line" aria-hidden="true" />

                  {/* Date circle — sits on the rail line */}
                  <div className="timeline-date-circle">
                    {m.day}
                  </div>

                  {/* Milestone name */}
                  <h2 className="timeline-step-title">
                    {m.title}
                    {m.subtitle && (
                      <>
                        <br />
                        {m.subtitle}
                      </>
                    )}
                  </h2>

                  {/* Milestone description */}
                  <p className="timeline-step-desc" aria-label={m.description.join(' ')}>
                    {m.description.map((line, j) => (
                      <span key={j}>{line}</span>
                    ))}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}
