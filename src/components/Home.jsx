import "../styles/Home.css";
import paramour from "../assets/home/mobile/image-hero-paramour.jpg";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import rectangleIcon from "../assets/icons/home-rectangle-icon.svg";
import smallTeam from "../assets/home/mobile/image-small-team.jpg";
import delSol from "../assets/portfolio/mobile/image-del-sol.jpg";
import towerImage from "../assets/portfolio/mobile/image-228b.jpg";
import lePrototype from "../assets/portfolio/mobile/image-prototype.jpg";
import whiteArch from "../assets/icons/arch-icon-white.svg";
import Footer from "../components/Footer.jsx";
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
        <img
          className="home-welcome-rectangle-icon"
          src={rectangleIcon}
          alt=""
        />
        <h2 className="home-welcome-title">Welcome To Arch Studio</h2>
        <p className="home-welcome-text">
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p className="home-welcome-text">
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p className="home-welcome-text">
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
      <div className="home-team">
        <img className="home-team-img" src={smallTeam} alt="Architechture" />
        <div className="home-team-info">
          <h2 className="home-team-title">Small team, big ideas</h2>
          <Link to="/about" className="home-team-link">
            About Us
            <img className="home-arrow-icon" src={arrowIcon} alt="" />
          </Link>
        </div>
      </div>
      <div className="home-featured">
        <h2 className="home-featured-title">Featured</h2>
        <Link to="/portfolio" className="home-featured-link">
          <img
            className="home-featured-img"
            src={delSol}
            alt="Project del sol architechture"
          />
          <div className="home-featured-info">
            <h3 className="home-featured-name">Project Del Sol</h3>
            <p className="home-featured-text">View All Projects</p>
          </div>
        </Link>
        <Link to="/portfolio" className="home-featured-link">
          <img
            className="home-featured-img"
            src={towerImage}
            alt="22B8 Tower architechture"
          />
          <div className="home-featured-info">
            <h3 className="home-featured-name">228B Tower</h3>
            <p className="home-featured-text">View All Projects</p>
          </div>
        </Link>
        <Link to="/portfolio" className="home-featured-link">
          <img
            className="home-featured-img"
            src={lePrototype}
            alt="Le Prototype architechture"
          />
          <div className="home-featured-info">
            <h3 className="home-featured-name">Le Prototype</h3>
            <p className="home-featured-text">View All Projects</p>
          </div>
        </Link>
        <Link to="/portfolio" className="home-featured-all-link">
          See All
          <img className="home-arrow-icon" src={arrowIcon} alt="" />
        </Link>
        <Footer />
      </div>
    </div>
  );
}
