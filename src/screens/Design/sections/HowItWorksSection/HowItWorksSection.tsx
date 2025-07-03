import React from "react";
import { Button } from "../../../../components/ui/button";
import { DatabaseIcon } from "lucide-react";

// Data for process steps
const processSteps = [
  {
    No:"1",
    title: "Gather",
    description: "Collect raw data from multiple sources.",
    icon: "broom",
    position: "center",
    iconPosition: { top: "72px", left: "456px" },
    contentPosition: { top: "0", left: "342px" },
    iconColor: "#a2bcdc",
  },
  {
    
    No:"2",
    title: "Clean",
    description: "Remove errors and inconsistencies.",
    icon: "broom.png",
    position: "right",
    iconPosition: { top: "72px", left: "760px" },
    contentPosition: { top: "58px", left: "886px" },
    iconColor: "#a2bcdc",
  },
  {
    No:"3",
    title: "Normalize",
    description: "Standardize data formats.",
    icon: "table.png",
    position: "left",
    iconPosition: { top: "210px", left: "350px" },
    contentPosition: { top: "190px", left: "52px" },
    iconColor: "#a3bddd",
  },
  {
    No:"4",
    title: "Integrate",
    description: "Combine normalized data into a single platform.",
    icon: "Merge.png",
    position: "right",
    iconPosition: { top: "353px", left: "752px" },
    contentPosition: { top: "320px", left: "886px" },
    iconColor: "#a2bcdc",
  },
  {
    No:"5",
    title: "Algorithm Development",
    description: "Develop proprietary algorithms.",
    icon: "timeline-arrow.png",
    position: "left",
    iconPosition: { top: "491px", left: "350px" },
    contentPosition: { top: "466px", left: "12px" },
    iconColor: "#87a5cf",
  },
  {
    No:"6",
    title: "Machine Learning",
    description:
      "Leverage supervised, unsupervised, and reinforcement learning.",
    icon: "magnifying-glass.png",
    position: "right",
    iconPosition: { top: "630px", left: "752px" },
    contentPosition: { top: "588px", left: "886px" },
    iconColor: "#698dc1",
  },
  {
    No:"7",
    title: "Software enabled workflows",
    description: "Automate repetitive tasks.",
    icon: "bolt.png",
    position: "left",
    iconPosition: { top: "773px", left: "350px" },
    contentPosition: { top: "760px", left: "-22px" },
    iconColor: "#4f77b4",
  },
  {
    No:"8",
    title: "Computing and Storage",
    description: "Utilize cloud-based infrastructure.",
    icon: "cloud.png",
    position: "right",
    iconPosition: { top: "914px", left: "748px" },
    contentPosition: { top: "894px", left: "886px" },
    iconColor: "#315ea6",
  },
  {
    No:"9",
    title: "Analytics Out",
    description: "Generate actionable insights.",
    icon: "chart-line.png",
    position: "center",
    iconPosition: { top: "1044px", left: "622px" },
    contentPosition: { top: "1238px", left: "438px" },
    iconColor: "#174899",
  },
];

