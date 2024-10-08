import { useState } from "react";
import "./Ripple.css";
const Ripple = () => {
  const [rippleArray, setRippleArray] = useState([]);

  const addRipple = (e) => {
    // Get the position of the click and size of the ripple
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = e.clientX - rippleContainer.left - size / 2;
    const y = e.clientY - rippleContainer.top - size / 2;

    const newRipple = {
      x: x,
      y: y,
      size: size,
    };

    setRippleArray([...rippleArray, newRipple]);

    // Remove ripple after the animation duration
    setTimeout(() => {
      setRippleArray([]);
    }, 1000); // Adjust the timeout to match the animation duration
  };

  console.log(rippleArray);

  return (
    <div className="ripple-container" onClick={addRipple}>
      {rippleArray.map((ripple, index) => (
        <span
          key={index}
          className="ripple"
          style={{
            top: ripple.y + "px",
            left: ripple.x + "px",
            width: ripple.size + "px",
            height: ripple.size + "px",
          }}
        />
      ))}
    </div>
  );
};

export default Ripple;
