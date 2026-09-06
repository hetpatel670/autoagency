import React, { useState, useEffect, useRef } from 'react';
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
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onNavigateToAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section active spy
      const sections = ['services', 'agentic-ai', 'use-cases', 'industries', 'how-it-works', 'about', 'assessment'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solutions = [
    { 
      title: 'Intelligent Process Automation', 
      desc: 'Process analysis & outcome-driven automation strategies', 
      icon: Zap, 
      color: '#00F0FF',
      href: '#services' 
    },
    { 
      title: 'Microsoft Power Platform', 
      desc: 'Custom Power Apps, Power Automate, Dataverse & M365', 
      icon: Layers, 
      color: '#3B82F6',
      href: '#services' 
    },
    { 
      title: 'RPA / UiPath Bots', 
      desc: 'Attended & unattended bots for legacy desktop systems', 
      icon: Workflow, 
      color: '#6366F1',
      href: '#services' 
    },
    { 
      title: 'Agentic AI Workflows', 
      desc: 'Autonomous AI agents with reasoning & safety guardrails', 
      icon: Bot, 
      color: '#10B981',
      href: '#agentic-ai' 
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#06080D]/95 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-2xl' 
          : 'bg-[#06080D]/80 backdrop-blur-md py-3.5 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
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
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-all py-2 cursor-pointer ${
                  solutionsOpen || activeSection === 'services' || activeSection === 'agentic-ai'
                    ? 'text-brand-accent font-semibold' 
                    : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-brand-accent' : ''}`} />
              </button>

              {/* Mega Menu Dropdown - Solid, Opaque High-Tech Background to prevent any text bleed */}
              {solutionsOpen && (
                <div className="absolute top-full -left-6 w-96 pt-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="bg-[#0B101D] rounded-2xl p-4 shadow-2xl border-2 border-brand-accent/40 shadow-cyan-950/80 ring-1 ring-white/10">
                    
                    <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/10 text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                      <span>AUTOMATION SOLUTIONS</span>
                      <span className="text-slate-500 font-normal">Select a Capability</span>
                    </div>

                    <div className="space-y-1.5">
                      {solutions.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a 
                            key={idx} 
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:border-brand-accent/30 border border-transparent transition-all group/item text-left"
                          >
                            <div 
                              className="p-2.5 rounded-xl bg-[#06080D] border border-white/10 group-hover/item:scale-110 transition-transform mt-0.5 shrink-0"
                              style={{ color: item.color }}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white group-hover/item:text-brand-accent transition-colors flex items-center gap-1.5">
                                <span>{item.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-brand-accent" />
                              </div>
                              <div className="text-xs text-slate-300 leading-snug mt-0.5 font-normal">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    {/* Bottom assessment quick strip inside dropdown */}
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Need a custom roadmap?</span>
                      <button
                        onClick={(e) => handleNavClick(e, '#assessment')}
                        className="text-brand-accent font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Request Assessment</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <a 
              href="#use-cases" 
              onClick={(e) => handleNavClick(e, '#use-cases')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'use-cases' ? 'text-brand-accent font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Use Cases
              {activeSection === 'use-cases' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full animate-in fade-in" />
              )}
            </a>

            <a 
              href="#industries" 
              onClick={(e) => handleNavClick(e, '#industries')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'industries' ? 'text-brand-accent font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Industries
              {activeSection === 'industries' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full animate-in fade-in" />
              )}
            </a>

            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, '#how-it-works')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'how-it-works' ? 'text-brand-accent font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              How It Works
              {activeSection === 'how-it-works' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full animate-in fade-in" />
              )}
            </a>

            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'about' ? 'text-brand-accent font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full animate-in fade-in" />
              )}
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href="https://wa.me/917904160452?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Intelligent%20Process%20Automation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onNavigateToAssessment}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-black rounded-xl group bg-gradient-to-r from-brand-accent via-sky-400 to-brand-accent group-hover:from-brand-accent group-hover:to-sky-300 shadow-glow-cyan hover:shadow-cyan-400/50 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-brand-accent rounded-[10px] font-bold text-slate-950 flex items-center gap-2 group-hover:bg-opacity-95">
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
              className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={onNavigateToAssessment}
              className="text-xs font-bold bg-brand-accent text-slate-950 px-3.5 py-2 rounded-xl min-h-[38px] active:scale-95 transition-all shadow-glow-cyan"
            >
              Automate
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[38px] min-w-[38px] flex items-center justify-center text-slate-300 hover:text-white rounded-xl bg-white/5 border border-white/10 focus:outline-none cursor-pointer active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A] border-b-2 border-brand-accent/40 px-5 pt-5 pb-6 mt-2 space-y-4 animate-in slide-in-from-top duration-300 shadow-2xl shadow-cyan-950/80">
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-brand-accent uppercase tracking-wider px-1 font-bold flex items-center justify-between">
              <span>SOLUTIONS & CAPABILITIES</span>
              <span className="text-slate-500 text-[10px]">Select to jump</span>
            </div>
            
            <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-brand-accent/40">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={idx} 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/10 border border-white/5 text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-black/40" style={{ color: item.color }}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100">{item.title}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  </a>
                );
              })}
            </div>
            
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a 
                href="#use-cases" 
                onClick={(e) => handleNavClick(e, '#use-cases')}
                className="text-xs font-semibold text-slate-200 hover:text-brand-accent py-2.5 px-3 rounded-xl bg-white/5 border border-white/5 text-center active:scale-98"
              >
                Use Cases
              </a>
              <a 
                href="#industries" 
                onClick={(e) => handleNavClick(e, '#industries')}
                className="text-xs font-semibold text-slate-200 hover:text-brand-accent py-2.5 px-3 rounded-xl bg-white/5 border border-white/5 text-center active:scale-98"
              >
                Industries
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleNavClick(e, '#how-it-works')}
                className="text-xs font-semibold text-slate-200 hover:text-brand-accent py-2.5 px-3 rounded-xl bg-white/5 border border-white/5 text-center active:scale-98"
              >
                How It Works
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-xs font-semibold text-slate-200 hover:text-brand-accent py-2.5 px-3 rounded-xl bg-white/5 border border-white/5 text-center active:scale-98"
              >
                About Us
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateToAssessment(); }}
              className="w-full min-h-[48px] py-3 bg-brand-accent text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-glow-cyan active:scale-98 transition-all cursor-pointer"
            >
              <span>Automate Your Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/917904160452?text=Hi%2C%20I%20would%20like%20to%20consult%20an%20automation%20expert."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] py-2.5 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
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
