'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    no: '01',
    title: 'PERSOL Greater China Marketing System',
    category: 'Regional Operations',
    year: '2024-25',
    image: '/projects/rebrand.png',
    result: '8% cost reduction',
  },
  {
    no: '02',
    title: 'APAC Website Revamp',
    category: 'Web / Analytics',
    year: '2023',
    image: '/projects/website.png',
    result: '13 APAC regions',
  },
  {
    no: '03',
    title: 'PERSOL Rebrand',
    category: 'Brand Governance',
    year: '2024',
    image: '/projects/campaign.png',
    result: 'PERSOLKELLY to PERSOL',
  },
  {
    no: '04',
    title: 'Membership Marketing Roadmap',
    category: 'Lifecycle / Automation',
    year: '2026',
    image: '/projects/seo-growth.png',
    result: 'AI-assisted journey',
  },
]

export function Projects() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section
      id="works"
      className="relative border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            02 — Selected Works
          </p>
          <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-muted-foreground">
            Brand, CRM, analytics, and integrated growth across regional organizations.
          </p>
        </div>

        {/* Floating hover preview */}
        {active !== null && (
          <div className="pointer-events-none fixed right-10 top-1/2 z-40 hidden -translate-y-1/2 md:block">
            <div className="relative h-64 w-96 overflow-hidden rounded-lg border border-border">
              <Image
                src={projects[active].image || '/placeholder.svg'}
                alt={`${projects[active].title} preview`}
                fill
                className="object-cover"
                sizes="384px"
              />
            </div>
          </div>
        )}

        <ul className="border-t border-border">
          {projects.map((project, i) => (
            <li key={project.title}>
              <a
                href="#contact"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-border py-8 transition-colors hover:bg-card/40"
              >
                <span className="font-mono text-xs text-primary">
                  {project.no}
                </span>

                <div className="min-w-0">
                  <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl md:text-5xl">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{project.category}</span>
                    <span className="text-primary">{project.result}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                    {project.year}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
