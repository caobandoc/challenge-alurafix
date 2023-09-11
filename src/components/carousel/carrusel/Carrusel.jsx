import PropTypes from "prop-types";

import Slider from "../slider/Slider";
import Title from "../../title/Title";

import "./Carrusel.css";

export default function Carrusel({ categoria }) {
  return (
    <div className="carrusel">
      <Title
        titulo={categoria.nombre}
        desc={categoria.descripcion}
        color={categoria.color}
      />
      <Slider videos={categoria.videos} borde={categoria.color} />
    </div>
  );
}

Carrusel.propTypes = {
  categoria: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    color: PropTypes.string,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        urlVideo: PropTypes.string,
        urlImagen: PropTypes.string,
      })
    ),
    borde: PropTypes.string,
  }),
};
