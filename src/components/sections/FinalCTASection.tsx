import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTASectionProps {
  onNavigateToAssessment: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigateToAssessment }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#05070C] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background glow and network grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] bg-gradient-to-r from-brand-accent/20 via-brand-indigo/20 to-brand-accent/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-dark border border-brand-accent/40 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider shadow-glow-cyan">
          <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
          <span>TAKE THE FIRST STEP</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans px-2">
          What Would You Automate First?
        </h2>

        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto px-2">
          Tell us about the repetitive process slowing your team down. We'll help you determine whether it can be automated and what the right solution could look like.
        </p>

        {/* Dual CTAs - Responsive Full Width on Mobile */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 pt-2">
          <button
            onClick={onNavigateToAssessment}
            className="w-full sm:w-auto min-h-[50px] px-8 py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-sm sm:text-base shadow-glow-cyan hover:bg-white active:scale-98 transition-all flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>Tell Us What You Want to Automate</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/917904160452?text=Hi%2C%20I%20would%20like%20to%20book%20a%20process%20automation%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[50px] px-8 py-4 rounded-xl glass-panel-dark border border-emerald-500/40 text-emerald-400 font-semibold text-sm sm:text-base hover:bg-emerald-500/10 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp Consultation (+91 79041 60452)</span>
          </a>
        </div>

        {/* Small line */}
        <div className="pt-2 text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
          <span>No technical knowledge required. Start with the problem.</span>
        </div>

      </div>
    </section>
  );
};
