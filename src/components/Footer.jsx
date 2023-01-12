import whiteArch from "../assets/icons/arch-icon-white.svg";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="home-footer-background"></div>
      <div className="home-footer">
        <Link to="/" className="home-footer-title">
          <img
            className="home-footer-title-svg"
            src={whiteArch}
            alt="Site title logo"
          />
        </Link>
        <Link to="/portfolio" className="home-footer-link">
          Portfolio
        </Link>
        <Link to="/about" className="home-footer-link">
          About Us
        </Link>
        <Link to="/contact" className="home-footer-link">
          Contact
        </Link>
        <Link to="/portfolio" className="home-footer-link-last">
          See Our Portfolio
          <img className="home-arrow-icon" src={arrowIcon} alt="" />
        </Link>
      </div>
    </>
  );
}
