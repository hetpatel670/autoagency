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
  Sparkles,
  MessageCircle
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#06080D]/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl' 
          : 'bg-[#06080D]/40 backdrop-blur-sm py-3.5 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-accent to-brand-indigo p-0.5 shadow-glow-cyan transition-transform group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-[#0B101D] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1 font-sans">
                Cogni<span className="text-brand-accent font-semibold">Flow</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 font-mono uppercase font-medium leading-none">
                Intelligent Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors py-2 cursor-pointer"
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
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/item"
                          >
                            <div className="p-2 rounded-lg bg-white/5 text-brand-accent group-hover/item:bg-brand-accent group-hover/item:text-black transition-colors mt-0.5 shrink-0">
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

            <a 
              href="#use-cases" 
              onClick={(e) => handleNavClick(e, '#use-cases')}
              className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors"
            >
              Use Cases
            </a>
            <a 
              href="#industries" 
              onClick={(e) => handleNavClick(e, '#industries')}
              className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors"
            >
              Industries
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, '#how-it-works')}
              className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors"
            >
              About
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/917904160452?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Intelligent%20Process%20Automation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onNavigateToAssessment}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-black rounded-xl group bg-gradient-to-r from-brand-accent via-sky-400 to-brand-accent group-hover:from-brand-accent group-hover:to-sky-300 shadow-glow-cyan hover:shadow-cyan-400/50 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-brand-accent rounded-[10px] font-semibold text-slate-950 flex items-center gap-2 group-hover:bg-opacity-90">
                <Sparkles className="w-4 h-4 text-slate-950" />
                Automate Your Process
              </span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/917904160452?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20automation%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={onNavigateToAssessment}
              className="text-xs font-bold bg-brand-accent text-slate-950 px-3 py-2 rounded-xl min-h-[38px] active:scale-95 transition-all shadow-sm"
            >
              Automate
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[38px] min-w-[38px] flex items-center justify-center text-slate-300 hover:text-white rounded-xl bg-white/5 border border-white/10 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-dark border-b border-white/10 px-5 pt-4 pb-6 mt-2 space-y-4 animate-in slide-in-from-top duration-300 bg-[#06080D]/95 backdrop-blur-xl">
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-brand-accent uppercase tracking-wider px-1 font-bold">
              Solutions & Services
            </div>
            <div className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-brand-accent/40">
              {solutions.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-slate-200 hover:text-brand-accent py-2 px-2 rounded-lg active:bg-white/5 flex items-center justify-between"
                >
                  <span>{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </div>
            
            <div className="pt-2 border-t border-white/5 space-y-1">
              <a 
                href="#use-cases" 
                onClick={(e) => handleNavClick(e, '#use-cases')}
                className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2.5 px-2 rounded-lg active:bg-white/5"
              >
                Use Cases
              </a>
              <a 
                href="#industries" 
                onClick={(e) => handleNavClick(e, '#industries')}
                className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2.5 px-2 rounded-lg active:bg-white/5"
              >
                Industries
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleNavClick(e, '#how-it-works')}
                className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2.5 px-2 rounded-lg active:bg-white/5"
              >
                How It Works
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="block text-sm font-medium text-slate-200 hover:text-brand-accent py-2.5 px-2 rounded-lg active:bg-white/5"
              >
                About Us
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateToAssessment(); }}
              className="w-full min-h-[48px] py-3 bg-brand-accent text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-glow-cyan active:scale-98 transition-all"
            >
              <span>Automate Your Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/917904160452?text=Hi%2C%20I%20would%20like%20to%20consult%20an%20automation%20expert."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] py-2.5 text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 79041 60452)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
