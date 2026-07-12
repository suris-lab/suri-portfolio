const skillGroups = [
  {
    no: '01',
    title: 'Creative Tools',
    tools: ['Photoshop', 'Illustrator', 'InDesign', 'Dreamweaver', 'Lightroom', 'Premiere Pro', 'After Effects', 'Figma', 'Canva'],
  },
  {
    no: '02',
    title: 'CRM, MarTech & Automation',
    tools: ['Mailchimp', 'MikeX CRM', 'Tavily', 'Firecrawl', 'n8n', 'AI-assisted workflows'],
  },
  {
    no: '03',
    title: 'Analytics & Performance',
    tools: ['Google Analytics', 'GA4 migration', 'Google Tag Manager', 'Looker Studio', 'Google Ads', 'Budget forecasting'],
  },
  {
    no: '04',
    title: 'Web, CMS & Search',
    tools: ['WordPress', 'Bootstrap', 'HTML', 'CSS', 'SEO', 'SEM', 'AEO'],
  },
  {
    no: '05',
    title: 'PR & Communications',
    tools: ['Sponsorships', 'Award submissions', 'Event marketing', 'Brand governance', 'Cross-border communications'],
  },
]

export function TechnicalArsenal() {
  return (
    <section
      id="arsenal"
      className="border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            05 — Technical Arsenal
          </p>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Tools for brand systems,{' '}
            <span className="italic text-muted-foreground">
              digital growth, and automation.
            </span>
          </h2>
        </div>

        <div className="grid border-t border-border lg:grid-cols-5">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group border-b border-border py-8 transition-colors hover:bg-card/40 lg:border-r lg:px-5 lg:last:border-r-0"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-primary">
                  {group.no}
                </span>
                <span className="h-px flex-1 bg-border transition-colors group-hover:bg-primary/40" />
              </div>

              <h3 className="min-h-16 font-serif text-2xl leading-tight text-foreground">
                {group.title}
              </h3>

              <ul className="mt-8 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="glass rounded-full border border-border px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
