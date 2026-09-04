import React from 'react';
import { 
  ArrowRight, 
  Keyboard, 
  FileSearch, 
  MailWarning, 
  Table, 
  GitPullRequest, 
  BarChart3, 
  RefreshCw, 
  Building 
} from 'lucide-react';

interface ProblemSectionProps {
  onNavigateToAssessment: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onNavigateToAssessment }) => {
  const problems = [
    {
      title: 'Data Entry',
      description: 'Copy information between systems manually.',
      icon: Keyboard,
      detail: 'Re-keying customer records, invoices, or order details across disconnected software apps.',
      tag: 'System Friction'
    },
    {
      title: 'Documents',
      description: 'Read, extract, validate, and process information manually.',
      icon: FileSearch,
      detail: 'Manually reviewing PDFs, contracts, invoices, and claims to extract key fields.',
      tag: 'Unstructured Data'
    },
    {
      title: 'Email',
      description: 'Sort, route, respond, and follow up.',
      icon: MailWarning,
      detail: 'Inbox clutter where staff manually forward messages, extract attachments, and update logs.',
      tag: 'Communication Overhead'
    },
    {
      title: 'Excel',
      description: 'Repeat the same calculations and updates every day.',
      icon: Table,
      detail: 'VLOOKUPs, manual copy-pasting, and fragile spreadsheets that stall daily operations.',
      tag: 'Fragile Spreadsheets'
    },
    {
      title: 'Approvals',
      description: 'Move requests between people and systems.',
      icon: GitPullRequest,
      detail: 'Chasing sign-offs via email threads, chat, and paper forms across departments.',
      tag: 'Workflow Bottlenecks'
    },
    {
      title: 'Reporting',
      description: 'Collect information and prepare recurring reports.',
      icon: BarChart3,
      detail: 'Spending hours every Monday gathering data from multiple sources to build slides or sheets.',
      tag: 'Manual Analytics'
    },
    {
      title: 'CRM / ERP',
      description: 'Keep records synchronized manually.',
      icon: RefreshCw,
      detail: 'Updating customer profiles, inventory counts, or status changes in dual systems.',
      tag: 'Data Discrepancy'
    },
    {
      title: 'Back Office',
      description: 'Perform repetitive operational tasks that consume employee time.',
      icon: Building,
      detail: 'High-volume routine tasks that pull valuable talent away from core business growth.',
      tag: 'Capacity Drain'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-lightBg text-slate-900 relative overflow-hidden">
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-mono font-bold uppercase tracking-wider">
            IDENTIFYING THE DRAIN
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans px-2">
            Manual Work Is Hiding in Your Business.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            The biggest automation opportunities aren't always obvious. They're buried inside the repetitive tasks your team performs every day.
          </p>
        </div>

        {/* 8 Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-indigo/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 group-hover:bg-brand-indigo group-hover:text-white text-slate-800 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-brand-indigo/10 group-hover:text-brand-indigo transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-slate-700 mb-2.5 sm:mb-3 leading-snug">
                    {item.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2.5 sm:pt-3">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-3 sm:mt-4 pt-2 flex items-center text-xs font-semibold text-brand-indigo group-hover:translate-x-0.5 transition-transform">
                  <span>Potential to automate</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 sm:mt-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <div className="text-lg sm:text-2xl font-bold font-sans">
              If your team does it repeatedly, there's a high chance it can be automated.
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              No need to know the technical solution upfront. We help map and quantify the opportunity.
            </p>
          </div>

          <button
            onClick={onNavigateToAssessment}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl bg-brand-accent text-slate-950 font-bold text-xs sm:text-sm hover:bg-white active:scale-98 transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-glow-cyan"
          >
            <span>Find Automation Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
