'use client'

import dynamic from 'next/dynamic'

const VoidSphere = dynamic(
  () => import('./void-sphere').then((m) => m.VoidSphere),
  { ssr: false },
)

export function Hero() {
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
          01 — Hong Kong
        </p>
        <h1 className="font-serif text-6xl leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl">
          SHAN
          <br />
          <span className="italic">LAI</span>
        </h1>
      </div>

      {/* Center CTA */}
      <div className="pointer-events-none relative z-10 flex flex-1 items-center justify-center py-10">
        <a
          href="#works"
          className="glass pointer-events-auto group flex items-center gap-3 rounded-full border border-border px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary"
        >
          Explore Work
          <span className="size-1.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
        </a>
      </div>

      {/* Bottom row */}
      <div className="pointer-events-none relative z-10 flex items-end justify-between gap-6">
        <div className="hidden font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground md:block">
          Scroll
          <span className="mt-2 block h-8 w-px bg-border" />
        </div>

        <div className="ml-auto max-w-md text-right">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            02 — Craft
          </p>
          <h2 className="font-serif text-4xl leading-[0.9] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          BRAND
          <br />
          <span className="italic">STRATEGIST</span>
          </h2>
        </div>
      </div>
    </section>
  )
}
