import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const year = new Date().getFullYear();
  const { locale, setLocale, data } = useLanguage();
  const { footer } = data.ui.sections;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(href.replace(/^#/, ''));
    }
  };

  return (
    <footer className="border-t border-zinc-800/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
        <span>
          © {year} {data.profile.name} · {data.profile.title}
        </span>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="transition-colors hover:text-zinc-300"
          >
            {footer.philosophy}
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, '#projects')}
            className="transition-colors hover:text-zinc-300"
          >
            {footer.caseStudies}
          </a>
          <a
            href="#experience"
            onClick={(e) => handleLinkClick(e, '#experience')}
            className="transition-colors hover:text-zinc-300"
          >
            {footer.experience}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="transition-colors hover:text-zinc-300"
          >
            {footer.contact}
          </a>

          <span aria-hidden="true" className="text-zinc-800">|</span>

          <div className="inline-flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`transition-colors ${
                locale === 'en' ? 'font-medium text-emerald-400' : 'hover:text-zinc-300'
              }`}
            >
              EN
            </button>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <button
              type="button"
              onClick={() => setLocale('ar')}
              aria-pressed={locale === 'ar'}
              className={`transition-colors ${
                locale === 'ar' ? 'font-medium text-emerald-400' : 'hover:text-zinc-300'
              }`}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
