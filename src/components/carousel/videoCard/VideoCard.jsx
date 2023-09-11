import PropTypes from "prop-types";

export default function VideoCard({ video, borde }) {
  const styleSize = {
    height: "261px",
    width: "432px",
    border: "4px solid " + (borde || "#6bd1ff"),
    borderRadius: "4px",
  };

  if (!video) {
    return null;
  }

  let img =
    video.urlImagen || "https://fakeimg.pl/500x300/?text=AluraFlix&font=roboto";

  return (
    <a href={video.urlVideo} target="_blank" rel="noopener noreferrer">
      <img src={img} alt="" style={styleSize} />
    </a>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    urlVideo: PropTypes.string,
    urlImagen: PropTypes.string,
  }),
  borde: PropTypes.string,
};
