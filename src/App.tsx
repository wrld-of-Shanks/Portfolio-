import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { AchievementsSection } from './components/AchievementsSection';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <footer className="bg-muted/30 py-8 border-t transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Shankar M Darur. AI/ML Engineer & Innovator. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
