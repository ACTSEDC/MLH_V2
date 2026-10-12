import { Reveal } from "./Reveal";

export function AboutStory() {
  return (
    <div className="about-bottom-content">
      <Reveal as="h3" className="about-milestone-subheading" delay={0.08}>
        A MILESTONE MOMENT AT GGSIPU EDC
      </Reveal>

      <Reveal as="p" className="about-body-paragraph" delay={0.18}>
        We are thrilled to bring this international celebration right to our
        campus. ACTS is proud to make history as the very first club to
        organize an official Hacktoberfest event in India, hosted right here at
        GGSIPU EDC! This is more than just a tech event—it is a gathering of
        curious minds, creators, and changemakers stepping up to build, learn,
        and grow as a community.
      </Reveal>

      <Reveal as="p" className="about-body-paragraph" delay={0.28}>
        Whether you want to dive into open-source AI, collaborate on projects,
        or simply experience the magic of building together, we want you there.
      </Reveal>

      <Reveal
        as="p"
        className="about-body-paragraph about-closing-paragraph"
        delay={0.38}
      >
        Mark your calendar for October 21st and come be a part of something
        special. Let’s make history together!
      </Reveal>
    </div>
  );
}