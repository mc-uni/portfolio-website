import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default App;


