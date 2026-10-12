import { StatsCard } from "./StatsCard";
import { AboutIntro } from "./AboutIntro";
import { AboutStory } from "./AboutStory";
import "./DescPage.css";

export function DescPage() {
  return (
    <section
      id="about"
      className="about-section"
      aria-label="About Hacktoberfest"
    >
      <div className="about-container">
        {/* Top Split Layout: Heading + Intro Paragraph on Left, Stats Card on Right */}
        <div className="about-top-grid">
          <AboutIntro />

          {/* Right Column: Four-Quadrant Statistics Card */}
          <div className="about-right-col">
            <StatsCard />
          </div>
        </div>

        <AboutStory />
      </div>
    </section>
  );
}

export default DescPage;
