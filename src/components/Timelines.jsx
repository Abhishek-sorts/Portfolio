import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, ExternalLink } from "lucide-react";
import { experience, education } from "../data";
import { Section } from "./ui";

function Timeline({ items, render, icon: Icon }) {
  return (
    <div className="relative ml-4 border-l-2 border-violet1/30 pl-8">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative pb-8 last:pb-0"
        >
          <span className="absolute -left-[3.05rem] top-1 grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-white shadow-[0_0_14px_rgba(108,92,231,.6)]">
            <Icon className="h-4 w-4" />
          </span>
          <motion.div whileHover={{ y: -6 }} className="glass p-5 sm:p-6">{render(it)}</motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="Industry internships and real-world applied AI engineering.">
      <Timeline
        items={experience}
        icon={Briefcase}
        render={(e) => (
          <>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{e.role}</h3>
                {e.type && (
                  <span className="pill mt-1 inline-block text-xs font-semibold">
                    {e.type}
                  </span>
                )}
              </div>
              <span className="pill text-xs font-bold">{e.period}</span>
            </div>
            <p className="mt-2 font-bold text-violet1">{e.company}</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" /> {e.location}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            {(e.certificate || e.offerLetter) && (
              <div className="mt-4 flex flex-wrap gap-2.5 border-t border-slate-200/60 pt-3 dark:border-slate-700/60">
                {e.certificate && (
                  <a
                    href={e.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glass !px-3.5 !py-1.5 text-xs font-semibold hover:text-cyan1"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> View Certificate
                  </a>
                )}
                {e.offerLetter && (
                  <a
                    href={e.offerLetter}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glass !px-3.5 !py-1.5 text-xs font-semibold hover:text-cyan1"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> View Offer Letter
                  </a>
                )}
              </div>
            )}
          </>
        )}
      />
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline
        items={education}
        icon={GraduationCap}
        render={(e) => (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-bold">{e.degree}</h3>
              <span className="pill">{e.score}</span>
            </div>
            <p className="mt-1 font-semibold text-violet1">{e.school}</p>
            <p className="text-sm text-slate-500">{e.period}</p>
            {e.note && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{e.note}</p>}
          </>
        )}
      />
    </Section>
  );
}
