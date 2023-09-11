import PropTypes from "prop-types";

import Slider from "../slider/Slider";

import "./Carrusel.css";

export default function Carrusel({ videos, borde }) {
  console.log(borde);
  return (
    <div className="carrusel">
      <Slider videos={videos} borde={borde} />
    </div>
  );
}

Carrusel.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      urlVideo: PropTypes.string,
      urlImagen: PropTypes.string,
    })
  ),
  borde: PropTypes.string,
};
