import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Use Cases", id: "usecases" },
  { label: "How It Works", id: "howitworks" },
  { label: "Benefits", id: "benefits" },
  { label: "FAQ", id: "faq" },
  { label: "Pricing", id: "pricing" },
];

interface NavbarProps {
  sectionRefs?: { [key: string]: React.RefObject<HTMLElement> };
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs = {} }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on Escape key
  React.useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Handle nav click (close mobile menu)
  const handleNavClick = (id: string) => {
    const ref = sectionRefs[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[71px] bg-[#ffffffbf] rounded-[10px] border-b border-[#ececec] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
      <div className="flex w-full items-center justify-between relative top-4 mx-auto px-4 md:px-14">
        {/* Logo (left) */}
        <div className="flex flex-col items-start gap-2.5 relative">
          <div className="relative w-[124.86px] h-[39.86px]">
            <div className="w-[125px] h-10">
              <div className="relative h-10">
                <img
                  className="absolute w-[85px] h-[15px] top-[15px] left-[39px]"
                  alt="Group"
                  src="/group.png"
                />
                <img
                  className="absolute w-[31px] h-10 top-0 left-0"
                  alt="Group"
                  src="/group-1.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nav (centered on desktop) */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center">
          <NavigationMenuList className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="font-medium font-sans text-black text-[15px] tracking-normal leading-normal whitespace-nowrap cursor-pointer transition-colors hover:text-blue-600"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden flex items-center justify-center">
          <button
            className="p-2 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            {/* Hamburger icon */}
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Contact Us (right, always visible on desktop) */}
        <div className="relative w-[180px] lg:w-[220px] h-[18px] text-right hidden lg:block">
          <div
            className="w-full h-[18px] -top-px left-0 font-semibold text-[#003e99] text-[15px] leading-normal absolute [font-family:'Inter',Helvetica] tracking-normal cursor-pointer transition-colors hover:text-blue-600"
            onClick={() => handleNavClick('contact')}
          >
            Contact Us
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <div className="bg-white w-full sm:w-4/5 sm:max-w-xs h-full shadow-lg flex flex-col relative animate-slide-in-left">
            <div className="flex items-center justify-between px-6 ">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  className="w-[31px] h-10"
                  alt="Group"
                  src="/group-1.png"
                />
                <img
                  className="w-[85px] h-[15px] mt-3"
                  alt="Group"
                  src="/group.png"
                />
              </div>
              {/* Close button */}
              <button
                className="p-2 focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            {/* Nav items */}
            <nav className="flex-1 flex flex-col gap-6 px-6 mt-8 bg-white">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="text-left font-medium text-black text-lg py-2 border-b border-gray-200 hover:text-blue-600 transition-colors"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            {/* Contact Us button at bottom */}
            <div className="px-6 pb-8 mt-auto bg-white">
              <div
                className="w-full font-semibold text-[#003e99] text-[17px] leading-normal [font-family:'Inter',Helvetica] tracking-normal cursor-pointer transition-colors hover:text-blue-600 border-t border-gray-200 pt-6"
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </div>
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}
      {/* Mobile menu animation */}
      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
};

export default Navbar; 