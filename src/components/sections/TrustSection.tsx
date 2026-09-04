import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Maximize2, 
  Lock, 
  AlertTriangle, 
  Activity 
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Process Control',
      desc: 'Enforce strict business rules, validation checkpoints, and role-based execution permission boundaries.',
      icon: ShieldCheck
    },
    {
      title: 'Human Oversight',
      desc: 'Human-in-the-loop triggers for high-value decisions, approval routing, and anomaly verification.',
      icon: UserCheck
    },
    {
      title: 'Scalable Architecture',
      desc: 'Modular cloud workflows and desktop bots built to handle 10x process volume growth effortlessly.',
      icon: Maximize2
    },
    {
      title: 'Secure Integrations',
      desc: 'Encrypted API connections, secret vault key management, and least-privilege service accounts.',
      icon: Lock
    },
    {
      title: 'Exception Handling',
      desc: 'Graceful failure fallback routines that log edge cases and notify team leads without crashing.',
      icon: AlertTriangle
    },
    {
      title: 'Monitoring & Optimization',
      desc: 'Real-time telemetry dashboards for bot health, execution success rates, and cycle-time tracking.',
      icon: Activity
    }
  ];

  return (
    <section className="py-24 bg-brand-surface text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            ENTERPRISE READINESS & GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Automation Built for Real Business.
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Enterprise process automation requires governance, control, and reliability. We design every solution with rigorous operational safeguards.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-panel-dark p-6 rounded-2xl border border-white/10 hover:border-brand-accent/40 transition-colors flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-sans">{p.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
