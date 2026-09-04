import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, CheckCircle } from 'lucide-react';
import { HeroNetworkCanvas } from '../visual/HeroNetworkCanvas';

interface HeroSectionProps {
  onNavigateToAssessment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToAssessment }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-dark">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-brand-accent/15 via-brand-indigo/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Small Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-dark border border-brand-accent/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
              <span className="text-xs font-bold font-mono tracking-wider text-brand-accent uppercase">
                INTELLIGENT BUSINESS PROCESS AUTOMATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1 font-sans">
              Turn Repetitive Work Into{' '}
              <span className="bg-gradient-to-r from-brand-accent via-sky-300 to-brand-indigo bg-clip-text text-transparent">
                Intelligent Automation.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              We transform repetitive business processes into intelligent workflows, applications, RPA automations, and AI-powered solutions—so your team can spend less time on routine work and more time creating value.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onNavigateToAssessment}
                className="px-7 py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-base shadow-glow-cyan hover:bg-opacity-95 hover:shadow-cyan-400/50 transition-all flex items-center justify-center gap-3 group active:scale-95"
              >
                <span>Tell Us What You Want to Automate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-7 py-4 rounded-xl glass-panel-dark border border-white/15 text-white font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Our Solutions</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            </div>

            {/* Micro-copy below CTAs */}
            <div className="pt-2 text-sm text-slate-400 font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
              <span>Automate workflows. Connect systems. Empower people.</span>
            </div>

            {/* Technology Strip */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                Core Automation Stack & Platforms
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300 font-semibold tracking-wider">
                <span className="text-brand-accent">POWER PLATFORM</span>
                <span className="text-slate-600">·</span>
                <span>RPA</span>
                <span className="text-slate-600">·</span>
                <span className="text-brand-indigo">AI AGENTS</span>
                <span className="text-slate-600">·</span>
                <span>WORKFLOW AUTOMATION</span>
                <span className="text-slate-600">·</span>
                <span>INTEGRATIONS</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Component */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroNetworkCanvas />
          </div>

        </div>
      </div>

    </section>
  );
};
