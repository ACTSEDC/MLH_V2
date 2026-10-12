import { Reveal } from "./Reveal";

export function AboutIntro() {
  return (
    <div className="about-left-col">
      <Reveal className="about-heading-wrapper">
        <h2 className="about-main-heading">
          <span className="heading-line-1">ABOUT</span>
          <span className="heading-line-2">
            <span className="heading-text-hacktoberfest">HACKTOBERFEST</span>
            <span className="about-badge-26">26</span>
          </span>
        </h2>
      </Reveal>

      <Reveal as="p" className="about-intro-paragraph" delay={0.12}>
        Every October, the global tech community comes together for
        Hacktoberfest—a month-long celebration of open-source software,
        collaboration, and shared knowledge, proudly brought to you by
        DigitalOcean and DEV. Whether you are writing your very first line of
        code or you are a seasoned maintainer, this movement belongs to
        everyone. This year, the spirit of innovation takes an exciting new
        turn with a special focus on building alongside open-weight models and
        open-source AI. It’s free, it’s global, and it’s an open invitation to
        shape the future of technology together.
      </Reveal>
    </div>
  );
}