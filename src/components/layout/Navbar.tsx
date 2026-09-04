import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  ChevronDown, 
  Menu, 
  X, 
  Zap, 
  Layers, 
  Bot, 
  Workflow, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onNavigateToAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { title: 'Intelligent Automation', desc: 'Process analysis & outcome-driven automation strategies', icon: Zap, href: '#services' },
    { title: 'Power Platform', desc: 'Custom apps, workflows, Dataverse & M365 integration', icon: Layers, href: '#services' },
    { title: 'RPA / UiPath', desc: 'Desktop & enterprise bot automation for legacy systems', icon: Workflow, href: '#services' },
    { title: 'Agentic AI', desc: 'Autonomous AI agents with reasoning & human oversight', icon: Bot, href: '#agentic-ai' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#06080D]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-brand-indigo p-0.5 shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0B101D] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-accent" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
                Cogni<span className="text-brand-accent font-semibold">Flow</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase font-medium">
                Intelligent Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors py-2"
                aria-expanded={solutionsOpen}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-brand-accent' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {solutionsOpen && (
                <div className="absolute top-full -left-4 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="glass-panel-dark rounded-2xl p-3 shadow-2xl border border-white/10 bg-[#0B101D]/95">
                    <div className="space-y-1">
                      {solutions.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a 
                            key={idx} 
                            href={item.href}
                            onClick={() => setSolutionsOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/item"
                          >
                            <div className="p-2 rounded-lg bg-white/5 text-brand-accent group-hover/item:bg-brand-accent group-hover/item:text-black transition-colors mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover/item:text-brand-accent transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-400 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#use-cases" className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors">
              Use Cases
            </a>
            <a href="#industries" className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors">
              Industries
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors">
              About
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={onNavigateToAssessment}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              Talk to an Expert
            </button>

            <button
              onClick={onNavigateToAssessment}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-black rounded-xl group bg-gradient-to-r from-brand-accent via-indigo-400 to-brand-accent group-hover:from-brand-accent group-hover:to-indigo-500 shadow-glow-cyan hover:shadow-cyan-500/50 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-brand-accent rounded-[10px] font-semibold text-slate-950 flex items-center gap-2 group-hover:bg-opacity-90">
                <Sparkles className="w-4 h-4 text-slate-950" />
                Automate Your Process
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onNavigateToAssessment}
              className="text-xs font-medium bg-brand-accent text-slate-950 px-3 py-1.5 rounded-lg font-semibold"
            >
              Automate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-dark border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300 bg-[#0B101D]/98">
          <div className="space-y-3">
            <div className="text-xs font-mono text-brand-accent uppercase tracking-wider px-2">Solutions</div>
            <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-brand-accent/30">
              {solutions.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-brand-accent py-1"
                >
                  {item.title}
                </a>
              ))}
            </div>
            
            <a 
              href="#use-cases" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2 border-t border-white/5 pt-3"
            >
              Use Cases
            </a>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2"
            >
              Industries
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2"
            >
              How It Works
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2"
            >
              About
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateToAssessment(); }}
              className="w-full text-center py-3 bg-brand-accent text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-glow-cyan"
            >
              <span>Automate Your Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateToAssessment(); }}
              className="w-full text-center py-2.5 text-sm text-slate-300 hover:text-white border border-white/10 rounded-xl"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
