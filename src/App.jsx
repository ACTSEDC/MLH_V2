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
