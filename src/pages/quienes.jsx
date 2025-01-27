import video from "/images/video.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Quienes() {
  return (
    <>
      <Navbar />
      {/* PRESIDENTA */}
      <section className="bg-no flex items-center justify-center bg-quienes-fondo bg-cover bg-repeat xs:h-[114rem] xl:h-full">
        <div className="flex h-full w-full max-w-[1920px] flex-col p-4 xs:h-[100rem] md:gap-0 xl:h-[68rem] xl:flex-row xl:gap-16 xl:p-32">
          {/* IMAGE */}
          <div className="bg-center-top h-full rounded-md bg-gloria bg-cover bg-no-repeat lg:w-full xl:w-[60%]"></div>
          {/* END IMAGE */}
          {/* TEXT */}
          <div className="h-full w-full py-4 text-white">
            <div className="pb-10">
              <h2 className="pb-2 xs:text-[2rem] md:text-[3.4rem]">
                Quiénes Somos
              </h2>
              <p className="h-0.5 w-40 bg-white"></p>
            </div>
            <div className="text-md xs:text-sm">
              <p className="pb-4">
                Fundadora y Presidenta Ejecutiva de 50&50 Gender Leadership,
                consultora especializada en programas de igualdad y liderazgo
                #PorUnMundo5050. La compañía es miembro del clúster por la
                igualdad ClosinGap.
              </p>
              <p className="pb-4">
                Gloria Lomana es presidenta del Consejo Asesor de Forbes Women,
                embajadora de la red española del G20 EMPOWER, miembro de
                International Women's Forum, miembro del Consejo Asesor de la
                Fundación Mujeres por África.
              </p>
              <p className="pb-4">
                Elegida Top 100 Mujeres Líderes 2019, Premio Clara Campoamor del
                Ayuntamiento de Madrid, Premio de Igualdad de la Fundación
                Ortega-Marañón, Premio WEF Ecuador Iconic Women Creating a
                Better World For All, Premio FEDEPE de Comunicación, Premio de
                Igualdad del clúster ClosinGap, Premio Gestor de Personas AEDRH,
                #LinkedInTopVoices Gender Equity, entre otros. Lomana forma
                parte de la Lista Forbes Top 100 Mujeres más Influyentes, y del
                Top 500 mujeres españolas más influyentes de Yo Dona.
              </p>
              <p className="pb-4">
                En su empeño por visibilizar a mujeres líderes, difunde charlas
                bajo la marca #MujeresInspiradoras en El Español.
              </p>
              <p className="pb-4">
                Es miembro del Jurado Princesa de Asturias de Cooperación y
                Humanidades, del Jurado Foro de Marcas renombradas Españolas,
                del Premio Hortensia Roig, de los Fintech Innovation Summit y de
                Madrid Open City, compromiso que repite cada año. También ha
                sido miembro del Jurado Princesa de Asturias de Comunicación y
                Premio del Jaime I de Periodismo.
              </p>
              <p className="pb-4">
                Además, ha sido elegida Vicepresidenta de Madrid Open City para
                la promoción internacional de la ciudad y la Comunidad de
                Madrid.
              </p>
              <p className="pb-4">
                Como periodista, ha sido Directora de Informativos de Antena 3
                Televisión entre los años 2003 y 2016 y Directora General de la
                División de Noticias de Atresmedia desde 2012 a 2016. Escritora,
                es autora de la novela Juegos de Poder y del ensayo
                #ElFindelMiedo. Lomana es analista política y tiene artículos
                publicados en The Objective, El País, El Mundo, ABC y El
                Español, entre otros periódicos y revistas.
              </p>
              <a
                href="https://www.glorialomana.com/"
                target="_blank"
                className="block h-full rounded-md bg-gl-purple p-6 xs:w-[16rem] md:w-[26rem]"
              >
                <h3 className="pb-2 font-bold xs:text-2xl md:text-4xl">
                  Gloria Lomana
                </h3>
                <p className="pb-2 italic xs:text-lg md:text-xl">
                  Presidenta Ejecutiva
                </p>
                <p className="underline xs:text-sm md:text-lg">
                  glorialomana.com
                </p>
              </a>
            </div>
          </div>
          {/* END TEXT */}
        </div>
      </section>
      {/* END PRESIDENTA */}
      {/* PROPOSITOS */}
      <section className="flex flex-wrap items-center justify-center">
        {/* CARDS */}
        <div className="group relative h-[28rem] cursor-pointer overflow-hidden text-white xs:w-[100%] md:w-[50%] xl:w-[20%]">
          <img
            src={video}
            alt="Fondo dinámico"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-150"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gl-blue opacity-80"></div>
          {/* END OVERLAY */}

          {/* CONTENT */}
          <div className="relative z-40 flex h-full flex-col items-center justify-center p-8 text-center">
            <div className="text-4xl font-bold uppercase">
              <h3>Implicar</h3>
            </div>
            {/* ESPACIADO */}
            <div className="py-0 transition-[padding] duration-500 ease-in-out group-hover:py-[10rem]"></div>
            {/* END ESPACIADO */}
            <div className="xs:text-md opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 lg:text-lg">
              <p>a mujeres y hombres en la causa justa de la igualdad</p>
            </div>
          </div>
          {/* END CONTENT */}
        </div>
        {/* END CARDS */}
      </section>
      {/* END PROPOSITOS */}
      <Footer />
    </>
  );
}
