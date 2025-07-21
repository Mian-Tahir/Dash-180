import React from "react";
import Navbar from "../../../../components/ui/Navbar";
import { FooterSection } from "../FooterSection/FooterSection";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
const TermsAndConditionsSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7fbff]">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="relative bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply from-[#f7fbff] to-[#eaf3fa] py-16 px-4">
        {/* SVG Decorations */}
        <img
          src="/Vector1.svg"
          alt="Red Shape"
          className="absolute top-28 right-72 w-10 h-10 z-10"
          style={{ pointerEvents: "none" }}
        />
        <img
          src="/Vector2.svg"
          alt="Pink Shape"
          className="absolute top-80 right-16 w-10 h-10 z-10"
          style={{ pointerEvents: "none" }}
        />
        <div className="  mx-72 flex flex-col items-start min-h-[460px]">
          <div className="flex items-center mb-8">
            
            <span className="font-bold text-lg mt-20 text-[#1a2e44]">DASH180°</span>
          </div>
          <h1 className="text-4xl font-semibold text-[#1a2e44] mb-8">Terms of Service</h1>
          <p className="text-[#1a2e44] mb-6">
            Transform Your Hotel’s Performance with Dash180°
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#05c168] rounded-[48px] font-sans text-white font-normal text-base leading-6 align-middle px-5 py-2.5 flex items-center gap-2.5 md:text-xl md:px-8 md:py-6">
              Get started today
              <ArrowRightIcon className="w-6 h-6 ml-2 align-middle !md:w-12 !md:h-12" />
            </Button>
            <div className="flex items-center group cursor-pointer">
              <div className="font-normal text-base leading-6 align-middle font-sans text-[#001943] tracking-[0] whitespace-nowrap group-hover:text-[#05c168] group-hover:underline transition-colors duration-200 md:text-xl">
                Book a demo
              </div>
              <ArrowRightIcon className="w-8 h-8 ml-2 text-[#05c168] align-middle md:w-6 md:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Content */}
      
      <div className="relative w-full bg-white">
  {/* Decorative vector */}
  <img
    className="w-[27px] h-[42px] mx-auto"
    alt="Vector"
    src="/vector-2.svg"
  />

  {/* Main content container */}
  <div className="flex flex-row gap-[35px] mx-72  mt-[106px]">
    {/* Navigation sidebar */}
    <div className="flex flex-col gap-[17px]">
      <div className="p-5 bg-[#f0faff] border-none rounded-[10px] shadow-none">
        <div className="p-0 space-y-0">
          <nav aria-label="Terms and Conditions Navigation">
            <ul className="flex flex-col">
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto border-b-2 border-[#005bf5] text-[#005bf5] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">1.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Acceptance of Terms</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">2.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Services</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">3.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">User Access and Licensing</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">4.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Subscriptions and Payments</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">5.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Data Privacy</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">6.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Intellectual Property</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">7.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Limitation of Liability</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">8.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Confidentiality</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">9.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Termination</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">10.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Governing Law</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">11.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Changes to Terms</span>
                </button>
              </li>
              <li className="w-full">
                <button className="w-full flex items-center gap-2 justify-start px-2.5 py-2 rounded-none h-auto text-[#b1b1b1] font-semibold hover:text-[#005bf5] hover:underline transition-colors duration-200 flex-nowrap min-w-0">
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 whitespace-nowrap">12.</span>
                  <span className="font-['Inter_Tight',Helvetica] text-base leading-6 truncate">Contact</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    {/* Content sections */}
    <div className="flex flex-col w-full  items-start gap-[35px]">
      {/* Content Wrapper Section */}
      
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica]">
            1. Acceptance of Terms
            </h3>
          </div>
          <p className="text-black font-inter-16px-regular">
          By using the Dash180° platform, you confirm your acceptance of these Terms and Conditions (T&Cs) and agree to follow them.
          </p>
        </div>
      </div>
      {/* Services Section */}
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica]">
              2. Services
            </h3>
          </div>
          <p className="text-black font-inter-16px-regular">
            Dash180° provides data analytics and business intelligence tools
            designed to consolidate, interpret, and visualize business data.
            Features include real-time performance tracking, competitor
            benchmarking, and custom reporting. Access to the Platform is
            subscription-based, with licenses allocated to named users within an
            organization.
          </p>
        </div>
      </div>

      {/* User Access and Licensing Section (3) */}
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica] tracking-normal">
            3. User Access and Licensing
            </h3>
          </div>
          <ul className="list-disc pl-5 text-black font-inter-16px-regular text-[length:var(--inter-16px-regular-font-size)] leading-[var(--inter-16px-regular-line-height)]">
            <li>Access to the Platform is granted on a subscription basis and is restricted to authorized, named users.</li>
            <li>Users are prohibited from reselling, redistributing, reverse-engineering, or using the Platform for competitive analysis or unlawful purposes.</li>
            <li>You must promptly report any unauthorized access or security breaches to Dash180Degrees.</li>
          </ul>
        </div>
      </div>

      {/* Subscription and Payments Section (4) */}
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica] tracking-normal leading-normal">
            4. Subscription and Payments
            </h3>
          </div>
          <ul className="list-disc pl-5 text-black font-inter-16px-regular text-[length:var(--inter-16px-regular-font-size)] tracking-[var(--inter-16px-regular-letter-spacing)] leading-[var(--inter-16px-regular-line-height)]">
            <li>Subscription fees are billed annually and must be paid on time as outlined during the signup process.</li>
            <li>Late payments may incur additional charges.</li>
            <li>Subscription terms automatically renew unless canceled as per the instructions provided.</li>
          </ul>
        </div>
      </div>

      {/* Data Privacy Section (5) */}
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica]">
            5. Data Privacy
            </h3>
          </div>
          <p className="text-black font-inter-16px-regular">
          Dash180° is committed to protecting your data. We comply with relevant data protection laws, including the EU General Data Protection Regulation (GDPR) and the Kingdom of Saudi Arabia's Personal Data Protection Law (PDPL). For more information, please refer to our Privacy Policy.
          </p>
        </div>
      </div>

      {/* Intellectual Property Section (6) */}
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica]">
            6. Intellectual Property
            </h3>
          </div>
          <p className="text-black font-inter-16px-regular">
          All intellectual property related to the Dash180° platform, including but not limited to algorithms, dashboards, and reports, remains the property of Dash180Degrees. Subscribers are granted a limited license to use the platform for internal business purposes.
          </p>
        </div>
      </div>

      {/* Limitation of Liability Section (7) */}
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica] tracking-normal leading-normal">
            7. Limitation of Liability
            </h3>
          </div>
          <ul className="list-disc pl-5 text-black font-inter-16px-regular text-[length:var(--inter-16px-regular-font-size)] tracking-[var(--inter-16px-regular-letter-spacing)] leading-[var(--inter-16px-regular-line-height)]">
            <li>Dash180Degrees is not liable for indirect, punitive, or consequential damages.</li>
            <li>Our total liability under these T&Cs is limited to the subscription fees paid in the past 12 months.</li>
          </ul>
        </div>
      </div>

      {/* Confidentiality Section (8) */}
      <div className="w-full border-none shadow-none">
        <div className="px-0 pt-0 pb-4">
          <h3 className="text-base font-semibold font-['Inter_Tight',Helvetica] text-black">
          8. Confidentiality
          </h3>
        </div>
        <div className="px-0 pt-0">
          <ul className="list-disc pl-5 text-black font-inter-16px-regular text-[length:var(--inter-16px-regular-font-size)] leading-[var(--inter-16px-regular-line-height)]">
            <li>Users must treat all information, features, and tools provided by the Platform as confidential and must not disclose such information to unauthorized parties.</li>
          </ul>
        </div>
      </div>

      {/* Termination Section (9) */}
      <div className="border-none shadow-none">
        <div className="px-0 pt-0 pb-4">
          <h3 className="font-semibold text-base tracking-normal font-['Inter_Tight',Helvetica] text-black">
          9. Termination
          </h3>
        </div>
        <div className="px-0 pt-0">
          <ul className="list-disc pl-5 font-inter-16px-regular text-black">
            <li>Either party may terminate the subscription for any breach of these T&Cs.</li>
            <li>Upon termination, access to the Platform and its features will be revoked immediately.</li>
          </ul>
        </div>
      </div>

      {/* Governing Law Section (10) */}
      <div className="border-none shadow-none">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base text-black font-['Inter_Tight',Helvetica]">
            10. Governing Law
            </h3>
          </div>
          <p className="text-black font-inter-16px-regular">
          These T&Cs are governed by the laws of the Kingdom of Saudi Arabia, with disputes resolved in Jeddah courts.
          </p>
        </div>
      </div>

      {/* Changes to Terms Section (11) */}
      <div className="border-none shadow-none">
        <div className="px-0 pt-0 pb-4">
          <h3 className="font-semibold text-base font-['Inter_Tight',Helvetica] text-black">
          11. Changes to Terms
          </h3>
        </div>
        <div className="px-0 pt-0">
          <p className="font-inter-16px-regular text-black">
          Dash180Degrees reserves the right to update these T&Cs at any time. Continued use of the Platform constitutes acceptance of the updated terms.
          </p>
        </div>
      </div>

      {/* Contact Section (12) */}
      <div className="border-none shadow-none  mb-8">
        <div className="flex flex-col items-start gap-4 p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-semibold text-base tracking-normal text-black font-['Inter_Tight',Helvetica]">
              12. Contact
            </h3>
          </div>
          <p className="text-base text-black font-['Inter',Helvetica] leading-6">
            For questions or concerns about these T&Cs, please contact us at:
            Email:{" "}
            <a
              href="mailto:contactus@dash180degree.com"
              rel="noopener noreferrer"
              target="_blank"
              className="underline font-inter-16px-regular leading-[var(--inter-16px-regular-line-height)] tracking-[var(--inter-16px-regular-letter-spacing)] text-[length:var(--inter-16px-regular-font-size)]"
            >
              contactus@dash180degree.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default TermsAndConditionsSection; 