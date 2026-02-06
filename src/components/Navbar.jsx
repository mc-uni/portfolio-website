import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        {/*<div className="text-2xl font-heading font-bold text-primary cursor-pointer">
          UguruPortfolio
        </div>*/}
        <a
          href="#home"
          className="text-2xl font-heading font-bold text-primary cursor-pointer"
        >
          UguruPortfolio
        </a>


        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">{open ? "✖" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
         <ul
  className={`md:hidden bg-white shadow-md px-6 py-4 space-y-4 transition-all duration-300 ${
    open ? "block" : "hidden"
  }`}
>
{/*className="md:hidden bg-white shadow-md px-6 py-4 space-y-4"*/}
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
