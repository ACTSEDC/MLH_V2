import React from 'react';
import SponsorsPage from './pages/sponser/SponsorsPage.jsx';
import MentorsPage from './pages/mentor/MentorsPage.jsx';

/**
 * App Component
 * Stacks the Sponsors and Mentors sections on a single unified page.
 */
export default function App() {
  return (
    <main>
      <SponsorsPage />
      <MentorsPage />
    </main>
  );
}
