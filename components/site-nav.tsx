'use client'

import { useState } from 'react'
import type { NavLink } from '@/lib/portfolio-content'

type SiteNavProps = {
  site: {
    name: string
    availability: string
  }
  links: NavLink[]
}

export function SiteNav({ site, links }: SiteNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#top"
          className="flex whitespace-nowrap items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground"
        >
          {site.name}
          <span className="size-1.5 rounded-full bg-primary" />
        </a>

        <ul className="hidden items-center gap-5 md:flex xl:gap-7">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-primary">{link.index}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden whitespace-nowrap items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground xl:flex">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            <span>{site.availability}</span>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-px w-6 bg-foreground transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-3 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground"
                >
                  <span className="text-primary">{link.index}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
