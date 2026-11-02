import { createContext, useCallback, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { PHONE_B64 } from "../data";

/* ---------- Toast ---------- */
const ToastCtx = createContext(() => {});
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const show = useCallback((message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 2600);
  }, []);
  return (
    <ToastCtx.Provider value={show}>
      {children}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-[100] -translate-x-1/2">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass pointer-events-auto flex items-center gap-2 px-4 py-3 text-sm font-medium"
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  );
}

/* ---------- Section wrapper with fade-in-up ---------- */
export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="section-title">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ---------- Card with entrance + hover lift ---------- */
export function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className={`glass p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Phone: decoded only on click, never rendered ---------- */
export function callMe() {
  try {
    window.location.href = "tel:" + atob(PHONE_B64);
  } catch {
    /* ignore */
  }
}
