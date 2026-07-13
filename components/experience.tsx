type ExperienceContent = {
  label: string
  heading: string
  headingItalic: string
  roles: Array<{
    period: string
    role: string
    company: string
    location: string
    points: string[]
  }>
}

export function Experience({ content }: { content: ExperienceContent }) {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {content.label}
          </p>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {content.heading}{' '}
            <span className="italic text-muted-foreground">
              {content.headingItalic}
            </span>
          </h2>
        </div>

        <div className="flex flex-col">
          {content.roles.map((role) => (
            <div
              key={`${role.company}-${role.period}`}
              className="group grid gap-4 border-t border-border py-8 transition-colors md:grid-cols-[180px_1fr] md:gap-10 hover:bg-card/40"
            >
              <div className="font-mono text-sm text-muted-foreground">
                {role.period}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-2xl text-foreground">
                    {role.role}
                  </h3>
                  <span className="text-primary">{role.company}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {role.location}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