// Mobile-specific process steps with manual positions for step, icon, and line
const mobileProcessSteps = [
  {
    no: "1",
    title: "Gather",
    icon: null, // No icon for first step
    stepTop: "-22px",
    stepLeft: "88px",
    lineTop: "-62px",
    lineLeft: "112px",
    iconTop: null,
    iconLeft: null,
  },
  {
    no: "2",
    title: "Clean",
    icon: "broom.png",
    stepTop: "60px",
    stepLeft: "80px",
    lineTop: "56px",
    lineLeft: "294px",
    iconTop: "56px",
    iconLeft: "190px",
  },
  {
    no: "3",
    title: "Normalize",
    icon: "table.png",
    stepTop: "196px",
    stepLeft: "196px",
    lineTop: "195px",
    lineLeft: "2px",
    iconTop: "190px",
    iconLeft: "150px",
  },
  {
    no: "4",
    title: "Integrate",
    icon: "Merge.png",
    stepTop: "320px",
    stepLeft: "70px",
    lineTop: "320px",
    lineLeft: "300px",
    iconTop: "320px",
    iconLeft: "180px",
  },
  {
    no: "5",
    title: "Algorithm Development",
    icon: "timeline-arrow.png",
    stepTop: "434px",
    stepLeft: "200px",
    lineTop: "450px",
    lineLeft: "2px",
    iconTop: "450px",
    iconLeft: "140px",
  },
  {
    no: "6",
    title: "Machine Learning",
    icon: "magnifying-glass.png",
    stepTop: "580px",
    stepLeft: "30px",
    lineTop: "580px",
    lineLeft: "300px",
    iconTop: "580px",
    iconLeft: "210px",
  },
  {
    no: "7",
    title: "Software enabled workflows",
    icon: "bolt.png",
    stepTop: "710px",
    stepLeft: "170px",
    lineTop: "730px",
    lineLeft: "2px",
    iconTop: "720px",
    iconLeft: "130px",
  },
  {
    no: "8",
    title: "Computing and Storage",
    icon: "cloud.png",
    stepTop: "840px",
    stepLeft: "40px",
    lineTop: "850px",
    lineLeft: "300px",
    iconTop: "840px",
    iconLeft: "200px",
  },
  {
    no: "9",
    title: "Analytics Out",
    icon: "chart-line.png",
    stepTop: "1100px",
    stepLeft: "160px",
    lineTop: "1140px",
    lineLeft: "180px",
    iconTop: "970px",
    iconLeft: "190px",
  },
];

// Tablet-specific process steps with manual positions for step, icon, and line
const tabletProcessSteps = [
  {
    no: "1",
    title: "Gather",
    icon: null, // No icon for first step
    stepTop: "0px",
    stepLeft: "200px",
    lineTop: "-40px",
    lineLeft: "230px",
    iconTop: null,
    iconLeft: null,
  },
  {
    no: "2",
    title: "Clean",
    icon: "broom.png",
    stepTop: "80px",
    stepLeft: "220px",
    lineTop: "76px",
    lineLeft: "470px",
    iconTop: "74px",
    iconLeft: "340px",
  },
  {
    no: "3",
    title: "Normalize",
    icon: "table.png",
    stepTop: "200px",
    stepLeft: "270px",
    lineTop: "200px",
    lineLeft: "110px",
    iconTop: "200px",
    iconLeft: "380px",
  },
  {
    no: "4",
    title: "Integrate",
    icon: "Merge.png",
    stepTop: "350px",
    stepLeft: "200px",
    lineTop: "360px",
    lineLeft: "480px",
    iconTop: "350px",
    iconLeft: "350px",
  },
  {
    no: "5",
    title: "Algorithm Development",
    icon: "timeline-arrow.png",
    stepTop: "480px",
    stepLeft: "340px",
    lineTop: "500px",
    lineLeft: "110px",
    iconTop: "490px",
    iconLeft: "280px",
  },
  {
    no: "6",
    title: "Machine Learning",
    icon: "magnifying-glass.png",
    stepTop: "640px",
    stepLeft: "170px",
    lineTop: "640px",
    lineLeft: "480px",
    iconTop: "638px",
    iconLeft: "350px",
  },
  {
    no: "7",
    title: "Software enabled workflows",
    icon: "bolt.png",
    stepTop: "780px",
    stepLeft: "330px",
    lineTop: "780px",
    lineLeft: "116px",
    iconTop: "780px",
    iconLeft: "270px",
  },
  {
    no: "8",
    title: "Computing and Storage",
    icon: "cloud.png",
    stepTop: "920px",
    stepLeft: "180px",
    lineTop: "930px",
    lineLeft: "480px",
    iconTop: "920px",
    iconLeft: "360px",
  },
  {
    no: "9",
    title: "Analytics Out",
    icon: "chart-line.png",
    stepTop: "1220px",
    stepLeft: "300px",
    lineTop: "1180px",
    lineLeft: "320px",
    iconTop: "1050px",
    iconLeft: "320px",
  },
];

