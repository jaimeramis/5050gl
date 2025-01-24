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
            acceder a determinadas páginas web. Son herramientas que tienen un
            papel esencial para la prestación de numerosos servicios de la
            sociedad de la información. Entre otros, permiten a una página web
            almacenar y recuperar información sobre los hábitos de navegación de
            un usuario o de su equipo y, dependiendo de la información obtenida,
            se pueden utilizar para reconocer al usuario y mejorar el servicio
            ofrecido.
          </p>
          <p>&nbsp;</p>
          <ol>
            <li className="pb-4">
              2. <strong>Tipología de cookies</strong>
            </li>
          </ol>
          <p className="pb-4">
            <u>Según la entidad que las gestione</u>:
          </p>
          <ul>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>propias</strong>: son aquéllas que se envían al equipo
              terminal del usuario desde un equipo o dominio gestionado por el
              propio editor y desde el que se presta el servicio solicitado por
              el usuario.
            </li>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>de terceros</strong>: son aquéllas que se envían al equipo
              terminal del usuario desde un equipo o dominio que no es
              gestionado por el editor, sino por otra entidad que trata los
              datos obtenidos través de las cookies.
            </li>
          </ul>
          <p>&nbsp;</p>
          <p className="pb-4">
            <u>Según el plazo de tiempo que permanezcan activadas</u>:
          </p>
          <ul>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>de sesión</strong>: son un tipo de cookies diseñadas para
              recabar y almacenar datos mientras el usuario accede a una página
              web. Se suelen emplear para almacenar información que solo
              interesa conservar para la prestación del servicio solicitado por
              el usuario en una sola ocasión (como, por ejemplo, una lista de
              productos adquiridos).
            </li>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>persistentes</strong>: son un tipo de cookies en las que
              los datos siguen almacenados en el terminal y pueden ser accedidos
              y tratados durante un periodo definido por el responsable de la
              cookie, que puede ir de unos minutos a varios años.
            </li>
          </ul>
          <p>&nbsp;</p>
          <p className="pb-4">
            <u>Según su finalidad</u>:
          </p>
          <ul>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>técnicas</strong>: son aquellas que permiten al usuario la
              navegación a través de una página web, plataforma o aplicación y
              la utilización de las diferentes opciones o servicios que en ella
              existan como, por ejemplo, controlar el tráfico y la comunicación
              de datos, identificar la sesión, acceder a partes de acceso
              restringido, recordar los elementos que integran un pedido,
              realizar el proceso de compra de un pedido, realizar la solicitud
              de inscripción o participación en un evento, utilizar elementos de
              seguridad durante la navegación, almacenar contenidos para la
              difusión de vídeos o sonido o compartir contenidos a través de
              redes sociales.
            </li>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>de personalización</strong>: son aquellas que permiten al
              usuario acceder al servicio con algunas características de
              carácter general como, por ejemplo, serian el idioma, el tipo de
              navegador a través del cual accede al servicio, la configuración
              regional desde donde accede al servicio, etc.
            </li>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>de análisis</strong>: son aquellas que permiten al
              responsable de las mismas el seguimiento y análisis del
              comportamiento de los usuarios de los sitios web a los que están
              vinculadas. La información recogida mediante este tipo de cookies
              se utiliza en la medición de la actividad de los sitios web,
              aplicación o plataforma y para la elaboración de perfiles de
              navegación de los usuarios de dichos sitios, aplicaciones y
              plataformas, con el fin de introducir mejoras en función de la
              utilización que hacen los usuarios del servicio ofrecido.
            </li>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>publicitarias</strong>: son aquellas que permiten la
              gestión de la forma más eficaz posible, de los espacios
              publicitarios.
            </li>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>de publicidad comportamental</strong>: son aquellas que
              almacenan información del comportamiento de los usuarios obtenida
              a través de la observación continuada de sus hábitos de
              navegación, lo que permite desarrollar un perfil específico para
              mostrar publicidad en función del mismo.
            </li>
            <li className="pb-4">
              Cookies<span>&nbsp;</span>
              <strong>de redes sociales externas</strong>: son aquellas que se
              utilizan para que los visitantes puedan interactuar con el
              contenido de diferentes plataformas sociales (Facebook, YouTube,
              Twitter, LinkedIn, etc.) y que se generen únicamente para los
              usuarios de dichas redes sociales. Las condiciones de utilización
              de estas cookies y la información recopilada se regulan por la
              política de privacidad de la plataforma social correspondiente.
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <ol>
            <li className="pb-4">
              3. <strong>¿Qué tipos de cookies utiliza esta página web?</strong>
            </li>
          </ol>
          <div class="overflow-x-auto">
            <table class="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <td
                    colspan="4"
                    class="border border-gray-300 p-1 text-sm font-semibold"
                  >
                    <strong>Cookies de terceros</strong>
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Tipo
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Finalidad
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Caducidad
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    _ga
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para controlar a los visitantes únicos de la web,
                    almacena un identificador de cliente único.
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    2 años
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    _gid
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para distinguir a los usuarios.
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    24 horas
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    _gat
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para limitar el porcentaje de solicitudes.
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    1 minuto
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utma
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Se usa para distinguir usuarios y sesiones
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    2 años
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utmb
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Toma una marca de tiempo del momento exacto en que el
                    visitante ingresa en el sitio
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    30 min
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utmc
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Toma una marca de tiempo del momento exacto en el momento en
                    que un visitante abandona el sitio
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Fin de la sesión del navegador
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    _utmz
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de análisis - Google Analytics
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Almacena la fuente de tráfico o la campaña que explica cómo
                    ha llegado el usuario al sitio
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    1 hora
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="4"
                    class="border border-gray-300 p-1 font-semibold"
                  >
                    <strong>Cookies propias</strong>
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Tipo
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Finalidad
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Caducidad
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    moove_gdpr_popup
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie técnica
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Cookie de gestión de la política de cookies por parte del
                    usuario de la web.
                  </td>
                  <td class="border border-gray-300 p-1 text-xs sm:text-sm">
                    Persistente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>&nbsp;</p>
          <ol>
            <li className="pb-4">
              4. <strong>Panel de configuración de cookies</strong>
            </li>
          </ol>
          <p>Cookies técnicas si / no</p>
          <p>Cookies analíticas si / no</p>
          <p>&nbsp;</p>
          <ol>
            <li className="pb-4">
              5.{" "}
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
            Para más información sobre cookies en Mozilla Firefox&nbsp;
            <span>
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias">
                pulse <u>aquí</u>
              </a>
            </span>
            .<br />
            Para más información sobre cookies en Internet Explorer
            <span>
              &nbsp;
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
              &nbsp;
              <a href="https://support.apple.com/kb/PH19214?locale=es_ES">
                pulse <u>aquí</u>
              </a>
            </span>
            .<br />
            <span>Para más información sobre cookies en Opera</span>
            <span>
              &nbsp;
              <a href="https://support.apple.com/kb/PH19214?locale=es_ES">
                pulse <u>aquí</u>
              </a>
              .<br />
            </span>
            <span>Para más información sobre cookies en Android</span>
            <span>
              &nbsp;
              <a href="https://support.apple.com/kb/PH19214?locale=es_ES">
                pulse <u>aquí</u>
              </a>
              .
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            Además, también puede gestionar el almacén de cookies en su
            navegador a través de herramientas como las siguientes:
          </p>
          <ul>
            <li>
              Ghostery:
              <span>
                &nbsp;<a href="http://www.ghostery.com/">www.ghostery.com</a>
              </span>
            </li>
            <li>
              Your online choices:<span>&nbsp;</span>
              <a href="http://www.youronlinechoices.com/es">
                <span>www.youronlinechoices.com/</span>es
              </a>
            </li>
          </ul>
          <p>&nbsp;</p>
          <ol>
            <li className="pb-4">
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
            <strong>&nbsp;</strong>
          </p>
          <p>&nbsp;</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
