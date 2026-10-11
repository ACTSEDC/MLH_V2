import { useState } from 'react'
import './FAQItem.css'

/**
 * FAQItem — A single accordion row
 * @param {string} question - The FAQ question text
 * @param {string} answer   - The FAQ answer text
 */
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const slug = question.replace(/\s+/g, '-').toLowerCase()

  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button
        className="faq-item__trigger"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${slug}`}
        id={`faq-btn-${slug}`}
      >
        <span className="faq-item__question">{question}</span>
        <span className="faq-item__icon" aria-hidden="true">+</span>
      </button>

      <div
        className="faq-item__body"
        id={`faq-answer-${slug}`}
        role="region"
        aria-labelledby={`faq-btn-${slug}`}
      >
        <p className="faq-item__answer">{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
