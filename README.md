# SHAH.OS

**AI should speak every language.**

SHAH.OS is the personal AI engineering portfolio of Shah Bakhsh. It brings together applied AI work, agentic systems, and a long-term mission to advance Balochi and other low-resource language technology.

## Experience

- A mission-led opening and editorial story about language inclusion in technology.
- AI engineering capabilities across LLMs, low-resource NLP, agentic workflows, retrieval, and computer vision.
- An interactive Balochi AI research explorer covering BalBERT, BalPOS, BalNER, BalTokenizer, BalOCR, and BalNLP.
- An interactive command terminal with `help`, `about`, `skills`, `projects`, `research`, `balochi-ai`, `contact`, and `clear` commands. Visitors can open it from the visible page hint, the header control, or the `/` keyboard shortcut; command chips, Enter, arrow-key history, helpful unknown-command feedback, Escape, and outside-click dismissal are supported. The dialog traps keyboard focus, restores focus on close, locks background scrolling while open, and keeps output readable on small screens.
- Selected projects with direct links to source repositories, evidence-led outcome labels where documented, and animated category filters for Language AI, Agentic AI, and Applied AI.
- Animated research briefings that transition between Balochi AI nodes, with accessible selected-state semantics.
- Sticky responsive navigation, scroll-triggered section reveals, orbital motion, animated capability cards, and a subtle reading-progress indicator.
- Accessible skip link, semantic navigation landmarks, keyboard focus states, and reduced-motion support.
- Social metadata and search indexing metadata.

## Research evidence

| Project | Documented result or status |
|---|---|
| [BalBERT](https://github.com/shah-bakhsh/BalBERT) | Repository documents a 97.8% perplexity reduction against its stated baseline. |
| [BalPOS](https://github.com/shah-bakhsh/BalPOS) | Repository reports 87.26% held-out accuracy for BalPOS v2. |
| [BalNER](https://github.com/shah-bakhsh/BalNER) | Repository reports 0.7034 entity-level F1 on its documented test set. |
| [BalTokenizer](https://github.com/shah-bakhsh/BalTokenizer) | Repository reports a 48K Unigram configuration, 0.0% unknown-token rate, and 99.9% character coverage. |
| BalOCR | Research in progress. No public model-quality claim is made. |
| [BalNLP](https://github.com/shah-bakhsh/BalNLP) | Repository documents local integration checks for four model components, not model-quality or adoption claims. |

Results are linked to their project documentation. Consult each repository for evaluation methodology, limitations, and current status.

## Technology

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui foundation with Radix Slot, class-variance-authority, clsx, and tailwind-merge
- Motion for React (section reveals, orbital animation, card transitions, terminal transitions, and reading progress)
- Lucide icons
- GitHub Actions for type, lint, and build checks
- AWS Amplify Hosting configuration for Next.js static export

## Run locally

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

The project uses Next.js static export (`output: "export"`). Next.js generates the deployable static site in `out/`. For AWS Amplify with Next.js 14 or later and a repository-level `amplify.yml`, AWS documents `.next` as the build artifact directory; Amplify's Next.js hosting integration handles the static export output.

## Vercel production deployment

The canonical production site is **https://shahbakhsh.tech**, hosted through Vercel from the GitHub `main` branch.

- Framework: Next.js 15 App Router, React 19 and TypeScript.
- Project output: static export, configured in `next.config.ts`.
- Validation: `npm run typecheck`, `npm run lint`, `npm run build`.
- Vercel's connected Git integration deploys the `main` branch automatically.
- DNS is managed separately at the domain registrar / authoritative DNS provider.

## Website pages

- `/` — signature animated portfolio, research explorer and terminal.
- `/about/` — engineering background and mission.
- `/research/` — documented Balochi NLP work.
- `/research/[slug]/` — case study briefings for BalBERT, BalPOS, BalNER, BalTokenizer, BalNLP and BalOCR.
- `/projects/` — selected applied AI experiments.
- `/contact/` — collaboration and professional contact.
- `/links/` — professional profile directory.

The case studies explicitly distinguish documented evaluation results from exploratory work. Search metadata includes canonical URLs, Person structured data and a generated sitemap.

## Search launch checklist

1. Confirm Vercel shows a Ready production deployment with HTTPS for `shahbakhsh.tech`.
2. Verify `/robots.txt` and `/sitemap.xml` are accessible.
3. Verify domain ownership and submit the sitemap in Google Search Console.
4. Keep professional external profiles consistent with the canonical website.

## Project links

- [GitHub](https://github.com/shah-bakhsh)
- [LinkedIn](https://linkedin.com/in/shah-bakhsh)
- [Hugging Face](https://huggingface.co/shah-bakhsh)
- [BalBERT](https://github.com/shah-bakhsh/BalBERT)
- [BalPOS](https://github.com/shah-bakhsh/BalPOS)
- [BalNER](https://github.com/shah-bakhsh/BalNER)
- [BalTokenizer](https://github.com/shah-bakhsh/BalTokenizer)
- [BalNLP](https://github.com/shah-bakhsh/BalNLP)
- [CrisisPilot AI](https://github.com/shah-bakhsh/CrisisPilot-AI)
- [PathPilot AI](https://github.com/shah-bakhsh/pathpilot-ai)

Email: shahbakhshtech@gmail.com

---

© 2026 Shah Bakhsh. Built with intent.
