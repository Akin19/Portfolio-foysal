import { Swiper, SwiperSlide } from "swiper/react";
import "./Thumbnail.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import thumbnail1 from "../../assets/galleryImg/graphics1.jpg";
import thumbnail2 from "../../assets/galleryImg/graphics22.jpg";
import thumbnail3 from "../../assets/galleryImg/graphics23.jpg";
import thumbnail4 from "../../assets/galleryImg/graphics33.jpg";
import thumbnail5 from "../../assets/galleryImg/thumbnail5.jpg";
import thumbnail6 from "../../assets/galleryImg/graphics17.jpg";
import thumbnail7 from "../../assets/galleryImg/graphics19.jpg";
import thumbnail8 from "../../assets/galleryImg/thumbnail8.jpg";
import thumbnail9 from "../../assets/galleryImg/graphics29.jpg";
const Thumbnail = () => {
  return (
    <div id="thumnail" className="thumbnail">
      <div className="thumbnail-heading">
        <span>Recent Graphics & </span>
        <span>Thumbnail Design</span>
      </div>

      {/* Slider */}
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
            <img src={thumbnail1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thumbnail9} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Thumbnail;
