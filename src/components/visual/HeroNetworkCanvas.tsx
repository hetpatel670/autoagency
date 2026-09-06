import React, { useRef, useState } from 'react';
import { 
  Mail, 
  FileSpreadsheet, 
  Database, 
  Building2, 
  FileText, 
  Users, 
  Webhook, 
  Bot, 
  Workflow, 
  Layers,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  category: string;
  icon: React.ElementType;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  color: string;
  automationSummary: string;
  targetSection: string;
  actionText: string;
}

export const HeroNetworkCanvas: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 10 key surrounding business process nodes with contextual interlinks
  const surroundingNodes: NodeData[] = [
    { 
      id: 'email', 
      label: 'Email', 
      category: 'Communication', 
      icon: Mail, 
      x: 16, 
      y: 16, 
      color: '#38BDF8',
      automationSummary: 'Auto-extract attachments, parse incoming inquiries, and trigger approval workflows.',
      targetSection: '#use-cases',
      actionText: 'Explore Email Use Cases'
    },
    { 
      id: 'excel', 
      label: 'Excel', 
      category: 'Spreadsheets', 
      icon: FileSpreadsheet, 
      x: 50, 
      y: 8, 
      color: '#10B981',
      automationSummary: 'Eliminate manual copy-pasting, VLOOKUPs, and recurring financial reconciliation.',
      targetSection: '#use-cases',
      actionText: 'Explore Excel Workflows'
    },
    { 
      id: 'crm', 
      label: 'CRM', 
      category: 'Customer Data', 
      icon: Database, 
      x: 84, 
      y: 16, 
      color: '#F59E0B',
      automationSummary: 'Bi-directional lead sync, auto-updating customer records, and instant sales assignment.',
      targetSection: '#industries',
      actionText: 'See Commercial Automation'
    },
    { 
      id: 'erp', 
      label: 'ERP Systems', 
      category: 'Enterprise Ops', 
      icon: Building2, 
      x: 90, 
      y: 50, 
      color: '#EC4899',
      automationSummary: 'Automated invoice matching, inventory sync, and period-close financial batch entry.',
      targetSection: '#services',
      actionText: 'See RPA & ERP Solutions'
    },
    { 
      id: 'documents', 
      label: 'Documents', 
      category: 'Unstructured Data', 
      icon: FileText, 
      x: 84, 
      y: 84, 
      color: '#8B5CF6',
      automationSummary: 'AI Document Intelligence for extracting key fields from PDFs, invoices, and contracts.',
      targetSection: '#agentic-ai',
      actionText: 'See Document AI'
    },
    { 
      id: 'employees', 
      label: 'Employees', 
      category: 'Human Tasks', 
      icon: Users, 
      x: 50, 
      y: 92, 
      color: '#F43F5E',
      automationSummary: 'Human-in-the-loop review, automated onboarding, and self-service Power Apps.',
      targetSection: '#how-it-works',
      actionText: 'See Methodology'
    },
    { 
      id: 'apis', 
      label: 'APIs & Sync', 
      category: 'System Sync', 
      icon: Webhook, 
      x: 16, 
      y: 84, 
      color: '#06B6D4',
      automationSummary: 'Real-time webhooks, encrypted API connectors, and hybrid cloud integration.',
      targetSection: '#services',
      actionText: 'See Integration Stack'
    },
    { 
      id: 'powerplatform', 
      label: 'Power Platform', 
      category: 'Low-Code Apps', 
      icon: Layers, 
      x: 10, 
      y: 50, 
      color: '#3B82F6',
      automationSummary: 'Custom enterprise applications, Dataverse storage, and Microsoft 365 cloud flows.',
      targetSection: '#services',
      actionText: 'Explore Power Apps'
    },
    { 
      id: 'rpa', 
      label: 'RPA / Bots', 
      category: 'Desktop Exec', 
      icon: Workflow, 
      x: 28, 
      y: 32, 
      color: '#6366F1',
      automationSummary: 'UiPath attended and unattended bots executing legacy desktop applications.',
      targetSection: '#services',
      actionText: 'Explore RPA Services'
    },
    { 
      id: 'ai', 
      label: 'Agentic AI', 
      category: 'Reasoning Layer', 
      icon: Bot, 
      x: 72, 
      y: 32, 
      color: '#00F0FF',
      automationSummary: 'Autonomous cognitive agents with intent evaluation and safety guardrails.',
      targetSection: '#agentic-ai',
      actionText: 'Explore Agentic AI'
    }
  ];

  const activeNodeData = surroundingNodes.find(n => n.id === activeNodeId) || null;

  const handleJumpToSection = (targetSection: string) => {
    const el = document.getElementById(targetSection.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[560px] sm:max-w-[620px] mx-auto flex items-center justify-center p-2 sm:p-4 select-none touch-manipulation">
      
      {/* Outer subtle glow ring */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-white/5 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-indigo/5 animate-pulse-slow pointer-events-none" />

      {/* SVG Connecting Paths & Pulse Animations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <defs>
          <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.9" />
          </linearGradient>
          <filter id="canvasGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {surroundingNodes.map((node) => {
          const isActive = activeNodeId === node.id;
          return (
            <g key={node.id}>
              {/* Base line from node to center (50, 50) */}
              <line
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2="50%"
                y2="50%"
                stroke={isActive ? 'url(#activeLineGrad)' : 'rgba(255, 255, 255, 0.12)'}
                strokeWidth={isActive ? '3' : '1.5'}
                strokeDasharray={isActive ? 'none' : '4 4'}
                className="transition-all duration-300"
              />

              {/* Animated travelling pulse dot along the line */}
              <circle r={isActive ? '4.5' : '2.5'} fill={isActive ? '#00F0FF' : '#6366F1'} filter="url(#canvasGlow)">
                <animateMotion
                  path={`M ${node.x * 5.6} ${node.y * 5.6} L 280 280`}
                  dur={`${isActive ? '1.8' : '4'}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* CENTRAL CORE NODE: "YOUR BUSINESS" */}
      <div 
        onClick={() => setActiveNodeId(null)}
        className="relative z-20 flex flex-col items-center justify-center w-28 h-28 xs:w-32 xs:h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#0E172A] to-[#07090E] border-2 border-brand-accent/70 shadow-glow-cyan p-2 sm:p-4 text-center group cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full bg-brand-accent/15 animate-ping opacity-25" />
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-1 sm:mb-2 shadow-inner">
          <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-brand-accent animate-pulse" />
        </div>
        <span className="text-[10px] xs:text-xs sm:text-sm font-extrabold text-white tracking-wider font-sans uppercase leading-tight">
          YOUR BUSINESS
        </span>
        <span className="text-[8px] sm:text-[10px] text-brand-accent font-mono mt-0.5 font-bold">
          Intelligent Mesh
        </span>
      </div>

      {/* SURROUNDING NODES */}
      {surroundingNodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNodeId === node.id;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNodeId(node.id)}
            onClick={() => setActiveNodeId(isActive ? null : node.id)}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className={`absolute z-20 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:px-3 sm:py-2 rounded-xl transition-all duration-200 cursor-pointer min-h-[36px] ${
              isActive 
                ? 'bg-[#111728] border-2 border-brand-accent shadow-glow-cyan scale-110 ring-2 ring-brand-accent/40' 
                : 'glass-panel-dark hover:border-brand-accent/40 hover:scale-105 active:scale-95 border border-white/10'
            }`}
          >
            <div 
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white shrink-0"
              style={{ backgroundColor: `${node.color}25`, color: node.color }}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="hidden xs:flex flex-col text-left">
              <span className="text-[10px] sm:text-xs font-semibold text-white font-sans leading-tight">
                {node.label}
              </span>
              <span className="hidden sm:inline text-[9px] text-slate-400 font-mono">
                {node.category}
              </span>
            </div>
          </div>
        );
      })}

      {/* Interactive Detail Overlay when a node is clicked / hovered */}
      {activeNodeData ? (
        <div className="absolute -bottom-4 left-2 right-2 sm:left-4 sm:right-4 z-40 bg-[#0B101D] border-2 border-brand-accent/50 rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-cyan-950/90 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${activeNodeData.color}20`, color: activeNodeData.color }}
              >
                <activeNodeData.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 font-sans">
                  <span>{activeNodeData.label}</span>
                  <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-brand-accent font-semibold">
                    {activeNodeData.category}
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 leading-snug mt-0.5">
                  {activeNodeData.automationSummary}
                </div>
              </div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); setActiveNodeId(null); }}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono">Connected to Intelligent Mesh</span>
            <button
              onClick={() => handleJumpToSection(activeNodeData.targetSection)}
              className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1.5 cursor-pointer py-1 px-2.5 rounded-lg bg-brand-accent/10 hover:bg-brand-accent/20"
            >
              <span>{activeNodeData.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Floating status tag when no node is selected */
        <div className="absolute bottom-0 right-2 z-30 glass-panel-dark px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-300">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
          <span>Tap any node to explore integration</span>
        </div>
      )}

    </div>
  );
};
