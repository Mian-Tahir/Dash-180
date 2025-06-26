import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

interface PricingSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const PricingSection = ({ sectionRef }: PricingSectionProps): JSX.Element => {
  // Plan data for the pricing cards
  const plans = [
    {
      type: "Basic Plan",
      price: "$",
      description:
        "Includes essential features like monthly revenue analytics, KPI monitoring, and basic forecasting.",
      isPopular: false,
    },
    {
      type: "Pro Plan",
      price: "$$",
      description:
        "Adds advanced features such as segmentation breakdowns, P&L analysis, and customizable dashboards.",
      isPopular: true,
    },
    {
      type: "Enterprise Plan",
      price: "$$$",
      description:
        "Tailored solutions for large hotel chains or multi-property portfolios.",
      isPopular: false,
    },
  ];

  // Feature comparison data
  const features = [
    {
      name: "Monthly Revenue Analytics",
      basic: true,
      pro: true,
      enterprise: true,
    },
    { name: "Monitoring", basic: true, pro: true, enterprise: true },
    {
      name: "Forecasting Tools",
      basic: "Basic",
      pro: "Advanced",
      enterprise: "Custom",
    },
    {
      name: "Advanced Segmentation",
      basic: false,
      pro: true,
      enterprise: true,
    },
    { name: "P&L Analysis", basic: false, pro: true, enterprise: true },
    { name: "Custom Dashboard", basic: false, pro: true, enterprise: true },
    { name: "Dedicated Support", basic: false, pro: false, enterprise: true },
    {
      name: "One Time Installation Fee",
      basic: "$",
      pro: "$",
      enterprise: "Custom",
    },
    { name: "Yearly Service Fee", basic: "$", pro: "$", enterprise: "Custom" },
  ];

