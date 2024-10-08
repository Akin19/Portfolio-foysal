import { NavLink } from "react-router-dom";
import Gallery from "../../Components/Gallery/Gallery";
import { useLocation } from "react-router-dom";
import "./Thumbnails.css";
import { useState, useEffect } from "react";
const Thumbnails = () => {
  const location = useLocation();
  const { heading } = location.state || {};
  const [category, setCategory] = useState(heading || ""); // Initialize state with heading or an empty string

  useEffect(() => {
    if (heading) {
      setCategory(heading); // Update category if heading is available
    }
  }, [heading]);
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className=" thumnailName n-name ">
            <NavLink
              spy={true}
              to="/"
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Foysal
            </NavLink>
          </div>
          <span>
            <NavLink
              spy={true}
              to="/"
              smooth={true}
              activeClass="activeClass"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </span>
        </div>
        <div className="n-right">
          <select
            value={category}
            id="select-box"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Category</option>
            <option value="Seo">Seo</option>
            <option value="Thumbnails">Thumbnails</option>
            <option value="Graphics">Graphics</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </div>
      </div>
      <Gallery Category={category} />
    </div>
  );
};

export default Thumbnails;
