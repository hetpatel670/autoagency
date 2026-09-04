import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Smile, 
  Maximize2, 
  Clock 
} from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  const benefits = [
    {
      title: 'Less Manual Work',
      description: 'Automate repetitive tasks and free employees from routine work.',
      icon: Clock,
      highlight: 'Eliminate Tedium'
    },
    {
      title: 'Higher Productivity',
      description: 'Process high-volume work faster and more consistently.',
      icon: TrendingUp,
      highlight: 'Continuous Output'
    },
    {
      title: 'Fewer Errors',
      description: 'Standardize rule-based processes and reduce manual data-entry mistakes.',
      icon: ShieldCheck,
      highlight: 'Guaranteed Precision'
    },
    {
      title: 'Faster Operations',
      description: 'Shorten processing and turnaround times across departments.',
      icon: Zap,
      highlight: 'Rapid Execution'
    },
    {
      title: 'Better Employee Experience',
      description: 'Let people spend more time on meaningful, higher-value work.',
      icon: Smile,
      highlight: 'Higher Engagement'
    },
    {
      title: 'Scalable Operations',
      description: 'Handle growing process volumes without relying entirely on additional manual effort.',
      icon: Maximize2,
      highlight: 'Frictionless Growth'
    }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-white/5">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-indigo/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            BUSINESS OUTCOME AS HERO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            What Happens When Routine Work Stops Taking Your Team's Time?
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Intelligent automation shifts the focus from managing manual operational overhead to creating strategic enterprise value.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel-dark p-8 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {card.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-brand-accent transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
