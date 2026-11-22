import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Globe, Linkedin, Mail, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { locale, setLocale, data } = useLanguage();
  const { profile, achievements, ui, contact } = data;
  const heroMetrics = achievements.slice(0, 4);
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      className="border-b border-zinc-800/80 py-10 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Metadata & Language Switcher Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 sm:mb-10 sm:gap-4">
          <p className="min-w-0 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-emerald-400 sm:text-sm">
            <span>{profile.title}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">{profile.location}</span>
          </p>

          <div
            role="group"
            aria-label={ui.hero.languageLabel}
            className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-[#111114] p-1 shrink-0"
          >
            <Globe className="mx-1.5 h-3.5 w-3.5 text-zinc-400 sm:mx-2" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`min-h-[34px] whitespace-nowrap shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-3 ${
                locale === 'en'
                  ? 'bg-zinc-100 text-zinc-950'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLocale('ar')}
              aria-pressed={locale === 'ar'}
              className={`min-h-[34px] whitespace-nowrap shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-3 ${
                locale === 'ar'
                  ? 'bg-zinc-100 text-zinc-950'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              العربية
            </button>
          </div>
        </div>

        {/* Split Hero: Typographic Hierarchy + Portrait */}
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            key={locale}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-w-0 flex-col justify-center lg:col-span-7"
          >
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:mt-6 sm:text-xl">
              {profile.positioningStatement}
            </p>

            <p
              dir="ltr"
              className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[11px] text-zinc-400 sm:mt-6 sm:gap-x-3 sm:text-xs rtl:justify-end"
            >
              {profile.heroHighlights.map((item, idx) => (
                <React.Fragment key={item}>
                  <span>{item}</span>
                  {idx < profile.heroHighlights.length - 1 && (
                    <span aria-hidden="true" className="text-zinc-700">/</span>
                  )}
                </React.Fragment>
              ))}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors duration-150 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>{ui.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.linkedinLabel}
                  title={contact.linkedinLabel}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.githubLabel}
                  title={contact.githubLabel}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  aria-label={contact.email}
                  title={contact.email}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors duration-150 hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="min-w-0 lg:col-span-5 lg:flex lg:justify-end"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-zinc-800 bg-[#111114] sm:max-w-[360px] lg:mx-0 lg:max-w-[410px]">
              {imgError ? (
                <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-3 p-8 text-zinc-500">
                  <User className="h-10 w-10 text-zinc-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-zinc-400">
                    {profile.name}
                  </span>
                </div>
              ) : (
                <img
                  src="/assets/aistudio/image_1cbfdb08.png"
                  alt={`${profile.name} — ${profile.title}`}
                  width={1254}
                  height={1254}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="block h-full w-full object-cover object-center"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Verified impact strip anchored directly below hero */}
        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-zinc-800/80 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-6 sm:pt-10 lg:grid-cols-4">
          {heroMetrics.map((item) => (
            <div key={item.id} className="min-w-0">
              <div
                dir="ltr"
                className="inline-block font-mono text-2xl font-semibold tabular-nums text-emerald-400"
              >
                {item.metric}
              </div>
              <div className="mt-1 text-sm font-medium text-zinc-200">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
