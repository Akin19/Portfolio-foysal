import "./Services.css";
import { useNavigate } from "react-router-dom";

import seo from "../../assets/img/seo.png";
import UI from "../../assets/img/UX.png";
import graphic from "../../assets/img/graphic.png";
import social from "../../assets/img/social-media.png";

import Card from "../Card/Card";
// import { motion } from "framer-motion";
const Services = () => {
  // const transition = { duration: 2, type: "spring" };

  const navigate = useNavigate();
  return (
    <div id="Services" className="services">
      {/* Left side */}
      <div className="awesome width">
        <span>My Awesom</span>
        <span>Services</span>
        <span>
          Bringing your ideas to life with creativity, precision, and passion—
          <br />
          lets make something extraordinary together
        </span>

        <div className="blur s-blur1" style={{ background: "#abf1ff" }}></div>
      </div>
      {/* Right side */}

      {/* Right2 side starts here */}

      <div className="box-area">
        <div className="service-card">
          <Card
            emoji={seo}
            heading={"Seo"}
            detail={
              "SEO is a powerful way to improve online visibility, drive traffic, and ultimately increase business revenue in a sustainable and cost-efficient manner"
            }
          />
        </div>
        <div className="service-card">
          <Card
            emoji={social}
            heading={"Digital Marketing"}
            detail={
              "Digital marketing provides a wide reach, targeting capabilities, making it an essential part of modern marketing strategies."
            }
          />
        </div>
        <div className="service-card">
          <Card
            emoji={UI}
            heading={"Thumbnails"}
            detail={
              "Designing effective YouTube thumbnails is essential for attracting more views, improving video performance and growing a channel."
            }
          />
        </div>
        <div className="service-card">
          <Card
            emoji={graphic}
            heading={"Graphics"}
            detail={
              "Graphic Design is vital in creating an impactful, engaging, and credible brand presence."
            }
          />
        </div>
      </div>

      {/* <div className="cv-button">
        <button
          onClick={() => navigate("/thumbnails")}
          className="button s-button"
        >
          See Demo
        </button>
      </div> */}
    </div>
  );
};

export default Services;
