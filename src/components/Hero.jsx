import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Download, Rocket } from "lucide-react";
import { profile } from "../data";
import { callMe } from "./ui";

const badges = [
  { label: "Python", pos: "-left-4 top-6", d: 0 },
  { label: "ML / DL", pos: "-right-4 top-16", d: 0.6 },
  { label: "Computer Vision", pos: "-left-6 bottom-20", d: 1.2 },
  { label: "GenAI / RAG", pos: "-right-2 bottom-6", d: 1.8 },
];

export default function Hero() {
  const Icon = ({ href, onClick, label, children }) => (
    <motion.a
      whileHover={{ y: -4 }}
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl border border-slate-200/70 bg-white/60 backdrop-blur transition hover:text-violet1 dark:border-slate-700 dark:bg-slate-800/50"
    >
      {children}
    </motion.a>
  );

  return (
    <section id="top" className="px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="glass inline-flex items-center gap-2 !rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="h-2.5 w-2.5 animate-pulseDot rounded-full bg-green-500" />
            {profile.status}
          </span>
          <motion.h1
            animate={{
              y: [0, -10, -10, 0, 10, 10, 0],
              scale: [1, 1.015, 1.015, 1, 0.985, 0.985, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.45, 0.55, 0.75, 0.9, 1],
            }}
            className="mt-6 inline-block text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Next-Gen <span className="gradient-text inline-block">AI &amp; Computer Vision</span> Solutions
          </motion.h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Hi, I'm <b>{profile.name}</b>, an {profile.role}. {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
              <Rocket className="h-4 w-4" /> Explore Projects
            </a>
            <a href={profile.resume} download className="btn-glass">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            <Icon href={`mailto:${profile.email}`} label="Email"><Mail className="h-5 w-5" /></Icon>
            <Icon href={profile.linkedin} label="LinkedIn"><Linkedin className="h-5 w-5" /></Icon>
            <Icon href={profile.github} label="GitHub"><Github className="h-5 w-5" /></Icon>
            <Icon onClick={(e) => { e.preventDefault(); callMe(); }} href="#contact" label="Call"><Phone className="h-5 w-5" /></Icon>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-30 blur-2xl" />
          <div className="glass relative overflow-hidden p-3">
            <img src={profile.photo} alt={profile.name} className="aspect-[4/5] w-full rounded-xl object-cover object-top" />
          </div>
          {badges.map((b) => (
            <motion.div
              key={b.label}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: b.d }}
              className={`glass absolute ${b.pos} !rounded-xl px-3 py-2 text-xs font-semibold sm:text-sm`}
            >
              <span className="gradient-text">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
