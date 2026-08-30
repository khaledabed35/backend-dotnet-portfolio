import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import WhatIDo from './components/WhatIDo';
import Experience from './components/Experience';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-paper text-ink-900 transition-colors duration-300 dark:bg-ink-950 dark:text-paper">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FeaturedProject />
        <WhatIDo />
        <Experience />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
