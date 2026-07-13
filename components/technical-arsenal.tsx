type ArsenalContent = {
  label: string
  rows: string[][]
}

export function TechnicalArsenal({ content }: { content: ArsenalContent }) {
  return (
    <section
      id="arsenal"
      className="border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {content.label}
          </p>
        </div>

        <div className="space-y-4 overflow-hidden border-y border-border py-8">
          {content.rows.map((items, index) => (
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
