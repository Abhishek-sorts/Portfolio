import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 px-4 py-8 dark:border-slate-700/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-violet1"><Mail className="h-5 w-5" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-violet1"><Linkedin className="h-5 w-5" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-violet1"><Github className="h-5 w-5" /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" className="ml-2 grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-lg transition hover:-translate-y-1">
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
