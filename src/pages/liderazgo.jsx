import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AccordionItem = (props) => {
  const { title, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border-b border-white">
      <button
        className="flex w-full items-center justify-between px-4 text-left text-2xl xs:py-2 lg:py-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          } w-full max-w-[30px]`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default function Liderazgo() {
  const items = [
    {
      title: (
        <h2 className="pb-2 xs:text-[1.6rem] lg:text-[2.8rem]">
          Por qué Acciones de Liderazgo
        </h2>
      ),
      content: (
        <ul className="text-md list-disc pl-5">
          <li className="pb-2">
            En el mundo empresarial hay mujeres con altas competencias que es
            preciso visibilizar para
            <strong>
              situar a la compañía en el ranking de buenas prácticas
            </strong>
            .
          </li>
          <li className="pb-2">
            <strong>
              La escucha de las mujeres acelera el camino a la igualdad y genera
              referentes
            </strong>
            para niñas y jóvenes en base a certidumbres de meritocracia,
            superación y consecución de logros.
          </li>
          <li className="pb-2">
            Apoyar estas políticas refuerza los liderazgos inclusivos, la marca
            y la reputación.
          </li>
        </ul>
      ),
    },
    {
      title: (
        <h2 className="pb-2 xs:text-[1.6rem] lg:text-[2.8rem]">
          ¿En qué te ayudamos?
        </h2>
      ),
      content: (
        <ul className="text-md list-disc pl-5">
          <li className="pb-2">
            En 50&50 GL generamos acciones en torno a la
            <strong>
              comunicación para visibilizar el trabajo de las mujeres líderes
            </strong>
            , reforzando su networking y conexión en red.
          </li>
          <li className="pb-2">
            Asimismo,
            <strong>posicionamos mujeres referentes para inspirar</strong> a
            otras empresas y generar confianza en las líderes del futuro.
          </li>
          <li className="pb-2">
            Adaptamos acciones encaminadas a la visibilidad de liderazgos
            femeninos.
          </li>
        </ul>
      ),
    },
    {
      title: (
        <h2 className="pb-2 xs:text-[1.6rem] lg:text-[2.8rem]">
          ¿Cómo lo hacemos?
        </h2>
      ),
      content: (
        <ul className="text-md list-disc pl-5">
          <li className="pb-2">
            Analizamos el mercado, y en concreto el sector, y su potencial
            desarrollo inclusivo, responsable, sostenible y ético de futuro.
          </li>
          <li className="pb-2">
            <strong>Medimos el potencial propio a desarrollar</strong> en línea
            con el ODS 5 de Igualdad y el conjunto de ODS con especial atención
            al bienestar de las Personas, la Sostenibilidad del Planeta, las
            Alianzas e las Instituciones.
          </li>
          <li className="pb-2">
            Recomendamos actuaciones individualizadas según contexto propio y
            ajeno.
          </li>
          <li className="pb-2">
            Con la más avanzada tecnología,
            <strong>trabajamos para evitar intrusiones</strong>
            ajenas que pudieran mermar el potencial de tu empresa o liderazgo.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      {/* CABECERA */}
      <section className="relative flex h-screen flex-col items-center justify-center bg-cabecera-liderazgo bg-cover bg-bottom bg-no-repeat text-center text-white sm:h-[56rem] md:h-screen hd:h-[60rem] supra:h-screen">
        <div className="absolute inset-0 bg-gl-sky opacity-80"></div>

        <h1
          className="z-40 w-[90%] animate-fade-in uppercase opacity-0 sm:text-[30px] md:text-[2.6rem] supra:text-[3.4rem]"
          style={{ animationDelay: ".5s" }}
        >
          El liderazgo requiere de habilidades que se entrenan.
          <br /> Solo tienes que creer en ti.
        </h1>
        <span className="md:py-20 lg:py-20 hd:py-10 supra:py-36"></span>
        <p
          className="z-40 w-full max-w-[18rem] translate-y-4 animate-fade-in pt-12 !leading-tight opacity-0 sm:max-w-[40rem] md:text-[1rem] lg:text-[1.2rem] hd:text-[1rem] supra:text-[1.2rem]"
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

      {/* ACCORDION */}
      <section className="flex items-center justify-center bg-gl-purple text-white xs:px-4 xs:py-10 md:px-10 lg:py-20">
        <div className="w-full max-w-[1700px] overflow-hidden">
          {items.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      </section>
      {/* END ACCORDION */}

      <Footer />
    </>
  );
}
