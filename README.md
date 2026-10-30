# SHAH.OS

**An AI engineering portfolio by Shah Bakhsh.**  
*Building intelligent systems. Advancing low-resource language AI.*

SHAH.OS is an original, lightweight portfolio designed for the AWS Student Builder Challenge 2026. It presents applied AI work, agentic systems, and a Balochi language-technology research track through an interactive research explorer.

## Portfolio experience

- **About:** An engineering-focused introduction to my work across machine learning, LLMs, agentic systems, and language technology.
- **Technical superpowers:** Applied AI and LLM engineering, low-resource NLP, agentic workflows, RAG, computer vision, and software engineering.
- **Balochi AI Research Mission Control:** Six interactive research nodes for BalBERT, BalPOS, BalNER, BalTokenizer, BalOCR, and the wider BalNLP ecosystem.
- **Research detail panels:** Each node explains its goal, approach, status, and documented evidence. Keyboard navigation supports arrow keys, Home, and End.
- **Research evidence:** Selected results link directly to the project documentation. Metrics are presented with their context rather than as unsupported portfolio claims.
- **Discovery note:** An optional, accessible interaction reveals the motivation behind the low-resource language work.
- **Selected work:** Links to language-technology projects and applied AI products.
- **Contact:** GitHub, LinkedIn, Hugging Face, and email.

## Research projects

| Project | Focus | Public evidence |
|---|---|---|
| [BalBERT](https://github.com/shah-bakhsh/BalBERT) | Domain-adaptive pretraining of XLM-RoBERTa for Balochi NLP | Repository documents a 97.8% perplexity reduction against its stated baseline. |
| [BalPOS](https://github.com/shah-bakhsh/BalPOS) | Balochi Universal POS tagging with 16 UPOS labels | Repository reports 87.26% held-out accuracy for BalPOS v2. |
| [BalNER](https://github.com/shah-bakhsh/BalNER) | Balochi named-entity recognition | Repository reports 0.7034 entity-level F1 on its documented test set and describes class-level limitations. |
| [BalTokenizer](https://github.com/shah-bakhsh/BalTokenizer) | Balochi subword tokenization | Repository reports a 48K Unigram configuration, 0.0% unknown-token rate, and 99.9% character coverage. |
| BalOCR | OCR research for Balochi script | Research direction; public methodology and evaluation are not linked here yet. |
| [BalNLP](https://github.com/shah-bakhsh/BalNLP) | Arabic-script Balochi NLP workspace with a Python library, FastAPI service, and RTL interface | Repository documents local integration checks for four model components; it distinguishes integration evidence from model-quality claims. |

Additional projects:
- [CrisisPilot AI](https://github.com/shah-bakhsh/CrisisPilot-AI)
- [PathPilot AI](https://github.com/shah-bakhsh/pathpilot-ai)
- [ReelForge and other work](https://github.com/shah-bakhsh)

Research metrics are reproduced from the linked repository documentation and may change as projects are updated. Consult each repository for methodology, limitations, and full evaluation details.

## Technology

- Semantic HTML5
- CSS
- Vanilla JavaScript
- SVG and CSS visual elements
- GitHub for source control
- AWS Amplify Hosting as the intended public challenge deployment

The portfolio is deliberately static-first. The research explorer runs in the browser and does not require an AI API key, database, account, or backend service.

## Project structure

```text
.
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── amplify.yml
├── README.md
└── .github/
    └── workflows/
        └── portfolio-checks.yml
```

## Run locally

From the repository root:

```bash
python -m http.server 8000
```

Open [http://localhost:8000/public/](http://localhost:8000/public/).

You can also open `public/index.html` directly, although using a local HTTP server more closely matches static hosting.

## AWS Amplify Hosting

The repository includes an `amplify.yml` configuration that publishes the `public/` directory:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo Publishing the static SHAH.OS portfolio
  artifacts:
    baseDirectory: public
    files:
      - '**/*'
  cache:
    paths: []
```

Deployment steps:

1. Open the [AWS Amplify console](https://console.aws.amazon.com/amplify/home).
2. Choose **Deploy an app** and connect GitHub.
3. Select `shah-bakhsh/shah-bakhsh-shah-os` and the `main` branch.
4. Confirm Amplify detects the repository's `amplify.yml`.
5. Deploy, then open the generated Amplify URL in a private browser window.
6. Test the page, research-node interactions, navigation, links, and mobile layout.

**Deployment status:** The project is prepared for Amplify Hosting. The AWS Amplify app and public deployment URL still need to be created and verified. No AWS deployment is claimed until that step is complete.

## Challenge alignment

- **Creativity and memorability:** The Balochi AI Research Mission Control makes the portfolio's signature interaction specific to my research.
- **Working AWS implementation:** Static hosting configuration and GitHub source are prepared for Amplify deployment.
- **Communication quality:** Research goals, methods, project status, and documented results are explained with direct source links.
- **Completeness and usability:** About, capabilities, projects, contact, responsive navigation, keyboard-accessible interactions, and a mobile layout are included.

## Lessons learned and engineering decisions

- A distinctive feature is stronger when it grows from real work rather than being added as a generic animation or chatbot.
- A static-first architecture keeps the portfolio fast to load, easy to host, and independent of external AI credentials.
- Accessibility needs to be designed into the interaction: research nodes work with keyboard controls and expose their selected state to assistive technology.
- Research results need context. The page links metrics to their source documentation and avoids presenting experimental work as a finished product.
- Separating the portfolio from the research systems makes the visitor experience dependable even when model APIs or external services are unavailable.

## Submission evidence checklist

Before submitting, capture genuine screenshots of:

- The portfolio hero and About section.
- Technical capabilities and selected projects.
- The Research Mission Control with at least two different nodes selected.
- The hidden discovery opened.
- The portfolio on a mobile viewport.
- AWS Amplify app configuration showing the connected GitHub repository and branch.
- The successful Amplify deployment and public URL.

Do not use mock AWS screenshots or describe a deployment that has not happened.

## Contact

- **GitHub:** https://github.com/shah-bakhsh
- **LinkedIn:** https://linkedin.com/in/shah-bakhsh
- **Hugging Face:** https://huggingface.co/shah-bakhsh
- **Email:** shahbakhshtech@gmail.com

---

© 2026 Shah Bakhsh. Built with intent.
