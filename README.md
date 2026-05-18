# Narapati News Network

Next.js + Sanity CMS version of the Narapati premium editorial website.

## Features

- Next.js App Router
- Sanity Studio at `/studio`
- Sanity schemas: Article, Author, Category, Podcast, Page
- Homepage fetches articles from Sanity
- Article detail route: `/articles/[slug]`
- Sanity image upload fields with hotspot support
- Responsive Narapati design preserved from the static version
- Vercel-ready

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

The site uses demo fallback articles until Sanity is configured and populated.

## Local Development

```bash
npm install
npm run dev
```

Open:

- Website: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Add the environment variables above in Vercel Project Settings.
4. Deploy.

Vercel will run `npm install` and `next build` automatically.
