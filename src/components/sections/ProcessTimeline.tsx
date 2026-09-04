import React, { useState } from 'react';
import { 
  Search, 
  BarChart, 
  Compass, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';

interface ProcessTimelineProps {
  onNavigateToAssessment: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onNavigateToAssessment }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the process.',
      icon: Search,
      deliverables: [
        'Stakeholder interviews & step-by-step observation',
        'System & data input mapping',
        'Initial feasibility & scope definition'
      ]
    },
    {
      step: '02',
      title: 'ANALYZE',
      subtitle: 'Identify bottlenecks and automation opportunities.',
      icon: BarChart,
      deliverables: [
        'Time & cost drain quantification',
        'Exception path identification',
        'Process optimization recommendations'
      ]
    },
    {
      step: '03',
      title: 'DESIGN',
      subtitle: 'Create the right automation architecture.',
      icon: Compass,
      deliverables: [
        'Technology stack selection (Power Apps, RPA, AI)',
        'Security, role & permission specification',
        'Detailed workflow blueprinting'
      ]
    },
    {
      step: '04',
      title: 'DEVELOP',
      subtitle: 'Build workflows, applications, bots, integrations, and AI.',
      icon: Code2,
      deliverables: [
        'Low-code app & cloud flow construction',
        'UiPath bot & API connector integration',
        'Agentic AI prompts & safety guardrails'
      ]
    },
    {
      step: '05',
      title: 'TEST',
      subtitle: 'Validate reliability, exceptions, and business requirements.',
      icon: CheckCircle2,
      deliverables: [
        'Edge-case & failure simulation testing',
        'User acceptance testing (UAT)',
        'Security & compliance validation'
      ]
    },
    {
      step: '06',
      title: 'DEPLOY',
      subtitle: 'Move the solution into production.',
      icon: Rocket,
      deliverables: [
        'Managed production rollout',
        'User training & documentation',
        'Supervised initial live execution'
      ]
    },
    {
      step: '07',
      title: 'OPTIMIZE',
      subtitle: 'Monitor, improve, and scale.',
      icon: TrendingUp,
      deliverables: [
        'Continuous execution monitoring',
        'Proactive exception handling',
        'Iterative feature enhancements'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-surface text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-indigo/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            DELIVERY METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            From Process to Production.
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            A structured, low-risk approach to transforming complex manual work into bulletproof automated operations.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Navigation */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-10">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isActive = activeStage === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isActive 
                    ? 'bg-[#111728] border-brand-accent shadow-glow-cyan scale-105 z-10' 
                    : 'glass-panel-dark border-white/10 hover:border-white/20 hover:bg-white/5 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-brand-accent' : 'text-slate-500'}`}>
                    {stg.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-accent' : 'text-slate-400'}`} />
                </div>
                <div className="text-xs font-extrabold text-white font-mono tracking-wider truncate">
                  {stg.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Display */}
        <div className="glass-panel-dark p-8 sm:p-12 rounded-3xl border border-brand-accent/30 shadow-2xl max-w-4xl mx-auto">
          {(() => {
            const current = stages[activeStage];
            const Icon = current.icon;
            return (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-brand-accent text-slate-950 flex items-center justify-center font-extrabold text-xl shadow-glow-cyan">
                      {current.step}
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-extrabold text-white font-sans">{current.title}</div>
                      <div className="text-base text-brand-accent font-medium font-sans">{current.subtitle}</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-accent">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Key Deliverables & Actions</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {current.deliverables.map((del, didx) => (
                      <div key={didx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 text-xs font-mono">
                  <button
                    disabled={activeStage === 0}
                    onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white"
                  >
                    ← Previous Phase
                  </button>

                  <span className="text-slate-400">Phase {activeStage + 1} of 7</span>

                  <button
                    disabled={activeStage === stages.length - 1}
                    onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-lg bg-brand-accent text-slate-950 font-bold disabled:opacity-30"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
};
