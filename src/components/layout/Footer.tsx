import React from 'react';
import { Cpu, ArrowRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateToAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToAssessment }) => {
  return (
    <footer className="bg-[#040609] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Logo & Short Description */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-brand-indigo p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-[#0B101D] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-brand-accent" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Cogni<span className="text-brand-accent font-semibold">Flow</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase font-medium">
                  Intelligent Automation
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Intelligent business process automation powered by workflows, applications, RPA, integrations, and AI.
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateToAssessment}
                className="px-5 py-2.5 rounded-xl bg-brand-accent text-slate-950 font-bold text-xs shadow-glow-cyan hover:bg-white transition-all inline-flex items-center gap-2"
              >
                <span>Automate Your Process</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-brand-accent uppercase tracking-widest font-bold">
              Solutions & Platform
            </div>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Intelligent Process Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Microsoft Power Platform</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Power Apps & Power Automate</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UiPath & Desktop RPA</a></li>
              <li><a href="#agentic-ai" className="hover:text-white transition-colors">Agentic AI Workflows</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-brand-accent uppercase tracking-widest font-bold">
              Quick Links & Scope
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400 font-medium">
              <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
              <a href="#industries" className="hover:text-white transition-colors">Industries</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#assessment" className="hover:text-white transition-colors">Process Assessment</a>
              <a href="#assessment" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} CogniFlow Intelligent Automation. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Security & Governance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
