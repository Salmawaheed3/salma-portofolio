import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Compass,
  Cpu,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  ImageOff,
  Layers,
  Lock,
  Maximize2,
  Sliders,
  TrendingUp,
  UserCheck,
  X,
} from 'lucide-react';
import { ArchitectureDiagram, ProjectCaseStudy } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface ProjectDetailPageProps {
  project: ProjectCaseStudy;
  onSelectProject: (projectId: string) => void;
  onBackToProjects: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onSelectProject,
  onBackToProjects,
}) => {
  const { locale, setLocale, data } = useLanguage();
  const { modal } = data.ui.sections;

  const [activeDiagramIdx, setActiveDiagramIdx] = useState(0);
  const [lightboxDiagram, setLightboxDiagram] =
    useState<ArchitectureDiagram | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const projectIndex = data.projects.findIndex((p) => p.id === project.id);
  const previousProject =
    projectIndex > 0 ? data.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex >= 0 && projectIndex < data.projects.length - 1
      ? data.projects[projectIndex + 1]
      : null;

  useEffect(() => {
    setActiveDiagramIdx(0);
    setLightboxDiagram(null);
  }, [project.id]);

  useEffect(() => {
    if (!lightboxDiagram) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxDiagram(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxDiagram]);

  const diagrams = project.story.solutionArchitecture.diagrams;
  const activeDiagram =
    diagrams && diagrams.length > 0
      ? diagrams[Math.min(activeDiagramIdx, diagrams.length - 1)]
      : null;

  const sectionAnchors = [
    { id: 'case-overview', num: '01', label: modal.projectOverview },
    { id: 'case-context', num: '02', label: modal.businessContext },
    { id: 'case-challenge', num: '03', label: modal.challenge },
    { id: 'case-role', num: '04', label: modal.myRole },
    { id: 'case-design', num: '05', label: modal.solutionDesign },
    { id: 'case-architecture', num: '06', label: modal.systemArchitecture },
    { id: 'case-stack', num: '07', label: modal.technicalStack },
    { id: 'case-decisions', num: '08', label: modal.keyEngineeringDecisions },
    { id: 'case-impact', num: '09', label: modal.resultsAndImpact },
    ...(project.story.confidentialityNote
      ? [{ id: 'case-confidentiality', num: '10', label: modal.confidentialityNote }]
      : []),
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="pb-20">
      {/* Top Page Utility Bar */}
      <div className="border-b border-zinc-800/80 bg-[#0D0D10]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onBackToProjects();
            }}
            className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap shrink-0 text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            <span>{modal.backToProjects}</span>
          </a>

          <div className="flex items-center gap-4">
            <span className="hidden font-mono text-xs tabular-nums text-zinc-500 sm:inline-block">
              {String(projectIndex + 1).padStart(2, '0')} /{' '}
              {String(data.projects.length).padStart(2, '0')}
            </span>

            <div
              role="group"
              aria-label={data.ui.hero.languageLabel}
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-[#111114] p-1"
            >
              <Globe className="mx-2 h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
                className={`min-h-[32px] whitespace-nowrap shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
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
                className={`min-h-[32px] whitespace-nowrap shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  locale === 'ar'
                    ? 'bg-zinc-100 text-zinc-950'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Editorial Header */}
      <header className="border-b border-zinc-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            key={`${project.id}-${locale}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400">
              <span className="text-emerald-400">{modal.caseStudyLabel}</span>
              <span aria-hidden="true" className="text-zinc-700">/</span>
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>{project.company}</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="tabular-nums text-zinc-400">{project.period}</span>
            </div>

            <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="mt-3 text-lg font-medium text-zinc-400 sm:text-xl">
              {project.subtitle}
            </p>

            {project.highlightMetric && (
              <p className="mt-5 font-mono text-sm font-medium tabular-nums text-emerald-400 sm:text-base">
                {project.highlightMetric}
              </p>
            )}

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300">
              {project.summary}
            </p>

            <p
              dir="ltr"
              className="mt-6 font-mono text-xs leading-relaxed text-zinc-400 rtl:text-right"
            >
              {project.tags.join(' · ')}
            </p>

            {project.liveUrl && (
              <div className="mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap shrink-0 rounded-md bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors duration-150 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>{modal.visitLivePlatform}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Main Content Grid: Metadata/Outline Rail + 10-Section Storytelling */}
      <div className="mx-auto max-w-6xl px-6 pt-12 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sidebar Rail */}
          <aside className="lg:col-span-4">
            <div className="space-y-8 lg:sticky lg:top-24">
              {/* Structured Specs */}
              <div className="rounded-xl border border-zinc-800 bg-[#111114] p-6">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-mono text-xs text-zinc-500">
                      {modal.domainLabel}
                    </dt>
                    <dd className="mt-1 font-medium text-zinc-200">
                      {project.categoryLabel}
                    </dd>
                  </div>
                  <div className="border-t border-zinc-800/80 pt-3">
                    <dt className="font-mono text-xs text-zinc-500">
                      {modal.companyLabel}
                    </dt>
                    <dd className="mt-1 font-medium text-zinc-200">
                      {project.company}
                    </dd>
                  </div>
                  <div className="border-t border-zinc-800/80 pt-3">
                    <dt className="font-mono text-xs text-zinc-500">
                      {modal.periodLabel}
                    </dt>
                    <dd className="mt-1 font-mono text-xs tabular-nums text-zinc-300">
                      {project.period}
                    </dd>
                  </div>
                  {project.highlightMetric && (
                    <div className="border-t border-zinc-800/80 pt-3">
                      <dt className="font-mono text-xs text-zinc-500">
                        {modal.verifiedOutcomeLabel}
                      </dt>
                      <dd className="mt-1 font-mono text-xs font-medium tabular-nums text-emerald-400">
                        {project.highlightMetric}
                      </dd>
                    </div>
                  )}
                  {project.liveUrl && (
                    <div className="border-t border-zinc-800/80 pt-3">
                      <dt className="font-mono text-xs text-zinc-500">
                        {modal.livePlatformLabel}
                      </dt>
                      <dd className="mt-1.5">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          dir="ltr"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-emerald-400 underline-offset-4 transition-colors hover:text-emerald-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                        >
                          <span>{project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Section Outline Jump Links */}
              <nav
                aria-label={modal.contentsLabel}
                className="hidden rounded-xl border border-zinc-800 bg-[#111114] p-6 lg:block"
              >
                <div className="mb-4 font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {modal.contentsLabel}
                </div>
                <ul className="space-y-1">
                  {sectionAnchors.map((sec) => (
                    <li key={sec.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className="flex w-full items-baseline gap-2.5 rounded-md px-2 py-1.5 text-start text-xs text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        <span className="font-mono tabular-nums text-emerald-400">
                          {sec.num}
                        </span>
                        <span className="leading-snug">{sec.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Narrative Case Study Chapters (1–10) */}
          <div className="space-y-12 lg:col-span-8">
            {/* 01. Project Overview */}
            <DetailSection
              id="case-overview"
              step="01"
              icon={<FileText className="h-4 w-4 text-emerald-400" />}
              title={modal.projectOverview}
            >
              <p className="text-base leading-relaxed text-zinc-300">
                {project.story.projectOverview}
              </p>
            </DetailSection>

            {/* 02. Business Context */}
            <DetailSection
              id="case-context"
              step="02"
              icon={<Briefcase className="h-4 w-4 text-emerald-400" />}
              title={modal.businessContext}
            >
              <p className="text-base leading-relaxed text-zinc-300">
                {project.story.businessContext}
              </p>
            </DetailSection>

            {/* 03. The Challenge */}
            <DetailSection
              id="case-challenge"
              step="03"
              icon={<AlertTriangle className="h-4 w-4 text-emerald-400" />}
              title={modal.challenge}
            >
              <p className="text-base leading-relaxed text-zinc-300">
                {project.story.challenge}
              </p>
            </DetailSection>

            {/* 04. My Role */}
            <DetailSection
              id="case-role"
              step="04"
              icon={<UserCheck className="h-4 w-4 text-emerald-400" />}
              title={modal.myRole}
            >
              <p className="text-base leading-relaxed text-zinc-300">
                {project.story.myRole}
              </p>
            </DetailSection>

            {/* 05. Solution Design */}
            <DetailSection
              id="case-design"
              step="05"
              icon={<Compass className="h-4 w-4 text-emerald-400" />}
              title={modal.solutionDesign}
            >
              <p className="text-base leading-relaxed text-zinc-300">
                {project.story.solutionDesign}
              </p>
            </DetailSection>

            {/* 06. System Architecture + Diagrams / Flow */}
            <DetailSection
              id="case-architecture"
              step="06"
              icon={<Layers className="h-4 w-4 text-emerald-400" />}
              title={modal.systemArchitecture}
            >
              <p className="text-base leading-relaxed text-zinc-300">
                {project.story.solutionArchitecture.overview}
              </p>

              {/* Actual Uploaded System Architecture Diagrams */}
              {diagrams && diagrams.length > 0 && activeDiagram && (
                <div className="mt-6 rounded-xl border border-zinc-800 bg-[#111114] p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-200">
                      <GitBranch
                        className="h-3.5 w-3.5 text-emerald-400"
                        aria-hidden="true"
                      />
                      <span>{modal.systemDiagramsTitle}</span>
                    </div>
                    <span className="font-mono text-xs text-emerald-400">
                      {modal.diagramsBadge}
                    </span>
                  </div>

                  {diagrams.length > 1 && (
                    <div
                      role="tablist"
                      aria-label={modal.systemDiagramsTitle}
                      className="mb-4 flex flex-wrap gap-1.5"
                    >
                      {diagrams.map((diag, idx) => {
                        const isSelected = idx === activeDiagramIdx;
                        return (
                          <button
                            key={diag.id}
                            type="button"
                            role="tab"
                            aria-selected={isSelected}
                            onClick={() => setActiveDiagramIdx(idx)}
                            className={`min-h-[36px] whitespace-nowrap shrink-0 rounded-md px-3 py-1.5 font-mono text-xs transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                              isSelected
                                ? 'bg-zinc-100 text-zinc-950 font-medium'
                                : 'bg-[#09090B] text-zinc-400 hover:text-zinc-100'
                            }`}
                          >
                            {diag.tabLabel}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <h3 className="mb-3 text-sm font-medium text-zinc-100">
                    {activeDiagram.title}
                  </h3>

                  <div
                    className={`overflow-hidden rounded-lg ${
                      activeDiagram.surfaceTone === 'light'
                        ? 'bg-white'
                        : 'bg-[#1D222D]'
                    }`}
                  >
                    {failedImages[activeDiagram.id] ? (
                      <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center text-zinc-400">
                        <ImageOff
                          className="h-6 w-6 text-zinc-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-zinc-300">
                          {activeDiagram.title}
                        </span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setLightboxDiagram(activeDiagram)}
                        aria-label={`${modal.expandDiagram}: ${activeDiagram.title}`}
                        className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        <img
                          src={activeDiagram.imageSrc}
                          alt={activeDiagram.imageAlt}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({
                              ...prev,
                              [activeDiagram.id]: true,
                            }))
                          }
                          className="mx-auto max-h-[540px] w-full object-contain p-4 transition-transform duration-200 group-hover:scale-[1.01]"
                        />
                        <span className="absolute bottom-3 end-3 inline-flex items-center gap-1.5 rounded-md bg-zinc-950/85 px-2.5 py-1.5 font-mono text-xs text-zinc-200 opacity-90 transition-opacity group-hover:opacity-100">
                          <Maximize2
                            className="h-3.5 w-3.5 text-emerald-400"
                            aria-hidden="true"
                          />
                          <span>{modal.expandDiagram}</span>
                        </span>
                      </button>
                    )}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {activeDiagram.caption}
                  </p>
                </div>
              )}

              {/* Illustrative Step-by-Step Flow for projects without uploaded diagrams */}
              {(!diagrams || diagrams.length === 0) && (
                <div className="mt-6 rounded-xl border border-zinc-800 bg-[#111114] p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-200">
                      <GitBranch
                        className="h-3.5 w-3.5 text-emerald-400"
                        aria-hidden="true"
                      />
                      <span>{modal.systemFlowTitle}</span>
                    </div>
                    <span className="font-mono text-xs text-zinc-400">
                      {modal.illustrativeBadge}
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {project.story.solutionArchitecture.illustrativeFlow.map(
                      (step) => (
                        <div key={step.stage} className="space-y-1.5">
                          <div className="font-mono text-xs font-medium text-emerald-400">
                            {step.stage}
                          </div>
                          <p className="text-sm leading-relaxed text-zinc-400">
                            {step.detail}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </DetailSection>

            {/* 07. Technical Stack */}
            <DetailSection
              id="case-stack"
              step="07"
              icon={<Cpu className="h-4 w-4 text-emerald-400" />}
              title={modal.technicalStack}
            >
              <div className="divide-y divide-zinc-800/80 rounded-xl border border-zinc-800 bg-[#111114]">
                {project.story.technicalStack.map((layer) => (
                  <div
                    key={layer.category}
                    className="grid gap-1.5 px-5 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                  >
                    <div className="font-mono text-xs font-medium text-emerald-400 sm:col-span-4">
                      {layer.category}
                    </div>
                    <div
                      dir="ltr"
                      className="text-sm text-zinc-200 sm:col-span-8 rtl:text-right"
                    >
                      {layer.items}
                    </div>
                  </div>
                ))}
              </div>
            </DetailSection>

            {/* 08. Key Engineering Decisions */}
            <DetailSection
              id="case-decisions"
              step="08"
              icon={<Sliders className="h-4 w-4 text-emerald-400" />}
              title={modal.keyEngineeringDecisions}
            >
              <div className="space-y-4">
                {project.story.keyEngineeringDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-800 bg-[#111114] p-5"
                  >
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {item.decision}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {item.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </DetailSection>

            {/* 09. Results & Business Impact */}
            <section
              id="case-impact"
              className="scroll-mt-24 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                <span className="tabular-nums">09</span>
                <span aria-hidden="true" className="text-emerald-500/40">/</span>
                <TrendingUp className="h-4 w-4" aria-hidden="true" />
                <h2 className="text-sm font-semibold text-emerald-300">
                  {modal.resultsAndImpact}
                </h2>
              </div>
              <p className="mt-3 text-base leading-relaxed text-zinc-100">
                {project.story.resultsAndImpact}
              </p>
            </section>

            {/* 10. Confidentiality Note */}
            {project.story.confidentialityNote && (
              <section
                id="case-confidentiality"
                className="scroll-mt-24 rounded-xl border border-zinc-800/80 bg-[#0D0D10] p-5"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span className="tabular-nums text-zinc-500">10</span>
                  <span aria-hidden="true" className="text-zinc-700">/</span>
                  <Lock className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {modal.confidentialityNote}
                  </h2>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {project.story.confidentialityNote}
                </p>
              </section>
            )}
          </div>
        </div>

        {/* Bottom Prev / Next Project Navigation */}
        <nav
          aria-label={modal.viewAllProjects}
          className="mt-16 border-t border-zinc-800/80 pt-10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {previousProject ? (
              <a
                href={`#/projects/${previousProject.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectProject(previousProject.id);
                }}
                className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#111114] p-5 transition-colors hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 group-hover:text-emerald-400">
                  <ArrowLeft
                    className="h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                  />
                  <span>{modal.previousProject}</span>
                </div>
                <div className="mt-2 text-base font-semibold text-zinc-100 group-hover:text-white">
                  {previousProject.title}
                </div>
                <div className="mt-1 text-xs text-zinc-400">
                  {previousProject.subtitle}
                </div>
              </a>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject ? (
              <a
                href={`#/projects/${nextProject.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectProject(nextProject.id);
                }}
                className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#111114] p-5 text-start transition-colors hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:items-end sm:text-end"
              >
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 group-hover:text-emerald-400">
                  <span>{modal.nextProject}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-2 text-base font-semibold text-zinc-100 group-hover:text-white">
                  {nextProject.title}
                </div>
                <div className="mt-1 text-xs text-zinc-400">
                  {nextProject.subtitle}
                </div>
              </a>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onBackToProjects();
              }}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-zinc-700 bg-[#111114] px-5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>{modal.viewAllProjects}</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Fullscreen Diagram Lightbox */}
      <AnimatePresence>
        {lightboxDiagram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 sm:p-8"
            onClick={() => setLightboxDiagram(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-zinc-800 ${
                lightboxDiagram.surfaceTone === 'light'
                  ? 'bg-white'
                  : 'bg-[#1D222D]'
              }`}
            >
              <div className="flex items-center justify-between gap-4 border-b border-zinc-700/60 bg-[#0D0D10] px-5 py-3.5">
                <div className="min-w-0">
                  <h4 className="truncate font-mono text-xs font-medium text-emerald-400 sm:text-sm">
                    {lightboxDiagram.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxDiagram(null)}
                  aria-label={modal.closeDiagram}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <img
                  src={lightboxDiagram.imageSrc}
                  alt={lightboxDiagram.imageAlt}
                  referrerPolicy="no-referrer"
                  className="mx-auto max-h-[78vh] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

const DetailSection: React.FC<{
  id: string;
  step: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ id, step, icon, title, children }) => (
  <section
    id={id}
    className="scroll-mt-24 border-b border-zinc-800/80 pb-10 last:border-b-0"
  >
    <div className="mb-4 flex items-center gap-2.5">
      <span className="font-mono text-xs tabular-nums text-emerald-400">
        {step}
      </span>
      <span aria-hidden="true" className="text-zinc-700">/</span>
      <span aria-hidden="true">{icon}</span>
      <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
    </div>
    {children}
  </section>
);
