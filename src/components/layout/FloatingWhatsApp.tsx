import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/917904160452?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20automation%20project%20with%20your%20team.";

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-slate-950 text-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </span>
        </span>
        
        <MessageCircle className="w-5 h-5 text-slate-950 fill-slate-950" />
        
        <span className="text-xs sm:text-sm font-extrabold tracking-tight hidden xs:inline">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
