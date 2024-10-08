import { useContext } from "react";
import "./App.css";

import { themeContext } from "./Context";
import Thumbnails from "./Pages/Thumbnails/Thumbnails";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="ripple-bg">
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="ripple"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Thumbnails />} />
      </Routes>
    </div>
  );
};

export default App;
