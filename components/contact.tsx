'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const socials = [
  {
    label: 'LinkedIn',
    handle: '/in/surislai',
    href: 'https://www.linkedin.com/in/surislai/',
  },
  {
    label: 'Email',
    handle: 'shan@60.com.hk',
    href: 'mailto:shan@60.com.hk',
  },
  {
    label: 'Location',
    handle: 'Hong Kong',
    href: '#top',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const message = String(form.get('message') || '')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:shan@60.com.hk?subject=Portfolio enquiry&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section
      id="contact"
      className="relative border-t border-border px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          07 — Contact
        </p>

        <h2 className="font-serif text-[18vw] leading-[0.82] tracking-tight text-foreground sm:text-[15vw] lg:text-[12rem]">
          LET&apos;S
          <br />
          <span className="italic">TALK</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Whether you&apos;re looking for a marketing leader, a brand and
              digital growth partner, or a collaborator on a regional launch, I&apos;d
              love to hear from you.
            </p>

            <ul className="mt-10 divide-y divide-border border-y border-border">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between py-5 transition-colors hover:text-primary"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                      {s.label}
                    </span>
                    <span className="flex items-center gap-2 font-serif text-xl text-foreground">
                      {s.handle}
                      <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project or role..."
                className="resize-none border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </label>

            <button
              type="submit"
              className="glass group mt-2 inline-flex items-center justify-center gap-3 self-start rounded-full border border-border px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary"
            >
              {sent ? (
                <>
                  <Check className="size-4 text-primary" />
                  Email opened
                </>
              ) : (
                <>
                  Open email
                  <span className="size-1.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
