import { useState, useRef } from "react";
import noticias from "../data/noticias.json"; // Importa el archivo JSON

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxVisibleSlides, setMaxVisibleSlides] = useState(3); // Define cuántos slides se deben mostrar

  const startX = useRef(0); // Posición inicial del cursor/táctil
  const isDragging = useRef(false); // Si está en proceso de arrastrar
  const slideWidth = useRef(0); // Ancho de cada slide
  const carouselRef = useRef(null); // Referencia del contenedor del carrusel

  // Aquí usamos el archivo 'noticias' importado en vez de la variable 'slides'
  const slides = noticias.slice(0, maxVisibleSlides); // Limita el número de slides visibles

  // Avanzar al siguiente slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Volver al slide anterior
  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  // Funciones de arrastre
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const moveX = (e.clientX || e.touches[0].clientX) - startX.current;
    slideWidth.current = carouselRef.current.clientWidth;
    if (moveX > slideWidth.current / 3) {
      goToPreviousSlide();
      isDragging.current = false;
    } else if (moveX < -slideWidth.current / 3) {
      goToNextSlide();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => handleMouseDown(e);
  const handleTouchMove = (e) => handleMouseMove(e);
  const handleTouchEnd = () => handleMouseUp();

  return (
    <section className="bg-white">
      <div className="px-20 xs:px-4 xs:py-8 lg:py-32">
        <div className="pb-20">
          <h2 className="text-center font-bold uppercase xs:pb-4 xs:text-4xl lg:text-[4rem] xl:pb-8">
            ÚLTIMAS NOVEDADES
          </h2>
          <p className="mx-auto h-0.5 w-52 bg-black"></p>
        </div>

        <div
          ref={carouselRef}
          className="relative overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Desplazamiento según el índice actual
            }}
          >
            {slides.map((slide) => (
              <div key={slide.key} className="w-full flex-shrink-0">
                <div className="mx-auto grid w-full bg-gray-50 text-center md:h-auto md:grid-cols-1 lg:max-w-[860px] xl:h-[680px] xl:max-w-[1080px] xl:grid-cols-2">
                  {/* BLOQUE DE IMAGEN */}
                  <div className="relative flex h-[300px] items-center lg:h-[300px] xl:h-auto">
                    <div
                      className={`absolute inset-0 ${slide.image} bg-cover bg-center bg-no-repeat`} // Aplicar la clase de fondo
                    ></div>
                  </div>
                  {/* FIN BLOQUE DE IMAGEN */}

                  {/* BLOQUE DE TEXTO */}
                  <div className="h-[300px] px-6 py-8 text-left lg:h-[450px] xl:h-full">
                    <span className="block pb-5 text-sm xs:text-xs">
                      {slide.date}
                    </span>
                    <a
                      href={slide.link}
                      className="block pb-5 hover:text-gl-sky"
                    >
                      <h2 className="break-words font-bold uppercase leading-tight xs:text-[1rem] lg:text-[2.8rem]">
                        {slide.title}
                      </h2>
                    </a>
                    <p className="text-md line-clamp-4 overflow-hidden overflow-ellipsis xs:text-xs sm:text-sm">
                      {slide.description}
                    </p>
                  </div>
                  {/* FIN BLOQUE DE TEXTO */}
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLES DE NAVEGACIÓN */}

          <button
            onClick={goToPreviousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gl-purple p-3 text-white xs:hidden xl:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gl-purple p-3 text-white xs:hidden xl:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* END CONTROLES DE NAVEGACIÓN */}
        </div>
      </div>
    </section>
  );
}
