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
      tag: 'High Capacity Drain'
    }
  ];

  return (
    <section className="py-24 bg-brand-lightBg text-slate-900 relative overflow-hidden">
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-mono font-bold uppercase tracking-wider">
            IDENTIFYING THE DRAIN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
            Manual Work Is Hiding in Your Business.
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            The biggest automation opportunities aren't always obvious. They're buried inside the repetitive tasks your team performs every day.
          </p>
        </div>

        {/* 8 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-indigo/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-brand-indigo group-hover:text-white text-slate-800 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-brand-indigo/10 group-hover:text-brand-indigo transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 mb-3">
                    {item.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Potential to automate</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold font-sans">
              If your team does it repeatedly, there's a good chance it can be improved.
            </div>
            <p className="text-slate-400 text-sm">
              No need to know the technical solution upfront. We help map and quantify the opportunity.
            </p>
          </div>

          <button
            onClick={onNavigateToAssessment}
            className="px-6 py-3.5 rounded-xl bg-brand-accent text-slate-950 font-bold text-sm hover:bg-white transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Find Your Automation Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
