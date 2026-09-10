import { FiArrowUpRight, FiGlobe } from "react-icons/fi"

const websites = [
  {
    name: "SeatSeeker",
    url: "https://seatseeker.my.id",
    description: "Explore the live SeatSeeker web experience.",
  },
  {
    name: "Jalur Rempah",
    url: "https://jalur-rempah.vercel.app",
    description: "Explore the live Jalur Rempah web experience.",
  },
  {
    name: "PRISCA APPS",
    url: "https://priscaapps.vercel.app/",
    description: "Explore the live PRISCA APPS web experience.",
  },
]

export default function FeaturedWebsites() {
  return (
    <section className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
            Live work
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Websites I built</h2>
        </div>
        <FiGlobe className="h-6 w-6 text-accent-500" aria-hidden="true" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {websites.map(website => (
          <a
            key={website.url}
            href={website.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-4 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:shadow-lg hover:shadow-accent-500/10"
          >
            <span>
              <span className="block text-base font-bold text-gray-900 dark:text-white">
                {website.name}
              </span>
              <span className="mt-1 block text-sm text-gray-600 dark:text-gray-300">
                {website.description}
              </span>
            </span>
            <FiArrowUpRight
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
