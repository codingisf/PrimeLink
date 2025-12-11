import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const StickyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // default active

  // Close the menu automatically if screen width >= 960px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = ["Home", "About", "Services", "Industries"];

  return (
    <nav className="relative top-3 mx-auto z-100  w-[90%] rounded-xl bg-white/10 backdrop-blur-md shadow-lg px-6 py-3 transition-all duration-300">
      <div className="flex items-center justify-between text-white">
        {/* LOGO */}
        <div className="flex items-center flex-col">
      
          <img src="/logo.svg" alt="Logo" className="w-14"/>
        <Link to="/" className="text-2xl font-bold text-center">
          PrimeLink <br /> Manpower & Staffing
        </Link>
        </div>
        {/* <p>Manpower & staffing</p> */}
{/* </div> */}
        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 ">
          <ul className="flex items-center gap-8 ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setActiveItem(item)} 
                  className={`px-4 py-2 rounded-[40px] border transition ${
                    activeItem === item
                      ? "border-white" 
                      : "border-transparent hover:border-white" 
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

             <Link to={'/contact'}>
             <a href="/contact">
          <button className="ml-4 rounded-lg bg-[#152e44] border border-[#152e44] hover:cursor-pointer hover:bg-transparent px-4 py-2 text-sm font-semibold text-white  transition-colors" >
            Contact us
          </button>
          </a>
            </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden flex items-center justify-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className=""
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button className="mt-4 w-full rounded-lg bg-[#152e44] px-4 py-2 text-sm font-semibold text-white transition-colors">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default StickyNavbar;
