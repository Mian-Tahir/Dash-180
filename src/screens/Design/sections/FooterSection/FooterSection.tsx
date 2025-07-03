import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Youtube", href: "#" },
  ];

  // Resource links data
  const resourceLinks = [
    { name: "Culture Manual", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About", href: "#" },
  ];

  // Office locations data
  const officeLocations = [
    {
      country: "Saudi Arabia",
      address:
        "Principles of Hospitality, Hadiqa Rami, As Salama Dist., Jeddah, Saudi Arabia",
    },
    {
      country: "United Kingdom",
      address:
        "Bravura Hospitality Management, Winchester Road, Eccles, Manchester, England, UK",
    },
  ];

  return (
    <footer className="relative w-full bg-[#0b1628] overflow-hidden pt-16 pb-0">
      <div className="container mx-auto px-4">
        {/* Logo and description section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="relative h-[76px] mb-6">
              <img
                className="w-8 h-10"
                alt="Dash180 Logo"
                src="/group-39262.png"
              />
              <div className="flex mt-[22px]">
                <img
                  className="w-[18px] h-[23px]"
                  alt="Vector"
                  src="/vector-7.svg"
                />
                <img
                  className="w-5 h-[23px]"
                  alt="Vector"
                  src="/vector-8.svg"
                />
                <img
                  className="w-[17px] h-[23px]"
                  alt="Vector"
                  src="/vector-4.svg"
                />
                <img
                  className="w-[18px] h-[23px] "
                  alt="Vector"
                  src="/vector-9.svg"
                />
                <img
                  className="w-[9px] h-[23px]"
                  alt="Vector"
                  src="/vector-2.svg"
                />
                <img
                  className="w-4 h-[23px]"
                  alt="Vector"
                  src="/vector-6.svg"
                />
                <img className="w-4 h-[23px]" alt="Vector" src="/vector.svg" />
                <img
                  className="w-[11px] h-3"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>

            <img
              className="w-[179px] h-9 my-6"
              alt="Dash180 Logo"
              src="/image-1.png"
            />

            <p className="text-[#f6f7f9] text-[13px] leading-[19.5px] font-normal  max-w-[191px]">
              Revolutionize Your Business Experience with Dash180: The Ultimate
              Solution for Seamless Service
            </p>

            <div className="flex items-end mt-8">
              <img
                className="w-28 h-40 "
                alt="Footer Blue"
                src="/footer-image-1.png"
              />
              <img
                className="w-28 h-40 "
                alt="Footer Green"
                src="/footer-image-2.png"
              />
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact section */}
              <div className="md:col-span-3">
                <p className="font-normal text-[#f6f7f9] text-[13px]   leading-[19.5px] max-w-[328px]">
                  Feel free to reach out on our official email directly for any
                  queries, interest or concerns.
                </p>

                <div className="mt-8 font-bold text-[#f6f7f9] text-base leading-4">
                  <span className="relative group inline-flex items-center gap-1">
                    <span className="font-inter-16px-regular">contactus</span>
                    <a
                      href="mailto:sq09paf8819@dash180degree.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-inter-16px-regular z-10 relative"
                    >
                      @dash180degree.com
                    </a>
                    <span
                      className="
                        absolute left-0 bottom-[-6px] w-full h-[2px] 
                        bg-[#f6f7f9]/40 
                        transition-all duration-300 
                        group-hover:bg-[#f6f7f9] 
                        group-hover:h-[2px]
                        z-0
                      "
                    />
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8">
                <h3 className="font-inter-16px-regular text-[#f6f7f9] text-base leading-4 mb-6">
                  Social
                </h3>
                <ul className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-inter-13px-regular text-[#f6f7f9] hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources links */}
              <div className="mt-8">
                <h3 className="font-inter-16px-regular text-[#f6f7f9] text-base leading-4 mb-6">
                  Resources
                </h3>
                <ul className="space-y-4">
                  {resourceLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-inter-13px-regular text-[#f6f7f9] hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office locations */}
              <div className="mt-8">
                <h3 className="font-inter-16px-regular text-[#f6f7f9] text-base leading-4 mb-6">
                  Office
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="space-y-2">
                      <p className="font-inter-13px-regular text-[#f6f7f9]">
                        {office.country}
                      </p>
                      <p className="text-[#cbcbcb] text-[13px]  leading-[19.5px] font-normal">
                        {office.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Legal links and copyright row - OUTSIDE main container */}
      <div className="w-full border-t border-[#f6f7f9]/10 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between py-4 space-y-4 md:space-y-0">
          <div className="flex space-x-12 items-center">
            <a
              href="#"
              className="font-inter-11px-regular text-[#f6f7f9] border-b border-[#f6f7f9] pb-1 hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="font-inter-11px-regular text-[#f6f7f9] border-b border-[#f6f7f9] pb-1 hover:underline"
            >
              Privacy Policy
            </a>
          </div>
          <p className=" text-[#848484]  whitespace-nowrap">
            © 2025 DASH180º - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
