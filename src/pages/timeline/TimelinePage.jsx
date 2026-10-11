import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TimelinePage.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { day: "10", title: "Open", text: "Registrations open", icon: "flag" },
  { day: "18", title: "Close", text: "Registrations close", icon: "lock" },
  {
    day: "19",
    title: "Repo Reveal",
    text: "Project repository is revealed",
    icon: "code",
  },
  {
    day: "21",
    title: "Open Contribution",
    text: "Start contributing",
    icon: "team",
  },
];

const icons = {
  flag: <path d="M5 3v18M5 4h12l-2 4 2 4H5" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="1" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  code: <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />,
  team: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
    </>
  ),
};

export default function Timeline() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sectionRef.current.style.overflowX = "auto";
      return;
    }

    let ctx;
    let timer;

    const build = () => {
      ctx?.revert();
      ctx = gsap.context(() => {
        const track = trackRef.current;
        const W = track.scrollWidth;
        const dist = Math.max(W - window.innerWidth, 0);
        const stepEls = gsap.utils.toArray(".tl-step");

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${dist * 1.4}`,
            pin: true,
            pinSpacing: "margin",
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // track slides left while the line draws at the same rate
        tl.to(track, { x: -dist, duration: 1 }, 0);
        tl.fromTo(
          ".tl-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1, transformOrigin: "left center" },
          0,
        );

        // nodes appear one by one as the line tip reaches them
        stepEls.forEach((el) => {
          const center = el.offsetLeft + el.offsetWidth / 2;
          const at = Math.min(Math.max(center / W - 0.04, 0), 0.92);
          const q = (s) => el.querySelector(s);

          tl.fromTo(
            q(".tl-day"),
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.05, ease: "back.out(2.5)" },
            at,
          );
          tl.fromTo(
            q(".tl-stem"),
            { scaleY: 0, transformOrigin: "bottom center" },
            { scaleY: 1, duration: 0.03 },
            at + 0.02,
          );
          tl.fromTo(
            q(".tl-icon"),
            { scale: 0, rotate: -40, opacity: 0 },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.05,
              ease: "back.out(2)",
            },
            at + 0.03,
          );
          tl.fromTo(
            q(".tl-text"),
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.05, ease: "power2.out" },
            at + 0.035,
          );
        });
      }, sectionRef);
    };

    build();

    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(build, 200);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("load", build);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", build);
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="timeline" className="timeline-section">
      <div ref={trackRef} className="timeline-track">
        {/* Line: centred on the track */}
        <div className="tl-line" />

        {/* Intro panel: heading above the line, hint below it */}
        <div className="timeline-intro">
          <h2 className="timeline-heading">Your path to the finale.</h2>
          <div className="timeline-intro-gap" />
          <p className="timeline-hint">Scroll →</p>
        </div>

        {/* Steps: 3 rows, the middle row (the date node) sits exactly on the line */}
        {steps.map((s) => (
          <div key={s.day} className="tl-step">
            {/* row 1: icon + stem */}
            <div className="tl-top">
              <div className="tl-icon">
                <div className="tl-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    className="tl-icon-svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[s.icon]}
                  </svg>
                </div>
              </div>
              <div className="tl-stem" />
            </div>

            {/* row 2: date node, centred on the line */}
            <div className="tl-day">
              <div className="tl-day-node">{s.day}</div>
            </div>

            {/* row 3: text */}
            <div className="tl-text">
              <h3 className="tl-title">{s.title}</h3>
              <p className="tl-desc">{s.text}</p>
            </div>
          </div>
        ))}

        <div className="timeline-end" />
      </div>
    </section>
  );
}
