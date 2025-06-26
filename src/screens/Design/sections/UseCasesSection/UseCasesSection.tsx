import {
  ArrowRightIcon,
  BarChart2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DatabaseIcon,
  LineChartIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface UseCasesSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const UseCasesSection = ({ sectionRef }: UseCasesSectionProps): JSX.Element => {
  // Feature items data
  const featureItems = [
    {
      icon: <BarChart2Icon className="w-5 h-5 opacity-70 text-[#f0faff]" />,
      title: "KPI Monitoring",
    },
    {
      icon: <LineChartIcon className="w-5 h-5 opacity-70 text-[#f0faff]" />,
      title: "Forecasting & Planning",
    },
    {
      icon: <BarChart2Icon className="w-5 h-5 opacity-70 text-[#f0faff]" />,
      title: "P&L Analysis",
    },
    {
      icon: <DatabaseIcon className="w-5 h-5 opacity-70 text-[#f0faff]" />,
      title: "Real-time data access",
    },
  ];

  return (
    <section ref={sectionRef as any} className="w-full bg-[#002a71] py-8 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Content */}
          <div className="flex flex-col w-full lg:w-[455px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[41px] text-[#e3e4e6] font-normal leading-tight font-['Inter_Tight',Helvetica]">
              AI-Powered Analytics &amp; Features
            </h2>

            <p className="mt-4 text-[#c9c9c9] font-inter-16px-regular text-sm sm:text-base">
              Smarter Revenue &amp; Performance Insights
            </p>

            <div className="mt-8 sm:mt-12">
              <div className="flex items-start gap-4 mb-6">
                <img
                  className="w-[25px] h-[25px] object-cover flex-shrink-0"
                  alt="Revenue icon"
                  src="/image.png"
                />
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-[#f0faff]">
                    Revenue Analytics
                  </h3>
                  <p className="mt-4 text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed">
                    Gain a comprehensive view of your hotel&#39;s revenue
                    streams, including rooms, F&amp;B, and total revenue
                    performance. Analyze monthly trends, segmentation
                    breakdowns, and top-producing agencies or companies.
                    <br />
                    <br />
                    Identify high-performing segments and revenue opportunities.
                    <br />
                    Optimize pricing strategies and maximize profitability.
                    <br />
                    Track agency and company contributions to revenue growth.
                  </p>
                </div>
              </div>

              {/* Feature items */}
              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                {featureItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-[25px] flex justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="opacity-80 text-[#f0faff] font-inter-16px-regular text-sm sm:text-base">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2.5 mt-8 sm:mt-12">
                <Button className="bg-[#05c168] hover:bg-[#04a055] text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto">
                  Schedule a call
                  <ArrowRightIcon className="ml-2 h-3.5 w-3.5" />
                </Button>

                <Button variant="ghost" className="text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto">
                  Learn More
                  <ArrowRightIcon className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex flex-col w-full lg:w-[756px] gap-3 lg:ml-48">
            <Card className="border-0 rounded-none overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[576px] bg-[url(/image--4--1.png)] bg-cover bg-center" />
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] rounded-none bg-[url(/rectangle-3907.svg)] bg-cover border-0"
              >
                <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <Button
                size="icon"
                className="w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] rounded-none bg-[#3acfc8] border-0 ml-2 sm:ml-[8px]"
              >
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Background decorative element - hidden on mobile for better performance */}
        <div className="hidden lg:block absolute right-0 top-0 h-full pointer-events-none">
          <img
            className="h-[973px]"
            alt="Decorative frame"
            src="/frame-1.svg"
          />
        </div>
      </div>
    </section>
  );
};