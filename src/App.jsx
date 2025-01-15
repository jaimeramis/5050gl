import Navbar from "./components/navbar";
import SocialMedia from "./components/socialMedia";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <h4 className="bg-green-700 py-40 text-center">BLOQUE</h4>
      <h4 className="bg-yellow-700 py-40 text-center">BLOQUE</h4>
      <h4 className="bg-orange-700 py-40 text-center">BLOQUE</h4>
      <SocialMedia />
      <Footer />
    </>
  );
}
