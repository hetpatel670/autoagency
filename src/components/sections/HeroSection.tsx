import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, CheckCircle, MessageCircle } from 'lucide-react';
import { HeroNetworkCanvas } from '../visual/HeroNetworkCanvas';

interface HeroSectionProps {
  onNavigateToAssessment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToAssessment }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-dark">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-brand-accent/15 via-brand-indigo/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Pill Label */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-panel-dark border border-brand-accent/30 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold font-mono tracking-wider text-brand-accent uppercase">
                INTELLIGENT BUSINESS PROCESS AUTOMATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-sans">
              Turn Repetitive Work Into{' '}
              <span className="bg-gradient-to-r from-brand-accent via-sky-300 to-brand-indigo bg-clip-text text-transparent block sm:inline">
                Intelligent Automation.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              We transform repetitive business processes into intelligent workflows, applications, RPA automations, and AI-powered solutions—so your team can spend less time on routine work and more time creating value.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onNavigateToAssessment}
                className="w-full sm:w-auto min-h-[50px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-sm sm:text-base shadow-glow-cyan hover:bg-opacity-95 hover:shadow-cyan-400/50 transition-all flex items-center justify-center gap-2.5 group active:scale-95 cursor-pointer"
              >
                <span>Tell Us What You Want to Automate</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto min-h-[50px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl glass-panel-dark border border-white/15 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Explore Solutions</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              </a>
            </div>

            {/* Micro-copy below CTAs */}
            <div className="pt-1 text-xs sm:text-sm text-slate-400 font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
              <span>Automate workflows. Connect systems. Empower people.</span>
            </div>

            {/* Technology Strip */}
            <div className="pt-5 sm:pt-6 border-t border-white/10">
              <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest mb-2.5 sm:mb-3">
                Core Automation Stack & Platforms
              </div>
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs font-mono text-slate-300 font-semibold tracking-wider">
                <span className="text-brand-accent">POWER PLATFORM</span>
                <span className="text-slate-600">·</span>
                <span>RPA</span>
                <span className="text-slate-600">·</span>
                <span className="text-brand-indigo">AI AGENTS</span>
                <span className="text-slate-600">·</span>
                <span>WORKFLOWS</span>
                <span className="text-slate-600">·</span>
                <span>INTEGRATIONS</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Component */}
          <div className="lg:col-span-5 flex items-center justify-center pt-4 lg:pt-0">
            <HeroNetworkCanvas />
          </div>

        </div>
      </div>

    </section>
  );
};
