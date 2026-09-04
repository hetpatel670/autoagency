import React from 'react';
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTASectionProps {
  onNavigateToAssessment: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigateToAssessment }) => {
  return (
    <section className="py-24 bg-[#05070C] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background glow and network grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-accent/20 via-brand-indigo/20 to-brand-violet/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-dark border border-brand-accent/40 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider shadow-glow-cyan">
          <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
          <span>TAKE THE FIRST STEP</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans">
          What Would You Automate First?
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
          Tell us about the repetitive process slowing your team down. We'll help you determine whether it can be automated and what the right solution could look like.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onNavigateToAssessment}
            className="px-8 py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-base shadow-glow-cyan hover:bg-white transition-all flex items-center justify-center gap-3 group"
          >
            <span>Tell Us What You Want to Automate</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onNavigateToAssessment}
            className="px-8 py-4 rounded-xl glass-panel-dark border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-brand-accent" />
            <span>Book a Consultation</span>
          </button>
        </div>

        {/* Small line */}
        <div className="pt-2 text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-brand-accent" />
          <span>No technical knowledge required. Start with the problem.</span>
        </div>

      </div>
    </section>
  );
};
