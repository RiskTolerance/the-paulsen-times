## Project Configuration

- **Language**: TypeScript
- **Package Manager**: bun
- **Add-ons**: prettier, eslint, tailwindcss, drizzle, mcp

## About This Site

**The Paulsen Post** is a satirical, in-joke "newspaper" for Paulsen Marketing, a
full-service ad / agrimarketing agency in Sioux Falls, SD (founded 1951, known for
rural/agricultural work and the "Leading Ag" tagline). The site is purely for fun —
not a real publication, not client-facing. It writes up agency happenings, inside
jokes, and coworker lore in an over-the-top old-timey newspaper voice.

### Editorial voice
- Tone: deadpan satirical, faux-serious broadsheet — think The Onion meets a small-town
  weekly. Treat trivial office events as front-page news.
- Always flattering to the real people mentioned. Jokes are with coworkers, never at
  their expense.
- Use dramatic leads, drop caps, pull quotes, "sources say," "at press time," etc.

### Visual / design system
Classic newspaper feel. Already wired up in `src/routes/layout.css`:
- Cream background `#f5f0e8`, near-black text
- Fonts (via fontsource): `font-playfair` (headlines), `font-lora` (body),
  `font-special` / Special Elite (masthead, captions, kickers)
- Double borders (`border-double`), thick black rules, red-800 banners for section/breaking
- Multi-column body copy on md+ (`md:columns-2`), drop caps via
  `first-letter:` utilities
- Images: wrapped in `border-2 border-neutral-300 bg-neutral-200 shadow-md` containers,
  `grayscale` applied for newsprint look, italic `font-special` captions

### Structure
- `/` — newspaper front page: masthead + front-page grid. Lead story spans 2 cols
  (headline, dek, hero image, drop-cap lead, "Continue Reading →"). Sidebar `<aside>`
  holds secondary stories with thumbnail + headline + dek. Most recent article is the
  lead; order articles newest-first.
- `/articles/<slug>/+page.svelte` — each article is its own route file. No shared data
  module, no DB-backed content. Every article page includes a "← Back to Front Page"
  link, its own masthead, a section banner, headline + dek, drop-cap lead, and a footer.
- Images live in `src/lib/assets/` and are imported directly into the route that uses
  them.
- Use `resolve()` from `$app/paths` for internal links.

### When adding a new article
1. Create `src/routes/articles/<kebab-slug>/+page.svelte`, matching the layout of the
   existing article pages (masthead, banner, headline, drop-cap lead, sections, footer,
   back link).
2. Update `/` (`src/routes/+page.svelte`): promote the new article to the lead slot,
   push the previous lead into the sidebar, and bump the masthead date / Vol. No.
3. Run `npm run check` — must finish with 0 errors, 0 warnings before handing back.

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
