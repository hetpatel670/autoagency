import React from 'react';
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface AboutSectionProps {
  onNavigateToAssessment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateToAssessment }) => {
  return (
    <section id="about" className="py-20 bg-brand-dark text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
          OUR PHILOSOPHY
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
          Automation That Works With Your Business.
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
          Every business has different systems, processes, people, and constraints. Our approach starts by understanding how work actually gets done. From there, we identify opportunities, design the right solution, and build automation that fits into the way your organization operates.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigateToAssessment}
            className="px-8 py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-base shadow-glow-cyan hover:bg-white transition-all flex items-center justify-center gap-2"
          >
            <span>Talk to an Automation Expert</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
