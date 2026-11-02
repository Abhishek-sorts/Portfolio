import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { profile } from "../data";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Certifications", "Contact"];

export default function Header({ dark, setDark }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 140) current = l.toLowerCase();
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/60 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white shadow-[0_0_16px_rgba(108,92,231,.7)]">
            <Sparkles className="h-4 w-4" />
          </span>
          {profile.firstName}<span className="gradient-text">.AI</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => go(l.toLowerCase())}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === l.toLowerCase() ? "text-violet1" : "text-slate-600 hover:text-violet1 dark:text-slate-300"
              }`}
            >
              {l}
              {active === l.toLowerCase() && (
                <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-brand-gradient" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} aria-label="Toggle theme" className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200/70 bg-white/50 transition hover:text-violet1 dark:border-slate-700 dark:bg-slate-800/50">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => go("contact")} className="btn-primary hidden !py-2 sm:inline-flex">
            Hire Me <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200/70 lg:hidden dark:border-slate-700">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200/50 bg-white/90 px-4 py-3 backdrop-blur-xl lg:hidden dark:border-slate-700/50 dark:bg-slate-900/90">
          {links.map((l) => (
            <button key={l} onClick={() => go(l.toLowerCase())} className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-violet1/10">
              {l}
            </button>
          ))}
          <button onClick={() => go("contact")} className="btn-primary mt-2 w-full">Hire Me <ArrowRight className="h-4 w-4" /></button>
        </div>
      )}
    </header>
  );
}
