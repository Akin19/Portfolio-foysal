import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../../assets/img/sidebar.png";
import ecommerce from "../../assets/img/ecommerce.png";
import hoc from "../../assets/img/hoc.png";
import musicApp from "../../assets/img/musicapp.png";
import "./Portfolio.css";
import "swiper/css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Headings start here */}
      <span>Recent Project</span>
      <span>Portfolio</span>

      {/* slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
