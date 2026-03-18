# File Architecture

## Root Configuration

```
PersonalWebsite/
├── package.json            # Project dependencies, scripts (dev, build, lint, start)
├── tsconfig.json           # TypeScript compiler options with path aliases (@/*)
├── next.config.ts          # Next.js framework configuration
├── postcss.config.mjs      # PostCSS config wiring up Tailwind CSS v4
├── eslint.config.mjs       # ESLint rules using eslint-config-next
├── next-env.d.ts           # Auto-generated Next.js type declarations
├── CLAUDE.md               # Instructions for Claude Code — project overview and conventions
└── .gitignore              # Git ignore rules for node_modules, .next, etc.
```

## Source Directory (`src/`)

### App Router — Pages (`src/app/`)

```
src/app/
├── layout.tsx              # Root layout wrapping every page. Loads Inter + Space Grotesk fonts, ThemeProvider, Navbar, and Footer.
├── template.tsx            # Page transition wrapper using Framer Motion. Animates content on route changes.
├── page.tsx                # Home page. Composes Hero, FeaturedProjects, and SkillsPreview sections.
├── globals.css             # Global styles: Tailwind import, custom theme colors (primary/accent/pop), dark mode overrides,  
│                             animations, gradient-text and prose utilities.
├── pages.module.css        # Shared CSS Module for all page-level layouts. Contains page wrappers, container widths, blog listing  
│                             styles, contact grid, and tag pills.
├── favicon.ico             # Site favicon
├── about/
│   └── page.tsx            # About page. Renders Bio and TechStack components inside a wide container.
├── blog/
│   ├── page.tsx            # Blog listing page. Fetches all MDX posts via getAllPosts() and renders them as linked cards.
│   └── [slug]/
│       └── page.tsx        # Dynamic blog post page. Loads a single post by slug, converts markdown to HTML, and renders with prose styling.
├── contact/
│   └── page.tsx            # Contact page. Two-column layout with ContactForm on the left and social links on the right.
├── experience/
│   └── page.tsx            # Experience page. Displays the Timeline component and a "Download Resume" button.
└── projects/
    └── page.tsx            # Projects page. Renders the full ProjectGrid inside a wide container with a section heading.
```

### UI Components (`src/components/ui/`)

```
src/components/ui/
├── AnimatedContainer.tsx       # Scroll-triggered animation wrapper. Uses Framer Motion whileInView to fade children in when they 
│                                 enter the viewport.
├── GradientText.tsx            # Renders text with the gradient-text CSS class. Supports rendering as any heading level or span.
├── Button.tsx                  # Multi-variant button (primary gradient, outline, ghost). Renders as a Link, anchor, or button 
│                                 depending on props.
├── Button.module.css           # Styles for all three button variants — gradient backgrounds, border styles, hover/tap scaling.
├── Card.tsx                    # Glassmorphism card with optional hover-lift animation. Used across projects, blog, and featured │ 
│                                 sections.
├── Card.module.css             # Card base styles and hoverable border-glow effect.
├── SectionHeading.tsx          # Consistent section header with a gradient title and optional subtitle. Used at the top of every 
│                                 page section.
└── SectionHeading.module.css   # Centered layout, heading font, and subtitle muted color.
```

### Layout Components (`src/components/layout/`)

```
src/components/layout/
├── Navbar.tsx              # Sticky top navigation bar with logo, desktop nav links, mobile hamburger menu, and theme toggle. 
│                             Highlights the active route.
├── Navbar.module.css       # Nav shell, link states (active/inactive), mobile dropdown, and responsive breakpoints.
├── Footer.tsx              # Site footer with copyright year and social icon links (GitHub, LinkedIn, Twitter, Email).
├── Footer.module.css       # Footer layout, social link row, and hover color transitions.
├── ThemeToggle.tsx          # Dark/light mode toggle button. Uses next-themes and useSyncExternalStore for hydration-safe rendering.
├── ThemeToggle.module.css   # Toggle button sizing and hover state.
└── ThemeProvider.tsx        # Client component wrapping next-themes ThemeProvider. Sets class strategy and defaults to dark mode.
```

### Home Section (`src/components/home/`)

