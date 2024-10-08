import "./Footer.css";
import wave from "../../assets/img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />

      <div className="f-content">
        <span>All Rights preserved @Foysal</span>
      </div>
    </div>
  );
};

export default Footer;
