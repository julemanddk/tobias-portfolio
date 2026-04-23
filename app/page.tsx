import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#8FB9D4] text-[#2e2e2e]">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:px-10 lg:px-12">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}