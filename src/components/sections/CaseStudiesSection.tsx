import React from 'react';
import { 
  FileCheck2, 
  UserPlus, 
  BarChart3, 
  ArrowRight,
  Info,
  Sparkles
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onNavigateToAssessment: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onNavigateToAssessment }) => {
  const scenarios = [
    {
      title: 'Invoice Processing',
      icon: FileCheck2,
      description: 'End-to-end extraction and entry of accounts payable vendor invoices directly into enterprise financial systems.',
      flow: ['Email Inbox', 'Document Extraction', 'Data Validation', 'Approval Routing', 'ERP Post'],
      impact: 'Eliminates manual re-keying, reduces payment delays, and flags duplicate vendor bills automatically.'
    },
    {
      title: 'Employee Onboarding',
      icon: UserPlus,
      description: 'Unified workflow connecting HR, IT, payroll, and facility management during new hire setup.',
      flow: ['Employee Data', 'Document Check', 'Manager Approval', 'Account Provisioning', 'Welcome Email'],
      impact: 'Ensures zero-day system access readiness and complete HR document compliance.'
    },
    {
      title: 'Automated Reporting',
      icon: BarChart3,
      description: 'Scheduled multi-system data aggregation, validation, and dashboard publication.',
      flow: ['Business Systems', 'Data Consolidation', 'Validation Check', 'Report Generation', 'Exec Distribution'],
      impact: 'Replaces recurring manual Excel aggregation with 100% accurate Monday morning operational digests.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-lightBg text-slate-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WORKFLOW ARCHITECTURES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans px-2">
            Where Automation Creates Impact
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            Examine how intelligent workflows connect fragmented systems into cohesive automated streams.
          </p>
        </div>

        {/* 3 Example Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {scenarios.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Clearly Labeled Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20 text-[10px] sm:text-[11px] font-mono font-bold mb-4 sm:mb-6">
                    <Info className="w-3.5 h-3.5" />
                    <span>Example Automation Scenario</span>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-3.5 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 sm:mb-3 font-sans text-left">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-left">
                    {item.description}
                  </p>

                  {/* Flow Visualization */}
                  <div className="space-y-2 mb-4 sm:mb-6 bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200 text-left">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">
                      Process Flow Architecture
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.flow.map((step, sidx) => (
                        <React.Fragment key={sidx}>
                          <span className="text-[10px] sm:text-[11px] font-mono px-2 py-1 rounded bg-white text-slate-800 border border-slate-200 font-medium">
                            {step}
                          </span>
                          {sidx < item.flow.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-brand-indigo shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 sm:pt-4 text-left">
                    <strong className="text-slate-900">Value Delivered:</strong> {item.impact}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 pt-2">
                  <button
                    onClick={onNavigateToAssessment}
                    className="w-full min-h-[44px] py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs font-bold hover:bg-slate-950 hover:text-white active:scale-98 transition-all cursor-pointer"
                  >
                    Discuss Similar Workflow →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
