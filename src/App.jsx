import Navbar from "./navbar/Navbar.jsx";
import LandingPage from "./pages/landing/LandingPage.jsx";
import DescPage from "./pages/desc/DescPage.jsx";
import TimelinePage from "./pages/timeline/TimelinePage.jsx";
import PrizePage from "./pages/prize/PrizePage.jsx";
import SponsorsPage from "./pages/sponser/SponsorsPage.jsx";
import MentorsPage from "./pages/mentor/MentorsPage.jsx";
import FAQSection from "./pages/faq/FAQSection.jsx";
import RegisterCTA from "./RegisterCTA/index.js";
import Footer from "./Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <LandingPage />
        <DescPage />
        <TimelinePage />
        <div id="prizes">
          <PrizePage />
        </div>
        <div id="sponsors">
          <SponsorsPage />
        </div>
        <MentorsPage />
        <FAQSection />
        <RegisterCTA />
      </main>

      <Footer />
    </>
  );
}
