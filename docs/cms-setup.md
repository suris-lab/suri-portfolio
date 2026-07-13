# Portfolio CMS Setup

The portfolio content is stored in `content/portfolio.json`.

Visit `/admin` to edit the JSON content. Saving from production requires these
Vercel environment variables:

- `CMS_PASSWORD`: password entered on the admin page.
- `GITHUB_TOKEN`: GitHub token with read/write access to repository contents.
- `GITHUB_OWNER`: `suris-lab`
- `GITHUB_REPO`: `suri-portfolio`
- `GITHUB_BRANCH`: `main`

Recommended GitHub token scope for a fine-grained token:

- Repository access: `suris-lab/suri-portfolio`
- Permissions: `Contents: Read and write`

After saving, the CMS commits `content/portfolio.json` to `main`. Vercel then
redeploys the site automatically.
