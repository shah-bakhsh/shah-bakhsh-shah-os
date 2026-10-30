const research = {
  balbert: {
    code: "RESEARCH NODE / 01", symbol: "B", title: "BalBERT",
    description: "A Balochi-adapted transformer encoder developed through domain-adaptive pretraining of XLM-RoBERTa. It is intended as a foundation for downstream Balochi NLP tasks.",
    method: "Continued masked-language-model pretraining with a documented normalized Balochi corpus and a reproducible training pipeline.",
    evidence: "The repository reports 97,624 cleaned sentences and a 97.8% perplexity reduction against its XLM-RoBERTa baseline.",
    focus: "Domain-adaptive pretraining · XLM-RoBERTa",
    status: "DOCUMENTED MODEL RESEARCH",
    url: "https://github.com/shah-bakhsh/BalBERT",
    linkLabel: "Explore repository"
  },
  balpos: {
    code: "RESEARCH NODE / 02", symbol: "P", title: "BalPOS",
    description: "BalPOS v2 is a transformer-based Balochi part-of-speech tagger fine-tuned from BalBERT. It assigns one of 16 Universal Dependencies part-of-speech labels to each token.",
    method: "Token classification, tokenizer-label alignment, randomized hyperparameter search, cross-validation, and a separate held-out test evaluation.",
    evidence: "The repository reports 87.26% held-out accuracy, 87.22% weighted F1, and 78.99% macro F1.",
    focus: "Sequence labelling · 16 UPOS tags",
    status: "MODEL RELEASE / v2",
    url: "https://github.com/shah-bakhsh/BalPOS",
    linkLabel: "Explore repository"
  },
  balner: {
    code: "RESEARCH NODE / 03", symbol: "N", title: "BalNER",
    description: "BalNER v2 is a Balochi named-entity recognition model fine-tuned from BalBERT, covering person, location, organization, and time entities.",
    method: "Transformer token classification with entity-level evaluation and per-class error inspection.",
    evidence: "The repository reports 0.7034 entity-level F1 on its documented test set. Per-class results vary, so the limitations matter as much as the headline score.",
    focus: "Named entity recognition · PER / LOC / ORG / TIME",
    status: "MODEL EXPERIMENT / v2",
    url: "https://github.com/shah-bakhsh/BalNER",
    linkLabel: "Explore repository"
  },
  baltokenizer: {
    code: "RESEARCH NODE / 04", symbol: "T", title: "BalTokenizer",
    description: "A dedicated subword tokenizer developed around Balochi text, with experiments comparing SentencePiece BPE and Unigram configurations.",
    method: "Benchmarking multiple tokenizer configurations across vocabulary sizes and quantitative text-coverage measures.",
    evidence: "The repository reports a selected 48K Unigram configuration, 0.0% unknown-token rate, and 99.9% character coverage.",
    focus: "Subword tokenization · 48K vocabulary",
    status: "BENCHMARKED TOKENIZER",
    url: "https://github.com/shah-bakhsh/BalTokenizer",
    linkLabel: "Explore repository"
  },
  balocr: {
    code: "RESEARCH NODE / 05", symbol: "O", title: "BalOCR",
    description: "Research into optical character recognition for Balochi script, exploring how printed or scanned text can become usable digital language data.",
    method: "OCR dataset preparation and model experimentation. Detailed public methodology and evaluation are not linked here yet.",
    evidence: "Research direction in progress. No public performance figure is claimed on this page.",
    focus: "Script recognition · OCR research",
    status: "RESEARCH IN PROGRESS",
    url: "https://github.com/shah-bakhsh",
    linkLabel: "Browse research profile"
  },
  balnlp: {
    code: "RESEARCH NODE / 06", symbol: "L", title: "BalNLP",
    description: "The wider Balochi language-technology direction connecting corpora, tokenization, language models, and downstream NLP tools into a coherent research ecosystem.",
    method: "A connected roadmap: language data, text processing, pretrained representations, task-specific models, and reusable evaluation workflows.",
    evidence: "Explore the individual public repositories for the components that are available. Roadmap ideas are not presented as released systems.",
    focus: "Low-resource language technology ecosystem",
    status: "ECOSYSTEM DIRECTION",
    url: "https://github.com/shah-bakhsh",
    linkLabel: "Browse research profile"
  }
};

const nodes = Array.from(document.querySelectorAll(".node"));
const fields = {
  code: document.getElementById("detailCode"),
  symbol: document.getElementById("detailSymbol"),
  title: document.getElementById("detailTitle"),
  description: document.getElementById("detailDescription"),
  method: document.getElementById("detailMethod"),
  evidence: document.getElementById("detailEvidence"),
  focus: document.getElementById("detailFocus"),
  status: document.getElementById("detailState"),
  link: document.getElementById("detailLink"),
  panel: document.getElementById("nodeDetail")
};

function selectNode(key, moveFocus) {
  const item = research[key];
  if (!item) return;

  fields.code.textContent = item.code;
  fields.symbol.textContent = item.symbol;
  fields.title.textContent = item.title;
  fields.description.textContent = item.description;
  fields.method.textContent = item.method;
  fields.evidence.textContent = item.evidence;
  fields.focus.textContent = item.focus;
  fields.status.textContent = "● " + item.status;
  fields.link.href = item.url;
  fields.link.textContent = item.linkLabel + " ↗";
  fields.panel.setAttribute("aria-labelledby", "node-" + key);

  nodes.forEach(function(node) {
    const active = node.dataset.node === key;
    node.classList.toggle("active", active);
    node.setAttribute("aria-selected", active ? "true" : "false");
    node.tabIndex = active ? 0 : -1;
  });

  if (moveFocus) {
    const selected = document.getElementById("node-" + key);
    if (selected) selected.focus();
  }
}

nodes.forEach(function(node, index) {
  node.addEventListener("click", function() {
    selectNode(node.dataset.node, false);
  });
  node.addEventListener("keydown", function(event) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % nodes.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + nodes.length) % nodes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = nodes.length - 1;
    else return;
    event.preventDefault();
    selectNode(nodes[next].dataset.node, true);
  });
});

const storyToggle = document.getElementById("labStoryToggle");
const story = document.getElementById("labStory");
if (storyToggle && story) {
  storyToggle.addEventListener("click", function() {
    const expanded = storyToggle.getAttribute("aria-expanded") === "true";
    storyToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    story.hidden = expanded;
    storyToggle.querySelector("span").textContent = expanded ? "＋" : "−";
  });
}

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (toggle && nav) {
  toggle.addEventListener("click", function() {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    });
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.focus();
    }
  });
}

const profilePhoto = document.querySelector(".profile-photo");
if (profilePhoto) {
  profilePhoto.addEventListener("error", function() {
    const fallback = document.createElement("div");
    fallback.className = "profile-fallback";
    fallback.textContent = "SB";
    profilePhoto.replaceWith(fallback);
  }, { once: true });
}

selectNode("balbert", false);