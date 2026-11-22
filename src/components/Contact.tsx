import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Contact: React.FC = () => {
  const { data } = useLanguage();
  const { contact } = data;
  const { contact: sectionCopy } = data.ui.sections;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored cleanly
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index={sectionCopy.index}
          eyebrow={sectionCopy.eyebrow}
          title={contact.heading}
          description={contact.subtext}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {/* Email */}
          <div className="flex min-w-0 flex-col justify-between rounded-xl border border-zinc-800 bg-[#111114] p-5 sm:p-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Mail className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>{sectionCopy.emailLabel}</span>
              </div>
              <p dir="ltr" className="mt-3 break-all font-mono text-xs text-zinc-400 rtl:text-right">
                {contact.email}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-medium text-zinc-100 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
              >
                <span>{sectionCopy.sendEmail}</span>
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={sectionCopy.copyAria}
                className="inline-flex min-h-[36px] items-center gap-1.5 whitespace-nowrap shrink-0 rounded border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    <span>{sectionCopy.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{sectionCopy.copy}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col justify-between rounded-xl border border-zinc-800 bg-[#111114] p-5 transition-colors hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:p-6"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Linkedin className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>{contact.linkedinLabel}</span>
              </div>
              <p dir="ltr" className="mt-3 break-all font-mono text-xs text-zinc-400 rtl:text-right">
                linkedin.com/in/salma-waheed-148a50226
              </p>
            </div>
            <div className="mt-6 inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-medium text-zinc-200 transition-colors group-hover:text-emerald-400">
              <span>{sectionCopy.connect}</span>
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col justify-between rounded-xl border border-zinc-800 bg-[#111114] p-5 transition-colors hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:p-6"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Github className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>{contact.githubLabel}</span>
              </div>
              <p dir="ltr" className="mt-3 break-all font-mono text-xs text-zinc-400 rtl:text-right">
                github.com/Salmawaheed3
              </p>
            </div>
            <div className="mt-6 inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-medium text-zinc-200 transition-colors group-hover:text-emerald-400">
              <span>{sectionCopy.viewRepos}</span>
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
