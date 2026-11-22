import React, { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { portfolioContent } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const PROJECT_HASH_PREFIX = '#/projects/';

function parseProjectIdFromHash(hash: string): string | null {
  if (!hash.startsWith(PROJECT_HASH_PREFIX)) return null;
  const candidate = decodeURIComponent(hash.slice(PROJECT_HASH_PREFIX.length));
  const exists = portfolioContent.en.projects.some((p) => p.id === candidate);
  return exists ? candidate : null;
}

const AppShell: React.FC = () => {
  const { locale, data } = useLanguage();
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() =>
    parseProjectIdFromHash(window.location.hash)
  );

  const activeProject = activeProjectId
    ? data.projects.find((p) => p.id === activeProjectId) ?? null
    : null;

  useEffect(() => {
    const handleRouteChange = () => {
      const nextId = parseProjectIdFromHash(window.location.hash);
      setActiveProjectId(nextId);
      if (nextId) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.title = `${activeProject.title} — ${data.profile.name}`;
    } else {
      document.title =
        locale === 'ar'
          ? 'سلمى وحيد — مهندسة ذكاء اصطناعي وتعلم آلي'
          : 'Salma Waheed — AI & Machine Learning Engineer';
    }
  }, [activeProject, data.profile.name, locale]);

  const openProject = useCallback((projectId: string) => {
    const targetHash = `${PROJECT_HASH_PREFIX}${encodeURIComponent(projectId)}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    setActiveProjectId(projectId);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      const normalized = sectionId || 'top';
      const wasOnProjectPage = activeProjectId !== null;

      if (wasOnProjectPage) {
        setActiveProjectId(null);
      }

      const targetHash = normalized === 'top' ? '#top' : `#${normalized}`;
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }

      const scrollTarget = () => {
        if (normalized === 'top') {
          window.scrollTo({ top: 0, behavior: wasOnProjectPage ? 'auto' : 'smooth' });
          return;
        }
        const el = document.getElementById(normalized);
        if (el) {
          el.scrollIntoView({
            behavior: wasOnProjectPage ? 'auto' : 'smooth',
            block: 'start',
          });
        }
      };

      if (wasOnProjectPage) {
        requestAnimationFrame(() => {
          requestAnimationFrame(scrollTarget);
        });
      } else {
        scrollTarget();
      }
    },
    [activeProjectId]
  );

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100">
      <Navbar onNavigateSection={navigateToSection} />
      <main>
        {activeProject ? (
          <ProjectDetailPage
            project={activeProject}
            onSelectProject={openProject}
            onBackToProjects={() => navigateToSection('projects')}
          />
        ) : (
          <>
            <Hero />
            <About />
            <Projects onSelectProject={openProject} />
            <Expertise />
            <Experience />
            <Achievements />
            <Education />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigateSection={navigateToSection} />
    </div>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </MotionConfig>
  );
}