  return (
    <section ref={sectionRef as any} className="flex flex-col items-center gap-[31px] py-0 bg-white w-full px-4 sm:px-6 lg:px-0">
      <img className="w-[27.18px] h-[42.18px]" alt="Scg" src="/scg.svg" />

      <h2 className="font-normal text-black text-2xl sm:text-3xl lg:text-[41px] text-center tracking-[0] leading-normal [font-family:'Inter_Tight',Helvetica]">
        Business Plans
      </h2>

      <p className="text-black text-center font-inter-16px-regular text-sm sm:text-base lg:text-[length:var(--inter-16px-regular-font-size)] leading-[var(--inter-16px-regular-line-height)] font-[number:var(--inter-16px-regular-font-weight)] tracking-[var(--inter-16px-regular-letter-spacing)] [font-style:var(--inter-16px-regular-font-style)] max-w-md">
        Affordable Insights for Maximum ROI
      </p>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full max-w-[1050px] h-[347px] relative rounded-2xl overflow-hidden">
        <div className="relative w-full h-[347px]">
          <img
            className="absolute w-full h-[347px] top-0 left-0"
            alt="Rectangle"
            src="/rectangle-3905.svg"
          />

          <div className="flex justify-between absolute w-full top-20 px-6">
            {plans.map((plan, index) => (
              <div
                key={`plan-${index}`}
                className={`w-[326px] ${index === 1 ? "mt-[-39px]" : ""}`}
              >
                {plan.isPopular && (
                  <div className="flex w-full items-center justify-center gap-2.5 px-4 py-2 bg-[#3acfc8] rounded-[12px_12px_0px_0px]">
                    <div className="flex-1 mt-[-1.00px] text-white">
                      <span className="text-white">🔥</span>
                      <span className="font-medium text-white">
                        {" "}
                        Most popular
                      </span>
                    </div>
                  </div>
                )}

                <Card
                  className={`border border-solid border-[#e1e4ea] shadow-[0px_1px_0.5px_#95a0b114] ${plan.isPopular ? "rounded-[0px_0px_12px_12px]" : "rounded-xl"}`}
                >
                  <CardContent className="flex flex-col items-start gap-[22px] p-7">
                    <div className="relative self-stretch w-full h-6">
                      <div
                        className={`absolute h-6 top-0 left-0 ${plan.isPopular ? "text-[#1e3113]" : "opacity-10 text-black"} font-medium text-base tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]`}
                      >
                        {plan.type}
                      </div>
                      <div className="absolute h-6 top-0 right-0 font-semibold text-[#05c168] text-2xl text-right tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                        {plan.price}
                      </div>
                    </div>

                    <div className="relative w-full [font-family:'Inter',Helvetica] font-medium text-[#b9bac0] text-base tracking-[0] leading-6">
                      Monthly / Yearly
                    </div>

                    <div className="relative w-full text-[#75798a] text-[length:var(--inter-16px-regular-font-size)] leading-[var(--inter-16px-regular-line-height)] font-inter-16px-regular font-[number:var(--inter-16px-regular-font-weight)] tracking-[var(--inter-16px-regular-letter-spacing)] [font-style:var(--inter-16px-regular-font-style)]">
                      {plan.description}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full max-w-md mx-auto relative">
        {/* Background gradient for mobile */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Rectangle"
            src="/rectangle-3905.svg"
          />
        </div>
        
        <div className="relative z-10 flex flex-col gap-4 p-4">
          {plans.map((plan, index) => (
            <div key={`mobile-plan-${index}`} className="w-full">
              {plan.isPopular && (
                <div className="flex w-full items-center justify-center gap-2.5 px-4 py-2 bg-[#3acfc8] rounded-[12px_12px_0px_0px]">
                  <div className="flex-1 mt-[-1.00px] text-white text-center">
                    <span className="text-white">🔥</span>
                    <span className="font-medium text-white">
                      {" "}
                      Most popular
                    </span>
                  </div>
                </div>
              )}

              <Card
                className={`border border-solid border-[#e1e4ea] shadow-[0px_1px_0.5px_#95a0b114] ${plan.isPopular ? "rounded-[0px_0px_12px_12px]" : "rounded-xl"}`}
              >
                <CardContent className="flex flex-col items-start gap-[22px] p-6">
                  <div className="relative self-stretch w-full h-6">
                    <div
                      className={`absolute h-6 top-0 left-0 ${plan.isPopular ? "text-[#1e3113]" : "opacity-10 text-black"} font-medium text-base tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]`}
                    >
                      {plan.type}
                    </div>
                    <div className="absolute h-6 top-0 right-0 font-semibold text-[#05c168] text-2xl text-right tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                      {plan.price}
                    </div>
                  </div>

                  <div className="relative w-full [font-family:'Inter',Helvetica] font-medium text-[#b9bac0] text-base tracking-[0] leading-6">
                    Monthly / Yearly
                  </div>

                  <div className="relative w-full text-[#75798a] text-sm leading-6 font-inter-16px-regular font-[number:var(--inter-16px-regular-font-weight)] tracking-[var(--inter-16px-regular-letter-spacing)] [font-style:var(--inter-16px-regular-font-style)]">
                    {plan.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto max-w-[718px] text-[#75798a] text-center [font-family:'Inter',Helvetica]  text-xs sm:text-sm lg:text-[length:var(--inter-13px-regular-font-size)] leading-[var(--inter-13px-regular-line-height)] font-[number:var(--inter-13px-regular-font-weight)] tracking-[var(--inter-13px-regular-letter-spacing)] [font-style:var(--inter-13px-regular-font-style)] px-4">
        One-Time Installation Fee, Monthly Fee, Yearly Maintenance Fee applicable on all plans
      </p>

      <Separator className="w-full max-w-[1028px] h-px mx-4" />

      <img className="w-[18px] h-[29px]" alt="Vg" src="/vg.svg" />

      <div className="w-full max-w-[1040px] px-4">
        <h3 className="mb-[60px] font-inter-25px-regular font-[number:var(--inter-25px-regular-font-weight)] text-[#222530] text-xl sm:text-2xl lg:text-[length:var(--inter-25px-regular-font-size)] tracking-[var(--inter-25px-regular-letter-spacing)] leading-[var(--inter-25px-regular-line-height)] text-center lg:text-left [font-style:var(--inter-25px-regular-font-style)]">
          Compare plans
        </h3>

        <div className="overflow-x-auto">
          <Table className="w-full min-w-[600px]">
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="w-[350px] min-w-[200px]"></TableHead>
                {["Basic Plan", "Pro Plan", "Enterprise Plan"].map(
                  (planTitle, index) => (
                    <TableHead
                      key={`plan-title-${index}`}
                      className="text-center min-w-[120px]"
                    >
                      <h4 className="font-semibold text-[#222530] text-lg lg:text-xl tracking-[0] leading-normal whitespace-nowrap [font-family:'Inter',Helvetica]">
                        {planTitle}
                      </h4>
                      <p className="font-medium text-[#05c168] text-sm lg:text-base tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                        Contact us
                      </p>
                    </TableHead>
                  ),
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow
                  key={`feature-${index}`}
                  className={`h-[58px] ${index % 2 === 0 ? "bg-[#f5f7fa]" : ""} rounded-xl shadow-[0px_1px_0.5px_#95a0b114]`}
                >
                  <TableCell className="pl-[23px] font-inter-16px-regular font-[number:var(--inter-16px-regular-font-weight)] text-[#222530] text-sm lg:text-[length:var(--inter-16px-regular-font-size)] tracking-[var(--inter-16px-regular-letter-spacing)] leading-[var(--inter-16px-regular-line-height)] [font-style:var(--inter-16px-regular-font-style)]">
                    {feature.name}
                  </TableCell>
                  {["basic", "pro", "enterprise"].map((plan, i) => {
                    const value = feature[plan as "basic" | "pro" | "enterprise"] as string | boolean;
                    const isPriceRow =
                      feature.name === "One Time Installation Fee" ||
                      feature.name === "Yearly Service Fee";
                    return (
                      <TableCell className="text-center" key={plan}>
                        {isPriceRow && value === "$" ? (
                          <span className="flex items-center justify-center gap-1">
                            <span className="text-[#222530] font-bold text-lg">$</span>
                            <CheckIcon className="w-[22px] h-5 text-[#05c168]" />
                          </span>
                        ) : value === true ? (
                          <CheckIcon className="w-[22px] h-5 mx-auto text-[#05c168]" />
                        ) : typeof value === "string" ? (
                          <span className="font-inter-16px-regular font-[number:var(--inter-16px-regular-font-weight)] text-[#222530] text-sm lg:text-[length:var(--inter-16px-regular-font-size)] tracking-[var(--inter-16px-regular-letter-spacing)] leading-[var(--inter-16px-regular-line-height)] whitespace-nowrap [font-style:var(--inter-16px-regular-font-style)]">
                            {value}
                          </span>
                        ) : null}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Responsive Contact Card */}
      <Card className="w-full max-w-[628px] mx-4 rounded-xl border border-solid border-[#e1e4ea] shadow-[0px_1px_0.5px_#95a0b114]">
        <CardContent className="p-4 lg:p-0 lg:h-20 relative">
          {/* Desktop & Tablet Layout */}
          <div className="hidden md:flex items-center gap-4 px-6 py-4">
            <div className="w-10 h-10 bg-[#f5f7fa] rounded-[40px] shadow-[0px_8px_24px_#acb5c329] flex items-center justify-center flex-shrink-0">
              <div className="relative w-8 h-8">
                <div className="relative h-8 bg-white rounded-[32px] shadow-[0px_1px_0.5px_#acb5c314] flex items-center justify-center">
                  <img
                    className="w-4 h-6"
                    alt="Svg"
                    src="/svg-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="[font-family:'Inter',Helvetica] font-normal text-[#222530] text-[15px] tracking-[0] leading-6">
                Contact us for more details
              </div>
              <div className="flex flex-row flex-wrap items-center min-w-0">
                <span className="font-inter-13px-regular font-[number:var(--inter-13px-regular-font-weight)] text-[#75798a] text-[length:var(--inter-13px-regular-font-size)] tracking-[var(--inter-13px-regular-letter-spacing)] leading-[var(--inter-13px-regular-line-height)] [font-style:var(--inter-13px-regular-font-style)]">
                  Drop us a line at
                </span>
                <span className="ml-1 font-inter-13px-regular font-[number:var(--inter-13px-regular-font-weight)] text-[#222530] text-[length:var(--inter-13px-regular-font-size)] tracking-[var(--inter-13px-regular-letter-spacing)] leading-[var(--inter-13px-regular-line-height)] [font-style:var(--inter-13px-regular-font-style)] truncate">
                  support@dash180.com
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <Button className="w-[170px] h-[46px] bg-[#05c168] rounded-[48px] shadow-[0px_2px_1px_#95a0b214] hover:bg-[#04a056] flex items-center justify-center">
                <span className="font-normal text-white text-[15px] text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                  Contact Us
                </span>
                <img className="w-6 h-6 ml-2" alt="Svg" src="/svg.svg" />
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f5f7fa] rounded-[40px] shadow-[0px_8px_24px_#acb5c329] flex-shrink-0">
                <div className="relative w-8 h-8 top-1 left-1">
                  <div className="relative h-8 bg-white rounded-[32px] shadow-[0px_1px_0.5px_#acb5c314]">
                    <img
                      className="absolute w-4 h-6 top-1 left-2"
                      alt="Svg"
                      src="/svg-2.svg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#222530] text-[15px] tracking-[0] leading-6">
                  Contact us for more details
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-inter-13px-regular font-[number:var(--inter-13px-regular-font-weight)] text-[#75798a] text-[length:var(--inter-13px-regular-font-size)] tracking-[var(--inter-13px-regular-letter-spacing)] leading-[var(--inter-13px-regular-line-height)] [font-style:var(--inter-13px-regular-font-style)]">
                    Drop us a line at
                  </span>
                  <span className="sm:ml-1 font-inter-13px-regular font-[number:var(--inter-13px-regular-font-weight)] text-[#222530] text-[length:var(--inter-13px-regular-font-size)] tracking-[var(--inter-13px-regular-letter-spacing)] leading-[var(--inter-13px-regular-line-height)] [font-style:var(--inter-13px-regular-font-style)]">
                    support@dash180.com
                  </span>
                </div>
              </div>
            </div>

            <Button className="w-full sm:w-[170px] h-[46px] bg-[#05c168] rounded-[48px] shadow-[0px_2px_1px_#95a0b214] hover:bg-[#04a056]">
              <span className="font-normal text-white text-[15px] text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                Contact Us
              </span>
              <img className="w-6 h-6 ml-2" alt="Svg" src="/svg.svg" />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="w-[27.18px] h-[42.18px]" />
    </section>
  );
};