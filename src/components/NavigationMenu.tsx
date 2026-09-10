"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navItems } from "@/lib/constants"

/**
 * NavigationMenu component that displays a horizontal navigation menu.
 * This component is to be used in the header of the application on desktop devices.
 */
export default function NavigationMenu() {
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const index = navItems.findIndex(({ path }) =>
      path === "/" ? pathname === "/" : pathname.startsWith(path)
    )
    setActiveIndex(index !== -1 ? index : 0)
  }, [pathname])

  return (
    <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <ul className="flex items-center gap-8">
        {navItems.map(({ name, path }) => {
          const isActive = pathname === path
          return (
            <li key={name} className="relative flex items-center">
              <Link
                href={path}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent-500 after:transition-all after:duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                  isActive
                    ? "text-accent-600 dark:text-accent-400 after:w-full"
                    : "text-[var(--muted)] after:w-0 hover:text-[var(--foreground)] hover:after:w-full"
                }
                                `}
                tabIndex={0}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
