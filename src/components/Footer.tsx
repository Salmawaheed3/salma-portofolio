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
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-xs text-zinc-500 sm:px-6 md:flex-row md:items-center">
        <span>
          © {year} {data.profile.name} · {data.profile.title}
        </span>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="inline-flex min-h-[36px] items-center transition-colors hover:text-zinc-300"
          >
            {footer.philosophy}
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, '#projects')}
            className="inline-flex min-h-[36px] items-center transition-colors hover:text-zinc-300"
          >
            {footer.caseStudies}
          </a>
          <a
            href="#experience"
            onClick={(e) => handleLinkClick(e, '#experience')}
            className="inline-flex min-h-[36px] items-center transition-colors hover:text-zinc-300"
          >
            {footer.experience}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex min-h-[36px] items-center transition-colors hover:text-zinc-300"
          >
            {footer.contact}
          </a>

          <span aria-hidden="true" className="text-zinc-800">|</span>

          <div className="inline-flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded px-2 transition-colors ${
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
              className={`inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded px-2 transition-colors ${
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
