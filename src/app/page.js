import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Volunteering from "./components/Volunteering";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1b0014]">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <Volunteering/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
