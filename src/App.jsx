import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./data/navigation.json";
import legal from "./data/legal.json";
import ScrollToTop from "./components/scrollTop";

//PÁGINAS PRINCIPALES:
import Home from "./pages/home";
import Quienes from "./pages/quienes";
import Liderazgo from "./pages/liderazgo";
import Chicas from "./pages/chicas";
import Women from "./pages/women";
import Noticias from "./pages/noticias";
import Contacto from "./pages/contacto";

//PÁGINAS LEGALES:
import Privacidad from "./pages/legal/privacidad";
import Aviso from "./pages/legal/aviso";
import Corrupcion from "./pages/legal/corrupcion";
import Cookies from "./pages/legal/cookies";

export default function App() {
  const componentsMap = {
    Quienes,
    Liderazgo,
    Chicas,
    Women,
    Noticias,
    Contacto,
  };

  const legalComponents = {
    Privacidad,
    Aviso,
    Corrupcion,
    Cookies,
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.values(routes).map(({ key, href, component }) => {
          const Component = componentsMap[component];
          if (!Component) {
            console.error(`Componente NAVEGACION no encontrado: ${component}`);
            return null;
          }
          return <Route key={key} path={href} element={<Component />} />;
        })}
        {Object.values(legal).map(({ key, href, component }) => {
          const LegalComponent = legalComponents[component];
          if (!LegalComponent) {
            console.error(`Componente LEGAL no encontrado: ${component}`);
            return null;
          }
          return <Route key={key} path={href} element={<LegalComponent />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
