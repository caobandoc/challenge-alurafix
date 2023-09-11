import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import VideoCard from "../videoCard/VideoCard";
import useWindowSize from "../../hooks/useWindowSize";

import "swiper/css";

export default function Slider({ videos, borde }) {
  const { width } = useWindowSize();

  const getSlidesPerView = () => {
    return (width * 3.1) / 1440;
  };

  return (
    <Swiper
      slidesPerView={getSlidesPerView()}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="video-slider"
    >
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
          <VideoCard video={video} borde={borde} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      urlVideo: PropTypes.string,
      urlImagen: PropTypes.string,
    })
  ),
  borde: PropTypes.string,
};
