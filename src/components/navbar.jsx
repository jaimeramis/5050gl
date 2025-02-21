import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../data/navigation.json";
const logo = "/images/logo.png";

export default function Navbar({ bg }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Condicional para que cuando se haga Scroll se cambie el background a negro:
  let scrollBg = "";

  if (isScrolled) {
    scrollBg = "lg:bg-black lg:bg-opacity-100";
  }
  if (isOpen) {
    scrollBg = "bg-gl-pink";
  }

  // Acción de abrir y cerrar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detectar si se hace scroll:
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detectar cuando la pantalla cambia de tamaño y cerrar el menú en pantallas grandes:
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Cerrar el menú en pantallas grandes
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Desactivar el scroll cuando el menú esté abierto en móviles
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Desactivar el scroll
    } else {
      document.body.style.overflow = ""; // Restaurar el scroll
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`lg:${bg} fixed z-50 flex w-full flex-col justify-between px-4 py-4 text-white md:px-6 lg:flex-row lg:items-center ${scrollBg} lg:transition lg:duration-300 lg:ease-out`}
      >
        <div className="flex justify-between">
          <Link key="0" to="/">
            <img
              className="relative z-40 w-full max-w-28 xs:max-w-[100px]"
              src={logo}
              alt="Logo 50&50gl"
            />
          </Link>
          <button className="block lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <div className="pr-1">
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
              </div>
            ) : (
              <div className="rounded bg-gl-blue1 px-2 py-1">
                <svg
                  className="block h-10 max-w-[34px] fill-current"
                  viewBox="0 0 40 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path transform="translate(0, -2)" d="M0 3h40v2H0V3z"></path>
                  <path transform="translate(0, 0)" d="M0 9h40v2H0V9z"></path>
                  <path transform="translate(0, 2)" d="M0 15h40v2H0v-2z"></path>
                </svg>
              </div>
            )}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block opacity-100" : "hidden opacity-0"
          } lg:block lg:opacity-100`}
        >
          <div className="flex flex-col items-center py-6 text-center text-3xl lg:flex-row lg:gap-6 lg:text-[16px]">
            {Object.values(routes).map(({ key, href, name }) => (
              <Link key={key} to={href} className="group relative py-4 lg:py-0">
                {name}
                <p className="absolute bottom-1.5 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:right-0 group-hover:w-full"></p>
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
