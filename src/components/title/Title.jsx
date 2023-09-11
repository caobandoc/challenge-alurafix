import PropTypes from "prop-types";

import "./Title.css";

export default function Title({ titulo, desc, color }) {
  let styleTitle = {
    backgroundColor: color,
    borderRadius: "4px",
    padding: "10px",
  };
  return (
    <div className="title">
      <h1 style={styleTitle}>{titulo}</h1>
      <p>{desc}</p>
    </div>
  );
}

Title.propTypes = {
  titulo: PropTypes.string,
  desc: PropTypes.string,
  color: PropTypes.string,
};
