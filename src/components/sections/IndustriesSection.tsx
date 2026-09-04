import React from 'react';
import { 
  Building, 
  Briefcase, 
  Layers, 
  PieChart, 
  Truck, 
  CheckSquare, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const domains = [
    {
      title: 'Finance & Accounting',
      icon: Building,
      summary: 'Eliminate manual ledger reconciliations, invoice matching, payment approvals, and monthly period-close operational tasks.'
    },
    {
      title: 'Human Resources',
      icon: Briefcase,
      summary: 'Automate onboarding workflows, system access provisioning, employee document compliance checks, and leave request management.'
    },
    {
      title: 'Operations',
      icon: Layers,
      summary: 'Streamline high-volume order entry, inventory sync, approval routing, vendor scheduling, and exception management.'
    },
    {
      title: 'Sales & Commercial',
      icon: PieChart,
      summary: 'Connect lead capture channels directly to CRM systems, automate proposal routing, and eliminate duplicate customer data entry.'
    },
    {
      title: 'Customer Service',
      icon: CheckSquare,
      summary: 'Accelerate inquiry triage, auto-fetch customer account records from legacy backends, and dispatch automated status updates.'
    },
    {
      title: 'Procurement',
      icon: Truck,
      summary: 'Automate requisition approvals, vendor W-9 document gathering, PO dispatching, and vendor portal data extraction.'
    },
    {
      title: 'Reporting & Data Operations',
      icon: FileText,
      summary: 'Replace manual spreadsheet compilation with scheduled data extraction, automated validation, and distribution to leadership.'
    },
    {
      title: 'Back-Office Operations',
      icon: ShieldCheck,
      summary: 'Deploy attended and unattended bots to eliminate repetitive desktop data transfer across legacy software applications.'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
            FUNCTIONAL SCOPE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Automation Across the Business
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Every business unit performs repetitive manual work. We design tailored solutions for your operational ecosystem.
          </p>
        </div>

        {/* Function Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel-dark p-6 rounded-2xl border border-white/10 hover:border-brand-accent/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
