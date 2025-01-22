import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./data/navigation.json";

import Home from "./pages/home";
import Quienes from "./pages/quienes";
import Liderazgo from "./pages/liderazgo";
import Chicas from "./pages/chicas";
import Women from "./pages/women";
import Noticias from "./pages/noticias";
import Contacto from "./pages/contacto";

export default function App() {
  const componentsMap = {
    Quienes,
    Liderazgo,
    Chicas,
    Women,
    Noticias,
    Contacto,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.values(routes).map(({ key, href, component }) => {
          const Component = componentsMap[component]; // Resuelve el componente

          // Si no se encuentra el componente, muestra un error en consola
          if (!Component) {
            console.error(`Componente no encontrado: ${component}`);
            return null;
          }

          return <Route key={key} path={href} element={<Component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
