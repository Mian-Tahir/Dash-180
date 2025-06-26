import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface AboutUsSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const AboutUsSection = ({ sectionRef }: AboutUsSectionProps): JSX.Element => {
  // Data for feature list
  const features = [
    {
      icon: "/path-15123.svg",
      text: "Live revenue and occupancy insights",
    },
    {
      icon: "/path-15124.svg",
      text: "Comparative analysis across multiple locations",
    },
    {
      icon: "/path-15125.svg",
      text: "Performance tracking against industry standards and business targets",
    },
  ];

  // Data for industry tabs
  const industries = [
    {
      name: "Hospitality",
      active: true,
      comingSoon: false,
    },
    {
      name: "Healthcare",
      active: false,
      comingSoon: true,
    },
    {
      name: "Fintech",
      active: false,
      comingSoon: true,
    },
  ];

  return (
    <section ref={sectionRef as any} className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] py-8 sm:py-12 md:py-16 lg:py-[60px] bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[80px] w-full max-w-[1400px] mx-auto">
        <div className="w-full lg:max-w-[420px] flex flex-col gap-6 lg:gap-[28px]">
          <span className="self-stretch font-inter-13px-regular text-[#001943] text-xs sm:text-sm lg:text-[length:var(--inter-13px-regular-font-size)] tracking-[var(--inter-13px-regular-letter-spacing)] leading-[var(--inter-13px-regular-line-height)] whitespace-nowrap">
            ABOUT
          </span>

          <h2 className="self-stretch [font-family:'Inter_Tight',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-[41px] tracking-[0] leading-[normal]">
            Empowering Business Leaders with Data-Driven Insights
          </h2>

          <p className="w-full lg:w-[412px] text-black text-sm sm:text-base lg:text-[length:var(--inter-16px-regular-font-size)] leading-[var(--inter-16px-regular-line-height)] font-inter-16px-regular tracking-[var(--inter-16px-regular-letter-spacing)]">
            At Dash180º, we combine hospitality expertise with smart analytics
            to help hotel owners boost performance and profitability. Our
            intuitive dashboard delivers real-time, actionable
            insights—empowering better decisions, streamlined operations, and
            maximized revenue.
          </p>

          <div className="flex items-center gap-4 lg:gap-6 overflow-x-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-center px-2 lg:px-2.5 py-2 flex-shrink-0 ${
                  industry.active ? "border-b-2 border-[#005bf5]" : ""
                }`}
              >
                <div
                  className={`w-fit [font-family:'Inter_Tight',Helvetica] font-semibold ${
                    industry.active ? "text-[#005bf5]" : "text-[#b1b1b1]"
                  } text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap`}
                >
                  {industry.name}
                </div>
                {industry.comingSoon && (
                  <div className="w-fit font-inter-10px-regular text-[#b1b1b1] text-xs lg:text-[length:var(--inter-10px-regular-font-size)] tracking-[var(--inter-10px-regular-letter-spacing)] leading-[var(--inter-10px-regular-line-height)] whitespace-nowrap">
                    Coming soon
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="self-stretch text-black text-sm sm:text-base lg:text-[length:var(--inter-16px-regular-font-size)] leading-[var(--inter-16px-regular-line-height)] font-inter-16px-regular tracking-[var(--inter-16px-regular-letter-spacing)]">
            The DASH180 Hotel Revenue Management Dashboard is built on
            Microsoft Power BI, consolidating data across multiple properties
            in one unified report.
          </p>

          <Card className="w-full bg-[#f0faff] border-none rounded-[10px]">
            <CardContent className="flex flex-col items-start gap-3 p-4 lg:p-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 lg:gap-6">
                  <img
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <p className="font-inter-16px-regular text-black text-sm sm:text-base lg:text-[length:var(--inter-16px-regular-font-size)] tracking-[var(--inter-16px-regular-letter-spacing)] leading-[var(--inter-16px-regular-line-height)]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Button className="px-4 py-2.5 sm:px-5 lg:px-5 lg:py-2.5 bg-[#05c168] text-white rounded-[48px] hover:bg-[#04a056] w-fit">
            <span className="[font-family:'Inter',Helvetica] font-normal text-sm sm:text-base tracking-[0] leading-6">
              Optimize your revenue today
            </span>
            <img
              className="w-3.5 h-[12.01px] ml-2"
              alt="Arrow right"
              src="/arrow-right.svg"
            />
          </Button>
        </div>

        <div className="w-full lg:flex-1 flex justify-center items-center relative">
          <img
            className="w-full max-w-[350px] sm:max-w-[400px] lg:w-[450px] h-auto lg:h-[649px] object-cover"
            alt="Dashboard preview"
            src="/image--3--1.png"
          />
        </div>
      </div>
    </section>
  );
};