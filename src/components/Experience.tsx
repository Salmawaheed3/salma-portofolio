import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Experience: React.FC = () => {
  const { data } = useLanguage();
  const { experience: sectionCopy } = data.ui.sections;

  return (
    <section id="experience" className="border-b border-zinc-800/80 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index={sectionCopy.index}
          eyebrow={sectionCopy.eyebrow}
          title={sectionCopy.title}
        />

        <div className="space-y-5 sm:space-y-6">
          {data.experience.map((item) => (
            <article
              key={item.id}
              className="min-w-0 rounded-xl border border-zinc-800 bg-[#111114] p-5 sm:p-6"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-emerald-400">
                    {item.company}
                  </p>
                </div>
                <div className="shrink-0 font-mono text-xs tabular-nums text-zinc-400 sm:text-end">
                  <div>{item.period}</div>
                  <div className="mt-0.5 text-zinc-500">{item.location}</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-400">{item.context}</p>

              <ul className="mt-4 space-y-2.5 border-t border-zinc-800/80 pt-4">
                {item.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300"
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
