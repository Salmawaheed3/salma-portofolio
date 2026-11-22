import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data } = useLanguage();
  const { nav } = data.ui;
  const { contact } = data;

  const navLinks = [
    { label: nav.about, href: '#about' },
    { label: nav.projects, href: '#projects' },
    { label: nav.expertise, href: '#expertise' },
    { label: nav.experience, href: '#experience' },
    { label: nav.education, href: '#education' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(href.replace(/^#/, ''));
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090B]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-6 sm:px-6 sm:py-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="min-w-0 truncate font-display text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm sm:text-base"
        >
          {data.profile.name}
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="whitespace-nowrap shrink-0 text-sm text-zinc-400 underline-offset-4 transition-colors duration-150 hover:text-zinc-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Top Social/Contact Icons + Mobile Menu Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.linkedinLabel}
              title={contact.linkedinLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.githubLabel}
              title={contact.githubLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label={contact.email}
              title={contact.email}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:h-10 sm:w-10 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-zinc-800 bg-[#09090B] px-4 py-3 sm:px-6 sm:py-4 lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex min-h-[44px] items-center rounded-md px-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
