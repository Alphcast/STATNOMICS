import { useState } from 'react';
import { services } from '../data/services';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const waBase = 'https://wa.me/2347037994509?text=';

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message too short (min 10 characters)';
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    const msg = `Hello STATNOMICS, I need help with my project.%0A%0AName: ${form.name}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`${waBase}${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-8 max-w-xl">
        <div className="text-center mb-10">
          <div className="section-label justify-center fade-up">Start a Project</div>
          <h2 className="section-title fade-up text-center">Let's Work Together</h2>
          <p className="text-white/50 text-base max-w-md mx-auto mt-4 fade-up">
            Tell us what you need and we'll get back to you within minutes via WhatsApp.
          </p>
        </div>

        <div className="glass p-6 md:p-8 rounded-2xl fade-up">
          {sent && (
            <div className="bg-emerald-500/15 border border-emerald-500/30 rounded-xl px-4 py-3 mb-6 text-emerald-400 text-sm flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Message sent! We'll be in touch on WhatsApp shortly.
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white/40 text-xs mb-1.5 font-medium">Full Name *</label>
              <input
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                           focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all
                           placeholder:text-white/20"
                value={form.name}
                onChange={e => updateField('name', e.target.value)}
                placeholder="Amara Okafor"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-white/40 text-xs mb-1.5 font-medium">Email Address *</label>
              <input
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                           focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all
                           placeholder:text-white/20"
                type="email"
                value={form.email}
                onChange={e => updateField('email', e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white/40 text-xs mb-1.5 font-medium">Service Needed *</label>
            <select
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                         focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
              value={form.service}
              onChange={e => updateField('service', e.target.value)}
            >
              <option value="" className="bg-[#1a1040]">Select a service…</option>
              {services.map(s => (
                <option key={s.title} value={s.title} className="bg-[#1a1040]">{s.icon} {s.title}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-white/40 text-xs mb-1.5 font-medium">Your Message *</label>
            <textarea
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                         focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all
                         placeholder:text-white/20 resize-y"
              rows={5}
              value={form.message}
              onChange={e => updateField('message', e.target.value)}
              placeholder="Describe your project, deadline, and any specific requirements…"
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button onClick={submit} className="btn-primary w-full justify-center text-base py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send via WhatsApp
          </button>

          <p className="text-white/20 text-xs text-center mt-4">
            By submitting, you agree to our privacy policy. Your information stays confidential.
          </p>
        </div>
      </div>
    </section>
  );
}
