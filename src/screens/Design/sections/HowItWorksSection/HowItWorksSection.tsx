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
    <section ref={sectionRef as any} className="relative md-h-[2300px] xl:h-[2060px] w-full py-24 px-8 md:px-16 lg:px-32 bg-[#f0faff] font-sans">
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
                    style={{ width: 46, height: 46, objectFit: 'contain' }}
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
                <div className="w-[188px] h-[188px] mx-auto mt-20 flex justify-center items-center">
                  <Button className="w-[188px] h-[188px] bg-[#00358e] text-[#f0faff] rounded-full flex flex-col items-center justify-center">
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

        {/* Vertical Steps for mobile/tablet/laptop screens */}
        <div className="block xl:hidden w-full flex flex-col items-center gap-12">
          {processSteps.map((step, index) => (
            <div key={`vertical-step-${index}`} className="flex flex-col items-center w-full">
              {/* LinePattern at the top */}
              <LinePattern
                type={
                  index === processSteps.length - 1
                    ? "large"
                    : index === 0
                      ? "medium"
                      : "small"
                }
              />
              {/* Step heading/title */}
              <div className="font-medium text-black text-xl text-center tracking-[0] leading-normal mb-2 mt-4">
                <span className="mr-2 text-[#174899] font-bold">{step.No}.</span>{step.title}
              </div>
              {/* Description */}
              <div className="font-inter-16px-regular text-black text-base text-center tracking-[0] leading-6 max-w-[320px] mb-4">
                {step.description}
              </div>
              {/* Icon at the bottom: use Lucide icon for first step, image for others */}
              {index === 0 ? (
                <DatabaseIcon className="w-12 h-12 text-[#a2bcdc] mt-2" />
              ) : (
                <img
                  src={`/${step.icon}`}
                  alt={step.title}
                  className="w-12 h-12 object-contain mt-2"
                />
              )}
              {/* Show the demo button only after the last step */}
              {index === processSteps.length - 1 && (
                <div className="w-[188px] h-[188px] mx-auto mt-10 flex justify-center items-center">
                  <Button className="w-[188px] h-[188px] bg-[#00358e] text-[#f0faff] rounded-full flex flex-col items-center justify-center">
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
      </div>
    </section>
  );
};
