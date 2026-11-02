import SmoothScroll from "./components/SmoothScroll";
import ScrollSequence from "./components/ScrollSequence";
import HeroContent from "./components/HeroContent";
import AboutContent from "./components/AboutContent";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ResearchSection from "./components/ResearchSection";
import CertificatesSection from "./components/CertificatesSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-black text-white selection:bg-cyan-400 selection:text-black">
        {/* Navigation Bar */}
        <Navbar />

        {/* 1. Hero Canvas Sequence */}
        <div id="hero" className="relative">
          <ScrollSequence name="hero" frameCount={190} scrollLength={4000}>
            {(progress) => <HeroContent progress={progress} />}
          </ScrollSequence>
        </div>

        {/* 2. Key Metrics & Impact */}
        <StatsSection />

        {/* 3. Work Experience & Leadership */}
        <ExperienceSection />

        {/* 4. About Canvas Sequence (Moved after Work Experience) */}
        <div id="about" className="relative">
          <ScrollSequence name="about" frameCount={96} scrollLength={3500}>
            {(progress) => <AboutContent progress={progress} />}
          </ScrollSequence>
        </div>

        {/* 5. Technical Stack & Skills */}
        <SkillsSection />

        {/* 6. Research & Academic Interests */}
        <ResearchSection />

        {/* 7. Featured Projects */}
        <ProjectsSection />

        {/* 8. Certificates */}
        <CertificatesSection />

        {/* 9. Activities */}
        <ServicesSection />

        {/* 10. Contact & Inquiry */}
        <ContactSection />

        {/* 11. Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}