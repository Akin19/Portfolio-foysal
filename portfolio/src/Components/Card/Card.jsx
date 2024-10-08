import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ emoji, heading, detail }) => {
  const navigate = useNavigate();
  // added code

  const handleClick = () => {
    navigate("/gallery", { state: { heading } });
  };
  return (
    <div className="card">
      <div className="card-heading">
        <img src={emoji} alt="" />
        <h3>{heading}</h3>
      </div>
      <div className="overlay">
        <span>{detail}</span>
        {/* <button onClick={() => navigate("/thumbnails")} className="button"> */}
        <button onClick={handleClick} className="button">
          <a href="#">See Demo</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
