import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRightIcon,
  BarChart2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DatabaseIcon,
  LineChartIcon,
  ActivityIcon,
  PieChartIcon,
  Users2Icon,
  LayersIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useInView } from "react-intersection-observer";

interface UseCasesSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}


const features = [
  {
    key: "revenue-analytics",
    title: "Revenue Analytics",
    icon: <img src="/analytics.png" alt="Revenue Analytics" className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/analytics.png" alt="Revenue Analytics" className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(89%) saturate(2729%) hue-rotate(360deg) brightness(105%) contrast(104%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Gain a comprehensive view of your hotel&#39;s revenue streams, including rooms, F&amp;B, and total revenue performance. Analyze monthly trends, segmentation breakdowns, and top-producing agencies or companies.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Identify high-performing segments and revenue opportunities.</li>
          <li>Optimize pricing strategies and maximize profitability.</li>
          <li>Track agency and company contributions to revenue growth.</li>
        </ol>
      </>
    ),
    image: "/feature1.png",
  },
  {
    key: "kpi-monitoring",
    title: "KPI Monitoring",
    icon: <img src="/kpi.png" alt="KPI Monitoring" className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/kpi.png" alt="KPI Monitoring" className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(89%) saturate(2729%) hue-rotate(360deg) brightness(105%) contrast(104%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Monitor critical Key Performance Indicators (KPIs) such as ADR, Occupancy, and RevPAR on a monthly and yearly basis. Benchmark performance against historical data and industry standards.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Stay ahead of trends with real-time KPI tracking.</li>
          <li>Make informed decisions to improve operational efficiency.</li>
          <li>Easily identify areas for improvement and celebrate successes.</li>
        </ol>
      </>
    ),
    image: "/feature2.png",
  },
  {
    key: "forecasting-planning",
    title: "Forecasting & Planning",
    icon: <img src="/forecasting.png" alt="Forecasting & Planning" className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/forecasting.png" alt="Forecasting & Planning" className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(89%) saturate(2729%) hue-rotate(360deg) brightness(105%) contrast(104%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Leverage advanced forecasting tools to predict future room revenue, occupancy rates, and guest arrivals. Use historical data and machine learning algorithms to anticipate demand and optimize pricing strategies.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Reduce uncertainty by predicting future performance.</li>
          <li>Optimize inventory and pricing to meet demand fluctuations.</li>
          <li>Plan marketing campaigns and staffing needs more effectively.</li>
        </ol>
      </>
    ),
    image: "/feature3.png",
  },
  {
    key: "pl-analysis",
    title: "P&L Analysis",
    icon: <img src="/p&l.png" alt="P&L Analysis" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/p&l.png" alt="P&L Analysis" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(89%) saturate(1482%) hue-rotate(2deg) brightness(108%) contrast(101%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Access detailed Profit & Loss (P&L) statements broken down by month and year. Analyze revenue, costs, and net profits to understand your hotel's financial health.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Gain transparency into your hotel's financial performance.</li>
          <li>Identify cost-saving opportunities and revenue growth areas.</li>
          <li>Make strategic decisions backed by accurate financial insights.</li>
        </ol>
      </>
    ),
    image: "/feature4.png",
  },
  {
    key: "real-time-data",
    title: "Real-time Data Access",
    icon: <img src="/real-time.png" alt="Real-time data access" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/real-time.png" alt="Real-time data access" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(89%) saturate(1482%) hue-rotate(2deg) brightness(108%) contrast(101%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Get daily updates on key metrics like occupancy rates, ADR, room revenue, F&B revenue, and total revenue. View monthly and yearly trends in real time for better decision-making.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Stay up-to-date with the latest performance data.</li>
          <li>Respond quickly to market changes or unexpected challenges.</li>
          <li>Save time with automated reporting and intuitive dashboards.</li>
        </ol>
      </>
    ),
    image: "/feature5.png",
  },
  {
    key: "what-if-analysis",
    title: "What-if Analysis",
    icon: <img src="/what.png" alt="What-if Analysis" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/what.png" alt="What-if Analysis" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(89%) saturate(1482%) hue-rotate(2deg) brightness(108%) contrast(101%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Get daily updates on key metrics like occupancy rates, ADR, room revenue, F&B revenue, and total revenue. View monthly and yearly trends in real time for better decision-making.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Stay up-to-date with the latest performance data.</li>
          <li>Respond quickly to market changes or unexpected challenges.</li>
          <li>Save time with automated reporting and intuitive dashboards.</li>
        </ol>
      </>
    ),
    image: "/feature6.png",
  },
  {
    key: "segmentation",
    title: "Segmentation",
    icon: <img src="/segmentation.png" alt="Segmentation" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/segmentation.png" alt="Segmentation" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(89%) saturate(1482%) hue-rotate(2deg) brightness(108%) contrast(101%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Get daily updates on key metrics like occupancy rates, ADR, room revenue, F&B revenue, and total revenue. View monthly and yearly trends in real time for better decision-making.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Stay up-to-date with the latest performance data.</li>
          <li>Respond quickly to market changes or unexpected challenges.</li>
          <li>Save time with automated reporting and intuitive dashboards.</li>
        </ol>
      </>
    ),
    image: "/feature7.png",
  },
  {
    key: "company-agency-productions",
    title: "Company / Agency productions",
    icon: <img src="/company.png" alt="Company / Agency productions" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(3%) saturate(347%) hue-rotate(180deg) brightness(103%) contrast(100%)' }} />,
    iconActive: <img src="/company.png" alt="Company / Agency productions" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(89%) saturate(1482%) hue-rotate(2deg) brightness(108%) contrast(101%)' }} />,
    description: (
      <>
        <span className="block text-[#fbfbfb] font-inter-16px-regular text-sm sm:text-base leading-relaxed mt-4">
          Get daily updates on key metrics like occupancy rates, ADR, room revenue, F&B revenue, and total revenue. View monthly and yearly trends in real time for better decision-making.
        </span>
        <ol className="list-decimal ml-5 mt-4 text-[#fbfbfb] text-sm sm:text-base space-y-1">
          <li>Stay up-to-date with the latest performance data.</li>
          <li>Respond quickly to market changes or unexpected challenges.</li>
          <li>Save time with automated reporting and intuitive dashboards.</li>
        </ol>
      </>
    ),
    image: "/feature8.png",
  },
];

