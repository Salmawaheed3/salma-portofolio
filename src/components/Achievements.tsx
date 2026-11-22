import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Achievements: React.FC = () => {
  const { data } = useLanguage();
  const { achievements: sectionCopy } = data.ui.sections;

  return (
    <section id="achievements" className="border-b border-zinc-800/80 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index={sectionCopy.index}
          eyebrow={sectionCopy.eyebrow}
          title={sectionCopy.title}
          description={sectionCopy.description}
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.achievements.map((item) => (
            <div
              key={item.id}
              className="flex min-w-0 flex-col justify-between rounded-xl border border-zinc-800 bg-[#111114] p-4 sm:p-6"
            >
              <div className="min-w-0">
                <div
                  dir="ltr"
                  className="inline-block font-mono text-xl font-semibold tabular-nums text-emerald-400 sm:text-2xl"
                >
                  {item.metric}
                </div>
                <h3 className="mt-2 break-words text-sm font-medium text-zinc-100 sm:text-base">
                  {item.label}
                </h3>
                <p className="mt-2 break-words text-sm leading-relaxed text-zinc-400">
                  {item.context}
                </p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[36px] w-fit items-center gap-1 whitespace-nowrap shrink-0 font-mono text-xs text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  <span>{sectionCopy.viewCredential}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
