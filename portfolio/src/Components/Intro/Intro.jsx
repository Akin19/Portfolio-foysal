import "./Intro.css";
import instagram from "../../assets/img/instagram.png";
import github from "../../assets/img/xlogo.png";
import linkedin from "../../assets/img/linkedin.png";
import whatsapp from "../../assets/img/whatsapp.png";
import vector1 from "../../assets/img/Vector1.png";
import vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/foysal.png";
import { Link } from "react-scroll";
// import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";
// import glassesImoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.darkMode;
  return (
    <div className="intro">
      {/* intro left starts here */}

      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hello there, </span>
          <span>I am Faysal Biswas.</span>
          <span>
            A marketing associate and a specialist in social media marketing,
            with over half decade of experience .My experties extends across
            Facebook, Instagram and good advertising. If you want to discuss
            your project feel free to massege me.
          </span>
        </div>
        <div className="link">
          <Link className="link" to="Contact" spy={true} smooth={true}>
            <button className="button i-button">Contact me</button>
          </Link>
        </div>

        <div className="i-icons">
          <a
            href="https://x.com/faysal175314"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/faysal175314/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://wa.me/8801602928414"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="" />
          </a>
          <a
            href="https://www.instagram.com/faysal175314/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>

      {/* intro left ends here */}

      <div className="i-right">
        <motion.img
          className="vector1"
          initial={{ left: "-15%", top: "-9%" }}
          whileInView={{ left: "-18%" }}
          transition={transition}
          src={vector1}
          alt=""
        />
        <motion.img
          className="vector2"
          initial={{ left: "-3rem", top: "-4.6rem" }}
          whileInView={{ left: "-3.5rem", top: "-5rem" }}
          transition={transition}
          src={vector2}
          alt=""
        />

        <img className="boy" src={boy} alt="" />

        {/* <img src={glassesImoji} alt="" /> */}
        <motion.div
          className="floating-div"
          initial={{ top: "4%", left: "74%" }}
          whileInView={{ left: "15%" }}
          transition={transition}
          style={{
            position: "absolute",
            zIndex: 12,
          }}
        >
          <FloatingDiv image={crown} txt1="Digital" txt2="Marketer" />
        </motion.div>

        {/* <div style={{ position: "absolute", bottom: "40%", right: "89%" }}>
          <FloatingDiv image={thumbup} txt1="Digital" txt2="Marketer" />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Intro;
