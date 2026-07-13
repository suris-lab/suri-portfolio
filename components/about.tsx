type AboutContent = {
  label: string
  heading: string
  headingItalic: string
  paragraphs: string[]
  stats: Array<{ value: string; label: string }>
  disciplines: Array<{ no: string; title: string; description: string }>
}

export function About({ content }: { content: AboutContent }) {
  return (
    <section
      id="about"
      className="relative border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-16 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          {content.label}
        </p>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-4xl leading-[1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {content.heading}
              <br />
              <span className="italic text-muted-foreground">
                {content.headingItalic}
              </span>
            </h2>

            <div className="mt-10 max-w-xl space-y-5 text-pretty leading-relaxed text-muted-foreground">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-10">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-3xl text-foreground sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] leading-relaxed text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {content.disciplines.map((item) => (
              <li
                key={item.title}
                className="group flex items-start gap-6 py-7 transition-colors hover:bg-card/50"
              >
                <span className="font-mono text-xs text-primary">
                  {item.no}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
