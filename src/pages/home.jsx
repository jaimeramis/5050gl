//Importar Imágenes
import video from "/images/video.jpg";

import Navbar from "../components/navbar";
import Quote from "../components/quote";
import InfiniteText from "../components/infiniteText";
//import Carrousel from "../components/carrousel";
import SocialMedia from "../components/socialMedia";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* CABECERA */}
      <section className="relative flex flex-col items-center justify-center bg-cabecera-home bg-cover bg-center bg-no-repeat text-center text-white xs:h-[48rem] md:h-screen hd:h-[60rem] supra:h-screen">
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gl-pink opacity-80"></div>
        {/* END OVERLAY */}

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
      {/* END CABECERA */}
      <InfiniteText />
      {/* PROMO */}
      <section>
        <div className="flex flex-col p-4 md:gap-0 xl:flex-row xl:gap-16 xl:p-32">
          {/* IMAGE */}
          <div className="flex w-full justify-center">
            <a
              href="https://www.youtube.com/watch?v=Pi88-fC0kq8"
              target="_blank"
            >
              <div className="group relative">
                <img
                  className="mx-auto w-full rounded-md"
                  src={video}
                  alt="III EDICIÓN DE #WomenXWomen 2024"
                />
                <div className="absolute left-[53%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform">
                  <svg
                    className="transfor w-10 fill-gl-red duration-300 ease-in-out group-hover:w-36 md:w-20"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        class="st0"
                        d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256
		C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031
		c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031
		l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          {/* END IMAGE */}
          {/* TEXT */}
          <div className="h-full w-full py-4">
            <div className="pb-10">
              <h2 className="pb-2 xs:text-[2rem] md:text-[3.4rem]">
                ¡MIRA! ASÍ HA SIDO LA III EDICIÓN DE{" "}
                <span className="italic text-gl-purple">#WomenXWomen</span> 2024
              </h2>
              <p className="h-0.5 w-40 bg-black"></p>
            </div>
            <div className="text-md xs:text-sm">
              <p className="pb-8">
                Un centenar de mujeres han acelerado su liderazgo con el
                mentoring <span className="italic">#WomenXWomen</span> en
                noviembre de 2024. Tras finalizarlo con éxito, han recibido su
                certificado firmado por todas las empresas impulsoras y las
                instituciones colaboradoras.
              </p>
              <p className="pb-8">
                El nivel de esta edición ha sido sobresaliente, con mujeres que
                han compartido su sabiduría, su visión y, sobre todo, su pasión
                por impulsar al resto. Estas son las mujeres líderes que han
                impartido excelentes Masterclasses:
              </p>
              <ul className="list-inside list-disc pb-8 pl-4">
                <li>
                  Cristina San José, Chief Credit Officer de Grupo Santander
                </li>
                <li>María Benjumea, Fundadora y Presidenta de South Summit</li>
                <li>
                  Rosario Sierra, Dir.ª Negocio Corporativo, nº 2 en LinkedIn
                  España y Portugal.
                </li>
                <li>
                  Isabel Linares, Fundadora Programa de Consejeras{" "}
                  <span className="italic">«Women to Watch»</span> de PwC.
                </li>
                <li>Alicia Asín, Cofundadora y CEO de Libelium</li>
                <li>Beatriz Corredor, Presidenta de Redeia</li>
                <li>Patricia Benito, Directora General de Openbank</li>
                <li>
                  Luz Usamentiaga, D.G. de Regulación, AA.PP. y Sostenibilidad
                  de MasOrange
                </li>
                <li>Laura Múgica, Directora General de Unidad Editorial</li>
                <li>
                  Marta Moreno, Dir.ª Asuntos Corporativos y Acceso al Mercado
                  de AstraZeneca
                </li>
                <li>Carmen González Gens, Vicepresidenta de Huawei</li>
              </ul>
              <p className="pb-8">
                En conversación con nuestra Presidenta, <b>Gloria Lomana</b>.
              </p>
              <p>
                ¿Te apuntas a la VI edición? Guárdate la fecha:{" "}
                <b>Noviembre 2025</b>.
              </p>
            </div>
          </div>
          {/* END TEXT */}
        </div>
      </section>
      {/* END PROMO */}
      {/* QUOTE */}
      <Quote
        bg="bg-quote-1"
        name='"Los sesgos inconscientes de género son los grandes obstáculos para
            la promoción profesional de la mujer"'
      />
      {/* END QUOTE */}
      {/* SOCIAL MEDIA */}
      <section className="align-center flex items-center justify-center bg-gray-200 py-8 xs:gap-0 md:gap-4">
        <SocialMedia color="fill-black" />
      </section>
      {/* END SOCIAL MEDIA */}
      <Footer />
    </>
  );
}
