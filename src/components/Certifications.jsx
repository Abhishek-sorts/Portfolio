import { BadgeCheck, Trophy, FileCheck } from "lucide-react";
import { certifications, achievements } from "../data";
import { Section, Card } from "./ui";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Achievements" subtitle="Each badge links to the certificate PDF or official credential verification.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          return (
            <Card key={c.name} delay={(i % 3) * 0.06} className="flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold leading-snug">{c.name}</h3>
                  <BadgeCheck className="h-6 w-6 shrink-0 text-green-500" aria-label="Verified" />
                </div>
                <p className="mt-1 text-sm font-semibold text-violet1">{c.issuer}</p>
                <p className="text-xs text-slate-500">{c.date}{c.id ? ` · ${c.id}` : ""}</p>
              </div>

              {(c.file || c.link) && (
                <div className="mt-4 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                  <a
                    href={c.file || c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glass !py-1.5 !px-3 text-xs inline-flex items-center gap-1.5 hover:text-cyan1 font-semibold"
                  >
                    <FileCheck className="h-3.5 w-3.5 text-cyan1" /> Certificate
                  </a>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <h3 className="mt-14 mb-5 text-2xl font-bold">Innovation Events</h3>
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((a, i) => (
          <Card key={a.title} delay={i * 0.08}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white"><Trophy className="h-5 w-5" /></span>
              <div>
                <h4 className="font-bold">{a.title}</h4>
                <p className="text-sm text-slate-500">{a.place}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{a.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
