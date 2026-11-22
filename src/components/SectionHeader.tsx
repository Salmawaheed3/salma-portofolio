import React from 'react';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3 text-sm font-medium text-zinc-400">
        <span className="font-mono tabular-nums text-emerald-400">{index}</span>
        <span aria-hidden="true" className="text-zinc-700">/</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
};
