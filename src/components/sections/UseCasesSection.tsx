import React, { useState } from 'react';
import { 
  Calculator, 
  Settings, 
  Users, 
  TrendingUp, 
  Headphones, 
  ShoppingBag, 
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface UseCasesSectionProps {
  onNavigateToAssessment: () => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onNavigateToAssessment }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Finance & Accounting');

  const categories = [
    {
      name: 'Finance & Accounting',
      icon: Calculator,
      color: '#38BDF8',
      items: [
        { title: 'Invoice Processing', desc: 'Extract data from PDF invoices, match POs, and route to ERP.' },
        { title: 'Accounts Payable', desc: 'Automate approval chains, payment scheduling, and vendor notifications.' },
        { title: 'Reconciliation', desc: 'Cross-check bank statements against ledger entries automatically.' },
        { title: 'Data Validation', desc: 'Audit transaction records for discrepancies before closing periods.' }
      ]
    },
    {
      name: 'Operations',
      icon: Settings,
      color: '#10B981',
      items: [
        { title: 'Data Processing', desc: 'Batch transform raw operational files into structured database records.' },
        { title: 'File Management', desc: 'Organize, archive, and sync document repositories across servers.' },
        { title: 'Approvals Workflow', desc: 'Orchestrate multi-tiered sign-offs across web and mobile apps.' },
        { title: 'Operational Reporting', desc: 'Auto-compile daily status digests for department leads.' }
      ]
    },
    {
      name: 'HR & People Ops',
      icon: Users,
      color: '#8B5CF6',
      items: [
        { title: 'Employee Onboarding', desc: 'Auto-provision system accounts, generate contracts, and trigger orientation.' },
        { title: 'Document Processing', desc: 'Extract tax forms, IDs, and compliance documents safely.' },
        { title: 'Employee Requests', desc: 'AI-assisted routing for PTO, expense claims, and equipment requests.' },
        { title: 'Notifications & Alerts', desc: 'Send automated compliance reminder alerts to staff.' }
      ]
    },
    {
      name: 'Sales & Revenue',
      icon: TrendingUp,
      color: '#F59E0B',
      items: [
        { title: 'CRM Synchronization', desc: 'Bi-directionally sync leads and contacts between CRM and ERP.' },
        { title: 'Lead Processing', desc: 'Qualify incoming website inquiries and assign sales reps instantly.' },
        { title: 'Pipeline Reporting', desc: 'Auto-refresh executive dashboards with real-time deal metrics.' },
        { title: 'Contract Routing', desc: 'Automate agreement dispatch and e-signature status tracking.' }
      ]
    },
    {
      name: 'Customer Service',
      icon: Headphones,
      color: '#06B6D4',
      items: [
        { title: 'Request Routing', desc: 'Categorize inbound tickets via AI and route to specialized teams.' },
        { title: 'Information Retrieval', desc: 'Retrieve client account status instantly from backend legacy databases.' },
        { title: 'Proactive Notifications', desc: 'Dispatch shipment or order status updates automatically.' },
        { title: 'Workflow Automation', desc: 'Trigger refund or replacement workflows without manual intervention.' }
      ]
    },
    {
      name: 'Procurement',
      icon: ShoppingBag,
      color: '#EC4899',
      items: [
        { title: 'Purchase Requests', desc: 'Convert requisitions into formal POs based on business rules.' },
        { title: 'Vendor Onboarding', desc: 'Collect and verify W-9s, insurance certificates, and banking info.' },
        { title: 'Vendor Information', desc: 'Keep supplier catalogs and contract expiration dates updated.' },
        { title: 'Document Processing', desc: 'Automate RFQ processing and quote comparison sheets.' }
      ]
    },
    {
      name: 'Back Office Operations',
      icon: Building2,
      color: '#6366F1',
      items: [
        { title: 'Data Entry Automation', desc: 'Bots transfer data between web portals and desktop software.' },
        { title: 'Excel Automation', desc: 'Automate macro execution, data cleansing, and workbook generation.' },
        { title: 'Email Workflows', desc: 'Parse inbound inbox emails and update database records.' },
        { title: 'Legacy App Integration', desc: 'RPA bots navigate green-screen software with 100% accuracy.' }
      ]
    }
  ];

  const currentCategoryData = categories.find(c => c.name === activeCategory) || categories[0];

  return (
    <section id="use-cases" className="py-24 bg-brand-lightBg text-slate-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-mono font-bold uppercase tracking-wider">
            PRACTICAL APPLICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
            What Could Your Business Automate?
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Select a business function below to explore real-world automation scenarios.
          </p>
        </div>

        {/* Category Tabs Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;

            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-slate-950 text-white shadow-lg scale-105' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" style={{ color: isActive ? '#00F0FF' : cat.color }} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Use Case Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {currentCategoryData.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-slate-950 text-slate-900 group-hover:text-brand-accent flex items-center justify-center shrink-0 transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950 font-sans group-hover:text-brand-indigo transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateToAssessment}
            className="px-6 py-3 rounded-xl bg-slate-950 text-white font-bold text-sm hover:bg-brand-indigo transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <span>Have a process in mind for your department?</span>
            <ArrowRight className="w-4 h-4 text-brand-accent" />
          </button>
        </div>

      </div>
    </section>
  );
};
