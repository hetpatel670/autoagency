import React from 'react';
import { 
  HelpCircle, 
  Search, 
  Compass, 
  Cpu, 
  CheckCircle2, 
  ArrowDown, 
  Layers, 
  Workflow, 
  Bot, 
  Code2, 
  Database 
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const techStack = [
    { name: 'Power Apps', icon: Layers },
    { name: 'Power Automate', icon: Workflow },
    { name: 'UiPath / RPA', icon: Cpu },
    { name: 'Agentic AI', icon: Bot },
    { name: 'Copilot Studio', icon: HelpCircle },
    { name: 'APIs & Webhooks', icon: Code2 },
    { name: 'Business Systems', icon: Database }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-indigo/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            TECHNOLOGY WITHOUT COMPLEXITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            You Don't Need to Know Which Technology You Need.
          </h2>
          <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent font-sans">
            "Just tell us what isn't working."
          </div>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            You don't need to decide between Power Automate, Power Apps, UiPath, or AI. We first understand the process, then determine the right technology—or combination of technologies—to solve it.
          </p>
        </div>

        {/* Clean Architectural Flow Graphic */}
        <div className="max-w-4xl mx-auto glass-panel-dark p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          
          <div className="space-y-8 relative">
            
            {/* Step 1: Business Problem */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold text-lg">
                  01
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-slate-400 uppercase">Input</div>
                  <div className="text-lg font-bold text-white">YOUR BUSINESS PROBLEM</div>
                  <div className="text-xs text-slate-300">"This manual process takes 15 hours a week and causes errors."</div>
                </div>
              </div>
              <div className="text-xs font-mono px-3 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                Unstructured Bottleneck
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center my-2">
              <ArrowDown className="w-6 h-6 text-brand-accent animate-bounce" />
            </div>

            {/* Step 2: Process Understanding */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-lg">
                  02
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-slate-400 uppercase">Analysis</div>
                  <div className="text-lg font-bold text-white">PROCESS UNDERSTANDING & MAPPING</div>
                  <div className="text-xs text-slate-300">Deconstruct rules, data sources, exception paths, and roles.</div>
                </div>
              </div>
              <Search className="w-6 h-6 text-amber-400 shrink-0" />
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center my-2">
              <ArrowDown className="w-6 h-6 text-brand-accent animate-bounce" />
            </div>

            {/* Step 3: Automation Strategy */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-indigo/30 text-brand-indigo border border-brand-indigo/50 flex items-center justify-center font-bold text-lg">
                  03
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-slate-400 uppercase">Architecture</div>
                  <div className="text-lg font-bold text-white">AUTOMATION STRATEGY</div>
                  <div className="text-xs text-slate-300">Formulate the optimal modular technology stack combination.</div>
                </div>
              </div>
              <Compass className="w-6 h-6 text-brand-indigo shrink-0" />
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center my-2">
              <ArrowDown className="w-6 h-6 text-brand-accent animate-bounce" />
            </div>

            {/* Step 4: Multi-Technology Selection Strip */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-accent/30 space-y-4">
              <div className="text-center">
                <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">
                  Tailored Technology Orchestration
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {techStack.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white"
                    >
                      <Icon className="w-3.5 h-3.5 text-brand-accent" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center my-2">
              <ArrowDown className="w-6 h-6 text-brand-accent animate-bounce" />
            </div>

            {/* Step 5: Final Solution */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-brand-accent/20 via-brand-indigo/20 to-brand-accent/20 border-2 border-brand-accent shadow-glow-cyan gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent text-slate-950 flex items-center justify-center font-bold text-lg">
                  <CheckCircle2 className="w-7 h-7 text-slate-950" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-brand-accent uppercase tracking-wider font-bold">Outcome</div>
                  <div className="text-xl font-extrabold text-white">INTELLIGENT AUTOMATION SOLUTION</div>
                  <div className="text-xs text-slate-200">Zero manual work. Automated error-handling. Scalable execution.</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-brand-accent text-slate-950">
                PRODUCING VALUE
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
