import { ArrowUpRight } from 'lucide-react'

type ContactContent = {
  label: string
  headlineLine1: string
  headlineLine2: string
  intro: string
  links: Array<{ label: string; handle: string; href: string }>
}

export function Contact({ content }: { content: ContactContent }) {
  return (
    <section
      id="contact"
      className="contact-blue-field relative overflow-hidden border-t border-border px-6 py-28 md:px-10"
    >
      <div className="relative z-10 mx-auto max-w-[1600px]">
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          {content.label}
        </p>

        <h2 className="contact-title font-serif text-[18vw] leading-[0.82] tracking-tight text-foreground transition-colors duration-700 sm:text-[15vw] lg:text-[12rem]">
          {content.headlineLine1}
          <br />
          <span className="italic">{content.headlineLine2}</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            {content.intro}
          </p>

          <ul className="divide-y divide-border border-y border-border">
            {content.links.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-primary"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                    {s.label}
                  </span>
                  <span className="flex items-center gap-2 text-right font-serif text-xl text-foreground sm:text-2xl">
                    {s.handle}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
