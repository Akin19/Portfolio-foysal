import "./Toggle.css";
import { useContext } from "react";
import sun from "../../assets/img/sun.png";
import moon from "../../assets/img/moon.png";
import { themeContext } from "../../Context";

const Toggle = () => {
  const { darkMode, toggleDarkMode } = useContext(themeContext);

  return (
    <div className="toggle" onClick={toggleDarkMode}>
      <div className="sun">
        <img src={sun} alt="Sun" />
      </div>
      <div className="moon">
        <img src={moon} alt="Moon" />
      </div>
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
