import Navbar from "./components/old/navbar";
import Navbar2 from "./components/navbar2";
import ScrollDownIcon from "./components/scrollDownIcon";
import Carrousel from "./components/carrousel";
import SocialMedia from "./components/socialMedia";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar2 />
      <section className="relative flex h-[50rem] flex-col items-center justify-center bg-cabecera-home bg-cover bg-center bg-no-repeat text-center text-white md:h-screen">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gl-pink opacity-80"></div>
        {/* END Overlay */}
        <h1 className="z-40 uppercase xs:text-[48px] md:text-[100px] lg:text-[140px]">
          <span
            className="animate-expand block h-0 overflow-hidden"
            style={{ animationDelay: "0.4s" }}
          >
            Igualdad
          </span>
          <span
            className="animate-expand block h-0 overflow-hidden"
            style={{ animationDelay: "0.6s" }}
          >
            y
          </span>
          <span
            className="animate-expand block h-0 overflow-hidden"
            style={{ animationDelay: "0.7s" }}
          >
            liderazgo
          </span>
        </h1>

        <p
          className="animate-fade-in z-40 w-full max-w-[18rem] translate-y-4 pt-12 opacity-0 xs:text-sm sm:max-w-[40rem] md:text-lg"
          style={{ animationDelay: "1.8s" }}
        >
          En <strong>50&50</strong> practicamos la diversidad y contribuimos a
          lograr una sociedad igualitaria, diversa y sostenible. Promovemos
          acciones de Igualdad. Visibilizamos a Mujeres Líderes. Formamos a las
          líderes del futuro. Creamos Coaching y Comunicación. Generamos nuevas
          oportunidades.
        </p>

        <ScrollDownIcon />
      </section>
      <SocialMedia />
      <Footer />
    </>
  );
}
