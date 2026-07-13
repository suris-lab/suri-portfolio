'use client'

import dynamic from 'next/dynamic'

const VoidSphere = dynamic(
  () => import('./void-sphere').then((m) => m.VoidSphere),
  { ssr: false },
)

type HeroContent = {
  location: string
  firstName: string
  lastName: string
  ctaLabel: string
  ctaHref: string
  scrollLabel: string
  craftLabel: string
  headlineLine1: string
  headlineLine2: string
}

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-10"
    >
      {/* 3D sphere backdrop */}
      <div className="absolute inset-0 z-0">
        <VoidSphere />
      </div>

      {/* Top-left discipline */}
      <div className="pointer-events-none relative z-10 max-w-2xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          {content.location}
        </p>
        <h1 className="font-serif text-6xl leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl">
          {content.firstName}
          <br />
          <span className="italic">{content.lastName}</span>
        </h1>
      </div>

      {/* Center CTA */}
      <div className="pointer-events-none relative z-10 flex flex-1 items-center justify-center py-10">
        <a
          href={content.ctaHref}
          className="glass pointer-events-auto group flex items-center gap-3 rounded-full border border-border px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary"
        >
          {content.ctaLabel}
          <span className="size-1.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
        </a>
      </div>

      {/* Bottom row */}
      <div className="pointer-events-none relative z-10 flex items-end justify-between gap-6">
        <div className="hidden font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground md:block">
          {content.scrollLabel}
          <span className="mt-2 block h-8 w-px bg-border" />
        </div>

        <div className="ml-auto max-w-md text-right">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {content.craftLabel}
          </p>
          <h2 className="font-serif text-4xl leading-[0.9] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {content.headlineLine1}
          <br />
          <span className="italic">{content.headlineLine2}</span>
          </h2>
        </div>
      </div>
    </section>
  )
}
