const roles = [
  {
    period: 'Dec 2025 — Present',
    role: 'Head of Membership & Marketing',
    company: 'Hebe Haven Yacht Club',
    location: 'Hong Kong',
    points: [
      'Developed comprehensive brand guidelines covering visual identity, core values, and cross-department positioning.',
      'Reengineered marketing processes into a clearer communication roadmap across the full member journey.',
      'Leverage AI and automation to improve alignment, consistency, and conversion discipline.',
    ],
  },
  {
    period: 'Jan 2024 — Nov 2025',
    role: 'Head of Marketing, Greater China',
    company: 'PERSOL',
    location: 'Greater China',
    points: [
      'Unified marketing teams across China, Hong Kong, and Taiwan to strengthen regional synergy and shared resource efficiency.',
      'Optimized vendors, CRM, and forecasting to achieve 8% annual cost reduction and 25% headcount streamlining within one year.',
      'Spearheaded the PERSOLKELLY to PERSOL rebrand, renewing marketing materials as brand gatekeeper.',
    ],
  },
  {
    period: 'Jun 2023 — Jan 2024',
    role: 'Regional Marketing Specialist — Digital',
    company: 'PERSOL',
    location: 'APAC',
    points: [
      'Managed a large-scale website revamp across 13 APAC regions with consistent branding, UX, and content delivery.',
      'Supported UA to GA4 migration and Google Tag Manager setup for accurate analytics and tracking.',
      'Provided visual design guidance and digital support to APAC marketing teams.',
    ],
  },
  {
    period: 'Nov 2020 — Jun 2023',
    role: 'Marketing Manager',
    company: 'PERSOLKELLY',
    location: 'Hong Kong',
    points: [
      'Drove communications strategy and supported headquarters in delivering strategic priorities.',
      'Gatekept brand content for accuracy, consistency, and tone across initiatives.',
      'Oversaw marketing budget, digital ad spend, and social campaign performance. MVP Award 2021.',
    ],
  },
  {
    period: '2017 — 2020',
    role: 'Creative Director',
    company: 'My Miracle',
    location: 'Hong Kong',
    points: [
      'Directed conceptual design, graphic design, and artwork production.',
      'Owned design and packaging for product catalogs, booklets, packaging, print advertising, and outdoor media.',
      'Worked with agencies, partners, production houses, and internal teams to launch marketing campaigns.',
    ],
  },
  {
    period: 'Sep 2016 — Nov 2020',
    role: 'Senior Marketing Executive / Design Consultant',
    company: 'Diamond Sky Group',
    location: 'Hong Kong',
    points: [
      'Built content strategy to improve brand awareness, digital experience, traffic, and conversion.',
      'Developed UI/UX strategy for overseas subsidiaries, aligning platforms with global brand standards.',
      'Set digital and social campaign direction with design and content teams.',
    ],
  },
  {
    period: '2010 — 2016',
    role: 'Creative Director / Art Director / Multimedia Designer',
    company: 'Tencent CQ.QQ · Macintosh & Lee · Media Explorer',
    location: 'Hong Kong / China',
    points: [
      'Led creative and art direction across FMCG, tourism, advertising, and digital media.',
      'Partnered with product, marketing, and content teams for major clients including Master Kong, Coca-Cola x Asus, and Snow Beer.',
      'Built the design foundation that grew into marketing leadership.',
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            07 — Experience
          </p>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            From design craft to{' '}
            <span className="italic text-muted-foreground">marketing lead.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {roles.map((role) => (
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
