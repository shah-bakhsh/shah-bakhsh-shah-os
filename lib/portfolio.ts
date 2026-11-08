export type ResearchProject = {
 slug: string; name: string; category: string; kicker: string; summary: string;
 problem: string; approach: string[]; outcome: string; caveat: string; stack: string[];
 github?: string; huggingFace?: string;
};
export const researchProjects: ResearchProject[] = [
 {
  slug:"balbert",name:"BalBERT",category:"Language representation",kicker:"Foundation / 01",
  summary:"Domain-adaptive XLM-RoBERTa language representation work focused on Balochi text.",
  problem:"Balochi is underrepresented in commonly used language-model training resources. Stronger language representations can support downstream tagging, entity recognition and other NLP tasks.",
  approach:["Clean and prepare a domain-focused Balochi text corpus.","Continue masked-language-model adaptation from a multilingual XLM-RoBERTa checkpoint.","Report the evaluation setting and compare perplexity with the repository's stated baseline."],
  outcome:"The repository documents approximately 97.8% lower masked-language-model perplexity versus its stated baseline.",
  caveat:"The reported perplexity comparison is specific to the repository's evaluation setup; it is not a general measure of production accuracy or a universal model benchmark.",
  stack:["Python","Transformers","XLM-RoBERTa","Masked language modelling"],github:"https://github.com/shah-bakhsh/BalBERT",huggingFace:"https://huggingface.co/shah-bakhsh"
 },
 {
  slug:"balpos",name:"BalPOS",category:"Part-of-speech tagging",kicker:"Sequence labelling / 02",
  summary:"A transformer-based Balochi part-of-speech tagger using 16 Universal Dependencies tags.",
  problem:"Part-of-speech tags describe how words function in sentences. Balochi needs well-documented tagging tools for language research and downstream NLP.",
  approach:["Prepare labelled examples using Universal Dependencies tag conventions.","Fine-tune transformer representations for token classification.","Evaluate held-out predictions and report multiple metrics."],
  outcome:"The BalPOS v2 repository reports 87.26% held-out accuracy and 87.22% weighted F1.",
  caveat:"These values describe the reported held-out evaluation dataset, not performance on every dialect, domain or text style.",
  stack:["PyTorch","Token classification","Universal Dependencies","CoNLL-U"],github:"https://github.com/shah-bakhsh/BalPOS"
 },
 {
  slug:"balner",name:"BalNER",category:"Named entity recognition",kicker:"Entity extraction / 03",
  summary:"Balochi named-entity recognition experiments identifying entities in text.",
  problem:"People, places and other named entities are difficult for generic NLP models to recognise reliably in low-resource language contexts.",
  approach:["Develop and document labelled named-entity data.","Train and evaluate a sequence labelling model.","Describe dataset limitations and evaluate at entity level."],
  outcome:"The repository reports 0.7034 entity-level F1 on its documented test set.",
  caveat:"The score applies to the documented dataset and label policy; further validation is needed for different dialects and use cases.",
  stack:["NLP","Named entity recognition","Transformers","Evaluation"],github:"https://github.com/shah-bakhsh/BalNER"
 },
 {
  slug:"baltokenizer",name:"BalTokenizer",category:"Language infrastructure",kicker:"Text infrastructure / 04",
  summary:"A 48K Unigram tokenizer configuration tailored to Balochi text.",
  problem:"Tokenisation is a foundation for training and using language models. Underrepresented scripts can suffer from inefficient segmentation.",
  approach:["Prepare Balochi text samples for tokenizer training.","Train and assess a Unigram tokenisation configuration.","Measure unknown-token behaviour and character coverage."],
  outcome:"The repository reports 99.9% character coverage and a 0.0% unknown-token rate in its documented evaluation.",
  caveat:"Coverage measures describe the assessed text, not a guarantee across all future sources and writing conventions.",
  stack:["SentencePiece","Unigram","Text processing","Balochi"],github:"https://github.com/shah-bakhsh/BalTokenizer"
 },
 {
  slug:"balnlp",name:"BalNLP",category:"Developer tools",kicker:"Integration / 05",
  summary:"An integrated workspace for Arabic-script Balochi language processing.",
  problem:"Individual research models become more useful when developers can discover and combine them in practical workflows.",
  approach:["Bring separate NLP components into a shared workspace.","Provide Python and FastAPI integration surfaces.","Experiment with an interface supporting right-to-left text."],
  outcome:"The repository documents local integration checks for four components.",
  caveat:"Integration checks do not establish deployment readiness, broad adoption or model-quality improvements.",
  stack:["Python","FastAPI","NLP","Right-to-left UI"],github:"https://github.com/shah-bakhsh/BalNLP"
 },
 {
  slug:"balocr",name:"BalOCR",category:"Research in progress",kicker:"Document intelligence / 06",
  summary:"Early-stage exploration of optical character recognition for Balochi script.",
  problem:"Searchable Balochi digital text is limited. OCR could help make scanned written material more accessible to text-processing tools.",
  approach:["Explore document collection and transcription workflows.","Identify possible evaluation datasets and quality measures.","Iterate on recognition pipelines once suitable data is available."],
  outcome:"Research direction in progress; no published model-quality metric is claimed.",
  caveat:"This page describes ongoing work rather than a completed or evaluated public model.",
  stack:["OCR","Computer vision","Data preparation","Balochi"]
 }
];
export const appliedProjects = [
 {name:"CrisisPilot AI",type:"Agentic systems",status:"Exploration",description:"A multi-agent emergency coordination and disaster intelligence concept.",github:"https://github.com/shah-bakhsh/CrisisPilot-AI"},
 {name:"PathPilot AI",type:"Applied AI",status:"Concept",description:"Exploring AI-assisted career navigation and personalised development paths.",github:"https://github.com/shah-bakhsh/pathpilot-ai"},
 {name:"ReelForge",type:"Media workflows",status:"Experiment",description:"Local-first video clipping experiments using speech and vision tooling.",github:"https://github.com/shah-bakhsh/reelforge"}
];