const research = {
  balbert: { code:"RESEARCH NODE / 01", symbol:"B", title:"BalBERT", description:"Language representation research focused on building stronger foundations for Balochi NLP and downstream language understanding tasks.", focus:"Transformer language models", url:"https://github.com/shah-bakhsh/BalBERT" },
  balpos: { code:"RESEARCH NODE / 02", symbol:"P", title:"BalPOS", description:"A transformer-based part-of-speech tagging project using Universal Dependencies to support structured linguistic analysis of Balochi text.", focus:"Sequence labelling · UPOS", url:"https://github.com/shah-bakhsh/BalPOS" },
  balner: { code:"RESEARCH NODE / 03", symbol:"N", title:"BalNER", description:"Dataset and model experiments for identifying people, places, organizations, and other named entities in Balochi text.", focus:"Named entity recognition", url:"https://github.com/shah-bakhsh/BalNER" },
  baltokenizer: { code:"RESEARCH NODE / 04", symbol:"T", title:"BalTokenizer", description:"Tokenizer development for Balochi text, an important foundation for consistent input representation and language-model training.", focus:"Subword tokenization", url:"https://github.com/shah-bakhsh/BalTokenizer" },
  balnlp: { code:"RESEARCH NODE / 05", symbol:"L", title:"BalNLP", description:"A broader toolkit direction bringing Balochi language resources and practical NLP workflows closer to researchers and developers.", focus:"Language technology ecosystem", url:"https://github.com/shah-bakhsh/BalNLP" }
};
const nodes = Array.from(document.querySelectorAll(".node"));
const fields = { code:document.getElementById("detailCode"), symbol:document.getElementById("detailSymbol"), title:document.getElementById("detailTitle"), description:document.getElementById("detailDescription"), focus:document.getElementById("detailFocus"), link:document.getElementById("detailLink") };
function selectNode(key) {
  const item = research[key];
  if (!item) return;
  fields.code.textContent = item.code;
  fields.symbol.textContent = item.symbol;
  fields.title.textContent = item.title;
  fields.description.textContent = item.description;
  fields.focus.textContent = item.focus;
  fields.link.href = item.url;
  nodes.forEach(function(node) {
    const active = node.dataset.node === key;
    node.classList.toggle("active", active);
    node.setAttribute("aria-selected", active ? "true" : "false");
    node.setAttribute("tabindex", active ? "0" : "-1");
  });
}
nodes.forEach(function(node, index) {
  node.addEventListener("click", function() { selectNode(node.dataset.node); });
  node.addEventListener("keydown", function(event) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next = (index + (event.key === "ArrowDown" ? 1 : -1) + nodes.length) % nodes.length;
    nodes[next].focus();
    selectNode(nodes[next].dataset.node);
  });
});
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
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