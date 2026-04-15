import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#edecfb] jakarta_medium backdrop-blur-2xl border-b border-indigo-50">
      <div className="mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          
          <div className="flex items-center gap-10 lg:gap-12">
            
           
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img src="/assets/homlyicon.png" alt="logo" />
              </div>
              <span className="text-xl font-bold text-indigo-950">
                Homly
              </span>
            </div>

           
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((item) => (
                <div
                  key={item.label}
                  className="relative flex items-center  cursor-pointer"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                >
                  <a
                    href={item.href}
                    className="text-base font-medium px-1 text-slate-900 hover:text-indigo-600 transition"
                  >
                    {item.label}
                  </a>

                  {item.dropdown && (
                    <>
                      <ChevronDown size={16} />

                     
                      {openDropdown === item.label && (
                        <div className=" ">
                          
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

     
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-3 text-base text-slate-950 border-2 border-[#E0DEF7] rounded-lg hover:bg-gray-50 transition">
              Login
            </button>

            <button className="px-6 py-3 text-base text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition shadow-sm hover:shadow-md">
              Sign up
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <img src="/assets/menu.png" alt="menu" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2">
          {NAV_LINKS.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                {item.label}
              </a>

              
              {item.dropdown && (
                <div className="ml-4">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-3 py-1 text-sm text-gray-500 hover:text-indigo-600"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full px-4 py-2 text-sm text-slate-950 border border-[#E0DEF7] rounded-lg">
              Login
            </button>
            <button className="w-full px-4 py-2 text-sm text-white bg-indigo-500 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}