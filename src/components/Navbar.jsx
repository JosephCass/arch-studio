import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import toggleIcon from "../assets/icons/icon-hamburger.svg";
import titleIcon from "../assets/icons/Frame.svg";

export default function Navbar() {
  let [navOpen, setNavOpen] = useState(false);
  let navLinks = useRef();

  function toggleNavbar() {
    setNavOpen((prevState) => !prevState);
  }

  function closeNavbar(e) {
    if (e.target.id !== "navLinks") {
      setNavOpen(false);
    }
  }

  return (
    <div className="navbar">
      <Link className="nav-title-link" to="/">
        <img src={titleIcon} className="navbar-title-img" />
      </Link>

      <img
        onClick={toggleNavbar}
        className="navbar-toggle-icon"
        src={toggleIcon}
        alt="navbar toggle icon"
      />
      {navOpen && (
        <div className="nav-links-container" onClick={closeNavbar}>
          <div id="navLinks" className="nav-links" ref={navLinks}>
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
