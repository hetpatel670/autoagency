import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  FileText, 
  Building, 
  Mail, 
  User, 
  Phone,
  MessageCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export const AssessmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    jobTitle: '',
    phone: '',
    processToAutomate: '',
    currentWorkflow: '',
    systemsInvolved: '',
    processVolume: '10 - 50 per week',
    biggestChallenge: 'Manual data entry errors & slow turnaround',
    preferredContact: 'WhatsApp'
  });

  const generateWhatsappMessage = (data: typeof formData) => {
    return `*⚡ AUTOMATION ASSESSMENT REQUEST*\n\n` +
      `👤 *Full Name:* ${data.name || 'Not provided'}\n` +
      `🏢 *Company:* ${data.company || 'Not provided'}\n` +
      `💼 *Job Title:* ${data.jobTitle || 'Not provided'}\n` +
      `📧 *Work Email:* ${data.email || 'Not provided'}\n` +
      `📱 *Phone:* ${data.phone || 'Not provided'}\n\n` +
      `🎯 *Target Process:* ${data.processToAutomate || 'Not provided'}\n` +
      `🔄 *Current Workflow:* ${data.currentWorkflow || 'Not provided'}\n` +
      `💻 *Systems Involved:* ${data.systemsInvolved || 'Not provided'}\n` +
      `📊 *Process Volume:* ${data.processVolume}\n` +
      `⚠️ *Biggest Challenge:* ${data.biggestChallenge}\n` +
      `📞 *Preferred Contact:* ${data.preferredContact}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawMessage = generateWhatsappMessage(formData);
    const targetUrl = `https://wa.me/917904160452?text=${encodeURIComponent(rawMessage)}`;
    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Trigger WhatsApp redirect
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // fallback in case popup blocker is active
    }
  };

  return (
    <section id="assessment" className="py-16 sm:py-24 bg-brand-surface text-white relative overflow-hidden border-t border-white/10">
      
      {/* Glow effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-dark border border-brand-accent/40 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
            <span>NO OBLIGATION ARCHITECTURE DISCOVERY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans px-2">
            Tell Us What You Want to Automate
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            Fill out this process assessment so our automation architects can evaluate feasibility and prepare tailored recommendations.
          </p>
        </div>

        {/* Form Container / Submitted State */}
        <div className="glass-panel-dark p-5 sm:p-8 md:p-12 rounded-3xl border border-brand-accent/30 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-6 sm:py-10 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-accent/20 border-2 border-brand-accent text-brand-accent flex items-center justify-center mx-auto shadow-glow-cyan">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  Assessment Request Ready!
                </h3>
                <p className="text-slate-300 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your request is formatted and ready to connect with our Intelligent Automation architects on WhatsApp (+91 79041 60452).
                </p>
              </div>

              {/* Prominent WhatsApp CTA button */}
              <div className="max-w-md mx-auto pt-2 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[52px] py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  <span>Send via WhatsApp (+91 79041 60452)</span>
                  <ExternalLink className="w-4 h-4 text-slate-950/80 ml-1" />
                </a>

                <p className="text-[11px] text-slate-400 font-mono">
                  If WhatsApp did not open automatically, click the button above.
                </p>
              </div>

              {/* Assessment Summary Breakdown */}
              <div className="max-w-xl mx-auto bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 text-left space-y-2.5 font-mono text-xs text-slate-300 mt-6">
                <div className="text-brand-accent font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>INITIAL DIAGNOSTIC SUMMARY</span>
                </div>
                <div className="truncate"><span className="text-slate-500">Target Process:</span> {formData.processToAutomate || 'Not specified'}</div>
                <div className="truncate"><span className="text-slate-500">Involved Systems:</span> {formData.systemsInvolved || 'Not specified'}</div>
                <div><span className="text-slate-500">Volume & Challenge:</span> {formData.processVolume} — {formData.biggestChallenge}</div>
                <div><span className="text-slate-500">Company / Contact:</span> {formData.company} ({formData.preferredContact})</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 min-h-[44px] rounded-xl border border-white/20 text-xs font-mono text-slate-300 hover:text-white hover:border-white/40 active:scale-95 transition-all"
                >
                  ← Edit or submit another assessment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 text-left">
              
              {/* WhatsApp notification badge */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <MessageCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Instant dispatch: Your assessment will be sent directly to our team via WhatsApp (<strong>+91 79041 60452</strong>).</span>
              </div>

              {/* Section 1: Contact Info */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-brand-accent uppercase tracking-widest font-bold flex items-center gap-2">
                  <span>01</span>
                  <span className="text-slate-500">/</span>
                  <span>Contact Information</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Enterprise Corp"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VP Operations / Director of Finance"
                      value={formData.jobTitle}
                      onChange={e => setFormData({...formData, jobTitle: e.target.value})}
                      className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000 or +91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Process Discovery Details */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-brand-accent uppercase tracking-widest font-bold flex items-center gap-2">
                  <span>02</span>
                  <span className="text-slate-500">/</span>
                  <span>Process Assessment Details</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    What process would you like to automate? *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Accounts Payable Invoice Matching & ERP Entry"
                    value={formData.processToAutomate}
                    onChange={e => setFormData({...formData, processToAutomate: e.target.value})}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    How does the process work today? *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe step-by-step how your staff currently performs this task..."
                    value={formData.currentWorkflow}
                    onChange={e => setFormData({...formData, currentWorkflow: e.target.value})}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Which systems are involved? *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Outlook, Excel, SAP, Salesforce, Portal"
                      value={formData.systemsInvolved}
                      onChange={e => setFormData({...formData, systemsInvolved: e.target.value})}
                      className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Approximate Process Volume *
                    </label>
                    <select
                      value={formData.processVolume}
                      onChange={e => setFormData({...formData, processVolume: e.target.value})}
                      className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    >
                      <option value="1 - 10 per week" className="bg-[#0B101D] text-white">1 - 10 per week</option>
                      <option value="10 - 50 per week" className="bg-[#0B101D] text-white">10 - 50 per week</option>
                      <option value="50 - 200 per week" className="bg-[#0B101D] text-white">50 - 200 per week</option>
                      <option value="200+ per week (High Volume)" className="bg-[#0B101D] text-white">200+ per week (High Volume)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Biggest Challenge *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Too much manual time, data entry errors"
                      value={formData.biggestChallenge}
                      onChange={e => setFormData({...formData, biggestChallenge: e.target.value})}
                      className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Contact Channel
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={e => setFormData({...formData, preferredContact: e.target.value})}
                      className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    >
                      <option value="WhatsApp" className="bg-[#0B101D] text-white">WhatsApp (+91 79041 60452)</option>
                      <option value="Email" className="bg-[#0B101D] text-white">Email</option>
                      <option value="Phone Call" className="bg-[#0B101D] text-white">Phone Call</option>
                      <option value="Virtual Meeting" className="bg-[#0B101D] text-white">Virtual Video Meeting</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[52px] py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-accent via-sky-400 to-brand-accent text-slate-950 font-extrabold text-sm sm:text-base shadow-glow-cyan hover:shadow-cyan-400/50 hover:bg-white active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  <span>Send Assessment to WhatsApp →</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 font-mono mt-2.5">
                  Direct connection with our lead architect • Response within 24 hours
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
