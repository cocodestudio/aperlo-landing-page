"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function TemplateRedirectPage() {
  const params = useParams();
  const templateId = params.id as string;
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const MAIN_WEBSITE_URL = "https://aperlo.cocodestudio.com";
    const customSchemeUrl = `aperlo://template/${templateId}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = customSchemeUrl;

      const fallbackTimer = setTimeout(() => {
        if (!document.hidden) {
          window.location.href = MAIN_WEBSITE_URL;
        }
      }, 2000);

      const onBlur = () => clearTimeout(fallbackTimer);
      const onVisibilityChange = () => {
        if (document.hidden) clearTimeout(fallbackTimer);
      };

      window.addEventListener("blur", onBlur);
      document.addEventListener("visibilitychange", onVisibilityChange);

      return () => {
        clearTimeout(fallbackTimer);
        window.removeEventListener("blur", onBlur);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    } else {
      setShowSpinner(false);
    }
  }, [templateId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7F5] p-6 text-center font-sans">
      <div className="bg-white border border-[#E6EAE7] p-11 px-8 rounded-3xl shadow-[0_20px_48px_-12px_rgba(20,26,20,0.08)] max-w-md w-full relative">
        <div className="w-[68px] h-[68px] bg-[#E8F5E9] border border-[#1A6B4A]/20 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-[0_8px_24px_-4px_rgba(26,107,74,0.2)]">
          <svg className="w-[34px] h-[34px] fill-[#1A6B4A]" viewBox="0 0 24 24">
            <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm2 0v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
          </svg>
        </div>
        
        <h1 className="font-['Syne'] text-[26px] font-extrabold text-[#141A14] tracking-tight mb-2">Opening Template</h1>
        <div className="text-[14px] font-semibold text-[#1A6B4A] uppercase tracking-wide mb-4">Aperlo Studio</div>
        
        <p className="text-[15px] text-[#6C7A72] leading-relaxed mb-7">
          Attempting to open this screenshot template in Aperlo. If you don't have the app installed, you will be redirected to our website.
        </p>

        <div className="flex flex-col gap-3">
          <a href={`aperlo://template/${templateId}`} className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-[15px] transition-all duration-200 cursor-pointer bg-[#1A6B4A] text-white border border-[#1A6B4A] shadow-[0_4px_16px_rgba(26,107,74,0.25)] hover:bg-[#14553A] hover:border-[#14553A]">
            {showSpinner && (
              <span className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            )}
            <span>Open in Aperlo</span>
          </a>
          <a href="/" className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-[15px] transition-all duration-200 cursor-pointer bg-[#F5F7F5] text-[#141A14] border border-[#E6EAE7] hover:bg-[#ECEEEC]">
            Go to Aperlo Website
          </a>
        </div>
      </div>
      <div className="mt-6 text-[12px] font-semibold text-[#8C9991] tracking-wide">by CoCode Studio</div>
    </div>
  );
}
