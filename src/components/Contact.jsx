import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Copy, Send, Loader2 } from "lucide-react";
import { profile } from "../data";
import { Section, Card, useToast, callMe } from "./ui";

const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const toast = useToast();
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);

  const copy = async (text, label) => {
    try { await navigator.clipboard.writeText(text); toast(`${label} copied`); }
    catch { toast("Could not copy", "error"); }
  };

  const validate = () => {
    const e = {};
    if (f.name.trim().length < 2) e.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email";
    if (f.subject.trim().length < 3) e.subject = "Add a subject";
    if (f.message.trim().length < 10) e.message = "Message needs at least 10 characters";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setBusy(true);
    try {
      if (profile.formEndpoint) {
        const r = await fetch(profile.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(f),
        });
        if (!r.ok) throw new Error("failed");
      } else {
        const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`);
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${body}`;
      }
      toast("Message ready. Thank you!");
      setF(empty);
    } catch {
      toast("Could not send. Please email me directly.", "error");
    } finally {
      setBusy(false);
    }
  };

  const field = (name, label, props = {}) => (
    <label className="block text-sm font-medium">
      {label}
      {props.area ? (
        <textarea rows={5} value={f[name]} onChange={(e) => setF({ ...f, [name]: e.target.value })} className={inputCls(err[name])} />
      ) : (
        <input type={props.type || "text"} value={f[name]} onChange={(e) => setF({ ...f, [name]: e.target.value })} className={inputCls(err[name])} />
      )}
      {err[name] && <span className="mt-1 block text-xs text-red-500">{err[name]}</span>}
    </label>
  );

  const Row = ({ icon: I, label, value, onCopy, href, onClick }) => (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/60 bg-white/40 p-3 dark:border-slate-700 dark:bg-slate-800/40">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white"><I className="h-5 w-5" /></span>
        <div className="min-w-0">
          <div className="text-xs text-slate-500">{label}</div>
          {href || onClick ? (
            <a href={href || "#contact"} onClick={onClick} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block cursor-pointer truncate text-sm font-semibold hover:text-violet1">{value}</a>
          ) : (
            <div className="truncate text-sm font-semibold">{value}</div>
          )}
        </div>
      </div>
      {onCopy && <button onClick={onCopy} aria-label={`Copy ${label}`} className="rounded-lg p-2 hover:bg-violet1/10"><Copy className="h-4 w-4" /></button>}
    </div>
  );

  return (
    <Section id="contact" title="Let's Work Together" subtitle="Open to full-time roles and internships in AI/ML and computer vision.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-3">
          <Row icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} onCopy={() => copy(profile.email, "Email")} />
          <Row icon={Linkedin} label="LinkedIn" value="linkedin.com/in/abhishek-kattimani" href={profile.linkedin} onCopy={() => copy(profile.linkedin, "LinkedIn URL")} />
          <Row icon={MapPin} label="Location" value={profile.location} onCopy={() => copy(profile.location, "Location")} />
          <Row icon={Phone} label="Phone" value="Tap to call me" onClick={(e) => { e.preventDefault(); callMe(); }} />
          <p className="px-1 text-xs text-slate-500">My number stays private. Tapping the phone link opens your dialer.</p>
        </Card>

        <Card>
          <form onSubmit={submit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {field("name", "Name")}
              {field("email", "Email", { type: "email" })}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message", { area: true })}
            <button disabled={busy} className="btn-primary w-full disabled:opacity-60">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Send Message
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

const inputCls = (bad) =>
  `mt-1 w-full rounded-xl border bg-white/70 px-3 py-2.5 text-sm outline-none transition focus:ring-2 dark:bg-slate-800/60 ${
    bad ? "border-red-400 focus:ring-red-300" : "border-slate-200 focus:ring-violet1/40 dark:border-slate-700"
  }`;
