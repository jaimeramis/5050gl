//Importar imagenes:
import logo from "/images/logo.png";
import React, { useState } from "react";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`fixed z-50 flex w-full flex-col justify-between px-4 py-4 text-white transition-all duration-300 ease-in-out lg:flex-row lg:items-center lg:bg-inherit lg:px-12 ${
          isOpen ? "bg-gl-pink" : "lg:bg-transparent"
        }`}
      >
        <div className="flex justify-between">
          <img
            className="w-full max-w-28 sm:max-w-[118px]"
            src={logo}
            alt="Logo 50&50gl"
          />
          <button className="block lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              <svg
                className="block h-10 max-w-[40px] fill-current"
                viewBox="0 0 40 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path transform="translate(0, -2)" d="M0 3h40v2H0V3z"></path>
                <path transform="translate(0, 0)" d="M0 9h40v2H0V9z"></path>
                <path transform="translate(0, 2)" d="M0 15h40v2H0v-2z"></path>
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`${
            isOpen
              ? "block translate-y-0 opacity-100"
              : "translate-y-[-50rem] opacity-0"
          } lg:block lg:translate-y-0 lg:opacity-100 ${isOpen ? "transition-all duration-500 ease-in-out" : ""}`}
        >
          <div className="flex flex-col items-center py-6 text-center text-3xl lg:flex-row lg:gap-6 lg:text-[16px]">
            {[
              { text: "Quienes somos", href: "/quienes-somos" },
              { text: "Liderazgo", href: "/liderazgo" },
              { text: "#Chicasimparables", href: "/chicas-imparables" },
              { text: "WomenxWomen", href: "/womenxwomen" },
              { text: "Noticias", href: "/noticias" },
              { text: "Contacto", href: "/contacto" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group relative py-4 lg:py-0"
              >
                {link.text}
                <p className="absolute bottom-1.5 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:right-0 group-hover:w-full"></p>
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
