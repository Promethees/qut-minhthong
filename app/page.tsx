import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ResearchSection from "./components/ResearchSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchSection />
      <ContactSection />
    </main>
  );
}