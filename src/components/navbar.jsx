import { useState, useEffect } from "react";
//Importar las imagenes:
import logo from "/images/logo.png";

export default function Navbar() {
  //Afecta a la apertura y cierre del Menú:
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Afecta al efecto de hover de la navegación del Menú:
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (index) => setHoveredLink(index);
  const handleMouseLeave = () => setHoveredLink(null);

  //Afecta a la apertura y cierre del Menú:
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Desactiva scroll del body
    } else {
      document.body.style.overflow = ""; // Reactiva scroll del body
    }

    return () => {
      document.body.style.overflow = ""; // Limpieza
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="fixed z-40 flex h-28 w-full items-center justify-between bg-black px-4">
        <div className="mx-auto flex w-full items-center justify-between sm:max-w-[800px] md:max-w-[784px]">
          <img
            className="sm:max-w-max-w-[118px] w-full max-w-28"
            src={logo}
            alt="Logo 50&50gl"
          />

          <button
            onClick={toggleModal}
            className="flex items-center text-gl-purple"
          >
            <h2 className="pr-4 text-[16px] uppercase text-white">Menú</h2>
            <svg
              className="block h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="-translate-x-1" d="M0 3h20v2H0V3z"></path>
              <path className="translate-x-1" d="M0 9h20v2H0V9z"></path>
              <path className="-translate-x-1" d="M0 15h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* MOBILE MODAL NAV */}
      {isModalOpen && (
        <div className="fixed z-50 h-screen w-full overflow-y-auto bg-black">
          {/* MOBILE HEADER */}
          <section className="flex h-28 justify-between px-4">
            <div className="mx-auto flex w-full max-w-[1096px] items-center justify-between sm:max-w-[800px]">
              <img
                className="sm:max-w-max-w-[118px] w-full max-w-28"
                src={logo}
                alt="Logo 50&50gl"
              />
              {/* MOBILE CLOSE ICON */}
              <button
                onClick={toggleModal}
                className="rounded-full bg-gl-purple p-2 text-white"
                aria-label="Cerrar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </button>
              {/* END MOBILE CLOSE ICON */}
            </div>
          </section>
          {/* END MOBILE HEADER */}
          {/* NAVIGATION */}
          <nav className="mx-auto flex w-full max-w-[1080px] flex-col items-center justify-center px-4 py-4 text-white sm:max-w-[800px]">
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
                className="flex w-full transition duration-300 ease-in-out hover:text-gl-sky xs:pb-2 xs:text-[2rem] sm:text-[3.5rem] md:text-[4rem]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`mt-6 block h-8 bg-gl-sky text-gl-sky transition-all duration-300 ${
                    hoveredLink === index ? "lg:mr-3 lg:w-14" : "lg:mr-0 lg:w-0"
                  }`}
                ></span>
                <span className="align-top">{link.text}</span>
              </a>
            ))}
          </nav>
          {/* END NAVIGATION */}
        </div>
      )}
      {/* END MOBILE MODAL NAV */}
    </>
  );
}
