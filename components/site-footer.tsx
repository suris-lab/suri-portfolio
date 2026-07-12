export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] sm:flex-row">
        <p className="flex items-center gap-2 text-foreground">
          Shan Lai
          <span className="size-1.5 rounded-full bg-primary" />
        </p>
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Shan Lai — All rights reserved
        </p>
        <a
          href="#top"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
