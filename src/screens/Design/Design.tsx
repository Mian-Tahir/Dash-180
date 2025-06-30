import  { useRef } from "react";
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
