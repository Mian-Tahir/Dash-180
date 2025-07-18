import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface FaqSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const FaqSection = ({ sectionRef }: FaqSectionProps): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How often is the data updated?",
      answer:
        "Our dashboard is updated daily to ensure you always have access to the latest information.",
      defaultOpen: true,
    },
    {
      question: "Is the dashboard easy to use?",
      answer:
        "Yes, our dashboard is designed with user-friendliness in mind. You can easily navigate, visualize data, and generate reports without any technical expertise.",
      defaultOpen: false,
    },
    {
      question: "Can I customize the dashboard?",
      answer:
        "Absolutely! You can tailor the dashboard to your specific needs by selecting the data and metrics that matter most to you.",
      defaultOpen: false,
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we offer dedicated support to help you with any questions or issues. You can reach out to us anytime at support@dash180.com.",
      defaultOpen: false,
    },
  ];

  return (
    <section ref={sectionRef as any} className="flex flex-col w-full items-start gap-2.5 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[250px] py-8 sm:py-12 md:py-16 lg:py-[73px] bg-[#4dafeb] relative">
      <div className="relative w-full">
        <h2 className="w-full text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-[41px] font-normal leading-normal font-['Inter_Tight',Helvetica]">
          Frequently Asked Questions
        </h2>

        <p className="w-full mt-4 sm:mt-6 md:mt-8 lg:mt-[32px] text-[#000e17] text-center font-inter-16px-regular text-sm sm:text-base px-4 sm:px-0">
          Got questions? We've got answers
          Check out our frequently asked questions section. <br className="hidden lg:inline" /> to find valuable insights into our processes, pricing, and more
          Transparency  <br className="hidden lg:inline" /> is at the core of our client interactions.
        </p>

        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-[65px] mx-auto bg-white rounded-lg w-full max-w-[628px]">
          <Card className="border border-solid border-[#e1e4ea] rounded-2xl">
            <CardContent className="p-2 sm:p-4 space-y-2">
              <Accordion type="single" collapsible defaultValue="item-0">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={`faq-item-${index}`}
                    value={`item-${index}`}
                    className={` "bg-white"} rounded-xl border border-solid border-[#e1e4ea] shadow-[0px_1px_0.5px_#95a0b114] mb-2`}
                  >
                    <AccordionTrigger className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#222530] text-[16px] leading-6 text-left [font-family:'Inter',Helvetica]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pl-8 pb-3 sm:pb-4 text-[#75798a] font-normal text-[16px] leading-6 text-left [font-family:'Inter',Helvetica]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <Card className="mx-auto w-full max-w-[628px] mt-4 bg-white rounded-xl border border-solid border-[#e1e4ea] shadow-[0px_1px_0.5px_#95a0b114] p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
          <div className="flex-shrink-0 w-10 h-10 bg-[#f5f7fa] rounded-[40px] shadow-[0px_8px_24px_#acb5c329] flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-[32px] shadow-[0px_1px_0.5px_#acb5c314] flex items-center justify-center">
              <img className="w-4 h-6" alt="Support icon" src="/svg-2.svg" />
            </div>
          </div>

          <div className="ml-0 sm:ml-4 flex-grow">
            <p className="font-normal text-[#222530] [font-family:'Inter',Helvetica]  text-sm sm:text-[15px] leading-6">
              Have a question in mind?
            </p>
            <div className="flex flex-col sm:flex-row text-xs sm:text-[13px]">
              <span className="text-[#75798a] font-inter-13px-regular">
                Drop us a line at
              </span>
              <span className="sm:ml-1 text-[#222530] font-inter-13px-regular">
                support@dash180.com
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full sm:w-auto sm:ml-auto h-[46px] rounded-lg border border-solid border-[#e1e4ea] shadow-[0px_2px_1px_#95a0b214] flex items-center justify-center"
          >
            <span className="font-normal [font-family:'Inter',Helvetica] text-[#222530] text-sm sm:text-[15px] leading-6">
              Contact Support
            </span>
            <img className="w-6 h-6 ml-2" alt="Arrow icon" src="/svg.svg" />
          </Button>
        </Card>
      </div>
    </section>
  );
};