"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Menu, X, Cpu, Languages, BrainCircuit, ScanText, Terminal, Radio, ShieldCheck } from "lucide-react";

const projects = [
  { code: "01", name: "BalBERT", type: "Language model", description: "Domain-adaptive language representation work focused on strengthening NLP foundations for Balochi.", tags: ["Transformers", "XLM-R", "NLP"], href: "https://github.com/shah-bakhsh/BalBERT" },
  { code: "02", name: "BalTokenizer", type: "Language infrastructure", description: "A Unigram tokenizer built for Balochi text, with documented character coverage and unknown-token evaluation.", tags: ["Tokenization", "SentencePiece", "Balochi"], href: "https://github.com/shah-bakhsh/BalTokenizer" },
  { code: "03", name: "BalPOS", type: "Sequence labelling", description: "A transformer-based Balochi part-of-speech tagging project built around Universal Dependencies.", tags: ["PyTorch", "Token classification", "CoNLL-U"], href: "https://github.com/shah-bakhsh/BalPOS" },
  { code: "04", name: "BalNER", type: "Low-resource NLP", description: "Balochi named-entity recognition, with documented entity-level evaluation and dataset limitations.", tags: ["NER", "Transformers", "Evaluation"], href: "https://github.com/shah-bakhsh/BalNER" },
  { code: "05", name: "BalNLP", type: "Developer tooling", description: "An Arabic-script Balochi NLP workspace bringing together a Python library, FastAPI service, and right-to-left interface.", tags: ["Python", "FastAPI", "RTL"], href: "https://github.com/shah-bakhsh/BalNLP" },
  { code: "06", name: "CrisisPilot AI", type: "Multi-agent systems", description: "An AI-driven concept for disaster intelligence and emergency coordination workflows.", tags: ["Agents", "LLMs", "Orchestration"], href: "https://github.com/shah-bakhsh/CrisisPilot-AI" },
  { code: "07", name: "PathPilot AI", type: "Applied AI", description: "A career navigation platform exploring personalized roadmaps, resume analysis, and AI mentorship.", tags: ["AI product", "Career tech", "Web"], href: "https://github.com/shah-bakhsh/pathpilot-ai" },
  { code: "08", name: "ReelForge", type: "Local AI workflows", description: "An experimental video clipping workflow combining speech recognition, computer vision, and local language models.", tags: ["Whisper", "OpenCV", "Ollama"], href: "https://github.com/shah-bakhsh/reelforge" }
];

const capabilities = [
  { icon: BrainCircuit, title: "Applied AI & LLMs", detail: "Model adaptation, prompt systems, evaluation, and practical LLM applications." },
  { icon: Languages, title: "Language technology", detail: "Low-resource NLP, tokenization, linguistic datasets, and multilingual systems." },
  { icon: Cpu, title: "Agentic systems", detail: "Tool use, multi-agent workflows, retrieval, and task orchestration." },
  { icon: ScanText, title: "Computer vision & OCR", detail: "Image understanding, document processing, and OCR experimentation." }
];

const research = [
  { id: "BAL-01", name: "BalBERT", description: "Domain-adaptive XLM-RoBERTa pretraining to strengthen the language representation foundation for Balochi NLP.", state: "97.8% perplexity reduction documented against the repository baseline", icon: BrainCircuit },
  { id: "BAL-02", name: "BalPOS", description: "A transformer-based part-of-speech tagger for 16 Universal Dependencies tags, fine-tuned for Balochi.", state: "87.26% held-out accuracy documented for v2", icon: Languages },
  { id: "BAL-03", name: "BalNER", description: "Named-entity recognition dataset and model experiments for identifying people, places, and other entities in Balochi text.", state: "0.7034 entity-level F1 documented on the test set", icon: ScanText },
  { id: "BAL-04", name: "BalTokenizer", description: "A 48K Unigram tokenizer configuration designed for Balochi script and text processing.", state: "0.0% unknown-token rate and 99.9% character coverage documented", icon: Terminal },
  { id: "BAL-05", name: "BalOCR", description: "Ongoing research into optical character recognition for Balochi script, with a focus on building a usable data and evaluation pipeline.", state: "Research in progress. No public model-quality claim", icon: ScanText },
  { id: "BAL-06", name: "BalNLP", description: "An integrated Arabic-script Balochi NLP workspace combining a Python library, FastAPI service, and right-to-left interface.", state: "Four components locally integration-checked; not a model-quality claim", icon: Radio }
];

