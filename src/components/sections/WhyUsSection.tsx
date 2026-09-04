import React from 'react';
import { Target, Layers, Workflow, CheckCircle } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const differentiators = [
    {
      title: 'Outcome First',
      badge: 'BUSINESS VALUE FOCUS',
      description: "We focus on measurable business improvements rather than technology for technology's sake.",
      icon: Target,
      bullets: [
        'Prioritize processes by ROI & effort',
        'Measure hours saved and error reduction',
        'Align directly with executive KPIs'
      ]
    },
    {
      title: 'Technology Agnostic',
      badge: 'UNBIASED ARCHITECTURE',
      description: 'We select the right combination of Power Platform, RPA, AI, APIs, and business systems for the problem.',
      icon: Layers,
      bullets: [
        'No vendor lock-in bias',
        'Hybrid cloud & desktop integration',
        'Leverage your existing software investments'
      ]
    },
    {
      title: 'Built for Real Operations',
      badge: 'PRODUCTION RESILIENCE',
      description: 'We design automation around actual workflows, exceptions, people, systems, and business requirements.',
      icon: Workflow,
      bullets: [
        'Robust edge-case & exception routing',
        'Human-in-the-loop fallback mechanisms',
        '99.9% bot reliability & audit logging'
      ]
    }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            OUR STRATEGIC DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            We Start With the Process. Not the Technology.
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Most vendors sell software licenses. We engineer practical process transformations that deliver permanent operational freedom.
          </p>
        </div>

        {/* Distinctive Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel-dark p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-sans">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-6 border-t border-white/10">
                  {item.bullets.map((b, bidx) => (
                    <div key={bidx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
