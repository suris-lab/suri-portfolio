import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

type DesignContent = {
  label: string
  heading: string
  headingItalic: string
  learnMoreLabel: string
  learnMoreHref: string
  items: Array<{ title: string; type: string; image: string }>
}

export function DesignGallery({ content }: { content: DesignContent }) {
  return (
    <section
      id="design"
      className="relative border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {content.label}
          </p>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {content.heading}{' '}
            <span className="italic text-muted-foreground">
              {content.headingItalic}
            </span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden border border-border bg-card/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover opacity-80 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{item.type}</span>
                </div>
                <h3 className="font-serif text-2xl leading-tight text-foreground">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href={content.learnMoreHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-border bg-card/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            {content.learnMoreLabel}
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  )
}
