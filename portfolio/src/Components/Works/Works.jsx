import upwork from "../../assets/img/Upwork.png";
import fiver from "../../assets/img/Fiverr.png";
import amazon from "../../assets/img/Amazon.png";
import shopyfy from "../../assets/img/Shopify.png";
import facebook from "../../assets/img/Facebook.png";
import "./Works.css";
const Works = () => {
  return (
    <div className="works">
      {/* left side start here */}
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clints</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          cupiditate amet doloribus vero veritatis nihil nisi culpa. Officiis
        </span>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff" }}></div>
      </div>

      {/* right Side Start Here */}

      <div className="w-right">
        <div className="mainCircle">
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
        </div>
        {/* background Circle */}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
