interface PageIntroProps {
  eyebrow: string
  title: string
  description: string
  count: number
}

export default function PageIntro({ eyebrow, title, description, count }: PageIntroProps) {
  return (
    <header className="border-b border-[var(--border)] pb-8 mb-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="flex items-baseline gap-2 text-accent-600 dark:text-accent-400">
          <span className="text-4xl font-bold">{count}</span>
          <span className="text-sm font-semibold uppercase tracking-wider">items</span>
        </div>
      </div>
    </header>
  )
}
