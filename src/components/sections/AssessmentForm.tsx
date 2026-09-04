import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  Building, 
  Mail, 
  User, 
  Phone, 
  Clock, 
  Layers, 
  AlertCircle 
} from 'lucide-react';

export const AssessmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
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
    preferredContact: 'Email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="assessment" className="py-24 bg-brand-surface text-white relative overflow-hidden border-t border-white/10">
      
      {/* Glow effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/40 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
            <span>NO OBLIGATION ARCHITECTURE DISCOVERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Tell Us What You Want to Automate
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Fill out this process assessment so our automation architects can evaluate feasibility and prepare initial recommendations.
          </p>
        </div>

        {/* Form Container / Submitted State */}
        <div className="glass-panel-dark p-8 sm:p-12 rounded-3xl border border-brand-accent/30 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-brand-accent/20 border-2 border-brand-accent text-brand-accent flex items-center justify-center mx-auto shadow-glow-cyan">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-extrabold text-white font-sans">
                Assessment Request Received!
              </h3>
              <p className="text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our Intelligent Automation team is analyzing your process requirements for <strong className="text-brand-accent">{formData.company}</strong>.
              </p>

              {/* Assessment Summary Breakdown */}
              <div className="max-w-xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10 text-left space-y-3 font-mono text-xs text-slate-300">
                <div className="text-brand-accent font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>INITIAL DIAGNOSTIC SUMMARY</span>
                </div>
                <div><span className="text-slate-500">Target Process:</span> {formData.processToAutomate || 'Not specified'}</div>
                <div><span className="text-slate-500">Involved Systems:</span> {formData.systemsInvolved || 'Not specified'}</div>
                <div><span className="text-slate-500">Volume & Challenge:</span> {formData.processVolume} — {formData.biggestChallenge}</div>
                <div><span className="text-slate-500">Contact Method:</span> {formData.preferredContact} ({formData.email})</div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl border border-white/20 text-xs font-mono text-slate-300 hover:text-white hover:border-white/40"
              >
                Submit another process assessment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              
              {/* Section 1: Contact Info */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-brand-accent uppercase tracking-widest font-bold">
                  01. Contact Information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Enterprise Corp"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
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
                      placeholder="VP of Operations / Director of Finance"
                      value={formData.jobTitle}
                      onChange={e => setFormData({...formData, jobTitle: e.target.value})}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Process Discovery Details */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-brand-accent uppercase tracking-widest font-bold">
                  02. Process Assessment Details
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
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
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
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
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
                      placeholder="e.g. Outlook, Excel, SAP, Salesforce, Custom Web Portal"
                      value={formData.systemsInvolved}
                      onChange={e => setFormData({...formData, systemsInvolved: e.target.value})}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Approximate Process Volume *
                    </label>
                    <select
                      value={formData.processVolume}
                      onChange={e => setFormData({...formData, processVolume: e.target.value})}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                    >
                      <option value="1 - 10 per week">1 - 10 per week</option>
                      <option value="10 - 50 per week">10 - 50 per week</option>
                      <option value="50 - 200 per week">50 - 200 per week</option>
                      <option value="200+ per week (High Volume)">200+ per week (High Volume)</option>
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
                      placeholder="e.g. Too much manual time, data entry errors, slow turnaround"
                      value={formData.biggestChallenge}
                      onChange={e => setFormData({...formData, biggestChallenge: e.target.value})}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Contact Method
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={e => setFormData({...formData, preferredContact: e.target.value})}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                    >
                      <option value="Email">Email</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Virtual Meeting">Virtual Meeting</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-base shadow-glow-cyan hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5 text-slate-950" />
                  <span>Request Automation Assessment →</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
