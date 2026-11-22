import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  const { data } = useLanguage();
  const { about, ui } = data;

  return (
    <section id="about" className="border-b border-zinc-800/80 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index={ui.sections.about.index}
          eyebrow={ui.sections.about.eyebrow}
          title={about.heading}
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-6">
            {about.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base leading-relaxed text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {about.workflowSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.28, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-zinc-800 bg-[#111114] p-5"
              >
                <span className="font-mono text-xs tabular-nums text-emerald-400">
                  {item.step}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
