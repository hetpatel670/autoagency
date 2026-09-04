import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { OpportunitySection } from './components/sections/OpportunitySection';
import { ServicesSection } from './components/sections/ServicesSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { AgenticAISection } from './components/sections/AgenticAISection';
import { UseCasesSection } from './components/sections/UseCasesSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { TrustSection } from './components/sections/TrustSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { AboutSection } from './components/sections/AboutSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { AssessmentForm } from './components/sections/AssessmentForm';
import { Footer } from './components/layout/Footer';

export function App() {
  const scrollToAssessment = () => {
    const el = document.getElementById('assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 selection:bg-brand-accent selection:text-black">
      {/* Sticky Navigation */}
      <Navbar onNavigateToAssessment={scrollToAssessment} />

      {/* Core Sections */}
      <main>
        <HeroSection onNavigateToAssessment={scrollToAssessment} />
        <ProblemSection onNavigateToAssessment={scrollToAssessment} />
        <OpportunitySection />
        <ServicesSection onNavigateToAssessment={scrollToAssessment} />
        <TechnologySection />
        <AgenticAISection onNavigateToAssessment={scrollToAssessment} />
        <UseCasesSection onNavigateToAssessment={scrollToAssessment} />
        <IndustriesSection />
        <ProcessTimeline onNavigateToAssessment={scrollToAssessment} />
        <WhyUsSection />
        <TrustSection />
        <CaseStudiesSection onNavigateToAssessment={scrollToAssessment} />
        <AboutSection onNavigateToAssessment={scrollToAssessment} />
        <FinalCTASection onNavigateToAssessment={scrollToAssessment} />
        <AssessmentForm />
      </main>

      {/* Footer */}
      <Footer onNavigateToAssessment={scrollToAssessment} />
    </div>
  );
}

export default App;
