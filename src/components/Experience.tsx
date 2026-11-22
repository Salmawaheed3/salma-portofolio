import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Experience: React.FC = () => {
  const { data } = useLanguage();
  const { experience: sectionCopy } = data.ui.sections;

  return (
    <section id="experience" className="border-b border-zinc-800/80 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index={sectionCopy.index}
          eyebrow={sectionCopy.eyebrow}
          title={sectionCopy.title}
        />

        <div className="flex flex-col space-y-4 sm:space-y-6">
          {data.experience.map((item) => (
            <article
              key={item.id}
              className="min-w-0 rounded-xl border border-zinc-800 bg-[#111114] p-4 sm:p-6"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start sm:gap-4">
                <div className="min-w-0">
                  <h3 className="break-words text-base font-semibold text-zinc-100 sm:text-lg">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 break-words text-sm font-medium text-emerald-400">
                    {item.company}
                  </p>
                </div>
                <div className="min-w-0 font-mono text-xs tabular-nums text-zinc-400 sm:shrink-0 sm:text-end">
                  <div className="break-words">{item.period}</div>
                  <div className="mt-0.5 break-words text-zinc-500">{item.location}</div>
                </div>
              </div>

              <p className="mt-3.5 break-words text-sm leading-relaxed text-zinc-400 sm:mt-4">
                {item.context}
              </p>

              <ul className="mt-4 space-y-2.5 border-t border-zinc-800/80 pt-4">
                {item.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300 sm:text-sm"
                  >
                    <span aria-hidden="true" className="mt-0.5 shrink-0 font-mono text-xs text-emerald-400">
                      —
                    </span>
                    <span className="min-w-0 break-words">{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
