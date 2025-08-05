import  { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../../components/ui/Navbar";

import { AboutUsSection } from "./sections/AboutUsSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection/HowItWorksSection";
import { PricingSection } from "./sections/PricingSection";
import { UseCasesSection } from "./sections/UseCasesSection";


export const Design = (): JSX.Element => {
  const location = useLocation();
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    usecases: useRef<HTMLElement>(null),
    howitworks: useRef<HTMLElement>(null),
    benefits: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    pricing: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Handle hash navigation when coming from Terms page
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
      
      if (sectionRef?.current) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash, sectionRefs]);

  return (
    <div className="bg-white flex flex-col items-center w-full">
        <Toaster position="top-right" reverseOrder={false} />
      <Navbar sectionRefs={sectionRefs} />
    
      <HeroSection sectionRef={sectionRefs.home} />
      <AboutUsSection sectionRef={sectionRefs.about} />
      <UseCasesSection sectionRef={sectionRefs.usecases} />
      <HowItWorksSection sectionRef={sectionRefs.howitworks} />
      <BenefitsSection sectionRef={sectionRefs.benefits} />
      <FaqSection sectionRef={sectionRefs.faq} />
      <PricingSection sectionRef={sectionRefs.pricing} />
      <ContactSection sectionRef={sectionRefs.contact} />
      <FooterSection />
    </div>
  );
};
