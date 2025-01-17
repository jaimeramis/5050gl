import Navbar from "./components/navbar";
import SocialMedia from "./components/socialMedia";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      {/* CABECERA */}
      <section className="relative w-full bg-cabecera-home bg-cover bg-center bg-no-repeat xs:h-[600px] xs:pt-24 md:h-[920px]">
        <div className="relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
          <div className="bg-gl-red mb-5 rounded-full xs:px-10 xs:py-1 md:px-14 md:py-2">
            <p className="text-shadow font-bold uppercase text-white xs:text-[1rem] md:text-3xl">
              50&50 gl
            </p>
          </div>
          <h1 className="text-shadow-sm pb-8 font-bold leading-none text-white xs:text-[2.8rem] md:text-[5.4rem] lg:text-[7rem]">
            IGUALDAD Y LIDERAZGO
          </h1>
          <p className="leading-tight text-white xs:text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
            Sueña en grande.
            <br /> Los límites solo están en tu mente.
          </p>
          {/* SCROLL DOWN ICO */}
          <div class="mt-20 flex animate-bounce items-center justify-center rounded-full border-[1.5px] border-white px-1 py-1 xs:mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {/* END SCROLL DOWN ICO */}
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-700/70 to-pink-500/70"></div>
      </section>
      {/* END CABECERA */}
      {/* BLOCKS */}
      <h4 className="bg-green-700 py-80 text-center">BLOQUE</h4>
      <h4 className="bg-yellow-700 py-80 text-center">BLOQUE</h4>
      <h4 className="bg-orange-700 py-80 text-center">BLOQUE</h4>
      <SocialMedia />
      <Footer />
    </>
  );
}
