import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  AppWindow, 
  Workflow, 
  Bot, 
  Cpu, 
  Combine, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigateToAssessment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateToAssessment }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: 'Intelligent Process Automation',
      tagline: 'Find the work worth automating.',
      description: 'Analyze processes, identify repetitive work, and design practical automation strategies focused on business outcomes.',
      icon: Compass,
      tags: ['Process Mapping', 'ROI Discovery', 'Architecture Strategy'],
      details: 'We begin with thorough process mining and opportunity assessment to ensure automation yields maximum enterprise ROI.'
    },
    {
      title: 'Microsoft Power Platform',
      tagline: 'Build connected business solutions.',
      description: 'Use Power Apps, Power Automate, Dataverse, Microsoft 365, SharePoint, and other Microsoft technologies to streamline operations.',
      icon: Layers,
      tags: ['Dataverse', 'SharePoint', 'M365 Integration'],
      details: 'Leverage your existing Microsoft 365 investment to create secure, enterprise-grade business applications and automated data flows.'
    },
    {
      title: 'Power Apps',
      tagline: 'Turn manual processes into business applications.',
      description: 'Build custom forms, interfaces, internal applications, and employee-facing solutions.',
      icon: AppWindow,
      tags: ['Canvas Apps', 'Model-Driven', 'Custom Portals'],
      details: 'Replace clunky paper forms, email chains, and shared spreadsheets with slick, secure web and mobile applications.'
    },
    {
      title: 'Power Automate',
      tagline: 'Connect systems and automate workflows.',
      description: 'Automate approvals, notifications, data movement, orchestration, and application connectivity.',
      icon: Workflow,
      tags: ['Cloud Flows', 'Desktop Flows (PAD)', 'Orchestration'],
      details: 'Connect hundreds of cloud apps, on-prem databases, and desktop tools into cohesive, self-healing automated workflows.'
    },
    {
      title: 'RPA / UiPath',
      tagline: 'Automate work across applications—even legacy systems.',
      description: 'Deploy attended and unattended automation for desktop applications, ERP, CRM, Excel, files, and repetitive operational tasks.',
      icon: Cpu,
      tags: ['UiPath', 'Attended Bots', 'Legacy Integration'],
      details: 'Bridge system gaps without expensive API rebuilds by simulating human interactions across legacy green-screen & desktop apps.'
    },
    {
      title: 'Agentic AI',
      tagline: 'Give automation the ability to understand and act.',
      description: 'Build AI agents that can understand requests, access business knowledge, determine appropriate actions, and trigger workflows within defined controls.',
      icon: Bot,
      tags: ['Copilot Studio', 'LLM Agents', 'Context Reasoning'],
      details: 'Deploy intelligent autonomous agents capable of interpreting unstructured emails, documents, and client queries with guardrails.'
    },
    {
      title: 'AI + RPA',
      tagline: 'Combine intelligence with execution.',
      description: 'Connect AI agents with workflows, APIs, applications, and RPA bots to automate more complex processes.',
      icon: Combine,
      tags: ['Hybrid Intelligent Exec', 'OCR + RPA', 'Decision Automation'],
      details: 'Unify AI cognitive understanding with RPA execution power to handle complex end-to-end operational pipelines.'
    },
    {
      title: 'Automation Support',
      tagline: 'Keep your automation performing.',
      description: 'Monitor, maintain, optimize, and continuously improve deployed automation solutions.',
      icon: ShieldCheck,
      tags: ['Monitoring', 'Exception Handling', 'Continuous Optimization'],
      details: 'Ensure 99.9% bot uptime with proactive maintenance, exception logging, and iterative performance optimizations.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-surface text-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            CAPABILITIES & PLATFORMS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            One Automation Partner. Multiple Technologies.
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            We don't force every problem into the same technology. We build around your process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isExpanded = selectedService === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedService(isExpanded ? null : idx)}
                className={`glass-panel-dark p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-brand-accent shadow-glow-cyan bg-[#111728]' 
                    : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 font-sans">
                    {service.title}
                  </h3>

                  <div className="text-xs font-semibold text-brand-accent mb-3 font-mono">
                    {service.tagline}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((t, tidx) => (
                      <span key={tidx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-brand-accent font-medium">
                    <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </div>

                  {isExpanded && (
                    <div className="text-xs text-slate-300 bg-black/30 p-3 rounded-xl border border-white/10 mt-2 animate-in fade-in duration-200">
                      {service.details}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateToAssessment}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-white transition-colors"
          >
            <span>Need advice on selecting the right tech stack for your process?</span>
            <span className="underline">Talk with our architects →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
