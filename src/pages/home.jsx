import Navbar from "../components/navbar";
import InfiniteText from "../components/infiniteText";
import Carrousel from "../components/carrousel";
import SocialMedia from "../components/socialMedia";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hd:h-[60rem] supra:h-screen relative flex flex-col items-center justify-center bg-cabecera-home bg-cover bg-center bg-no-repeat text-center text-white xs:h-[48rem] md:h-screen">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gl-pink opacity-80"></div>
        {/* END Overlay */}

        <h1 className="z-40 uppercase xs:text-[48px] md:text-[100px] lg:text-[140px]">
          <span
            className="block h-0 animate-expand overflow-hidden"
            style={{ animationDelay: "0.4s" }}
          >
            Igualdad
          </span>
          <span
            className="block h-0 animate-expand overflow-hidden"
            style={{ animationDelay: "0.6s" }}
          >
            y
          </span>
          <span
            className="block h-0 animate-expand overflow-hidden"
            style={{ animationDelay: "0.7s" }}
          >
            liderazgo
          </span>
        </h1>

        <p
          className="z-40 w-full max-w-[18rem] translate-y-4 animate-fade-in pt-12 opacity-0 xs:text-sm sm:max-w-[40rem] md:text-lg"
          style={{ animationDelay: "1.8s" }}
        >
          En <strong>50&50</strong> practicamos la diversidad y contribuimos a
          lograr una sociedad igualitaria, diversa y sostenible. Promovemos
          acciones de Igualdad. Visibilizamos a Mujeres Líderes. Formamos a las
          líderes del futuro. Creamos Coaching y Comunicación. Generamos nuevas
          oportunidades.
        </p>
        <div
          className="z-40 flex animate-fade-in items-center justify-center pt-10 opacity-0 xs:gap-0 md:gap-4"
          style={{ animationDelay: "2s" }}
        >
          <SocialMedia color="fill-white" />
        </div>
      </section>
      <InfiniteText />
      <Carrousel />
      <section className="align-center flex items-center justify-center bg-gray-200 py-8 xs:gap-0 md:gap-4">
        <SocialMedia color="fill-black" />
      </section>
      <Footer />
    </>
  );
}