```
src/components/home/
├── Hero.tsx                    # Full-viewport hero section. Shows "Hey, I'm Abi Athmakuri" with gradient text, a rotating subtitle 
│                                 (Full Stack Engineer, React Developer, etc.), tagline, and two CTA buttons.
├── Hero.module.css             # Hero layout, animated background blobs (primary/accent/pop colors), content centering, and 
│                                 responsive font sizes.
├── FeaturedProjects.tsx        # Displays up to 3 featured projects in a staggered animated grid. Each project shows title, 
│                                 description, tech pills, and GitHub/live links.
├── FeaturedProjects.module.css # Grid layout, tech pill badges, icon link hover states, and "View All" button positioning.
├── SkillsPreview.tsx           # Horizontal strip of tech skill badges with scroll-triggered stagger animation.
└── SkillsPreview.module.css    # Muted background section, flexbox badge layout, and hover glow effect.
```

### About Section (`src/components/about/`)

```
src/components/about/
├── Bio.tsx                 # Two-column bio section with introductory paragraphs on the left and a gradient avatar placeholder 
│                             (initials "AA") on the right.
├── Bio.module.css          # Grid layout, text spacing, avatar gradient border, and initials styling.
├── TechStack.tsx           # Categorized skill grid (Frontend, Backend, Tools & DevOps, Languages). Each category is a bordered card 
│                             with hoverable skill badges.
└── TechStack.module.css    # Two-column grid, category card borders, and skill badge hover glow.
```

### Projects Section (`src/components/projects/`)

```
src/components/projects/
├── ProjectCard.tsx         # Individual project card. Shows title, description, tech pills, and GitHub/Live links inside a Card 
│                             component with fade-in animation.
├── ProjectCard.module.css  # Card internals — title font, description color, tech pill colors (with dark mode), and link hover 
│                             states.
├── ProjectGrid.tsx         # Responsive two-column grid of all projects with staggered entrance animation.
└── ProjectGrid.module.css  # Grid template with responsive breakpoint.
```

### Experience Section (`src/components/experience/`)

```
src/components/experience/
├── Timeline.tsx            # Vertical timeline container with a gradient center line (primary → accent → pop). Renders all 
│                             experience entries.
├── Timeline.module.css     # Timeline line positioning (left on mobile, centered on desktop), and item spacing.
├── TimelineItem.tsx        # Single timeline entry. Alternates left/right on desktop. Shows period, role, company, description, and 
│                             tech pills with a work/education icon.
└── TimelineItem.module.css # Alternating layout logic, dot positioning, content card styles, period/role/company typography, and tech pill badges.
```

### Contact Section (`src/components/contact/`)

```
src/components/contact/
├── ContactForm.tsx         # Three-field form (name, email, message) with a placeholder submit handler. Shows a "Thanks!" success 
│                             state after submission.
└── ContactForm.module.css  # Form field spacing, input/textarea focus rings, and success state layout.
```

### Data Files (`src/data/`)

```
src/data/
├── navigation.ts           # Array of NavLink objects defining the 6 main routes (Home, About, Projects, Experience, Blog, Contact).
├── projects.ts             # Array of Project objects with titles, descriptions, tech stacks, and links. The `featured` flag controls which appear on the home page.
├── experience.ts           # Array of Experience objects for the timeline — work history and education, each with company, role, 
│                             period, description, and tech used.
└── skills.ts               # Array of SkillCategory objects grouping skills into Frontend, Backend, Tools & DevOps, and Languages.
```

### Library / Utilities (`src/lib/`)

```
src/lib/
├── animations.ts           # Reusable Framer Motion variants: fadeInUp, fadeIn, staggerContainer, scaleOnHover, pageTransition, slideInLeft, slideInRight.
└── blog.ts                 # Blog helpers using gray-matter. getAllPosts() reads MDX frontmatter from src/content/blog/ and returns 
                              sorted posts. getPostBySlug() returns a single post with its raw content.
```

### Type Definitions (`src/types/`)

```
src/types/
└── index.ts                # Shared TypeScript interfaces: Project, Experience, BlogPost, NavLink, Skill, and SkillCategory. Used 
                              across data files and components.
```

### Blog Content (`src/content/blog/`)

```
src/content/blog/
└── hello-world.mdx         # Sample blog post with YAML frontmatter (title, date, summary, tags). Covers the tech choices behind the 
                              portfolio site.
```
