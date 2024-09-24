import "./Services.css";
import glasses from "../../assets/img/glasses.png";
import humble from "../../assets/img/humble.png";
import heartEmoji from "../../assets/img/heartemoji.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      {/* Left side */}
      <div className="awesome">
        <span>My Awesom</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          cupiditate amet doloribus vero veritatis nihil nisi culpa. Officiis
        </span>
        <a href={glasses} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff" }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <div style={{ left: "11rem" }}>
          <Card
            emoji={heartEmoji}
            heading={"Design"}
            detail={"Figma,Sketch, Photoshop,Adobe"}
          />
        </div>

        <div className="cards" style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Design"}
            detail={"Figma,Sketch, Photoshop,Adobe"}
          />
        </div>
        <div className="cards" style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"Design"}
            detail={
              "Figma,Sketch, Photoshop,Adobe Figma,Sketch,AdobeFigma Photoshop,Adobe"
            }
          />
        </div>
        <div className="cards" style={{ left: "28rem", top: "12rem" }}>
          <Card
            emoji={humble}
            heading={"Design"}
            detail={
              "Figma,Sketch, Photoshop,Adobe Figma,Sketch,AdobeFigma Photoshop,Adobe"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