export const UseCasesSection = ({ sectionRef }: UseCasesSectionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Animation for fade/slide-up
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Navigation handlers
  const handlePrevFeature = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? features.length - 1 : prev - 1;
    });
  };

  const handleNextFeature = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return prev === features.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section
      ref={sectionRef as any}
      className="w-full bg-[#002a71] py-8 sm:py-12 md:py-16 relative overflow-hidden px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:pl-8 lg:pr-0">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* LEFT: Features/description + desktop buttons */}
          <div className="flex flex-col w-full lg:w-[455px] order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[41px] text-[#e3e4e6] font-normal leading-tight font-['Inter_Tight',Helvetica]">
              AI-Powered Analytics &amp; Features
            </h2>
            <p className="mt-4 text-[#c9c9c9] font-inter-16px-regular text-sm sm:text-base">
              Smarter Revenue &amp; Performance Insights
            </p>
            <div className="mt-8 sm:mt-12">
              <div className="rounded-xl overflow-hidden bg-transparent">
                {features.map((feature, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div key={feature.key}>
                      <button
                        className={`w-full flex items-start gap-4 py-4 px-0 focus:outline-none transition-colors duration-200 ${isActive ? "bg-transparent" : "bg-transparent"}`}
                        onClick={() => setActiveIndex(isActive ? null : idx)}
                        aria-expanded={isActive}
                        aria-controls={`feature-panel-${feature.key}`}
                        type="button"
                      >
                        <span className="w-[25px] flex justify-center flex-shrink-0 mt-1">
                          {isActive ? feature.iconActive : feature.icon}
                        </span>
                        <span className={`text-left font-inter-16px-regular text-sm sm:text-base ${isActive ? "text-[#f0faff] font-medium" : "text-[#f0faff] opacity-80"}`}>
                          {feature.title}
                        </span>
                      </button>
                      {/* Expanded content */}
                      {isActive && feature.description && (
                        <div
                          id={`feature-panel-${feature.key}`}
                          className="pl-12 pr-2 pb-4"
                        >
                          {feature.description}
                        </div>
                      )}
                      {/* Divider */}
                      {idx < features.length - 1 && (
                        isActive && feature.description ? (
                          <div className="w-full h-px bg-[#f0faff]/60 transition-opacity duration-200 mt-2" />
                        ) : (
                          <div className="w-full h-px bg-[#f0faff]/20 transition-opacity duration-200" />
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2.5 mt-8 sm:mt-12">
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
          {/* RIGHT: Image + navigation + mobile buttons */}
          <div className="flex flex-col w-full lg:w-auto gap-3 lg:ml-48 order-2">
            <Card className="border-0 rounded-none overflow-hidden">
              <CardContent className="p-0">
                <div
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] lg:w-[900px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${features[activeIndex ?? 0].image})` }}
                />
              </CardContent>
            </Card>
            {/* Navigation Controls */}
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] rounded-none bg-[url(/rectangle-3907.svg)] bg-cover border-0"
                onClick={handlePrevFeature}
              >
                <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="icon"
                className="w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] rounded-none bg-[#3acfc8] border-0 ml-2 sm:ml-[8px]"
                onClick={handleNextFeature}
              >
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
            {/* Mobile Buttons */}
            <div className="flex lg:hidden flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2.5 mt-8 sm:mt-12 w-full">
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
        {/* Background decorative element - hidden on mobile for better performance */}
     
      </div>
    </section>
  );
};