import { motion } from "framer-motion";
import { Copy, Linkedin, MapPin, Brain, ScanEye, Sparkles, Award, Lightbulb } from "lucide-react";
import { profile } from "../data";
import { useToast } from "./ui";

const highlights = [
  {
    icon: Lightbulb,
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20 dark:text-cyan-300",
    title: "Data Problem Solver",
    text: "Translating complex datasets and business needs into clean code and predictive ML models.",
  },
  {
    icon: ScanEye,
    color: "from-violet-500 to-indigo-500",
    bg: "bg-violet-500/10 text-violet1 dark:bg-violet-500/20 dark:text-violet-300",
    title: "Edge Vision Architect",
    text: "Designing real-time YOLOv8, CNN, and segmentation models for production and edge devices.",
  },
  {
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10 text-purple1 dark:bg-purple-500/20 dark:text-purple-300",
    title: "GenAI & Agent Builder",
    text: "Architecting source-grounded RAG systems, LangChain ReAct agents, and response quality gates.",
  },
  {
    icon: Award,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20 dark:text-amber-300",
    title: "Proven Innovator",
    text: "Pitched insert classification at Venture Vibe 2.0 (investor funding interest) and showcased at SRISHTI.",
  },
];

const miniSkills = [
  { label: "Python", icon: "🐍" },
  { label: "SQL", icon: "⚡" },
  { label: "Computer Vision", icon: "👁" },
  { label: "GenAI / RAG", icon: "🤖" },
];

export default function About() {
  const toast = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast("Email copied to clipboard!");
    } catch {
      toast("Could not copy. Please copy manually: " + profile.email, "error");
    }
  };

  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-brand-gradient" />
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Analytical mindset driven by curiosity, engineering rigor, and a commitment to excellence.
          </p>
        </motion.div>

        {/* 2-Column Content */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass relative mx-auto w-full max-w-md rounded-3xl p-7 text-center shadow-xl lg:col-span-5"
          >
            {/* Circular photo with glowing gradient border */}
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full p-1.5 shadow-[0_0_30px_rgba(108,92,231,0.35)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet1 via-indigo-400 to-cyan1 animate-spin [animation-duration:8s]" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative h-full w-full rounded-full object-cover object-top"
              />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-slate-900 dark:text-white">
              {profile.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              {profile.role}
            </p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              Vijayapura, Karnataka, India
            </p>

            {/* Mini Skills badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {miniSkills.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-violet1 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio & 2x2 Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:col-span-7"
          >
            <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Pioneering data-driven intelligence with modern AI engineering.
            </h3>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              I am an <b>Electronics &amp; Communication Engineering graduate</b> with a passion for unlocking hidden insights from complex datasets and designing robust Machine Learning systems. My expertise spans the complete data science lifecycle — from exploratory data analysis and feature engineering to model deployment and visual analytics.
            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Whether it's building <b>smart edge computer vision</b> pipelines with YOLOv8 on Android, performing <b>instance segmentation</b> on biomedical chest X-rays, or crafting <b>high-impact RAG assistants and autonomous ReAct agents</b>, I thrive at the intersection of mathematical reasoning and software engineering.
            </p>

            {/* 2x2 Highlights Grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-4.5 transition"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${h.bg}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                          {h.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                          {h.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={copyEmail} className="btn-primary !px-5 !py-2.5 shadow-md">
                <Copy className="h-4 w-4" /> Copy Email
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-glass !px-5 !py-2.5"
              >
                <Linkedin className="h-4 w-4 text-violet1" /> LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

