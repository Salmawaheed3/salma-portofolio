import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Education: React.FC = () => {
  const { data } = useLanguage();
  const { education: sectionCopy } = data.ui.sections;

  return (
    <section id="education" className="border-b border-zinc-800/80 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index={sectionCopy.index}
          eyebrow={sectionCopy.eyebrow}
          title={sectionCopy.title}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Education & Community */}
          <div className="min-w-0 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <GraduationCap className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>{sectionCopy.academicHeading}</span>
              </div>

              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="min-w-0 rounded-xl border border-zinc-800 bg-[#111114] p-4 sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="break-words text-sm font-semibold text-zinc-100 sm:text-base">
                      {edu.degreeOrCert}
                    </h3>
                    <span className="font-mono text-xs tabular-nums text-zinc-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 break-words text-sm text-emerald-400">{edu.institution}</p>
                  <p className="mt-3 break-words font-mono text-xs tabular-nums text-zinc-300">
                    {edu.notes}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <Users className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>{sectionCopy.communityHeading}</span>
              </div>

              <div className="space-y-3">
                {data.community.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-0 rounded-xl border border-zinc-800 bg-[#111114] p-4 sm:p-5"
                  >
                    <h3 className="break-words text-sm font-semibold text-zinc-100">
                      {item.role}
                    </h3>
                    <p className="mt-1 break-words text-xs text-zinc-400">{item.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="min-w-0 space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Award className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
              <span>{sectionCopy.certificationsHeading}</span>
            </div>

            <div className="space-y-4">
              {data.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="min-w-0 rounded-xl border border-zinc-800 bg-[#111114] p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="break-words text-sm font-semibold text-zinc-100">
                      {cert.degreeOrCert}
                    </h3>
                    <span className="font-mono text-xs tabular-nums text-zinc-400">
                      {cert.period}
                    </span>
                  </div>
                  <p className="mt-1 break-words text-xs text-emerald-400">
                    {cert.institution}
                  </p>
                  <p className="mt-2 break-words text-xs leading-relaxed text-zinc-400">
                    {cert.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
