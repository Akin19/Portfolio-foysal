import "./Intro.css";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import instagram from "../../assets/img/instagram.png";
import vector1 from "../../assets/img/Vector1.png";
import vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy.png";
// import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";
// import glassesImoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      {/* intro left starts here */}

      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Foysal</span>
          <span>
            Digital Marketer with high level of experience in digital marketing
            and social marketing, Producting the quality work.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Akin19">
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>

      {/* intro left ends here */}

      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        {/* <img src={glassesImoji} alt="" /> */}
        <div style={{ position: "absolute", top: "-4%", left: "400px" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>

        {/* <div style={{ position: "absolute", bottom: "40%", right: "89%" }}>
          <FloatingDiv image={thumbup} txt1="Digital" txt2="Marketer" />
        </div> */}
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        {/* blur Div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
    </div>
  );
};

export default Intro;
