import Header from "./header/Header";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Carrusel from "./carousel/carrusel/Carrusel";

//datos
import { categorias } from "../../db.json";

export default function DefaultPage() {
  return (
    <>
      <Header />
      <Banner />
      {categorias.map((categoria) => (
        <Carrusel key={categoria.id} categoria={categoria} />
      ))}
      <Footer />
    </>
  );
}
