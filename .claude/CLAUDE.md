# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Abishaik Datta Athmakuri (full stack engineer).

## Tech Stack

- **Framework:** Next.js 16 with App Router, TypeScript
- **Styling:** Tailwind CSS v4 with custom theme (primary/accent/pop colors)
- **Animations:** Framer Motion (scroll animations, page transitions, hover effects)
- **Blog:** MDX files with gray-matter for frontmatter parsing
- **Theming:** next-themes (dark/light mode, class strategy)
- **Icons:** react-icons
- **Fonts:** Inter (body) + Space Grotesk (headings) via next/font/google

## Development

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # Lint
```

## Structure

- `src/app/` — Next.js App Router pages (home, about, projects, experience, blog, contact)
- `src/components/` — React components organized by feature (ui/, layout/, home/, about/, etc.)
- `src/data/` — Static data files (projects, experience, skills, navigation)
- `src/lib/` — Utilities (animations, blog helpers)
- `src/types/` — TypeScript type definitions
- `src/content/blog/` — MDX blog posts
- `public/` — Static assets
