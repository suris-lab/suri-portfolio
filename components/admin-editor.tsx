'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type Status = {
  tone: 'idle' | 'success' | 'error'
  message: string
}

export function AdminEditor() {
  const [password, setPassword] = useState('')
  const [rawContent, setRawContent] = useState('')
  const [originalContent, setOriginalContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<Status>({
    tone: 'idle',
    message: 'Edit text and URLs, then save to GitHub.',
  })

  const hasChanges = rawContent !== originalContent
  const parsed = useMemo(() => {
    try {
      return { value: JSON.parse(rawContent), error: null }
    } catch (error) {
      return {
        value: null,
        error: error instanceof Error ? error.message : 'Invalid JSON',
      }
    }
  }, [rawContent])

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch('/api/cms/content', { cache: 'no-store' })
        const data = (await response.json()) as {
          content?: unknown
          error?: string
        }

        if (!response.ok || !data.content) {
          throw new Error(data.error || 'Unable to load content.')
        }

        const formatted = JSON.stringify(data.content, null, 2)
        setRawContent(formatted)
        setOriginalContent(formatted)
      } catch (error) {
        setStatus({
          tone: 'error',
          message:
            error instanceof Error ? error.message : 'Unable to load content.',
        })
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  function formatContent() {
    if (parsed.error) {
      setStatus({ tone: 'error', message: parsed.error })
      return
    }

    setRawContent(JSON.stringify(parsed.value, null, 2))
    setStatus({ tone: 'idle', message: 'JSON formatted.' })
  }

  async function saveContent() {
    if (parsed.error) {
      setStatus({ tone: 'error', message: parsed.error })
      return
    }

    setSaving(true)
    setStatus({ tone: 'idle', message: 'Saving content...' })

    try {
      const response = await fetch('/api/cms/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-cms-password': password,
        },
        body: JSON.stringify({ content: parsed.value }),
      })
      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || 'Unable to save content.')
      }

      const formatted = JSON.stringify(parsed.value, null, 2)
      setRawContent(formatted)
      setOriginalContent(formatted)
      setStatus({
        tone: 'success',
        message:
          'Saved. Vercel will redeploy automatically after the GitHub commit lands.',
      })
    } catch (error) {
      setStatus({
        tone: 'error',
        message: error instanceof Error ? error.message : 'Unable to save content.',
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        <header className="flex flex-col justify-between gap-5 border-b border-border pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Portfolio CMS
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-none md:text-7xl">
              Content editor
            </h1>
          </div>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            View site
          </Link>
        </header>

        <section className="grid gap-5 md:grid-cols-[280px_1fr]">
          <aside className="space-y-5">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                CMS password
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full border border-border bg-card px-3 py-3 font-mono text-sm outline-none transition-colors focus:border-primary"
                placeholder="Required to save"
              />
            </label>

            <div
              className={`border px-4 py-3 text-sm leading-relaxed ${
                status.tone === 'error'
                  ? 'border-destructive/60 text-destructive'
                  : status.tone === 'success'
                    ? 'border-primary/60 text-primary'
                    : 'border-border text-muted-foreground'
              }`}
            >
              {status.message}
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={formatContent}
                disabled={loading || saving || Boolean(parsed.error)}
                className="border border-border px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] transition hover:border-primary disabled:pointer-events-none disabled:opacity-40"
              >
                Format JSON
              </button>
              <button
                type="button"
                onClick={() => setRawContent(originalContent)}
                disabled={loading || saving || !hasChanges}
                className="border border-border px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] transition hover:border-primary disabled:pointer-events-none disabled:opacity-40"
              >
                Reset changes
              </button>
              <button
                type="button"
                onClick={saveContent}
                disabled={loading || saving || Boolean(parsed.error) || !hasChanges}
                className="border border-primary bg-primary px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary/80 disabled:pointer-events-none disabled:opacity-40"
              >
                {saving ? 'Saving...' : 'Save content'}
              </button>
            </div>
          </aside>

          <div className="min-h-[70vh]">
            <textarea
              value={loading ? 'Loading content...' : rawContent}
              onChange={(event) => setRawContent(event.target.value)}
              disabled={loading || saving}
              spellCheck={false}
              className="min-h-[70vh] w-full resize-y border border-border bg-card/40 p-4 font-mono text-sm leading-relaxed text-foreground outline-none transition-colors focus:border-primary disabled:opacity-60"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
