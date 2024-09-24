import "./Card.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.darkMode;
  return (
    <div
      className="card"
      style={{ background: darkMode ? "var(--purple)" : "" }}
    >
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
};

export default Card;
