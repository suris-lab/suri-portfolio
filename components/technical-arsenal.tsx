const arsenalRows = [
  [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'Figma',
    'Canva',
    'Premiere Pro',
    'After Effects',
    'WordPress',
    'Bootstrap',
    'GA4',
    'GTM',
    'Looker Studio',
    'Mailchimp',
    'MikeX CRM',
    'n8n',
    'AEO',
  ],
  [
    'Brand Systems',
    'Digital Growth',
    'CRM Automation',
    'SEO',
    'SEM',
    'Analytics',
    'Event Marketing',
    'Sponsorships',
    'Award Submissions',
    'Cross-Border Comms',
    'Budget Forecasting',
    'AI Workflows',
    'Team Leadership',
  ],
]

export function TechnicalArsenal() {
  return (
    <section
      id="arsenal"
      className="border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            04 — Technical Arsenal
          </p>
        </div>

        <div className="space-y-4 overflow-hidden border-y border-border py-8">
          {arsenalRows.map((items, index) => (
            <div
              key={items[0]}
              className="arsenal-marquee"
              data-direction={index === 0 ? 'left' : 'right'}
            >
              <div className="arsenal-track">
                {[...items, ...items, ...items, ...items].map((item, itemIndex) => (
                  <span className="arsenal-word" key={`${item}-${itemIndex}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
