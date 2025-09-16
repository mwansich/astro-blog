# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro blog built with TypeScript and Preact integration. The project follows Astro's file-based routing system and uses content collections for blog post management.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Architecture

### Content Collections
- Blog posts are managed via Astro's content collections system defined in `src/content.config.ts`
- Blog posts are markdown files in `src/blog/` with frontmatter schema validation
- Schema includes: title, pubDate, description, author, cover image, coverAlt, featured flag, and tags array

### File Structure
- `src/pages/` - File-based routing (index, about, blog pages)
- `src/pages/posts/[...slug].astro` - Dynamic routes for individual blog posts
- `src/pages/tags/[tag].astro` - Dynamic routes for tag-based filtering
- `src/pages/archive/[page].astro` - Paginated archive pages
- `src/components/` - Reusable Astro/Preact components
- `src/layouts/` - BaseLayout and MarkdownPostLayout templates
- `src/blog/` - Markdown blog posts
- `src/img/` - Images processed by Astro's Image component
- `src/styles/global.css` - Global styles

### Key Components
- `morePosts.astro` - Displays randomized related posts with responsive layout (3 on desktop, 4 on mobile)
- `Greeting.jsx` - Preact component for interactive elements
- Navigation and social components in header/footer structure

### Dynamic Features
- Featured posts system (posts with `featured: yes` in frontmatter)
- Tag-based post filtering and indexing
- Pagination for blog archive
- Random post recommendations
- Responsive image optimization using Astro's `<Image />` component

### Technology Stack
- Astro 5.x with TypeScript
- Preact integration for interactive components
- Content collections with Zod schema validation
- File-based routing with dynamic slug generation