import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Expertise: React.FC = () => {
  const { data } = useLanguage();
  const { expertise: sectionCopy } = data.ui.sections;

  return (
    <section id="expertise" className="border-b border-zinc-800/80 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index={sectionCopy.index}
          eyebrow={sectionCopy.eyebrow}
          title={sectionCopy.title}
          description={sectionCopy.description}
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.expertise.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.28, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-0 rounded-xl border border-zinc-800 bg-[#111114] p-5 sm:p-6"
            >
              <h3 className="text-base font-semibold text-zinc-100">
                {domain.domain}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {domain.summary}
              </p>

              <ul className="mt-5 space-y-2 border-t border-zinc-800/80 pt-4">
                {domain.capabilities.map((cap, cIdx) => (
                  <li
                    key={cIdx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300"
                  >
                    <span aria-hidden="true" className="shrink-0 font-mono text-emerald-400">
                      —
                    </span>
                    <span className="min-w-0 break-words">{cap}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
