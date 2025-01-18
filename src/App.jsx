import Navbar from "./components/navbar";
import ScrollDownIcon from "./components/scrollDownIcon";
import Carrousel from "./components/carrousel";
import SocialMedia from "./components/socialMedia";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      {/* CABECERA */}
      <section className="relative w-full bg-cabecera-home bg-cover bg-center bg-no-repeat xs:h-[600px] xs:pt-24 md:h-[920px]">
        <div className="relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
          <div className="mb-5 rounded-full bg-gl-red xs:px-10 xs:py-1 md:px-14 md:py-2">
            <p className="font-bold uppercase text-white text-shadow xs:text-[1rem] md:text-3xl">
              50&50 gl
            </p>
          </div>
          <h1 className="pb-8 font-bold uppercase leading-none text-white text-shadow-sm xs:text-[2.8rem] md:text-[5.4rem] lg:text-[7rem]">
            IGUALDAD Y LIDERAZGO
          </h1>
          <p className="leading-tight text-white xs:text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
            Sueña en grande.
            <br /> Los límites solo están en tu mente.
          </p>
          {/* SCROLL DOWN ICO */}
          <ScrollDownIcon />
          {/* END SCROLL DOWN ICO */}
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-700/70 to-pink-500/70"></div>
      </section>
      {/* END CABECERA */}
      {/* CARROUSEL */}
      <Carrousel />
      {/* END CARROUSEL */}
      {/* BLOCKS */}

      <SocialMedia />
      <Footer />
    </>
  );
}
