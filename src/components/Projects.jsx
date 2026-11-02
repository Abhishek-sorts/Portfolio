import { Github, Linkedin, CheckCircle2 } from "lucide-react";
import { projects, profile } from "../data";
import { Section, Card } from "./ui";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="AI, computer vision, GenAI, and intelligent automation systems.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Card key={p.title} delay={(i % 3) * 0.06} className="flex flex-col">
            <span className="pill w-fit">{p.tag}</span>
            <h3 className="mt-3 text-lg font-bold sm:text-xl">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan1" /><span>{b}</span></li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-slate-200/70 px-2 py-1 text-xs font-medium dark:bg-slate-700/70">{s}</span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-glass !px-3.5 !py-2 text-xs font-semibold">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              ) : null}
              <a href={p.linkedin || profile.linkedinPosts} target="_blank" rel="noreferrer" className="btn-glass !px-3.5 !py-2 text-xs font-semibold">
                <Linkedin className="h-4 w-4 text-violet1" /> Discuss on LinkedIn
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
