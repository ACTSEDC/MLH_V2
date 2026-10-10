import React from 'react';
import headingImg from '../../assets/images/Group 2.png';
import tagImg from '../../assets/images/Group 3.png';
import { MENTORS_CONFIG } from '../../data/mentorsData.js';
import './MentorsPage.css';

/**
 * MentorsPage Component
 * Displays the mentors showcase with a continuous horizontal auto-scrolling carousel.
 */
export default function MentorsPage({ mentors = MENTORS_CONFIG }) {
  // Duplicate array to enable a seamless infinite marquee loop
  const displayMentors = [...mentors, ...mentors];

  return (
    <section className="mentors-container">
      <div className="mentors-wrapper">

        {/* Section Header */}
        <header className="mentors-header">
          <img
            src={headingImg}
            alt="MEET THE MENTORS & JUDGES."
            className="mentors-title-img"
          />
          <img
            src={tagImg}
            alt="GUIDE . REVIEW . SUPPORT"
            className="mentors-tag-img"
          />
        </header>

        {/* Mentors Carousel Track */}
        <div className="mentors-carousel-viewport">
          <ul className="mentors-carousel-track">
            {displayMentors.map((mentor, index) => (
              <li key={`${mentor.id}-${index}`} className="mentor-card">
                <div className="mentor-photo-wrap">
                  {mentor.avatar ? (
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="mentor-avatar-img"
                      style={{ objectPosition: mentor.objectPosition || 'center center' }}
                    />
                  ) : (
                    <div className="mentor-card-placeholder" />
                  )}
                </div>

                <div className="mentor-card-meta">
                  <h3 className="mentor-card-name">{mentor.name}</h3>
                  <p className="mentor-card-role">{mentor.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Box and Action Button */}
        <footer className="mentors-bottom-row">
          <div className="mentors-info-box">
            <p className="mentors-info-text">
              OUR MENTORS AND JUDGES ARE INDUSTRY PROFESSIONALS , RESEARCHERS , AND EXPERIENCED DEVELOPERS WHO ARE HERE TO GUIDE YOU , ANSWER YOUR QUESTIONS AND EVALUATE THE PROJECTS
            </p>
          </div>

          <div className="mentors-action-wrap">
            <button
              className="view-mentors-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span>VIEW ALL MENTORS AND JUDGES</span>
              <span className="btn-arrow">↗</span>
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
}



