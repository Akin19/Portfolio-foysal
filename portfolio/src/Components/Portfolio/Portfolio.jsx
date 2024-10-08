import { Swiper, SwiperSlide } from "swiper/react";
import graphics1 from "../../assets/galleryImg/seo15.jpg";
import graphics2 from "../../assets/galleryImg/seo17.jpg";
import graphics3 from "../../assets/galleryImg/seo18.jpg";
import graphics4 from "../../assets/galleryImg/seo2.jpg";
import graphics5 from "../../assets/galleryImg/seo9.jpg";
import graphics6 from "../../assets/galleryImg/seo14.jpg";
import graphics7 from "../../assets/galleryImg/seo3.jpg";
import graphics8 from "../../assets/galleryImg/seo4.jpg";
import graphics9 from "../../assets/galleryImg/seo6.jpg";
import "./Portfolio.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
const Portfolio = () => {
  return (
    <div id="Portfolio" className="portfolio">
      {/* Headings start here */}
      <span>Recent Project</span>
      <span>Portfolio</span>

      {/* slider */}

      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={graphics1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graphics8} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Portfolio;
