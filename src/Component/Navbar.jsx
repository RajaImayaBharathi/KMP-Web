import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenDesktop, setDropdownOpenDesktop] = useState(false);
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);

  const dropdownRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
  ];

  const companyLinks = [
    "Our Story",
    "Our Blogs",
    "Careers",
    "Testimonials",
    "Locations",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpenDesktop(false);
        setDropdownOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpenMobile(false);
  };

  return (
    <>
      {/* Spacer div for layout - equal to navbar height plus margin-top */}
      <div className="h-20"></div>
      
      {/* Fixed container for horizontal centering */}
      <div className="fixed top-0 left-0 right-0 flex justify-center w-full z-50 my-2">
        <nav className="w-[96%] bg-gradient-to-r from-blue-700 to-blue-900 text-white transition-all duration-300 shadow-md font-manrope rounded-md ">
          {/* Container for content */}
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-center py-2">
              {/* Left: Logo + Nav */}
              <div className="flex items-center space-x-8">
                <img src="/kmp.jpg" alt="Logo" className="w-12 h-auto" />
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="lg:text-[13px] md:text-[12px] text-[11px] hover:text-slate-300 transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => {
                        setDropdownOpenDesktop(!dropdownOpenDesktop);
                        setDropdownOpenMobile(false);
                      }}
                      className="flex items-center gap-1 lg:text-[13px] md:text-[12px] text-[11px] hover:text-slate-300 transition-all duration-300"
                    >
                      Company
                      {dropdownOpenDesktop ? (
                        <ChevronUp className="w-4 h-4 animate-pulse" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {dropdownOpenDesktop && (
                      <div className="absolute mt-2 w-48 bg-white text-gray-800 rounded-md shadow-md z-50 space-y-1 py-1">
                        {companyLinks.map((item) => (
                          <a
                            key={item}
                            href="#"
                            onClick={() => setDropdownOpenDesktop(false)}
                            className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 rounded mx-1 md:text-[12px] text-[11px]"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Login */}
              <div className="hidden md:block">
                <a
                  href="#"
                  className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md text-sm transition-all duration-300"
                >
                  Login
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-blue-800 transition-all duration-300"
                >
                  {menuOpen ? (
                    <X className="w-6 h-6 transition-transform duration-300 transform rotate-90" />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-blue-800 px-4 pb-4 pt-2 space-y-1 shadow-lg rounded-b-md ">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-[12px]"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Dropdown */}
              <div ref={dropdownRef}>
                <button
                  onClick={() => {
                    setDropdownOpenMobile(!dropdownOpenMobile);
                    setDropdownOpenDesktop(false);
                  }}
                  className="w-full flex justify-between items-center text-white hover:bg-blue-700 px-3 py-2 rounded-md text-[12px]"
                >
                  Company
                  {dropdownOpenMobile ? (
                    <ChevronUp className="w-5 h-5 animate-pulse text-[12px]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[12px]" />
                  )}
                </button>

                {dropdownOpenMobile && (
                  <div className="pl-4 pt-1 space-y-1">
                    {companyLinks.map((item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpenMobile(false);
                        }}
                        className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-[10px]"
                      >
                        • {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-[12px] font-medium transition"
              >
                Login
              </a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}