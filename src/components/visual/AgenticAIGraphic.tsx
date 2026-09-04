import React from 'react';
import { 
  Bot, 
  Brain, 
  Eye, 
  Database, 
  GitFork, 
  Play, 
  UserCheck, 
  FileText, 
  Server, 
  Workflow, 
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export const AgenticAIGraphic: React.FC = () => {
  const capabilities = [
    { label: 'UNDERSTAND', desc: 'Natural Language & Intent', icon: Eye, color: '#00F0FF' },
    { label: 'REASON', desc: 'Context & Rules Evaluation', icon: Brain, color: '#6366F1' },
    { label: 'ACCESS', desc: 'Knowledge & System Data', icon: Database, color: '#10B981' },
    { label: 'DECIDE', desc: 'Action Path Optimization', icon: GitFork, color: '#F59E0B' },
    { label: 'ACT', desc: 'Trigger Workflows & Bots', icon: Play, color: '#EC4899' },
    { label: 'ESCALATE', desc: 'Human-in-the-Loop Review', icon: UserCheck, color: '#F43F5E' }
  ];

  const connectedSystems = [
    { name: 'Business Knowledge', icon: FileText },
    { name: 'Documents (PDF/Doc)', icon: FileText },
    { name: 'CRM & ERP', icon: Server },
    { name: 'Power Automate', icon: Workflow },
    { name: 'UiPath / RPA', icon: Bot },
    { name: 'Human Approver', icon: UserCheck }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel-dark p-8 sm:p-12 rounded-3xl border border-brand-accent/30 shadow-2xl relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-indigo/10 pointer-events-none" />

      {/* Top Banner: Core Philosophy */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <div className="px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-mono text-xs font-bold tracking-widest flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-brand-accent" />
          <span>CONCEPT: AI + AUTOMATION + HUMAN OVERSIGHT</span>
        </div>
      </div>

      {/* Central Agent Node & Radial Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Capability Nodes */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 text-left">
            Cognitive Functions
          </div>
          {capabilities.slice(0, 3).map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-black/40 text-brand-accent group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white font-mono">{cap.label}</div>
                  <div className="text-[11px] text-slate-400">{cap.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center: Agentic Core Node */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center my-4 lg:my-0">
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#0F172A] to-[#0B101D] border-2 border-brand-accent shadow-glow-cyan flex flex-col items-center justify-center p-4 text-center group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-brand-accent/20 animate-ping opacity-30 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-brand-accent text-slate-950 flex items-center justify-center mb-2 shadow-lg">
              <Bot className="w-7 h-7 text-slate-950 animate-bounce" />
            </div>
            <span className="text-sm font-extrabold text-white font-mono tracking-wider">
              AGENTIC AI
            </span>
            <span className="text-[10px] text-brand-accent font-mono mt-0.5">
              Reasoning Engine
            </span>
          </div>

          <div className="mt-4 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Defined Controls & Safety Guardrails</span>
          </div>
        </div>

        {/* Right: Capability Nodes */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 text-left">
            Execution & Escalate
          </div>
          {capabilities.slice(3, 6).map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-black/40 text-brand-accent group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white font-mono">{cap.label}</div>
                  <div className="text-[11px] text-slate-400">{cap.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Connected Systems Strip */}
      <div className="mt-10 pt-8 border-t border-white/10">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
          Integrated Business Knowledge & Execution Interfaces
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {connectedSystems.map((sys, idx) => {
            const Icon = sys.icon;
            return (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <Icon className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span className="truncate">{sys.name}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
