import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimelinePage from './pages/timeline/TimelinePage.jsx';
import PrizePage from './pages/prize/PrizePage.jsx';
import SponsorsPage from './pages/sponser/SponsorsPage.jsx';
import MentorsPage from './pages/mentor/MentorsPage.jsx';
import FAQSection from './pages/faq/FAQSection.jsx';
import RegisterCTA from './RegisterCTA/index.js';
import Footer from './Footer/Footer.jsx';

/**
 * LandingPage — The full long-scroll landing page.
 * Sections are rendered in the order specified by the design reference:
 *   1. Timeline
 *   2. Prize
 *   3. Sponsors
 *   4. Mentors & Judges
 *   5. FAQ
 *   6. Register CTA
 *
 * To add a new section: import it and append it here.
 * Do not alter the routing structure in App below.
 */
function LandingPage() {
  return (
    <>
      <TimelinePage />
      <PrizePage />
      <SponsorsPage />
      <MentorsPage />
      <FAQSection />
      <RegisterCTA />
      <Footer />
    </>
  );
}

/**
 * App — Root router.
 *
 * Routes:
 *   /      → Full landing page (all sections)
 *   /faq   → FAQ section standalone (deep-link / shareable URL)
 *
 * To add a new page route: add a <Route path="/your-path" element={<YourPage />} />
 * below the existing routes. Do not modify LandingPage for new top-level routes.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/prize" element={<PrizePage />} />
        <Route path="/faq" element={<FAQSection />} />
      </Routes>
    </BrowserRouter>
  );
}

