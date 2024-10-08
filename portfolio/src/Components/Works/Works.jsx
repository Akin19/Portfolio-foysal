import upwork from "../../assets/img/Upwork.png";
import fiver from "../../assets/img/Fiverr.png";
import amazon from "../../assets/img/youtube.png";
import shopyfy from "../../assets/img/Shopify.png";
import facebook from "../../assets/img/Facebook.png";
import { motion } from "framer-motion";
import "./Works.css";
const Works = () => {
  return (
    <div className="works">
      {/* left side start here */}
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clints</span>
        <span>
          Proud to have collaborated with leading platforms like Fiverr and
          Upwork,
          <br />
          delivering exceptional results for clients worldwide.
        </span>

        <div className="cv-button">
          <a href="#" download>
            <button className="button s-button">Download CV</button>
          </a>
        </div>

        <div className="blur s-blur1" style={{ background: "#abf1ff" }}></div>
      </div>

      {/* right Side Start Here */}

      <div className="w-right">
        <motion.div
          className="mainCircle"
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div className="w-secCircle">
            <img src={upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fiver} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={shopyfy} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circle */}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
