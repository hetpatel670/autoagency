import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onNavigateToAssessment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateToAssessment }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-brand-dark text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
          <span>OUR PHILOSOPHY</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans px-2">
          Automation That Works With Your Business.
        </h2>

        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto px-2">
          Every business has different systems, processes, people, and constraints. Our approach starts by understanding how work actually gets done. From there, we identify opportunities, design the right solution, and build automation that fits into the way your organization operates.
        </p>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
          <button
            onClick={onNavigateToAssessment}
            className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 sm:py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-sm sm:text-base shadow-glow-cyan hover:bg-white active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Talk to an Automation Expert</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
