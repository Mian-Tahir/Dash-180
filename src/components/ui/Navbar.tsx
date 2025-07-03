import React, { useState, useRef, useEffect } from "react";
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  // Scroll behavior for show/hide navbar
  useEffect(() => {
    let ticking = false;
    const threshold = 8;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
        ticking = false;
        return;
      }
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    Object.keys(sectionRefs).forEach((key) => {
      const ref = sectionRefs[key];
      if (ref?.current) {
        ref.current.setAttribute('data-section-id', key);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  // Close menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Handle nav click
  const handleNavClick = (id: string) => {
    const ref = sectionRefs[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top padding/margin for the suspended navbar */}

      
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-8xl h-[76px] bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg shadow-black/5 rounded-2xl px-6 md:px-8 transition-all duration-300 ease-out ${
          showNavbar 
            ? 'translate-y-0 opacity-100 scale-100' 
            : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ 
          willChange: 'transform, opacity',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)'
        }}
      >
        <div className="flex w-full items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-[31px] h-10"
                alt="Logo Icon"
                src="/group-1.png"
              />
              <img
                className="w-[85px] h-[15px]"
                alt="Logo Text"
                src="/group.png"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    className={`relative px-4 py-2 font-medium text-[15px] transition-all duration-200 ease-out cursor-pointer rounded-lg ${
                      activeSection === item.id
                        ? ' bg-gray-50/80'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={(e) => {
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

          {/* Right group: Contact Us + Hamburger (mobile/tablet) */}
          <div className="flex items-center gap-2 ml-auto lg:hidden">
            <button
              className="font-semibold text-[#003e99] text-[16px] px-2 py-1 bg-transparent border-none shadow-none hover:text-blue-600 transition-colors duration-200"
              style={{ background: 'none' }}
              onClick={() => handleNavClick('contact')}
            >
              Contact Us
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                <span className="block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"></span>
                <span className="block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"></span>
                <span className="block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"></span>
              </div>
            </button>
          </div>

          {/* Contact Us (right, always visible on desktop) */}
          <div className="relative w-[180px] lg:w-[220px] h-[18px] text-right hidden lg:block">
            <div
              className="w-full h-[18px] -top-px left-0 font-semibold text-[#003e99] text-[18px] leading-normal absolute [font-family:'Inter',Helvetica] tracking-normal cursor-pointer transition-colors hover:text-blue-600"
              onClick={() => handleNavClick('contact')}
            >
              Contact Us
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm animate-fadeIn"
          onClick={() => setMobileOpen(false)}
        >
          <div 
            className="bg-white/95 backdrop-blur-xl w-full sm:w-4/5 sm:max-w-xs h-full shadow-2xl flex flex-col animate-slideInLeft"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <div className="flex items-center gap-2">
                <img className="w-[31px] h-10" alt="Logo Icon" src="/group-1.png" />
                <img className="w-[85px] h-[15px]" alt="Logo Text" src="/group.png" />
              </div>
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full text-left px-4 py-3 font-medium text-lg rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? ' bg-gray-50/70'
                      : 'text-gray-700, hover:text-blue-600'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Contact Button */}
            {/* <div className="p-6 border-t border-gray-200/50">
              <button
                className={`w-full  py-3 font-medium text-lg rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-50`}
                style={{ background: 'none' }}
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </button>
            </div> */}
          </div>
        </div>
      )}

      {/* Animations */}
      {/* <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style> */}
    </>
  );
};

export default Navbar;