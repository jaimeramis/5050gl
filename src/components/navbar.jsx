import { useState, useEffect } from "react";

export default function Prueba() {
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
      <section className="bg-black bg-opacity-100 flex h-32 items-center justify-between fixed w-full z-40 px-4">
        <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between">
          <img
            className="w-full max-w-[118px] sm:max-w-32"
            src="src/static/img/logo.png"
            alt="Logo 50&50gl"
          />

          <button
            onClick={toggleModal}
            className="flex items-center text-[#773bd4]"
          >
            <h2 className="text-[16px] sm:text-[18px] pr-4 uppercase text-white">
              Menú
            </h2>
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
        <div className="fixed w-full h-screen bg-white z-50">
          {/* MOBILE HEADER */}
          <section className="flex justify-between h-32 sm:px-0 px-4">
            <div className="mx-auto flex w-full max-w-[1096px] items-center justify-between">
              <img
                className="w-full max-w-[118px] sm:max-w-32"
                src="src/static/img/logo.png"
                alt="Logo 50&50gl"
              />

              <button
                onClick={toggleModal}
                className="text-white bg-gl-purple p-2 rounded-full"
                aria-label="Cerrar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
            </div>
          </section>
          {/* END MOBILE HEADER */}
          {/* NAVIGATION */}
          <nav className="flex flex-col items-center justify-center mx-auto w-full max-w-[1080px] px-4 py-4">
            {[
              "Quienes somos",
              "Liderazgo",
              "#Chicasimparables",
              "WomenxWomen",
              "Noticias",
              "Contacto",
            ].map((text, index) => (
              <a
                key={index}
                href="#"
                className="w-full pb-4 text-[1.8rem] sm:text-[4rem] hover:text-gl-sky transition duration-300 ease-in-out flex items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`bg-gl-sky text-gl-sky h-10 block transition-all duration-300 
                    ${hoveredLink === index && "sm:w-16 sm:mr-3"} 
                    ${hoveredLink !== index && "sm:w-0 sm:mr-0"}`}
                ></span>
                <span>{text}</span>
              </a>
            ))}
          </nav>
          {/*END NAVIGATION */}
        </div>
      )}
      {/* END MOBILE MODAL NAV */}
    </>
  );
}
