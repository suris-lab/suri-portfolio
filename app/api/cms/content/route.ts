import { promises as fs } from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const contentPath = 'content/portfolio.json'
const localContentPath = path.join(process.cwd(), contentPath)

function jsonResponse(data: unknown, status = 200) {
  return NextResponse.json(data, { status })
}

function assertAuthorized(request: NextRequest) {
  const expected = process.env.CMS_PASSWORD
  const received = request.headers.get('x-cms-password')

  if (!expected) {
    return 'CMS_PASSWORD is not configured.'
  }

  if (!received || received !== expected) {
    return 'Invalid CMS password.'
  }

  return null
}

function githubConfig() {
  return {
    owner: process.env.GITHUB_OWNER || 'suris-lab',
    repo: process.env.GITHUB_REPO || 'suri-portfolio',
    branch: process.env.GITHUB_BRANCH || 'main',
    token: process.env.GITHUB_TOKEN,
  }
}

async function readFromGithub() {
  const { owner, repo, branch, token } = githubConfig()
  if (!token) return null

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${contentPath}?ref=${branch}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      cache: 'no-store',
    },
  )

  if (!response.ok) {
    throw new Error(`GitHub read failed: ${response.status}`)
  }

  const file = (await response.json()) as { content: string; sha: string }
  const content = Buffer.from(file.content, 'base64').toString('utf8')
  return { content, sha: file.sha }
}

async function writeToGithub(content: string) {
  const { owner, repo, branch, token } = githubConfig()
  if (!token) {
    throw new Error('GITHUB_TOKEN is not configured.')
  }

  const current = await readFromGithub()
  if (!current) {
    throw new Error('Unable to read current GitHub content.')
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${contentPath}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({
        branch,
        content: Buffer.from(content, 'utf8').toString('base64'),
        message: 'Update portfolio content from CMS',
        sha: current.sha,
      }),
    },
  )

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`GitHub write failed: ${response.status} ${body}`)
  }

  return response.json()
}

export async function GET() {
  try {
    const githubContent = await readFromGithub()
    const content =
      githubContent?.content || (await fs.readFile(localContentPath, 'utf8'))

    return jsonResponse({ content: JSON.parse(content) })
  } catch (error) {
    return jsonResponse(
      { error: error instanceof Error ? error.message : 'Unable to load content.' },
      500,
    )
  }
}

export async function PUT(request: NextRequest) {
  const authError = assertAuthorized(request)
  if (authError) return jsonResponse({ error: authError }, 401)

  try {
    const body = (await request.json()) as { content?: unknown }
    if (!body.content) {
      return jsonResponse({ error: 'Missing content.' }, 400)
    }

    const serialized = `${JSON.stringify(body.content, null, 2)}\n`
    JSON.parse(serialized)

    if (process.env.VERCEL) {
      await writeToGithub(serialized)
    } else {
      await fs.writeFile(localContentPath, serialized)
    }

    return jsonResponse({ ok: true })
  } catch (error) {
    return jsonResponse(
      { error: error instanceof Error ? error.message : 'Unable to save content.' },
      500,
    )
  }
}