// Decorative line patterns component
const LinePattern = ({ type }: { type: "small" | "medium" | "large" }) => {
  const lineCount = type === "small" ? 6 : type === "medium" ? 6 : 6;

  return (
    <div
      className={`relative ${type === "small" ? "w-[57px] h-[19px]" : type === "medium" ? "w-[30px] h-[39px]" : "w-[104px] h-[35px]"}`}
    >
      <div className={`${type === "large" ? "flex" : "relative h-full"}`}>
        {type === "large" && (
          <>
            <div className="w-6 h-[35px] relative">
              {[...Array(6)].map((_, i) => (
                <img
                  key={`line-large-1-${i}`}
                  className={`absolute w-0.5 h-[35px] top-0 ${i < 3 ? "left-" + (i === 0 ? "0" : i === 1 ? "[3px]" : "1.5") : "left-" + (i === 3 ? "[11px]" : i === 4 ? "3.5" : "6")}`}
                  alt="Line"
                  src={i < 3 ? "/line-124-5.svg" : "/line-123-4.svg"}
                />
              ))}
            </div>
            <div className="w-6 h-[35px] relative">
              {[...Array(6)].map((_, i) => (
                <img
                  key={`line-large-2-${i}`}
                  className={`absolute w-0.5 h-[35px] top-0 ${i < 3 ? "left-" + (i === 0 ? "0" : i === 1 ? "[3px]" : "1.5") : "left-" + (i === 3 ? "[11px]" : i === 4 ? "3.5" : "6")}`}
                  alt="Line"
                  src={i < 3 ? "/line-124-5.svg" : "/line-123-4.svg"}
                />
              ))}
            </div>
            <div className="w-6 h-[35px] relative">
              {[...Array(6)].map((_, i) => (
                <img
                  key={`line-large-3-${i}`}
                  className={`absolute w-0.5 h-[35px] top-0 ${i < 3 ? "left-" + (i === 0 ? "0" : i === 1 ? "[3px]" : "1.5") : "left-" + (i === 3 ? "[11px]" : i === 4 ? "3.5" : "6")}`}
                  alt="Line"
                  src={i < 3 ? "/line-124-5.svg" : "/line-123-4.svg"}
                />
              ))}
            </div>
          </>
        )}

        {type === "medium" && (
          <>
            {[...Array(6)].map((_, i) => (
              <img
                key={`line-medium-${i}`}
                className={`absolute w-0.5 h-[39px] top-0 ${
                  i === 0
                    ? "left-0"
                    : i === 1
                      ? "left-1.5"
                      : i === 2
                        ? "left-3"
                        : i === 3
                          ? "left-[18px]"
                          : i === 4
                            ? "left-6"
                            : "left-[30px]"
                }`}
                alt="Line"
                src={i % 2 === 0 ? "/line-122-3.svg" : "/line-121-2.svg"}
              />
            ))}
          </>
        )}

        {type === "small" && (
          <>
            <div className="absolute w-6 h-[19px] top-0 left-[33px]">
              {[...Array(6)].map((_, i) => (
                <img
                  key={`line-small-1-${i}`}
                  className={`absolute w-0.5 h-[19px] top-0 ${
                    i < 3
                      ? `left-${i === 0 ? "0" : i === 1 ? "[3px]" : "1.5"}`
                      : `left-${i === 3 ? "[11px]" : i === 4 ? "3.5" : "6"}`
                  }`}
                  alt="Line"
                  src={
                    i < 3
                      ? "/line-122.svg"
                      : i < 5
                        ? "/line-121.svg"
                        : "/line-125.svg"
                  }
                />
              ))}
            </div>
            <div className="absolute w-6 h-[19px] top-0 left-0">
              {[...Array(6)].map((_, i) => (
                <img
                  key={`line-small-2-${i}`}
                  className={`absolute w-0.5 h-[19px] top-0 ${
                    i < 3
                      ? `left-${i === 0 ? "0" : i === 1 ? "[3px]" : "1.5"}`
                      : `left-${i === 3 ? "[11px]" : i === 4 ? "3.5" : "6"}`
                  }`}
                  alt="Line"
                  src={
                    i < 3
                      ? "/line-122.svg"
                      : i < 5
                        ? "/line-121.svg"
                        : "/line-125.svg"
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Process step component
const ProcessStep = ({
  no,
  title,
  description,
  position,
  lineType,
}: {
  no: string;
  title: string;
  description: string;
  position: "left" | "right" | "center";
  lineType: "small" | "medium" | "large";
}) => {
  return (
    <div
      className={`inline-flex flex-col items-${position === "left" ? "end" : position === "right" ? "start" : "center"} gap-[11px]`}
    >
      <LinePattern type={lineType} />
      <div
        className={`relative ${position === "center" ? "w-[274px]" : "w-auto"} font-medium text-black text-xl ${position === "left" ? "text-right" : position === "center" ? "text-center" : "text-left"} tracking-[0] leading-normal`}
      >
        <span className="mr-2 text-[#174899] font-bold">{no}.</span>{title}
      </div>
      <div
        className={`relative ${position !== "center" ? "w-auto max-w-[280px]" : "w-[305px]"} font-inter-16px-regular text-black text-base ${position === "left" ? "text-right" : position === "center" ? "text-center" : "text-left"} tracking-[0] leading-6`}
      >
        {description}
      </div>
    </div>
  );
};

interface HowItWorksSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const HowItWorksSection = ({ sectionRef }: HowItWorksSectionProps): JSX.Element => {
  return (
    <section ref={sectionRef as any} className="relative h-[1800px] xl:h-[2060px] w-full py-24 px-8 md:px-16 lg:px-32 bg-[#f0faff] font-sans">
      <div className="max-w-6xl mx-auto relative font-sans">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-[#001943] [font-family:'Inter',Helvetica]  text-base uppercase tracking-wide mb-3">
            OUR PROCESS
          </div>
          <h2 className="font-normal [font-family:'Inter',Helvetica] text-midnight text-4xl mb-4">
            See how it works
          </h2>
          <p className="text-[#000000cc] [font-family:'Inter',Helvetica] text-base">
            DASH180 simplifies complex data into actionable insights by a
            comprehensive process:
          </p>
        </div>

        {/* Process Flow Diagram for extra large screens */}
        <div className="relative hidden xl:block">
          {/* Background Flow Path - This would be the SVG path */}
          <div className="relative w-full h-[1175px] bg-[url(/union.svg)] bg-contain bg-no-repeat bg-center">
            {/* Process Icons */}
            {processSteps.map((step, index) => (
              index === 0 ? null : (
                <div
                  key={`icon-${index}`}
                  className="absolute"
                  style={{
                    top: step.iconPosition.top,
                    left: step.iconPosition.left,
                  }}
                >
                  <img
                    src={`/${step.icon}`}
                    alt={step.title}
                    style={{ width: 32, height: 32, objectFit: 'contain' }}
                  />
                </div>
              )
            ))}
          </div>

          {/* Process Steps */}
          {processSteps.map((step, index) => (
            <div
              key={`step-${index}`}
              className={`absolute`}
              style={{
                top: step.contentPosition.top,
                left: step.contentPosition.left,
              }}
            >
              <ProcessStep
                no={step.No}
                title={step.title || ''}
                description={step.description || ''}
                position={step.position as "left" | "right" | "center"}
                lineType={
                  index === processSteps.length - 1
                    ? "large"
                    : index === 0
                      ? "medium"
                      : "small"
                }
              />
              {/* Show the demo button only after the last step */}
              {index === processSteps.length - 1 && (
                <div className="w-[188px] h-[188px] mx-auto mt-40 flex justify-center items-center">
                  <Button className="w-[188px] h-[188px] bg-[#00358e] text-[#f0faff] rounded-full flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <span className="text-center text-base mb-4 px-6">
                      Get your free demo
                    </span>
                    <img
                      className="w-[26px] h-[22px]"
                      alt="Arrow right"
                      src="/arrow-right.svg"
                    />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Process Flow Diagram */}
        <div className="relative block md:hidden">
          <div className="relative w-full h-[1100px] bg-[url(/Union-mobile.png)] bg-contain bg-no-repeat bg-center">
            {mobileProcessSteps.map((step, index) => (
              <React.Fragment key={`mobile-step-${index}`}>
                {/* Absolutely positioned vertical line */}
                <div
                  className="absolute"
                  style={{
                    top: step.lineTop,
                    left: step.lineLeft,
                  }}
                >
                  <LinePattern
                    type={
                      index === mobileProcessSteps.length - 1
                        ? "large"
                        : index === 0
                          ? "medium"
                          : "small"
                    }
                  />
                </div>
                {/* Absolutely positioned icon (if not first step) */}
                {step.icon && (
                  <img
                    src={`/${step.icon}`}
                    alt={step.title}
                    className="absolute w-6 h-6 object-contain"
                    style={{
                      top: step.iconTop,
                      left: step.iconLeft,
                    }}
                  />
                )}
                {/* Absolutely positioned step heading/number */}
                <div
                  className="absolute font-medium text-black text-base tracking-[0] leading-normal"
                  style={{
                    top: step.stepTop,
                    left: step.stepLeft,
                    width: '180px',
                  }}
                >
                  <span className="mr-2 text-[#174899] font-bold">{step.no}.</span>{step.title}
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* Demo button after the image, centered */}
          <div className="w-full flex justify-center mt-32 ">
            <Button className="w-[140px] h-[140px] bg-[#00358e] text-[#f0faff] rounded-full flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110">
              <span className="text-center text-sm mb-2 px-4">
                Get your free demo
              </span>
              <img
                className="w-[20px] h-[18px]"
                alt="Arrow right"
                src="/arrow-right.svg"
              />
            </Button>
          </div>
        </div>

        {/* Tablet Process Flow Diagram */}
        <div className="relative hidden md:block xl:hidden">
          <div className="relative w-full h-[1200px] bg-[url(/Union-mobile.png)] bg-contain bg-no-repeat bg-center">
            {tabletProcessSteps.map((step, index) => (
              <React.Fragment key={`tablet-step-${index}`}>
                {/* Absolutely positioned vertical line */}
                <div
                  className="absolute"
                  style={{
                    top: step.lineTop,
                    left: step.lineLeft,
                  }}
                >
                  <LinePattern
                    type={
                      index === tabletProcessSteps.length - 1
                        ? "large"
                        : index === 0
                          ? "medium"
                          : "small"
                    }
                  />
                </div>
                {/* Absolutely positioned icon (if not first step) */}
                {step.icon && (
                  <img
                    src={`/${step.icon}`}
                    alt={step.title}
                    className="absolute w-6 h-6 object-contain"
                    style={{
                      top: step.iconTop,
                      left: step.iconLeft,
                    }}
                  />
                )}
                {/* Absolutely positioned step heading/number */}
                <div
                  className="absolute font-medium text-black text-base tracking-[0] leading-normal"
                  style={{
                    top: step.stepTop,
                    left: step.stepLeft,
                    width: '180px',
                  }}
                >
                  <span className="mr-2 text-[#174899] font-bold">{step.no}.</span>{step.title}
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* Demo button after the image, centered */}
          <div className="w-full flex justify-center mt-28">
            <Button className="w-[140px] h-[140px] bg-[#00358e] text-[#f0faff] rounded-full flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110">
              <span className="text-center text-sm mb-2 px-4">
                Get your free demo
              </span>
              <img
                className="w-[20px] h-[18px]"
                alt="Arrow right"
                src="/arrow-right.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};