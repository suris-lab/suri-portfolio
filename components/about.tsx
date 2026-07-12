const disciplines = [
  {
    no: '01',
    title: 'Brand Strategy',
    description:
      'Brand guidelines, positioning, visual identity, and governance that help teams move in one direction.',
  },
  {
    no: '02',
    title: 'Digital Growth',
    description:
      'SEO, content, social, analytics, and regional website programs built for measurable execution.',
  },
  {
    no: '03',
    title: 'Regional Leadership',
    description:
      'Hands-on marketing leadership across China, Hong Kong, Taiwan, and broader APAC teams.',
  },
  {
    no: '04',
    title: 'AI Automation',
    description:
      'An advocate for AI-assisted workflows and marketing automation that free teams to focus on strategy and craft.',
  },
]

const stats = [
  { value: '15+', label: 'Years experience' },
  { value: '13', label: 'APAC regions' },
  { value: '8%', label: 'Annual cost reduction' },
]

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-16 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          03 — About
        </p>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-4xl leading-[1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Creative instincts,
              <br />
              <span className="italic text-muted-foreground">
                backed by data.
              </span>
            </h2>

            <div className="mt-10 max-w-xl space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a Hong Kong-based marketing leader with over a decade
                across advertising, media, multinational environments, brand
                strategy, digital marketing, and cross-border communications. I began
                as a designer and creative director, then grew into regional
                marketing leadership at global recruitment and HR groups.
              </p>
              <p>
                Most recently I led marketing for Greater China at PERSOL APAC
                and now head marketing and membership at Hebe Haven Yacht Club.
                My edge is range — brand governance in the morning, analytics
                and SEO at noon, and AI-assisted automation to scale the system.
              </p>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-10">
              {stats.map((stat) => (
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
            {disciplines.map((item) => (
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
