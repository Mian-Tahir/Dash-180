import { ArrowRightIcon } from "lucide-react";
import React from "react";

import { Button } from "../../../../components/ui/button";

interface HeroSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const HeroSection = ({ sectionRef }: HeroSectionProps): JSX.Element => {
  return (
    <section
      ref={sectionRef as any}
      className="w-full  bg-[url('/hero-bg.png')] bg-cover bg-center bg-blend-multiply"
    >
      {/* Mobile layout: stacked, lighter then darker gradient */}
      <div className="flex flex-col lg:hidden w-full h-[110vh] px-6 sm:px-8">
        {/* Image - darker gradient */}
        <div className="w-full h-[50vw] min-h-60 max-h-96 mt-20 flex items-center justify-center relative">
          <img
            className="w-auto h-full max-h-96 object-contain"
            alt="Dashboard visual"
            src="/image 189.png"
          />
          {/* Bluish shadow underneath for mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[80%] h-12 rounded-full blur-2xl"
               style={{
                 background: "radial-gradient(ellipse at center, #6daaec88 0%, transparent 80%)"
               }}
          />
        </div>
        {/* Heading/buttons - lighter gradient */}
        <div className="flex flex-col items-center pt-8 w-full">
          <img
            className="w-16 h-16 mb-2"
            alt="Fav icon"
            src="/fav-icon.svg"
          />
          <div className="font-bold text-3xl text-center">
            <span className="text-[#0d1527]">D</span>
            <span className="text-[#55658a]">ata</span>
            <span className="text-[#0d1527]"> A</span>
            <span className="text-[#56658a]">nalytics</span>
            <span className="text-[#0d1527]"> S</span>
            <span className="text-[#56658a]">implified</span>
            <span className="text-[#0d1527]"> H</span>
            <span className="text-[#56658a]">olistically</span>
          </div>
          <div className="font-medium text-[#0d1527] text-lg mt-2 text-center">
            Your Business at a Glance
          </div>
          <div className="text-[#0d1527] text-base leading-6 [font-family:'Inter',Helvetica]  font-normal mt-2 text-center">
            Experience a transformative 180-degree perspective on your business with DASH 180°—an AI-powered dashboard that distills complex data into clear, actionable insights. Monitor key performance indicators in real time, uncover revenue opportunities, and make informed decisions with confidence.
          </div>
          <div className="text-[#0d1527cc] text-sm mt-8 [font-family:'Inter',Helvetica]  text-center">
            Transform Your Hotel's Performance with Dash180º!
          </div>
          <div className="flex flex-row gap-3 mt-14 w-full justify-center">
            <Button className="bg-[#05c168] rounded-[48px] text-white font-normal text-base px-5 py-2.5 flex items-center gap-2.5">
              Get started today
              <ArrowRightIcon className="w-3.5 h-[12.01px]" />
            </Button>
            <button className="flex items-center font-medium text-[#001943] text-base hover:text-[#05c168] hover:underline transition-colors duration-200">
              Book a demo
              <ArrowRightIcon className="w-5 h-5 ml-2 text-[#05c168]" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop layout: split, left lighter, right darker, image right */}
      <div className="hidden lg:flex w-full h-[820px] px-16 xl:px-32">
        {/* Left: lighter gradient, headings/buttons */}
        <div className="flex-1 relative flex items-center">
          <div className="absolute w-[574px] h-[449px] top-[211px] left-[199px]">
            <div className="absolute w-[358px] h-11 top-[405px] left-0 flex items-center gap-6 md:h-20 md:gap-10">
              <Button className="bg-[#05c168] rounded-[48px] [font-family:'Inter',Helvetica]  text-white font-normal text-base px-5 py-2.5 flex items-center gap-2.5 md:text-xl md:px-10 md:py-6">
                Get started today
                <ArrowRightIcon className="w-6 h-6 ml-2 !md:w-12 !md:h-12" />
              </Button>
              <div className="flex items-center group cursor-pointer">
                <div className="font-medium text-[#001943] text-base tracking-[0] leading-6 whitespace-nowrap group-hover:text-[#05c168] group-hover:underline transition-colors duration-200 md:text-xl">
                  Book a demo
                </div>
                <ArrowRightIcon className="w-8 h-8 ml-2 text-[#05c168] md:w-6 md:h-6" />
              </div>
            </div>
            <div className="absolute w-[574px] h-6 top-[364px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#0d1527cc] text-sm tracking-[0] leading-6">
              Transform Your Hotel&apos;s Performance with Dash180º!
            </div>
            <div className="absolute w-[574px] h-[120px] top-[210px] left-0 text-[#0d1527] text-base leading-6 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              Experience a transformative 180-degree perspective on your business
              with DASH 180°—an AI-powered dashboard that distills complex data into
              clear, actionable insights. Monitor key performance indicators in real
              time, uncover revenue opportunities, and make informed decisions with
              confidence.
            </div>
            <div className="absolute w-[574px] h-[29px] top-[165px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#0d1527] text-2xl tracking-[-0.72px] leading-[normal]">
              Your Business at a Glance
            </div>
            <div className="absolute w-[463px] h-[132px] -top-px left-[111px] [font-family:'Inter_Tight',Helvetica] font-normal text-transparent text-[55.2px] tracking-[-1.35px] leading-[66px]">
              <span className="text-[#0d1527] tracking-[-0.74px]">D</span>
              <span className="text-[#55658a] text-[41.8px] tracking-[-0.43px]">ata</span>
              <span className="text-[#0d1527] tracking-[-0.74px]"> A</span>
              <span className="text-[#56658a] text-[41.8px] tracking-[-0.43px]">nalytics</span>
              <span className="text-[#0d1527] tracking-[-0.74px]"> S</span>
              <span className="text-[#56658a] text-[41.8px] tracking-[-0.43px]">implified</span>
              <span className="text-[#0d1527] tracking-[-0.74px]"> H</span>
              <span className="text-[#56658a] text-[41.8px] tracking-[-0.43px]">olistically</span>
            </div>
            <img
              className="absolute w-[77px] h-[98px] top-[17px] left-0"
              alt="Fav icon"
              src="/fav-icon.svg"
            />
          </div>
        </div>
     
        <div className="flex-1 flex items-center justify-center relative">
          <img
            className="h-[600px] w-auto object-contain"
            alt="Dashboard visual"
            src="/image 189.png"
          />
      
          <div className="absolute left-1/2 -translate-x-1/2 bottom-16 w-[80%] h-24 rounded-full blur-2xl"
               style={{
                 background: "radial-gradient(ellipse at center, #6daaec88 0%, transparent 80%)"
               }}
          />
        </div>
      </div>
    </section>
  );
};
