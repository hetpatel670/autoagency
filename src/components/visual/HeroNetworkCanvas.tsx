import React, { useEffect, useRef, useState } from 'react';
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
  CheckCircle2
} from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  category: string;
  icon: React.ElementType;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  color: string;
}

export const HeroNetworkCanvas: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 10 key surrounding business process nodes
  const surroundingNodes: NodeData[] = [
    { id: 'email', label: 'Email', category: 'Communication', icon: Mail, x: 18, y: 18, color: '#38BDF8' },
    { id: 'excel', label: 'Excel', category: 'Spreadsheets', icon: FileSpreadsheet, x: 50, y: 10, color: '#10B981' },
    { id: 'crm', label: 'CRM', category: 'Customer Data', icon: Database, x: 82, y: 18, color: '#F59E0B' },
    { id: 'erp', label: 'ERP Systems', category: 'Enterprise Ops', icon: Building2, x: 88, y: 50, color: '#EC4899' },
    { id: 'documents', label: 'Documents', category: 'Unstructured Data', icon: FileText, x: 82, y: 82, color: '#8B5CF6' },
    { id: 'employees', label: 'Employees', category: 'Human Tasks', icon: Users, x: 50, y: 90, color: '#F43F5E' },
    { id: 'apis', label: 'APIs & Webhooks', category: 'System Sync', icon: Webhook, x: 18, y: 82, color: '#06B6D4' },
    { id: 'powerplatform', label: 'Power Platform', category: 'Low-Code Apps', icon: Layers, x: 12, y: 50, color: '#3B82F6' },
    { id: 'rpa', label: 'RPA / Bots', category: 'Desktop Exec', icon: Workflow, x: 30, y: 32, color: '#6366F1' },
    { id: 'ai', label: 'Agentic AI', category: 'Reasoning Layer', icon: Bot, x: 70, y: 32, color: '#00F0FF' }
  ];

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[620px] mx-auto flex items-center justify-center p-4">
      
      {/* Outer subtle glow ring */}
      <div className="absolute inset-4 rounded-full border border-white/5 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-indigo/5 animate-pulse-slow pointer-events-none" />

      {/* SVG Connecting Paths & Pulse Animations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {surroundingNodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g key={node.id}>
              {/* Base static line from node to center (50, 50) */}
              <line
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2="50%"
                y2="50%"
                stroke={isActive ? '#00F0FF' : 'rgba(255, 255, 255, 0.12)'}
                strokeWidth={isActive ? '2.5' : '1.5'}
                strokeDasharray={isActive ? 'none' : '4 4'}
                className="transition-all duration-300"
              />

              {/* Animated travelling pulse dot along the line */}
              <circle r={isActive ? '4' : '2.5'} fill="#00F0FF" filter="url(#glow)">
                <animateMotion
                  path={`M ${node.x * 6} ${node.y * 6} L 300 300`}
                  dur={`${4 + (node.x % 3)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* CENTRAL CORE NODE: "YOUR BUSINESS" */}
      <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#0E172A] to-[#07090E] border-2 border-brand-accent/60 shadow-glow-cyan p-4 text-center group cursor-pointer transition-all duration-300 hover:scale-105">
        <div className="absolute inset-0 rounded-full bg-brand-accent/10 animate-ping opacity-25" />
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-2 shadow-inner">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent animate-pulse" />
        </div>
        <span className="text-xs sm:text-sm font-extrabold text-white tracking-wider font-sans uppercase">
          YOUR BUSINESS
        </span>
        <span className="text-[10px] text-brand-accent font-mono mt-0.5">
          Intelligent Layer
        </span>
      </div>

      {/* SURROUNDING NODES */}
      {surroundingNodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className={`absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
              isActive 
                ? 'bg-[#111728] border-2 border-brand-accent shadow-glow-cyan scale-110' 
                : 'glass-panel-dark hover:border-white/30 hover:scale-105'
            }`}
          >
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: `${node.color}25`, color: node.color }}
            >
              <Icon className="w-4 h-4" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-white font-sans leading-tight">
                {node.label}
              </span>
              <span className="text-[9px] text-slate-400 font-mono">
                {node.category}
              </span>
            </div>
          </div>
        );
      })}

      {/* Floating status tag */}
      <div className="absolute bottom-1 right-2 z-30 glass-panel-dark px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[11px] text-slate-300">
        <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
        <span>Unified Business Process Mesh</span>
      </div>

    </div>
  );
};
