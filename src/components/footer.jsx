//Importar imagenes:
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import routes from "../data/navigation.json";

export default function Footer() {
  return (
    <>
      <footer className="static bottom-0 bg-black bg-opacity-100 py-10 text-white">
        <div className="container mx-auto max-w-[80rem] pb-10 xs:px-10 sm:px-20">
          <div className="grid grid-cols-1 justify-center gap-10 sm:gap-6 md:grid-cols-3">
            {/* LOGO */}
            <div className="mx-auto">
              <img
                className="w-full max-w-56 sm:max-w-[220px]"
                src={logo}
                alt="Logo 50&50gl"
              />
            </div>
            {/* END LOGO */}
            {/* ENLACES */}
            <div className="flex flex-col gap-4 md:mx-auto md:gap-3">
              {Object.values(routes).map(({ key, href, name }) => (
                <Link key={key} to={href} className="hover:text-gray-500">
                  {name}
                </Link>
              ))}
            </div>
            {/* END ENALCES */}
            {/* INFORMACIÓN */}
            <div>
              <h3 className="pb-4 font-bold">50&50 Gender Leadership</h3>
              <p className="pb-2">Av. de Alfonso XIII, 200 Madrid (28016)</p>
              <p className="pb-2">660 91 55 05</p>
              <p className="pb-2">secretaria@5050gl.com</p>
            </div>
            {/* END INFORMACIÓN */}
          </div>
        </div>
        {/* LEGAL */}
        <div className="flex flex-col justify-center gap-4 pb-8 text-sm xs:flex-col xs:items-start xs:px-10 sm:px-20 md:flex-row md:gap-4">
          <a href="/privacidad" className="group relative">
            Política de Privacidad
            <p className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:right-0 group-hover:w-full"></p>
          </a>
          <a href="/aviso" className="group relative">
            Aviso Legal
            <p className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:right-0 group-hover:w-full"></p>
          </a>
          <a href="/corrupcion" className="group relative">
            Política contra la Corrupción y el Fraude
            <p className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:right-0 group-hover:w-full"></p>
          </a>
          <a href="/cookies" className="group relative">
            Política de cookies
            <p className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:right-0 group-hover:w-full"></p>
          </a>
        </div>

        <span className="mx-auto block w-full text-center text-xs">
          2025 © Todos los derechos reservados
        </span>
        {/* END LEGAL */}
      </footer>
    </>
  );
}
