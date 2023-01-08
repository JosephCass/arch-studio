import "../styles/Home.css";
import paramour from "../assets/home/mobile/image-hero-paramour.jpg";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-project-paramour">
        <img
          className="home-project-paramour-img"
          src={paramour}
          alt="art architecture"
        />
        <div className="home-project-paramour-info">
          <h2 className="home-project-paramour-title">Project Paramour</h2>
          <p className="home-project-paramour-text">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <Link to="/portfolio" className="home-portfolio-link">
            See Our Portfolio
            <img className="home-arrow-icon" src={arrowIcon} alt="arrow icon" />
          </Link>
        </div>
      </div>
      <div className="home-welcome">
        <h2 className="home-welcome-title"></h2>
        <p className="home-welcome-text"></p>
        <p className="home-welcome-text"></p>
        <p className="home-welcome-text"></p>
      </div>
    </div>
  );
}
