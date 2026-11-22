import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectCategoryId } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { data } = useLanguage();
  const { projects: sectionCopy } = data.ui.sections;

  const [activeCategory, setActiveCategory] = useState<ProjectCategoryId>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? data.projects
      : data.projects.filter((p) => p.categoryId === activeCategory);

  return (
    <section id="projects" className="border-b border-zinc-800/80 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div className="min-w-0 [&>div]:mb-2 md:[&>div]:mb-12">
            <SectionHeader
              index={sectionCopy.index}
              eyebrow={sectionCopy.eyebrow}
              title={sectionCopy.title}
              description={sectionCopy.description}
            />
          </div>

          <div
            role="tablist"
            aria-label={sectionCopy.filterLabel}
            className="mb-8 flex w-full flex-wrap items-center gap-1 rounded-lg border border-zinc-800 bg-[#111114] p-1 sm:w-fit md:mb-12"
          >
            {sectionCopy.categories.map((category) => {
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category.id)}
                  className={`min-h-[36px] flex-1 sm:flex-initial whitespace-nowrap shrink-0 rounded-md px-2.5 py-1.5 font-mono text-[11px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-3 sm:text-xs ${
                    active
                      ? 'bg-zinc-100 text-zinc-950 font-medium'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const diagramCount =
              project.story.solutionArchitecture.diagrams?.length ?? 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.28,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex min-w-0 flex-col justify-between rounded-xl border border-zinc-800 bg-[#111114] p-4 transition-colors duration-150 hover:border-emerald-500/50 sm:p-6"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-zinc-400">
                    <span className="text-emerald-400">{project.categoryLabel}</span>
                    <span aria-hidden="true" className="text-zinc-700">·</span>
                    <span className="break-words">{project.company}</span>
                    {diagramCount > 0 && (
                      <>
                        <span aria-hidden="true" className="text-zinc-700">·</span>
                        <span className="tabular-nums text-zinc-300">
                          {diagramCount} {sectionCopy.diagramsLabel}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-2.5 break-words text-base font-semibold text-zinc-100 group-hover:text-white sm:mt-3 sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 break-words text-xs font-medium text-zinc-400 sm:text-sm">
                    {project.subtitle}
                  </p>

                  {project.highlightMetric && (
                    <p className="mt-2.5 break-words font-mono text-xs font-medium tabular-nums text-emerald-400 sm:mt-3">
                      {project.highlightMetric}
                    </p>
                  )}

                  <p className="mt-2.5 break-words text-sm leading-relaxed text-zinc-400 sm:mt-3">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 min-w-0 border-t border-zinc-800/80 pt-4 sm:mt-6">
                  <p
                    dir="ltr"
                    className="mb-3.5 break-words font-mono text-xs leading-relaxed text-zinc-500 sm:mb-4 rtl:text-right"
                  >
                    {project.tags.join(' · ')}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`#/projects/${project.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectProject(project.id);
                      }}
                      className="inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-medium text-zinc-200 transition-colors duration-150 group-hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm after:absolute after:inset-0 after:rounded-xl"
                    >
                      <span>{sectionCopy.readCaseStudy}</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                        aria-hidden="true"
                      />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex min-h-[36px] items-center gap-1.5 whitespace-nowrap shrink-0 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-medium text-emerald-300 transition-colors duration-150 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        <span>{sectionCopy.livePlatform}</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
