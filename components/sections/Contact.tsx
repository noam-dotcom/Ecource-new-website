"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    interest: "",
    message: "",
  });

  const { t } = useLanguage();
  const c = t.contact;
  const f = c.form;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast({ title: f.successTitle, description: f.successDescription });
      setForm({ name: "", email: "", company: "", role: "", phone: "", interest: "", message: "" });
    } catch {
      toast({ title: f.errorTitle, description: f.errorDescription, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="parallax-bg py-28 px-6 relative bg-navy-900"
      style={{
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              {c.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              {"Let's "}
              <span className="relative inline-block">
                <span className="text-white/70">B</span>
                <span className="absolute inset-0 flex items-center justify-center gold-gradient font-black">$</span>
              </span>
              {"uild the"}
              <br />
              <span className="gold-gradient">{c.headline2}</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">{c.description}</p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <Mail size={16} className="text-gold-400" />
                </div>
                <span>investors@ecource.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <MapPin size={16} className="text-gold-400" />
                </div>
                <span>{c.location}</span>
              </div>
            </div>

            <div className="mt-10 bg-gold-500/5 border border-gold-500/20 rounded-xl p-5">
              <p className="text-white/70 text-sm leading-relaxed">
                <strong className="text-gold-400">{c.confidentialityLabel}</strong>{" "}
                {c.confidentialityNote}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-navy-800/60 border border-white/10 rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/50 mb-1.5 block font-medium uppercase tracking-wider">
                  {f.nameLabel} *
                </label>
                <Input name="name" required value={form.name} onChange={handleChange} placeholder={f.namePlaceholder} />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1.5 block font-medium uppercase tracking-wider">
                  {f.emailLabel} *
                </label>
                <Input name="email" type="email" required value={form.email} onChange={handleChange} placeholder={f.emailPlaceholder} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/50 mb-1.5 block font-medium uppercase tracking-wider">
                  {f.companyLabel}
                </label>
                <Input name="company" value={form.company} onChange={handleChange} placeholder={f.companyPlaceholder} />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1.5 block font-medium uppercase tracking-wider">
                  {f.roleLabel}
                </label>
                <Input name="role" value={form.role} onChange={handleChange} placeholder={f.rolePlaceholder} />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/50 mb-1.5 block font-medium uppercase tracking-wider">
                {f.interestLabel}
              </label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="flex h-11 w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
              >
                <option value="" className="bg-navy-800">{f.interestDefault}</option>
                {f.interestOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-navy-800">{o.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-white/50 mb-1.5 block font-medium uppercase tracking-wider">
                {f.messageLabel}
              </label>
              <Textarea name="message" value={form.message} onChange={handleChange} placeholder={f.messagePlaceholder} rows={4} />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? f.submittingText : (
                <>
                  <Send size={16} />
                  {f.submitText}
                </>
              )}
            </Button>

            <p className="text-center text-white/30 text-xs">{f.privacyNote}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
