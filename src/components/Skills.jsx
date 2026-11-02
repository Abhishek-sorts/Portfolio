import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  ScanEye,
  Boxes,
  Wrench,
  TrendingUp,
  Network,
  Cpu,
  Layers,
  Sparkles,
  Bot,
  CheckCircle2,
  Workflow,
  Scan,
  Target,
  Smartphone,
  Binary,
  Flame,
  FileSpreadsheet,
  BarChart3,
  GitBranch,
  Server,
  Layout,
  Box,
  Terminal,
} from "lucide-react";
import { skillGroups } from "../data";
import { Card } from "./ui";

const categoryIcons = {
  Code2,
  Brain,
  ScanEye,
  Boxes,
  Wrench,
};

const skillIcons = {
  TrendingUp,
  Network,
  Cpu,
  Layers,
  Sparkles,
  Bot,
  CheckCircle2,
  Workflow,
  Scan,
  Target,
  Smartphone,
  Binary,
  Flame,
  FileSpreadsheet,
  BarChart3,
  GitBranch,
  Server,
  Layout,
  Box,
  Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="gradient-text">Skills &amp; Expertise</span>
          </h2>
          <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-brand-gradient" />
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Tools, languages, and frameworks empowering my AI and engineering work.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const CatIcon = categoryIcons[g.icon] || Code2;
            return (
              <Card key={g.title} delay={i * 0.07} className="flex flex-col justify-start !p-6 sm:!p-7">
                {/* Card Header */}
                <div className="mb-6 flex items-center gap-3.5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-md shadow-violet1/20">
                    <CatIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{g.title}</h3>
                    {g.subtitle && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">{g.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Bars if available */}
                {g.bars && (
                  <div className="space-y-4">
                    {g.bars.map((b) => (
                      <div key={b.name}>
                        <div className="mb-1.5 flex justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{b.name}</span>
                          <span className="font-bold text-violet1 dark:text-violet-300">{b.level}%</span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700/80">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${b.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-violet1 via-purple1 to-cyan1"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Vertical One-by-One List */}
                {g.items && (
                  <div className="flex flex-col gap-2.5">
                    {g.items.map((item) => {
                      const ItemIcon = skillIcons[item.icon] || CheckCircle2;
                      return (
                        <motion.div
                          key={item.name}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2.5 text-xs font-semibold backdrop-blur transition hover:border-violet1/60 hover:bg-white/90 dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-violet1/60 dark:hover:bg-slate-800/80 sm:text-sm"
                        >
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet1/10 text-violet1 dark:bg-violet1/20 dark:text-violet-300">
                            <ItemIcon className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-slate-800 dark:text-slate-200">{item.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

