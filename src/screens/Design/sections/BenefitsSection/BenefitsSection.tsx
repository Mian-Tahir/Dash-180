import {
  BarChart3Icon,
  BoltIcon,
  CalendarRangeIcon,
  CircleIcon,
  GitBranchIcon,
  TimerIcon,
  ArrowRightIcon,
} from "lucide-react";

import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface BenefitsSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const BenefitsSection = ({ sectionRef }: BenefitsSectionProps): JSX.Element => {
  const benefitCards = [
    {
      icon: <BoltIcon className="h-6 w-6 text-[#b0bcd2]" />,
      title: "Realtime business performance",
      description:
        "Monitor key performance indicators (KPIs) like revenue, productivity, and costs as they evolve.",
      bgColor: "bg-[#f7f7f7]",
    },
    {
      icon: <CircleIcon className="h-6 w-6 text-[#b0bcd2]" />,
      title: "Centralized data view",
      description:
        "Consolidate all your critical data into one platform for a clear and unified view of your operations.",
      bgColor: "bg-[#f7f7f7]",
    },
    {
      icon: <TimerIcon className="h-6 w-6 text-[#b0bcd2]" />,
      title: "Time efficiency",
      description:
        "Automate reporting and analysis to eliminate manual processes and focus on strategic growth.",
      bgColor: "bg-[#f7f7f7]",
    },
    {
      icon: <GitBranchIcon className="h-6 w-6 text-[#b0bcd2]" />,
      title: "Better decision making",
      description:
        "Make smarter, faster decisions with reliable insights that reflect the latest trends.",
      bgColor: "bg-[#f7f7f7]",
    },
    {
      icon: <BarChart3Icon className="h-6 w-6 text-[#b0bcd2]" />,
      title: "Forecasting and trend analysis",
      description:
        "Predict future outcomes and identify trends with advanced AI-powered tools.",
      bgColor: "bg-[#f7f7f7]",
    },
    {
      icon: <CircleIcon className="h-6 w-6 text-[#b0bcd2]" />,
      title: "Competitive Advantage",
      description:
        "Stay ahead of competitors with actionable insights and industry-specific analytics tailored to your business.",
      bgColor: "bg-[#f0faff]",
    },
    {
      icon: <CalendarRangeIcon className="h-6 w-6 text-[#b0bcd2]" />,
      title: "Always Up to Date Insights",
      description:
        "Access the latest metrics to ensure your decisions are based on current and accurate information.",
      bgColor: "bg-[#f7f7f7]",
    },
  ];

  return (
    <section ref={sectionRef as any} className="w-full py-24 bg-white px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#343434] font-inter-13px-regular text-[13px] mb-4 uppercase tracking-widest">
            WHY DASH180?
          </span>
          <h2 className="text-[32px] md:text-[41px] font-normal text-black mb-6 max-w-[653px] leading-tight font-['Inter_Tight',Helvetica]">
            Smarter Insights, Better Decisions,<br />
            Faster Growth.
          </h2>
          <p className="text-black font-inter-16px-regular max-w-[582px] text-center">
            Why struggle with outdated tools when Dash180º delivers real-time analytics, Smart insights, and unmatched value?
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {benefitCards.map((card, index) => (
            <Card
              key={index}
              className={`
                group
                bg-[#f7f7f7] hover:bg-[#f0faff] border-none rounded-xl w-[400px] md:w-[500px] h-auto md:h-[160px]
                transition-all duration-300 ease-in-out
                hover:shadow-2xl hover:scale-105
                cursor-pointer
              `}
            >
              <CardContent className="p-6 flex items-start gap-2.5">
                <div className="flex-shrink-0 transition-colors duration-300 group-hover:text-[#05c168]">
                  {card.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base text-black mb-2 font-['Inter',Helvetica]">
                    {card.title}
                  </h3>
                  <p className="text-black font-inter-16px-regular">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#05c168] hover:bg-[#04a056] [font-family:'Inter',Helvetica] text-white rounded-[48px] px-8 py-6  md:px-12 md:py-6 lg:!py-8">
            Switch to Dash180 today
            <ArrowRightIcon className="w-3.5 h-[16px]" />
          </Button>
        </div>
      </div>
    </section>
  );
};
