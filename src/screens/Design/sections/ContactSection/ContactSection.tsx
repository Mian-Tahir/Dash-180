import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

interface ContactSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const ContactSection = ({ sectionRef }: ContactSectionProps): JSX.Element => {
  return (
    <section ref={sectionRef as any} className="w-full min-h-[712px] bg-[#00358e] flex items-center justify-center py-8 lg:py-0">
      <div className="w-full max-w-[1041px] flex flex-col lg:flex-row items-center justify-between min-h-[536px] gap-8 lg:gap-0 px-4 lg:px-0">
        {/* Left Side: Heading and Subtext */}
        <div className="flex flex-col justify-center w-full lg:w-[415px] text-center lg:text-left">
          <h2 className="font-['Inter_Tight',Helvetica] font-normal text-white text-3xl lg:text-5xl leading-[normal] mb-4">
            Ready to elevate your hotel&apos;s performance?
          </h2>
          <div className="text-white text-base font-normal [font-family:'Inter',Helvetica] font-inter mb-2">
            Let&apos;s discuss how DASH180 can revolutionize your business.
          </div>
        </div>

        {/* Right Side: Form Card */}
        <Card className="w-full max-w-[600px] lg:w-[600px] min-h-[536px] rounded-[13px] border bg-white shadow-[0px_3px_20px_#080f340f] flex flex-col justify-center">
          <CardContent className="p-0 h-full flex flex-col justify-between">
            <form className="flex flex-col h-full justify-between px-6 lg:px-[30px] pt-6 lg:pt-[25px] pb-6 lg:pb-[29px]">
              {/* Name and Email Fields */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-[22px] mb-6">
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2">Full name</label>
                  <Input
                    className="h-12 bg-white rounded-lg border [font-family:'Inter',Helvetica] border-[#00358e] pl-[17px] text-[#75798a] placeholder-[#75798a] text-base"
                    defaultValue="Abdullah Tirmizi"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530][font-family:'Inter',Helvetica]  text-base leading-6 mb-2">Email address</label>
                  <Input
                    className="h-12 bg-[#f5f7fa] rounded-lg border [font-family:'Inter',Helvetica]  border-[#e1e4ea] pl-3.5 text-[#75798a] placeholder-[#bdbdbd] text-base"
                    placeholder="e.g. example@email.com"
                  />
                </div>
              </div>

              {/* Phone and Hotel Name Fields */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-[22px] mb-6">
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2">Phone</label>
                  <div className="relative">
                    <Input
                      className="h-12 pl-[118px] text-[#75798a] bg-[#f5f7fa] border [font-family:'Inter',Helvetica]  border-[#e1e4ea] rounded-lg placeholder-[#bdbdbd] text-base"
                      placeholder="245 789 1234"
                    />
                    <div className="absolute top-0 left-0 w-[103px] h-12 bg-white rounded-l-lg border border-[#e1e4ea] flex items-center px-2">
                      <div className="w-5 h-[15px] bg-[url('/clip-path-group.png')] bg-contain bg-no-repeat mr-2" />
                      <span className="text-[#75798a] [font-family:'Inter',Helvetica] text-base">+966</span>
                      <ChevronDownIcon className="ml-2 text-[#00358e] w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2">Hotel name</label>
                  <Input
                    className="h-12 bg-[#f5f7fa] [font-family:'Inter',Helvetica] rounded-lg border border-[#e1e4ea] pl-4 text-[#75798a] placeholder-[#bdbdbd] text-base"
                    placeholder="e.g. Marriot"
                  />
                </div>
              </div>

              {/* Business Information Field */}
              <div className="mb-6">
                <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2 block">Tell us a little about your business</label>
                <Textarea
                  className="w-full h-[120px] [font-family:'Inter',Helvetica] bg-[#f5f7fa] rounded-lg border border-[#e1e4ea] p-5 text-[#75798a] placeholder-[#bdbdbd] text-base resize-none"
                  placeholder="Please enter up to 500 characters."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-[97px] h-[46px] [font-family:'Inter',Helvetica] text-base  bg-[#05c168] rounded-[58.07px] shadow-[0px_0.59px_2.34px_#0000001f] hover:bg-[#04a056]  text-white">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};