export default function Home() {
  const [labOpen, setLabOpen] = useState(false);
  const [activeResearch, setActiveResearch] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [{ label: "About", href: "#about" }, { label: "Superpowers", href: "#superpowers" }, { label: "Research Lab", href: "#lab" }, { label: "Projects", href: "#projects" }];

  return (
    <main className="overflow-hidden">
      <header className="relative z-20 border-b border-white/10">
        <div className="shell flex h-[76px] items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="SHAH.OS home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f5c518] text-sm font-black text-black">S.</span>
            <span className="text-sm font-bold tracking-[.16em]">SHAH<span className="text-[#f5c518]">.OS</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(item => <a key={item.label} href={item.href} className="text-xs text-white/60 transition hover:text-[#f5c518]">{item.label}</a>)}
          </nav>
          <a href="mailto:shahbakhshtech@gmail.com" className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs transition hover:border-[#f5c518] hover:text-[#f5c518] sm:flex">Let&apos;s connect <ArrowUpRight size={14} /></a>
          <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="shell flex flex-col gap-4 pb-6 md:hidden">{nav.map(item => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm text-white/70">{item.label}</a>)}</nav>}
      </header>

      <section className="relative flex min-h-[690px] items-center border-b border-white/10">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#f5c518]/[.07] blur-[110px]" />
        <div className="shell relative grid items-center gap-14 py-24 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow mb-8 flex items-center gap-3"><span className="h-px w-8 bg-[#f5c518]" /> Independent AI builder · Pakistan</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }} className="max-w-4xl text-[clamp(58px,9vw,112px)] font-semibold leading-[.88] tracking-[-.075em]">AI should speak<br /><span className="text-[#f5c518]">every language.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .16 }} className="mt-9 max-w-xl text-base leading-8 text-white/55 md:text-lg">I&apos;m Shah Bakhsh. I build intelligent systems across language models, machine learning, and agentic AI. One mission drives much of my work: helping bring Balochi into the future of technology.</motion.p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild><a href="#lab">Explore my research <ArrowUpRight size={16} /></a></Button>
              <Button asChild variant="outline"><a href="#projects">View projects <ArrowDown size={15} /></a></Button>
            </div>
            <p className="mt-8 text-[11px] tracking-wide text-white/35">A personal workspace for experiments, research, and things worth building.</p>
          </div>
          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute inset-8 rounded-full bg-[#f5c518]/10 blur-3xl" />
            <div className="panel relative aspect-square overflow-hidden p-7">
              <div className="flex items-center justify-between text-[10px] tracking-[.2em] text-white/35"><span>SHAH.OS / CORE</span><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#f5c518]" /> ONLINE</span></div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative grid h-52 w-52 place-items-center rounded-full border border-[#f5c518]/30">
                  <div className="absolute inset-4 rounded-full border border-white/10" />
                  <div className="absolute inset-10 rounded-full border border-dashed border-[#f5c518]/35" />
                  <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-[#f5c518] bg-[#f5c518] shadow-[0_0_70px_rgba(245,197,24,.2)]"><Image src="https://avatars.githubusercontent.com/u/226354638?v=4" alt="Shah Bakhsh" width={112} height={112} priority unoptimized className="h-full w-full object-cover" /></div>
                  <span className="absolute -right-3 top-8 rounded-full border border-white/10 bg-[#101113] px-3 py-1.5 text-[9px] text-white/60">LEARN</span>
                  <span className="absolute -left-5 bottom-10 rounded-full border border-white/10 bg-[#101113] px-3 py-1.5 text-[9px] text-white/60">BUILD</span>
                  <span className="absolute -bottom-3 right-8 rounded-full border border-white/10 bg-[#101113] px-3 py-1.5 text-[9px] text-white/60">RESEARCH</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-7 right-7 flex justify-between border-t border-white/10 pt-4 text-[9px] tracking-[.15em] text-white/35"><span>AI ENGINEERING</span><span>AI / NLP / SYSTEMS</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between px-1 text-[10px] tracking-[.18em] text-white/30"><span>BUILDING FROM THE EDGE</span><span>BASED IN PAKISTAN</span></div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 h-12 w-px bg-gradient-to-b from-[#f5c518]/60 to-transparent" />
      </section>

      <section aria-label="The mission" className="relative overflow-hidden border-b border-white/10 bg-[#f1eee3] py-24 text-[#11110d] md:py-32"><div className="shell relative"><p className="text-[10px] font-semibold tracking-[.24em] text-[#8a7018]">A BELIEF THAT BECAME A BODY OF WORK</p><h2 className="mt-12 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.07em] md:text-7xl lg:text-[88px]">Some languages are missing from the future.<br /><span className="text-[#9a7710]">I want to help change that.</span></h2><div className="mt-14 flex flex-col justify-between gap-8 border-t border-black/20 pt-6 md:flex-row md:items-end"><p className="max-w-xl text-base leading-8 text-black/65 md:text-lg">A language should not need millions of speakers to deserve a place in technology. It deserves tools, data, models, and the chance to be understood.</p><span className="text-[9px] tracking-[.2em] text-[#8a7018]">THE MISSION / BALOCHI AI</span></div></div></section>\n\n      <section id="about" className="section-pad border-b border-white/10">
        <div className="shell grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow mb-5">01 / The person behind the systems</p><h2 className="section-title">Curiosity,<br /><span className="gold">made useful.</span></h2></div>
          <div className="max-w-2xl pt-2"><p className="text-xl leading-9 text-white/80">I&apos;m an AI engineer focused on language technology, applied machine learning, and intelligent systems that solve meaningful problems.</p><p className="mt-6 leading-8 text-white/50">A major part of my work is centered on Balochi, a low-resource language that deserves better digital tools. I work across data preparation, tokenization, model training, evaluation, and usable NLP applications. The goal is not simply to train models. It is to help build the foundations that let a language participate in the digital world.</p><p className="mt-6 leading-8 text-white/50">I also build with LLMs, retrieval systems, and AI agents, looking for ways to turn research into dependable tools. I care about clear evidence, open-source work, and engineering that makes a difference beyond a demo.</p><div className="mt-9 flex flex-wrap gap-3"><span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">AI & LLM Engineering</span><span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Low-resource NLP</span><span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Agentic systems</span></div></div>
        </div>
      </section>

      <section id="superpowers" className="section-pad border-b border-white/10">
        <div className="shell"><div className="mb-14 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow mb-5">02 / Technical range</p><h2 className="section-title">My tech <span className="gold">superpowers.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/45">A practical toolkit for taking ideas from datasets and experiments to usable AI-powered products.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{capabilities.map((item, i) => <div key={item.title} className="panel group p-7 transition hover:border-[#f5c518]/40"><div className="mb-12 flex items-center justify-between"><item.icon className="text-[#f5c518]" size={25} /><span className="text-xs text-white/25">0{i + 1}</span></div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-white/45">{item.detail}</p></div>)}</div>
          <div className="mt-5 flex flex-wrap gap-2">{["Python","PyTorch","TensorFlow","Hugging Face","Transformers","LangGraph","LangChain","RAG","FAISS","Chroma","FastAPI","OpenCV","Docker","Git"].map(skill => <span key={skill} className="rounded-md bg-white/[.045] px-3 py-2 text-[11px] text-white/50">{skill}</span>)}</div>
        </div>
      </section>

      <section id="lab" className="section-pad border-b border-white/10">
        <div className="shell">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow mb-5">03 / A mission worth exploring</p><h2 className="section-title">The Balochi AI <span className="gold">Lab.</span></h2></div><div className="max-w-sm"><p className="text-sm leading-7 text-white/50">Building blocks for language technology, from foundational text processing to machine learning experiments.</p><p className="mt-3 text-[11px] text-[#f5c518]">INTERACTIVE RESEARCH EXPLORER ↓</p></div></div>
          <div className="panel overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5"><div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-[#f5c518]/10 text-[#f5c518]"><Radio size={17} /></div><div><p className="text-xs font-bold tracking-wide">RESEARCH MISSION CONTROL</p><p className="mt-1 text-[10px] text-white/35">BAL-NLP / EXPLORER INTERFACE</p></div></div><span className="rounded-full border border-[#f5c518]/25 px-3 py-1.5 text-[9px] tracking-widest text-[#f5c518]">LIVE INTERACTION</span></div>
            <div className="grid md:grid-cols-[.85fr_1.15fr]">
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">{research.map((item, i) => <button key={item.id} onClick={() => { setActiveResearch(i); setLabOpen(true); }} className={`mb-2 flex w-full items-center gap-4 rounded-xl p-4 text-left transition ${activeResearch === i && labOpen ? "bg-[#f5c518] text-black" : "text-white/60 hover:bg-white/[.05]"}`}><span className="text-[10px] opacity-50">{item.id}</span><span className="flex-1 text-sm font-semibold">{item.name}</span><ArrowUpRight size={15} /></button>)}</div>
              <div className="flex min-h-[270px] flex-col justify-between p-7 md:p-9"><div><p className="text-[10px] tracking-[.2em] text-white/35">SELECTED RESEARCH NODE</p><div className="mt-7 flex items-start gap-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#f5c518]/10 text-[#f5c518]">{(() => { const Icon = research[activeResearch].icon; return <Icon size={23} />; })()}</div><div><h3 className="text-2xl font-semibold">{labOpen ? research[activeResearch].name : "Choose a research node"}</h3><p className="mt-3 max-w-md text-sm leading-7 text-white/50">{labOpen ? research[activeResearch].description : "Select any node on the left to inspect a part of the Balochi AI research workspace. Each selection reveals a short project overview."}</p></div></div></div><div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5"><span className="text-[10px] tracking-widest text-white/35">{labOpen ? research[activeResearch].state.toUpperCase() : "AWAITING INPUT"}</span><a href="https://github.com/shah-bakhsh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-[#f5c518]">Explore GitHub <ArrowUpRight size={14} /></a></div></div>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] text-white/30">TRY IT: Select a research node to reveal its mission briefing.</p>
        </div>
      </section>

      <section id="projects" className="section-pad border-b border-white/10">
        <div className="shell"><div className="mb-14"><p className="eyebrow mb-5">04 / Selected work</p><h2 className="section-title">Built to <span className="gold">explore.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/45">A selection of research projects and experiments. Open the repositories for source code, implementation details, and current project status.</p></div>
          <div className="grid gap-3 md:grid-cols-2">{projects.map(project => <a key={project.code} href={project.href} target="_blank" rel="noreferrer" className="panel group flex min-h-[250px] flex-col justify-between p-7 transition hover:-translate-y-1 hover:border-[#f5c518]/40"><div className="flex items-center justify-between"><span className="text-[10px] tracking-[.18em] text-white/30">{project.code} / {project.type.toUpperCase()}</span><ArrowUpRight className="text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f5c518]" size={18} /></div><div><h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3><p className="mt-3 max-w-md text-sm leading-7 text-white/45">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded bg-white/[.05] px-2.5 py-1.5 text-[9px] text-white/40">{tag}</span>)}</div></div></a>)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell"><div className="panel relative overflow-hidden p-8 md:p-14"><div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#f5c518]/10 blur-[90px]" /><div className="relative max-w-3xl"><p className="eyebrow mb-6">05 / The next collaboration</p><h2 className="text-5xl font-semibold leading-[.98] tracking-[-.06em] md:text-7xl">Have a meaningful problem? <span className="gold">Let&apos;s build.</span></h2><p className="mt-7 max-w-xl text-sm leading-7 text-white/50">I&apos;m interested in research, open-source collaboration, and building AI tools with real-world value. Reach out and let&apos;s start a conversation.</p><a href="mailto:shahbakhshtech@gmail.com" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f5c518] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white">Contact me <ArrowUpRight size={16} /></a></div></div></div>
      </section>

      <footer className="border-t border-white/10 py-8"><div className="shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><div><p className="text-sm font-bold tracking-[.16em]">SHAH<span className="text-[#f5c518]">.OS</span></p><p className="mt-2 text-[10px] text-white/30">Designed and built by Shah Bakhsh · Pakistan</p></div><div className="flex items-center gap-5 text-white/45"><a href="https://github.com/shah-bakhsh" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[#f5c518]"><Github size={17} /></a><a href="https://linkedin.com/in/shah-bakhsh" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[#f5c518]"><Linkedin size={17} /></a><a href="mailto:shahbakhshtech@gmail.com" aria-label="Email" className="transition hover:text-[#f5c518]"><ShieldCheck size={17} /></a></div><p className="text-[10px] text-white/25">© 2026 SHAH.OS · Built for the curious.</p></div></footer>
    </main>
  );
}