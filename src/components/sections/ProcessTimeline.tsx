import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  BarChart, 
  Compass, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface ProcessTimelineProps {
  onNavigateToAssessment: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onNavigateToAssessment }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      subtitle: 'Build workflows, applications, bots, and AI.',
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
      subtitle: 'Validate reliability, exceptions, and requirements.',
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

  const isFirstRender = useRef(true);

  // Auto-scroll active tab into view horizontally on mobile/tablet without scrolling the window
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.children[activeStage] as HTMLElement;
      if (activeEl) {
        const container = scrollContainerRef.current;
        const targetScrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [activeStage]);

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-brand-surface text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-indigo/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>DELIVERY METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans px-2">
            From Process to Production.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            A structured, low-risk approach to transforming complex manual work into bulletproof automated operations.
          </p>
        </div>

        {/* Step Progress Bar for Mobile/Tablet */}
        <div className="mb-4 sm:mb-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2 px-1">
            <span className="text-brand-accent font-bold">Phase {activeStage + 1} of 7</span>
            <span>{stages[activeStage].title}</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-accent to-brand-indigo transition-all duration-300 rounded-full"
              style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Horizontal Scrollable Timeline Navigation (Mobile, Tablet, Desktop) */}
        <div 
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-7 gap-2 sm:gap-3 mb-6 sm:mb-10 overflow-x-auto pb-3 pt-1 px-1 -mx-4 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory"
        >
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isActive = activeStage === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`flex-shrink-0 min-w-[130px] sm:min-w-[140px] lg:min-w-0 p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 relative snap-center cursor-pointer min-h-[48px] ${
                  isActive 
                    ? 'bg-[#111728] border-brand-accent shadow-glow-cyan scale-102 sm:scale-105 z-10' 
                    : 'glass-panel-dark border-white/10 hover:border-white/20 hover:bg-white/5 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
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

        {/* Selected Stage Detail Card */}
        <div className="glass-panel-dark p-5 sm:p-8 md:p-12 rounded-3xl border border-brand-accent/30 shadow-2xl max-w-4xl mx-auto">
          {(() => {
            const current = stages[activeStage];
            const Icon = current.icon;
            return (
              <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
                
                {/* Header inside detail */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-accent text-slate-950 flex items-center justify-center font-extrabold text-lg sm:text-xl shadow-glow-cyan shrink-0">
                      {current.step}
                    </div>
                    <div className="text-left">
                      <div className="text-xl sm:text-2xl font-extrabold text-white font-sans">{current.title}</div>
                      <div className="text-xs sm:text-base text-brand-accent font-medium font-sans leading-snug">{current.subtitle}</div>
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-brand-accent self-end sm:self-center shrink-0">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Key deliverables */}
                <div className="space-y-3 sm:space-y-4 text-left">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                    Key Deliverables & Actions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {current.deliverables.map((del, didx) => (
                      <div key={didx} className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile / Touch Friendly Phase Switchers */}
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/10 text-xs sm:text-sm font-mono gap-2">
                  <button
                    disabled={activeStage === 0}
                    onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                    className="min-h-[44px] px-3.5 sm:px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden xs:inline">Previous</span>
                  </button>

                  {/* Stage Dots for Quick Tap */}
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    {stages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveStage(dotIdx)}
                        aria-label={`Go to stage ${dotIdx + 1}`}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all cursor-pointer ${
                          activeStage === dotIdx 
                            ? 'bg-brand-accent scale-125 shadow-glow-cyan' 
                            : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    disabled={activeStage === stages.length - 1}
                    onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                    className="min-h-[44px] px-3.5 sm:px-5 py-2.5 rounded-xl bg-brand-accent text-slate-950 font-bold hover:bg-white active:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span className="hidden xs:inline">Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })()}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <button
            onClick={onNavigateToAssessment}
            className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 sm:py-4 rounded-xl bg-brand-accent text-slate-950 font-bold text-sm sm:text-base shadow-glow-cyan hover:bg-white active:scale-98 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Your Process Assessment</span>
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
