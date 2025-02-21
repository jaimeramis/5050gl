import Navbar from "../components/navbar";
import Footer from "../components/footer";
import proposito from "../data/propositos.json";
import asesores from "../data/asesores.json";

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
                International Women&apos;s Forum, miembro del Consejo Asesor de
                la Fundación Mujeres por África.
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
        {Object.values(proposito).map(
          ({ key, title, description, bg, image }) => (
            <div
              key={key}
              className="group relative h-[28rem] cursor-pointer overflow-hidden text-white xs:w-[100%] md:w-[50%] xl:w-[20%]"
            >
              <img
                src={image}
                alt="Fondo propósito"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-150"
              />

              {/* OVERLAY */}
              <div className={`${bg} absolute inset-0 opacity-80`}></div>
              {/* END OVERLAY */}

              {/* CONTENT */}
              <div className="relative z-40 flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="text-4xl font-bold uppercase">
                  <h3>{title}</h3>
                </div>
                {/* ESPACIADO */}
                <div className="py-0 transition-[padding] duration-500 ease-in-out group-hover:py-[8rem]"></div>
                {/* END ESPACIADO */}
                <div className="xs:text-md opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 lg:text-[1rem]">
                  <p>{description}</p>
                </div>
              </div>
              {/* END CONTENT */}
            </div>
          ),
        )}
        {/* END CARDS */}
      </section>
      {/* END PROPOSITOS */}
      {/* ASESORES */}
      <section className="bg-gl-sky xs:py-10 md:py-20">
        <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col">
          {/* TEXT */}
          <div className="h-full w-full text-center text-white">
            <div className="xs:pb-10 md:pb-24">
              <h2 className="pb-2 xs:text-[2rem] md:text-[3.4rem]">
                Consejo Asesor
              </h2>
              <p className="mx-auto h-0.5 w-40 bg-white"></p>
            </div>
          </div>
          {/* END TEXT */}
          {/* CARDS LIST */}
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {Object.values(asesores).map(
              ({ key, name, description, image, linkedin }) => (
                // Tarjeta para cada asesor
                <div
                  key={key}
                  className="h-[28rem] overflow-hidden rounded-md bg-gray-200 text-center text-black xs:w-full sm:w-[20rem] lg:w-[22rem]"
                >
                  <img
                    className="h-[14rem] w-full object-cover"
                    src={image}
                    alt={name}
                  />
                  {/* INFO */}
                  <div className="flex h-1/2 flex-col items-center justify-center p-4">
                    <h3 className="pb-4 font-bold xs:text-xl sm:text-2xl">
                      {name}
                    </h3>
                    <p className="pb-4">{description}</p>
                    <div className="flex items-center justify-center">
                      <a
                        href={linkedin}
                        target="_blank"
                        className="cursor-pointer rounded-full p-3 transition duration-300 ease-in-out hover:bg-linkedin hover:fill-white"
                        rel="noopener noreferrer" // Seguridad adicional
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                        >
                          <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
          {/* END CARDS LIST */}
        </div>
      </section>
      {/* END ASESORES */}

      <Footer />
    </>
  );
}
