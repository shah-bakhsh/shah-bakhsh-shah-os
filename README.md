# SHAH.OS

**AI should speak every language.**

SHAH.OS is the personal AI engineering portfolio of Shah Bakhsh. It brings together applied AI work, agentic systems, and a long-term mission to advance Balochi and other low-resource language technology.

## Experience

- A mission-led opening and editorial story about language inclusion in technology.
- AI engineering capabilities across LLMs, low-resource NLP, agentic workflows, retrieval, and computer vision.
- An interactive Balochi AI research explorer covering BalBERT, BalPOS, BalNER, BalTokenizer, BalOCR, and BalNLP.
- An interactive command terminal with `help`, `about`, `skills`, `projects`, `research`, `balochi-ai`, `contact`, and `clear` commands. Visitors can open it from the visible page hint, the header control, or the `/` keyboard shortcut; command chips, Enter, arrow-key history, Escape, and outside-click dismissal are supported.
- Selected projects with direct links to source repositories.
- Responsive navigation, keyboard focus states, and reduced-motion support.
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
- Motion for React (terminal entrance transitions)
- Lucide icons
- GitHub Actions for type, lint, and build checks
- AWS Amplify Hosting configuration for static Next.js export

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

The Next.js configuration exports a static site to `out/`, which is suitable for AWS Amplify Hosting static deployment.

## AWS Amplify Hosting

The repository's `amplify.yml` installs dependencies, runs the TypeScript check and Next.js production build, then publishes the `out/` directory.

1. Open the [AWS Amplify console](https://console.aws.amazon.com/amplify/home).
2. Choose **Deploy an app** and connect GitHub.
3. Select `shah-bakhsh/shah-bakhsh-shah-os` and the `main` branch.
4. Confirm the build configuration publishes `out/`.
5. Deploy and verify the generated public URL in a private browser window.

**Deployment status:** The repository is configured for Amplify Hosting. An AWS Amplify app and public AWS deployment URL have not yet been verified, so no AWS deployment is claimed.

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
