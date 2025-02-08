import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Liderazgo() {
  return (
    <>
      <Navbar />
      {/* CABECERA */}
      <section className="relative flex h-screen flex-col items-center justify-center bg-cabecera-liderazgo bg-cover bg-bottom bg-no-repeat text-center text-white xs:h-[56rem] md:h-screen hd:h-[60rem] supra:h-screen">
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gl-sky opacity-80"></div>
        {/* END OVERLAY */}

        <h1
          className="z-40 w-[90%] animate-fade-in uppercase opacity-0 xs:text-[30px] md:text-[2.6rem] supra:text-[3.4rem]"
          style={{ animationDelay: ".5s" }}
        >
          El liderazgo requiere de habilidades que se entrenan.
          <br /> Solo tienes que creer en ti.
        </h1>
        <span className="md:py-20 lg:py-20 hd:py-10 supra:py-36"></span>
        <p
          className="z-40 w-full max-w-[18rem] translate-y-4 animate-fade-in pt-12 !leading-tight opacity-0 xs:text-sm sm:max-w-[40rem] md:text-[1rem] lg:text-[1.2rem] hd:text-[1rem] supra:text-[1.2rem]"
          style={{ animationDelay: ".7s" }}
        >
          La <strong>sociedad</strong> necesita referentes femeninos, para
          construir el presente y el futuro con la participación del alma de las
          mujeres.
          <br />
          <br />
          La <strong>visibilidad de liderazgos femeninos</strong> es un
          acelerador de igualdad, diversidad e inclusión.
          <br />
          <br />
          Las mujeres introducen innumerables habilidades a la gestión que se
          necesitan exponer en la sociedad y en la empresa, entre ellas altas
          dosis de pragmatismo, mirada pausada, generación de confianza y
          capacidad para la resolución de conflictos.
        </p>
      </section>
      {/* END CABECERA */}
      <Footer />
    </>
  );
}
