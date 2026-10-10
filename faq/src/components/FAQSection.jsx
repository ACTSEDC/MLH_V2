import FAQItem from './FAQItem'
import './FAQSection.css'

/* --------------------------------------------------------
   FAQ data — matches the questions shown in the screenshot
   -------------------------------------------------------- */
const FAQ_DATA = [
  {
    question: 'Who can participate?',
    answer:
      'Anyone interested in technology, coding, design, or open source is welcome to participate. Whether you\'re a beginner or an experienced developer, Hacktoberfest is an opportunity to learn, collaborate, and build something meaningful with a community of creators.',
  },
  {
    question: 'What is the team size?',
    answer:
      'You can participate individually or collaborate with other builders to bring your ideas to life. Please check the official event guidelines for the permitted team size before registering.',
  },
  {
    question: 'Is registration free?',
    answer:
      'Yes! Registration is completely free. Sign up between October 10 and October 18 to secure your spot. Registrations close on October 18, so make sure you register before the deadline.',
  },
  {
    question: 'Can I participate individually?',
    answer:
      'Absolutely! You can participate solo if you prefer working independently. If you have friends with complementary skills, you can also collaborate as a team, subject to the event\'s team guidelines.',
  },
  {
    question: 'What can I build with?',
    answer:
      'Build a creative solution using the technologies and tools best suited to your idea. You can explore web development, AI/ML, open-source tools, applications, and other relevant technologies. Your project should address a meaningful problem and demonstrate creativity, functionality, and technical effort.',
  },
  {
    question: 'How are projects judged?',
    answer:
      'Projects will be evaluated by the judging panel based on criteria such as innovation, problem-solving, technical implementation, functionality, usability, and potential impact. Participants should be prepared to demonstrate their projects and explain their approach. Final judging criteria will be shared by the organizers.',
  },
]

/**
 * FAQSection — The full FAQ page section
 */
function FAQSection() {
  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      {/* ---- Header: title + description ---- */}
      <div className="faq-section__header">
        <div className="faq-section__title">
          <h1>
            Everything
            <br />
            else,{' '}
            <span className="highlight">Answered.</span>
          </h1>
        </div>

        <div className="faq-section__description">
          <p>
            Got questions? We&apos;ve got you covered. Here are answers to the
            most common questions about Hacktoberfest 2026. If you still need
            help, feel free to reach out to our team.
          </p>
        </div>
      </div>

      {/* ---- Accordion list ---- */}
      <div className="faq-section__list" role="list">
        {FAQ_DATA.map((item) => (
          <div role="listitem" key={item.question}>
            <FAQItem question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>

    
    </section>
  )
}

export default FAQSection
