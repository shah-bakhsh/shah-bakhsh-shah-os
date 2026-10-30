"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, MotionConfig } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Menu, X, Cpu, Languages, BrainCircuit, ScanText, Terminal, Radio, ShieldCheck, CornerDownLeft } from "lucide-react";

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
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<Array<{ kind: "command" | "output"; text: string }>>([
    { kind: "output", text: "SHAH.OS interactive shell [version 1.0]" },
    { kind: "output", text: 'Type "help" to see available commands. Try "balochi-ai" to explore my language work.' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const terminalInputRef = useRef<HTMLInputElement>(null);
  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openTerminal = () => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setTerminalOpen(true);
  };
  const closeTerminal = () => setTerminalOpen(false);

  const commandResponses: Record<string, string> = {
    help: ["AVAILABLE COMMANDS","about       Reveal my background and mission","skills      Explore my technical toolkit","projects    Browse selected AI projects","research    Inspect my NLP research areas","balochi-ai  Explore my work on Balochi language technology","contact     Find ways to connect","clear       Clear the terminal","help        Show this command list","", "Tip: Use ↑ and ↓ to revisit previous commands."].join("\n"),
    about: ["SHAH BAKHSH / AI ENGINEER","I build intelligent systems across language models, machine learning, and agentic AI.","A major part of my work focuses on bringing Balochi, a low-resource language, into the digital world.","My workflow spans data preparation, tokenization, model training, evaluation, and usable NLP applications.","MISSION: AI should speak every language."].join("\n"),
    skills: ["TECHNICAL SUPERPOWERS","AI & ML       Python, PyTorch, TensorFlow, scikit-learn","LLMs          Hugging Face, Transformers, model adaptation","AGENTS        LangGraph, LangChain, tool use, orchestration","RAG           FAISS, Chroma, retrieval and evaluation","NLP           Tokenization, sequence labelling, low-resource NLP","ENGINEERING   FastAPI, Docker, Git, TypeScript","VISION        OpenCV, document processing, OCR experiments"].join("\n"),
    projects: ["SELECTED PROJECTS","01  BalBERT       github.com/shah-bakhsh/BalBERT","02  BalTokenizer  github.com/shah-bakhsh/BalTokenizer","03  BalPOS        github.com/shah-bakhsh/BalPOS","04  BalNER        github.com/shah-bakhsh/BalNER","05  BalNLP        github.com/shah-bakhsh/BalNLP","06  CrisisPilot   github.com/shah-bakhsh/CrisisPilot-AI","07  PathPilot     github.com/shah-bakhsh/pathpilot-ai","08  ReelForge     github.com/shah-bakhsh/reelforge","","Open the Projects section for descriptions and repository links."].join("\n"),
    research: ["RESEARCH INDEX / BALOCHI NLP","BalBERT      Domain-adaptive language representation","BalPOS       Part-of-speech tagging for 16 UD tags","BalNER       Named-entity recognition experiments","BalTokenizer 48K Unigram tokenizer configuration","BalOCR       OCR data and evaluation pipeline in progress","BalNLP       Python library, API, and RTL interface","","Use 'balochi-ai' for the mission and research context."].join("\n"),
    "balochi-ai": ["BALOCHI AI / THE MISSION","A language should not need millions of speakers to deserve a place in technology.","I work on the foundations: text data, tokenization, language models, POS tagging, NER, and OCR.","The goal is to help build tools that let Balochi participate in the digital world.","","RESEARCH NODES: BalBERT · BalPOS · BalNER · BalTokenizer · BalOCR · BalNLP","Explore the Balochi AI Lab section on this page for interactive research briefings."].join("\n"),
    contact: ["LET'S CONNECT","Email     shahbakhshtech@gmail.com","GitHub    github.com/shah-bakhsh","LinkedIn  linkedin.com/in/shah-bakhsh","","Open the links in the page footer or use the email button to start a conversation."].join("\n")
  };

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setTerminalLines([]);
      setCommandHistory((current) => [...current, rawCommand.trim()].slice(-50));
      setTerminalInput("");
      setHistoryIndex(-1);
      return;
    }
    const response = commandResponses[command];
    setTerminalLines((current) => [...current, { kind: "command", text: rawCommand.trim() }, { kind: "output", text: response ?? `Command not found: "${command}"\nType "help" to see the available commands. Try "projects", "research", or "contact".` }]);
    setCommandHistory((current) => [...current, rawCommand.trim()].slice(-50));
    setHistoryIndex(-1);
    setTerminalInput("");
  };

  const handleTerminalKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") { event.preventDefault(); runCommand(terminalInput); }
    else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandHistory.length) {
        const nextIndex = historyIndex < 0 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex); setTerminalInput(commandHistory[nextIndex]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex >= 0) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex >= commandHistory.length ? -1 : nextIndex);
        setTerminalInput(nextIndex >= commandHistory.length ? "" : commandHistory[nextIndex]);
      }
    } else if (event.key === "Escape") closeTerminal();
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event: WindowEventMap["keydown"]) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;
      if (event.key === "/" && !isTyping) { event.preventDefault(); openTerminal(); }
      if (event.key === "Escape") closeTerminal();
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    if (!terminalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    terminalInputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [terminalOpen]);

  useEffect(() => {
    if (terminalOpen && terminalOutputRef.current) {
      terminalOutputRef.current.scrollTo({ top: terminalOutputRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [terminalLines, terminalOpen]);

  const handleTerminalDialogKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;
    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const nav = [{ label: "About", href: "#about" }, { label: "Superpowers", href: "#superpowers" }, { label: "Research Lab", href: "#lab" }, { label: "Projects", href: "#projects" }];

  return (
    <MotionConfig reducedMotion="user"><main className="overflow-x-clip"><motion.div aria-hidden="true" className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-[#f5c518] shadow-[0_0_14px_rgba(245,197,24,.75)]" style={{ scaleX: scrollProgress }} />
      <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.65, ease: "easeOut" }} className="sticky top-0 z-50 border-b border-white/[.08] bg-[#08090a]/80 backdrop-blur-2xl">
        <div className="shell flex h-[76px] items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="SHAH.OS home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f5c518] text-sm font-black text-black">S.</span>
            <span className="text-sm font-bold tracking-[.16em]">SHAH<span className="text-[#f5c518]">.OS</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(item => <a key={item.label} href={item.href} className="text-xs text-white/60 transition hover:text-[#f5c518]">{item.label}</a>)}
          </nav>
          <div className="hidden items-center gap-3 sm:flex"><button onClick={openTerminal} className="inline-flex items-center gap-2 rounded-full border border-[#f5c518]/35 px-4 py-2 text-xs text-[#f5c518] transition hover:bg-[#f5c518] hover:text-black"><Terminal size={14} /> Open terminal <span className="text-[9px] opacity-60">/</span></button><a href="mailto:shahbakhshtech@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs transition hover:border-[#f5c518] hover:text-[#f5c518]">Let&apos;s connect <ArrowUpRight size={14} /></a></div>
          <button className="grid size-11 place-items-center rounded-full border border-white/10 text-white/75 transition hover:border-[#f5c518]/50 hover:text-[#f5c518] md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="shell flex flex-col gap-1 border-t border-white/[.06] pb-5 pt-3 md:hidden">{nav.map(item => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm text-white/70 transition hover:bg-white/[.04] hover:text-[#f5c518]">{item.label}</a>)}<button onClick={() => { setMenuOpen(false); openTerminal(); }} className="mt-2 flex min-h-11 items-center gap-2 rounded-xl bg-[#f5c518] px-4 text-left text-sm font-semibold text-black"><Terminal size={16} /> Open command terminal</button></motion.nav>}
      </motion.header>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease: "easeOut" }} className="relative flex min-h-[690px] items-center border-b border-white/10">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <motion.div aria-hidden="true" animate={{ x: [0, -24, 0], y: [0, 22, 0], scale: [1, 1.08, 1] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#f5c518]/[.09] blur-[110px]" />
        <div className="shell relative grid items-center gap-14 py-24 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow mb-8 flex items-center gap-3"><span className="h-px w-8 bg-[#f5c518]" /> Independent AI builder · Open to collaboration</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }} className="max-w-4xl text-[clamp(58px,9vw,112px)] font-semibold leading-[.88] tracking-[-.075em]">AI should speak<br /><span className="text-[#f5c518]">every language.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .16 }} className="mt-9 max-w-xl text-base leading-8 text-white/55 md:text-lg">I&apos;m Shah Bakhsh. I build intelligent systems across language models, machine learning, and agentic AI. One mission drives much of my work: helping bring Balochi into the future of technology.</motion.p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild><a href="#lab">Explore my research <ArrowUpRight size={16} /></a></Button>
              <Button asChild variant="outline"><a href="#projects">View projects <ArrowDown size={15} /></a></Button>
            </div>
            <p className="mt-8 text-[11px] tracking-wide text-white/35">A personal workspace for experiments, research, and things worth building.</p><button onClick={() => setTerminalOpen(true)} className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#f5c518]/25 bg-[#f5c518]/[.06] px-4 py-2.5 text-left text-xs text-white/65 transition hover:border-[#f5c518]/60 hover:text-[#f5c518]"><Terminal size={15} className="text-[#f5c518]" /><span>Explore SHAH.OS interactively</span><kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-white/40">/</kbd></button>
          </div>
          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute inset-8 rounded-full bg-[#f5c518]/10 blur-3xl" />
            <div className="panel relative aspect-square overflow-hidden p-7">
              <div className="flex items-center justify-between text-[10px] tracking-[.2em] text-white/35"><span>SHAH.OS / CORE</span><span className="flex items-center gap-2"><motion.span animate={{ opacity: [1, .35, 1], scale: [1, .8, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[#f5c518]" /> ONLINE</span></div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative grid h-52 w-52 place-items-center rounded-full border border-[#f5c518]/30">
                  <motion.div aria-hidden="true" animate={{ rotate: -360 }} transition={{ duration: 72, repeat: Infinity, ease: "linear" }} className="absolute inset-4 rounded-full border border-white/10" />
                  <motion.div aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} className="absolute inset-10 rounded-full border border-dashed border-[#f5c518]/35" />
                  <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-[#f5c518] bg-[#f5c518] shadow-[0_0_70px_rgba(245,197,24,.2)]"><Image src="https://avatars.githubusercontent.com/u/226354638?v=4" alt="Shah Bakhsh" width={112} height={112} priority unoptimized className="h-full w-full object-cover" /></div>
                  <span className="absolute -right-3 top-8 rounded-full border border-white/10 bg-[#101113] px-3 py-1.5 text-[9px] text-white/60">LEARN</span>
                  <span className="absolute -left-5 bottom-10 rounded-full border border-white/10 bg-[#101113] px-3 py-1.5 text-[9px] text-white/60">BUILD</span>
                  <span className="absolute -bottom-3 right-8 rounded-full border border-white/10 bg-[#101113] px-3 py-1.5 text-[9px] text-white/60">RESEARCH</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-7 right-7 flex justify-between border-t border-white/10 pt-4 text-[9px] tracking-[.15em] text-white/35"><span>AI ENGINEERING</span><span>AI / NLP / SYSTEMS</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between px-1 text-[10px] tracking-[.18em] text-white/30"><span>BUILDING FROM THE EDGE</span><span>BUILDING ACROSS BORDERS</span></div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 h-12 w-px bg-gradient-to-b from-[#f5c518]/60 to-transparent" />
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease: "easeOut" }} aria-label="The mission" className="relative overflow-hidden border-b border-white/10 bg-[#f1eee3] py-24 text-[#11110d] md:py-32"><div className="shell relative"><p className="text-[10px] font-semibold tracking-[.24em] text-[#8a7018]">A BELIEF THAT BECAME A BODY OF WORK</p><h2 className="mt-12 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.07em] md:text-7xl lg:text-[88px]">Some languages are missing from the future.<br /><span className="text-[#9a7710]">I want to help change that.</span></h2><div className="mt-14 flex flex-col justify-between gap-8 border-t border-black/20 pt-6 md:flex-row md:items-end"><p className="max-w-xl text-base leading-8 text-black/65 md:text-lg">A language should not need millions of speakers to deserve a place in technology. It deserves tools, data, models, and the chance to be understood.</p><span className="text-[9px] tracking-[.2em] text-[#8a7018]">THE MISSION / BALOCHI AI</span></div></div></motion.section>\n\n      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease: "easeOut" }} id="about" className="section-pad border-b border-white/10">
        <div className="shell grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow mb-5">01 / The person behind the systems</p><h2 className="section-title">Curiosity,<br /><span className="gold">made useful.</span></h2></div>
          <div className="max-w-2xl pt-2"><p className="text-xl leading-9 text-white/80">I&apos;m an AI engineer focused on language technology, applied machine learning, and intelligent systems that solve meaningful problems.</p><p className="mt-6 leading-8 text-white/50">A major part of my work is centered on Balochi, a low-resource language that deserves better digital tools. I work across data preparation, tokenization, model training, evaluation, and usable NLP applications. The goal is not simply to train models. It is to help build the foundations that let a language participate in the digital world.</p><p className="mt-6 leading-8 text-white/50">I also build with LLMs, retrieval systems, and AI agents, looking for ways to turn research into dependable tools. I care about clear evidence, open-source work, and engineering that makes a difference beyond a demo.</p><div className="mt-9 flex flex-wrap gap-3"><span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">AI & LLM Engineering</span><span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Low-resource NLP</span><span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Agentic systems</span></div></div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease: "easeOut" }} id="superpowers" className="section-pad border-b border-white/10">
        <div className="shell"><div className="mb-14 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow mb-5">02 / Technical range</p><h2 className="section-title">My tech <span className="gold">superpowers.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/45">A practical toolkit for taking ideas from datasets and experiments to usable AI-powered products.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{capabilities.map((item, i) => <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: i * .09 }} whileHover={{ y: -7, borderColor: "rgba(245,197,24,.38)" }} className="panel group p-7 transition"><div className="mb-12 flex items-center justify-between"><item.icon className="text-[#f5c518]" size={25} /><span className="text-xs text-white/25">0{i + 1}</span></div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-white/45">{item.detail}</p></motion.div>)}</div>
          <div className="mt-5 flex flex-wrap gap-2">{["Python","PyTorch","TensorFlow","Hugging Face","Transformers","LangGraph","LangChain","RAG","FAISS","Chroma","FastAPI","OpenCV","Docker","Git"].map(skill => <span key={skill} className="rounded-md bg-white/[.045] px-3 py-2 text-[11px] text-white/50">{skill}</span>)}</div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease: "easeOut" }} id="lab" className="section-pad border-b border-white/10">
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
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease: "easeOut" }} id="projects" className="section-pad border-b border-white/10">
        <div className="shell"><div className="mb-14"><p className="eyebrow mb-5">04 / Selected work</p><h2 className="section-title">Built to <span className="gold">explore.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/45">A selection of research projects and experiments. Open the repositories for source code, implementation details, and current project status.</p></div>
          <div className="grid gap-3 md:grid-cols-2">{projects.map((project, i) => <a key={project.code} href={project.href} target="_blank" rel="noreferrer" className="panel group flex min-h-[250px] flex-col justify-between p-7 transition hover:-translate-y-1 hover:border-[#f5c518]/40"><div className="flex items-center justify-between"><span className="text-[10px] tracking-[.18em] text-white/30">{project.code} / {project.type.toUpperCase()}</span><ArrowUpRight className="text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f5c518]" size={18} /></div><div><h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3><p className="mt-3 max-w-md text-sm leading-7 text-white/45">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded bg-white/[.05] px-2.5 py-1.5 text-[9px] text-white/40">{tag}</span>)}</div></div></a>)}</div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.72, ease: "easeOut" }} className="section-pad">
        <div className="shell"><div className="panel relative overflow-hidden p-8 md:p-14"><div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#f5c518]/10 blur-[90px]" /><div className="relative max-w-3xl"><p className="eyebrow mb-6">05 / The next collaboration</p><h2 className="text-5xl font-semibold leading-[.98] tracking-[-.06em] md:text-7xl">Have a meaningful problem? <span className="gold">Let&apos;s build.</span></h2><p className="mt-7 max-w-xl text-sm leading-7 text-white/50">I&apos;m interested in research, open-source collaboration, and building AI tools with real-world value. Reach out and let&apos;s start a conversation.</p><a href="mailto:shahbakhshtech@gmail.com" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f5c518] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white">Contact me <ArrowUpRight size={16} /></a></div></div></div>
      </motion.section>

      <footer className="border-t border-white/10 py-8"><div className="shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><div><p className="text-sm font-bold tracking-[.16em]">SHAH<span className="text-[#f5c518]">.OS</span></p><p className="mt-2 text-[10px] text-white/30">Designed and built by Shah Bakhsh</p></div><div className="flex items-center gap-5 text-white/45"><a href="https://github.com/shah-bakhsh" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[#f5c518]"><Github size={17} /></a><a href="https://linkedin.com/in/shah-bakhsh" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[#f5c518]"><Linkedin size={17} /></a><a href="mailto:shahbakhshtech@gmail.com" aria-label="Email" className="transition hover:text-[#f5c518]"><ShieldCheck size={17} /></a></div><p className="text-[10px] text-white/25">© 2026 SHAH.OS · Built for the curious.</p></div></footer>

      {terminalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) closeTerminal(); }}>
          <motion.section role="dialog" aria-modal="true" aria-labelledby="terminal-title" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} onKeyDown={handleTerminalDialogKeyDown} className="flex max-h-[min(82vh,720px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#f5c518]/25 bg-[#090a0b] shadow-[0_30px_120px_rgba(0,0,0,.65)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[.035] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff625a]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f5c518]" /><span className="h-2.5 w-2.5 rounded-full bg-[#35c978]" /></div><div><p id="terminal-title" className="text-xs font-semibold tracking-wide text-white/85">SHAH.OS TERMINAL</p><p className="mt-0.5 text-[9px] tracking-[.16em] text-white/35">INTERACTIVE PORTFOLIO SHELL</p></div></div>
              <button onClick={closeTerminal} aria-label="Close terminal" className="grid h-9 w-9 place-items-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white"><X size={18} /></button>
            </div>
            <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-3 sm:px-5">{["help","about","skills","projects","research","balochi-ai","contact"].map((command) => <button key={command} onClick={() => runCommand(command)} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/55 transition hover:border-[#f5c518]/50 hover:text-[#f5c518]">{command}</button>)}</div>
            <div ref={terminalOutputRef} className="min-h-0 flex-1 overflow-y-auto px-4 py-4 font-mono text-[11px] leading-6 sm:px-5 sm:text-xs" aria-live="polite" aria-relevant="additions text">
              <div className="mb-4 text-white/45">Welcome. This terminal runs locally in your browser. Type <span className="text-[#f5c518]">help</span> to begin.</div>
              {terminalLines.map((line,index) => <div key={index} className={line.kind === "command" ? "mt-3 text-[#f5c518]" : "whitespace-pre-wrap break-words text-white/70"}>{line.kind === "command" ? <><span className="mr-2 text-[#35c978]">visitor@shah-os:~$</span>{line.text}</> : line.text}</div>)}
            </div>
            <form className="border-t border-white/10 bg-white/[.025] p-3 sm:px-5 sm:py-4" onSubmit={(event) => { event.preventDefault(); runCommand(terminalInput); }}>
              <label htmlFor="terminal-command" className="mb-2 block text-[9px] tracking-[.18em] text-white/35">ENTER A COMMAND</label>
              <div className="flex items-center gap-2"><span className="font-mono text-xs text-[#35c978]">❯</span><input ref={terminalInputRef} id="terminal-command" value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} onKeyDown={handleTerminalKeyDown} autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder='Try "balochi-ai" or type "help"...' className="min-w-0 flex-1 bg-transparent py-2 font-mono text-xs text-white outline-none placeholder:text-white/25" /><button type="submit" aria-label="Run command" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#f5c518] text-black transition hover:bg-white"><CornerDownLeft size={17} /></button></div>
              <p className="mt-2 text-[9px] text-white/30">ENTER to run · ↑/↓ command history · ESC to close · click outside to dismiss</p>
            </form>
          </motion.section>
        </div>
      )}
    </main></MotionConfig>
  );
}