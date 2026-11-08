import Link from "next/link";
import type { ReactNode } from "react";

const links = [
 { label: "Home", href: "/" }, { label: "Research", href: "/research/" },
 { label: "Projects", href: "/projects/" }, { label: "About", href: "/about/" },
 { label: "Contact", href: "/contact/" },
];
export function PortfolioShell({children}: {children:ReactNode}) {
 return <div className="min-h-screen bg-[#08090a] text-[#f5f5f2]">
  <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#f5c518] focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
  <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08090a]/90 backdrop-blur-xl">
   <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
    <Link href="/" className="text-lg font-bold tracking-[.15em]" aria-label="SHAH.OS home">SHAH<span className="text-[#f5c518]">.OS</span></Link>
    <nav aria-label="Portfolio" className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-white/65 sm:text-sm">
     {links.map(x=><Link key={x.href} href={x.href} className="transition hover:text-[#f5c518] focus-visible:text-[#f5c518]">{x.label}</Link>)}
    </nav>
   </div>
  </header>
  <main id="content" className="mx-auto w-full max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">{children}</main>
  <footer className="border-t border-white/10">
   <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 py-8 text-sm text-white/55 sm:flex-row sm:px-8">
    <span>© 2026 Shah Bakhsh · SHAH.OS</span>
    <div className="flex flex-wrap gap-5">
      <Link href="/links/" className="hover:text-[#f5c518]">Professional profiles</Link>
      <a href="https://github.com/shah-bakhsh" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5c518]">GitHub ↗</a>
      <a href="mailto:shahbakhshtech@gmail.com" className="hover:text-[#f5c518]">Email ↗</a>
    </div>
   </div>
  </footer>
 </div>;
}
export function PageIntro({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {
 return <div className="mb-14 max-w-4xl">
  <p className="mb-6 text-xs font-semibold uppercase tracking-[.24em] text-[#f5c518]">{eyebrow}</p>
  <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-7xl">{title}</h1>
  <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">{description}</p>
 </div>;
}
export function TextLink({href,children}:{href:string;children:ReactNode}) {
 return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-[#f5c518]/50 px-5 py-3 text-sm font-semibold text-[#f5c518] transition hover:bg-[#f5c518] hover:text-black">{children} ↗</a>;
}