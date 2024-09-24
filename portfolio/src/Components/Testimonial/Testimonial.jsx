import "./Testimonial.css";
import profilepic1 from "../../assets/img/profile1.jpg";
import profilepic2 from "../../assets/img/profile2.jpg";
import profilepic3 from "../../assets/img/profile3.jpg";
import profilepic4 from "../../assets/img/profile4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Import Pagination module

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
  const clients = [
    {
      img: profilepic1,
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo magni accusantium autem praesentium maiores, ea assumenda eos corporis molestiae temporibus quas quibusdam, commodi consectetur minus aperiam! Consequuntur deb ",
      name: "Asad AKin",
    },
    {
      img: profilepic2,
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo magni accusantium autem praesentium maiores, ea assumenda eos corporis molestiae temporibus quas quibusdam, commodi consectetur minus aperiam! Consequuntur deb ",
      name: "Asad AKin",
    },
    {
      img: profilepic3,
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo magni accusantium autem praesentium maiores, ea assumenda eos corporis molestiae temporibus quas quibusdam, commodi consectetur minus aperiam! Consequuntur deb ",
      name: "Asad AKin",
    },
    {
      img: profilepic4,
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo magni accusantium autem praesentium maiores, ea assumenda eos corporis molestiae temporibus quas quibusdam, commodi consectetur minus aperiam! Consequuntur deb ",
      name: "Asad AKin",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work</span>
        <span>from me ...</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt={`Client ${index + 1} profile`} />
              <span>{client.review}</span>
              <span>{client.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
