import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <NavLink
            spy={true}
            to="/"
            smooth={true}
            style={{ textDecoration: "none" }}
          >
            <h3>Faysal</h3>
          </NavLink>
        </div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <NavLink
              spy={true}
              to="/"
              smooth={true}
              activeClass="activeClass"
              style={{ textDecoration: "none" }}
            >
              <li>Home</li>
            </NavLink>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>

            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className="n-button button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
