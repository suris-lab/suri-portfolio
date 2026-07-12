import { ArrowUpRight } from 'lucide-react'

const socials = [
  {
    label: 'LinkedIn',
    handle: '/in/surislai',
    href: 'https://www.linkedin.com/in/surislai/',
  },
  {
    label: 'Email',
    handle: 'shan@60.com.hk',
    href: 'mailto:shan@60.com.hk',
  },
  {
    label: 'Location',
    handle: 'Hong Kong',
    href: '#top',
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          06 — Contact
        </p>

        <h2 className="font-serif text-[18vw] leading-[0.82] tracking-tight text-foreground sm:text-[15vw] lg:text-[12rem]">
          LET&apos;S
          <br />
          <span className="italic">TALK</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Whether you&apos;re looking for a marketing leader, a brand and
            digital growth partner, or a collaborator on a regional launch, I&apos;d
            love to hear from you.
          </p>

          <ul className="divide-y divide-border border-y border-border">
            {socials.map((s) => (
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
