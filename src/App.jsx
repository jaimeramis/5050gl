import Navbar from "./components/navbar";
import SocialMedia from "./components/socialMedia";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      {/* CABECERA */}
      <section className="bg-cabecera-home relative w-full bg-cover bg-center bg-no-repeat xs:h-[750px] md:h-[920px]">
        <div className="relative z-10 mx-auto flex h-full items-center justify-center text-center">
          <h1 className="text-[5rem] font-bold text-white">
            ESTO ES UN TÍTULO DE PRUEBA
          </h1>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600/70 to-pink-500/70"></div>
      </section>

      {/* END CABECERA */}
      {/* BLOCKS */}
      <h4 className="bg-green-700 py-40 text-center">BLOQUE</h4>
      <h4 className="bg-yellow-700 py-40 text-center">BLOQUE</h4>
      <h4 className="bg-orange-700 py-40 text-center">BLOQUE</h4>
      <SocialMedia />
      <Footer />
    </>
  );
}
