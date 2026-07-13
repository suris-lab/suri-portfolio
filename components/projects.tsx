import { ArrowUpRight } from 'lucide-react'

type ProjectsContent = {
  label: string
  summary: string
  items: Array<{
    no: string
    title: string
    category: string
    year: string
    result: string
    href: string
  }>
}

export function Projects({ content }: { content: ProjectsContent }) {
  return (
    <section
      id="works"
      className="relative border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {content.label}
          </p>
          <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-muted-foreground">
            {content.summary}
          </p>
        </div>

        <ul className="border-t border-border">
          {content.items.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-border py-8 transition-colors hover:bg-card/40"
              >
                <span className="font-mono text-xs text-primary">
                  {project.no}
                </span>

                <div className="min-w-0">
                  <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl md:text-5xl">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{project.category}</span>
                    <span className="text-primary">{project.result}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                    {project.year}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
