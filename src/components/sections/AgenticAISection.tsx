import React from 'react';
import { AgenticAIGraphic } from '../visual/AgenticAIGraphic';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';

interface AgenticAISectionProps {
  onNavigateToAssessment: () => void;
}

export const AgenticAISection: React.FC<AgenticAISectionProps> = ({ onNavigateToAssessment }) => {
  return (
    <section id="agentic-ai" className="py-24 bg-[#05070C] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Immersive glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-brand-accent/15 via-brand-indigo/15 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-dark border border-brand-accent/40 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider shadow-glow-cyan">
            <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
            <span>THE NEXT LAYER OF AUTOMATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans">
            Automation That Can{' '}
            <span className="bg-gradient-to-r from-brand-accent via-sky-300 to-brand-indigo bg-clip-text text-transparent">
              Understand.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Traditional automation follows predefined rules. Agentic AI can interpret requests, understand context, access knowledge, determine appropriate next steps, and trigger actions within defined objectives and controls.
          </p>
        </div>

        {/* Visual Component */}
        <AgenticAIGraphic />

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateToAssessment}
            className="px-8 py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-base shadow-glow-cyan hover:bg-white transition-all inline-flex items-center gap-3"
          >
            <span>Explore Agentic AI for Your Workflows</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
