import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import LegalTitle from "../../components/legal/legalTitle";

export default function Cookies() {
  return (
    <>
      <Navbar />
      <LegalTitle name="Política de cookies" />
      <section className="mx-auto w-full text-sm xs:max-w-[90%] lg:max-w-[50%]">
        <div className="py-10">
          <ol>
            <li className="pb-4">
              1. <strong>Definición y función de las cookies</strong>
            </li>
          </ol>
          <p>
            Las cookies son archivos que se pueden descargar en su equipo al
            acceder a determinadas páginas web. Son herramientas esenciales para
            la prestación de numerosos servicios de la sociedad de la
            información. Entre otros, permiten a una página web almacenar y
            recuperar información sobre los hábitos de navegación de un usuario
            o de su equipo y, dependiendo de la información obtenida, se pueden
            utilizar para reconocer al usuario y mejorar el servicio ofrecido.
          </p>

          <ol>
            <li className="pb-4 pt-4">
              2. <strong>Tipología de cookies</strong>
            </li>
          </ol>

          <p className="pb-4">
            <u>Según la entidad que las gestione</u>:
          </p>
          <ul>
            <li className="pb-4">
              <strong>Cookies propias:</strong> son aquellas que se envían al
              equipo terminal del usuario desde un equipo o dominio gestionado
              por el propio editor y desde el que se presta el servicio
              solicitado por el usuario.
            </li>
            <li className="pb-4">
              <strong>Cookies de terceros:</strong> son aquellas que se envían
              al equipo terminal del usuario desde un equipo o dominio que no es
              gestionado por el editor, sino por otra entidad que trata los
              datos obtenidos a través de las cookies.
            </li>
          </ul>

          <p className="pb-4">
            <u>Según el plazo de tiempo que permanezcan activadas</u>:
          </p>
          <ul>
            <li className="pb-4">
              <strong>Cookies de sesión:</strong> diseñadas para recabar y
              almacenar datos mientras el usuario accede a una página web.
            </li>
            <li className="pb-4">
              <strong>Cookies persistentes:</strong> los datos siguen
              almacenados en el terminal y pueden ser accedidos y tratados
              durante un periodo definido por el responsable de la cookie.
            </li>
          </ul>

          <p className="pb-4">
            <u>Según su finalidad</u>:
          </p>
          <ul>
            <li className="pb-4">
              <strong>Cookies técnicas:</strong> permiten la navegación y el uso
              de diferentes servicios de la web.
            </li>
            <li className="pb-4">
              <strong>Cookies de personalización:</strong> permiten al usuario
              acceder con características personalizadas.
            </li>
            <li className="pb-4">
              <strong>Cookies de análisis:</strong> permiten el seguimiento y
              análisis del comportamiento de los usuarios.
            </li>
            <li className="pb-4">
              <strong>Cookies publicitarias:</strong> gestionan la publicidad de
              manera eficiente.
            </li>
            <li className="pb-4">
              <strong>Cookies de redes sociales externas:</strong> permiten la
              interacción con redes sociales.
            </li>
          </ul>

          <ol>
            <li className="pb-4">
              3. <strong>¿Qué tipos de cookies utiliza esta página web?</strong>
            </li>
          </ol>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <td
                    colSpan="4"
                    className="border border-gray-300 p-1 text-sm font-semibold"
                  >
                    <strong>Cookies de terceros</strong>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Tipo
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Finalidad
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Caducidad
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    _ga
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para controlar a los visitantes únicos de la web,
                    almacena un identificador de cliente único.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    2 años
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    _gid
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para distinguir a los usuarios.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    24 horas
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    _gat
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para limitar el porcentaje de solicitudes.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    1 minuto
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utma
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para distinguir usuarios y sesiones.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    2 años
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utmb
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Toma una marca de tiempo del momento exacto en que el
                    visitante ingresa en el sitio.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    30 min
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utmc
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Toma una marca de tiempo del momento exacto en el momento en
                    que un visitante abandona el sitio.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Fin de la sesión del navegador
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utmz
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Almacena la fuente de tráfico o la campaña que explica cómo
                    ha llegado el usuario al sitio.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    1 hora
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="4"
                    className="border border-gray-300 p-1 font-semibold"
                  >
                    <strong>Cookies propias</strong>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Tipo
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Finalidad
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Caducidad
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    moove_gdpr_popup
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie técnica
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de gestión de la política de cookies por parte del
                    usuario de la web.
                  </td>
                  <td className="border border-gray-300 p-1 text-xs sm:text-sm">
                    Persistente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ol>
            <li className="pb-4 pt-4">
              4. <strong>Panel de configuración de cookies</strong>
            </li>
          </ol>
          <p>Cookies técnicas si / no</p>
          <p>Cookies analíticas si / no</p>

          <ol>
            <li className="pb-4 pt-4">
              5.
              <strong>
                Gestionar las cookies mediante la configuración del navegador
              </strong>
            </li>
          </ol>
          <p>
            Usted puede permitir, bloquear o eliminar las cookies instaladas en
            su dispositivo mediante la configuración de las opciones del
            navegador instalado. Al desactivar cookies, algunos de los servicios
            disponibles podrían dejar de estar operativos.
          </p>
          <p>
            Para más información sobre cookies en Google Chrome
            <a href="https://support.google.com/chrome/answer/95647?hl=es">
              pulse <u>aquí</u>
            </a>
            <br />
            Para más información sobre cookies en Mozilla Firefox
            <span>
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias">
                pulse <u>aquí</u>
              </a>
            </span>
            .<br />
            Para más información sobre cookies en Internet Explorer
            <span>
              <a
                href="http://windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies#ie=ie-11"
                data-et-has-event-already="true"
              >
                pulse <u>aquí</u>
              </a>
            </span>
            .<br />
            Para más información sobre cookies en Safari
            <span>
              <a href="https://support.apple.com/kb/PH19214?locale=es_ES">
                pulse <u>aquí</u>
              </a>
            </span>
            .<br />
            <span>Para más información sobre cookies en Opera</span>
            <span>
              <a href="https://support.apple.com/kb/PH19214?locale=es_ES">
                pulse <u>aquí</u>
              </a>
              .<br />
            </span>
            <span>Para más información sobre cookies en Android</span>
            <span>
              <a href="https://support.apple.com/kb/PH19214?locale=es_ES">
                pulse <u>aquí</u>
              </a>
              .
            </span>
          </p>

          <p>
            Además, también puede gestionar el almacén de cookies en su
            navegador a través de herramientas como las siguientes:
          </p>
          <ul>
            <li>
              Ghostery:
              <span>
                <a href="http://www.ghostery.com/">www.ghostery.com</a>
              </span>
            </li>
            <li>
              Your online choices:
              <a href="http://www.youronlinechoices.com/es">
                <span>www.youronlinechoices.com/</span>es
              </a>
            </li>
          </ul>

          <ol>
            <li className="pb-4 pt-4">
              6. <strong>Actualización de la política de cookies.</strong>
            </li>
          </ol>
          <p>
            Es posible que por nuevas interpretaciones realizadas por el
            organismo regulador competente, jueces, o Tribunales, esta política
            de cookies sufra alguna modificación por lo que se ruega al usuario
            que compruebe de forma regular su contenido.
          </p>
          <p>
            <strong></strong>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
