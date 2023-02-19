import "../styles/Home.css";
import paramour from "../assets/home/mobile/image-hero-paramour.jpg";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import rectangleIcon from "../assets/icons/home-rectangle-icon.svg";
import smallTeam from "../assets/home/mobile/image-small-team.jpg";
import delSol from "../assets/portfolio/mobile/image-del-sol.jpg";
import towerImage from "../assets/portfolio/mobile/image-228b.jpg";
import lePrototype from "../assets/portfolio/mobile/image-prototype.jpg";
// import whiteArch from "../assets/icons/arch-icon-white.svg";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import homeSide from "../assets/home/tablet/home-side.svg";
import tabletParamour from "../assets/home/tablet/image-hero-paramour.jpg";
import smallTeamTablet from "../assets/home/tablet/image-small-team.jpg";
import delSolTablet from "../assets/portfolio/tablet/image-del-sol.jpg";
import towerTablet from "../assets/portfolio/tablet/image-228b.jpg";
import prototypeTablet from "../assets/portfolio/tablet/image-prototype.jpg";
import paramourDesktop from "../assets/home/desktop/image-hero-paramour.jpg";
import seraphDesktop from "../assets/home/desktop/image-hero-seraph.jpg";
import federalDesktop from "../assets/home/desktop/image-hero-federal.jpg";
import trinityDesktop from "../assets/home/desktop/image-hero-trinity.jpg";
import welcomeDesktop from "../assets/home/desktop/image-welcome.jpg";
import smallTeamDesktop from "../assets/home/desktop/image-small-team.jpg";
import delSolDesktop from "../assets/portfolio/desktop/image-del-sol.jpg";
import towerDesktopImage from "../assets/portfolio/desktop/image-228b.jpg";
import prototypeDesktop from "../assets/portfolio/desktop/image-prototype.jpg";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  let [btnActive, setBtnActive] = useState("btn-01");
  let [currImg, setCurrImg] = useState(paramourDesktop);

  function getCurrentImage() {
    if (btnActive === "btn-01") {
      setCurrImg(paramourDesktop);
    } else if (btnActive === "btn-02") {
      setCurrImg(seraphDesktop);
    } else if (btnActive === "btn-03") {
      setCurrImg(federalDesktop);
    } else if (btnActive === "btn-04") {
      setCurrImg(trinityDesktop);
    }
  }

  function activeBtnClass(btnValue) {
    if (btnValue === btnActive) {
      return "carousel-btn active";
    } else {
      return "carousel-btn";
    }
  }

  function generateBtns() {
    let buttonsArray = [];
    for (let i = 1; i <= 4; i++) {
      let btnVal = `btn-0${i}`;
      let className = activeBtnClass(btnVal);
      buttonsArray.push(
        <button
          key={btnVal}
          value={btnVal}
          onClick={() => {
            setBtnActive(btnVal);
          }}
          className={className}
        >{`0${i}`}</button>
      );
    }
    return buttonsArray;
  }

  function generateHomeInfo() {
    if (btnActive === "btn-01") {
      return (
        <div className="desktop">
          <h2 className="home-project-paramour-title">Project Paramour</h2>
          <p className="home-project-paramour-text">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
        </div>
      );
    } else if (btnActive === "btn-02") {
      return (
        <div className="desktop">
          <h2 className="home-project-paramour-title">Seraph Station</h2>
          <p className="home-project-paramour-text">
            The Seraph Station project challenged us to design a unique station
            that would transport people through time. The result is a fresh and
            futuristic model inspired by space stations.
          </p>
        </div>
      );
    } else if (btnActive === "btn-03") {
      return (
        <div className="desktop">
          <h2 className="home-project-paramour-title">Federal II Tower</h2>
          <p className="home-project-paramour-text">
            A sequel theme project for a tower originally built in the 1800s. We
            achieved this with a striking look of brutal minimalism with modern
            touches.
          </p>
        </div>
      );
    } else if (btnActive === "btn-04") {
      return (
        <div className="desktop">
          <h2 className="home-project-paramour-title">Trinity Bank Tower</h2>
          <p className="home-project-paramour-text">
            Trinity Bank challenged us to make a concept for a 84 story building
            located in the middle of a city with a high earthquake frequency.
            For this project we used curves to blend design and stability to
            meet our objectives.
          </p>
        </div>
      );
    }
  }

  useEffect(() => {
    getCurrentImage();
  }, [btnActive]);

  return (
    <div className="home">
      <img className="side-route-title tablet" src={homeSide} alt="" />
      <div className="home-project-paramour">
        <picture className="home-project-paramour-img">
          <source
            media="(max-width: 768px)"
            type="image/jpg"
            srcSet={paramour}
          />
          <source
            media="(max-width: 992px)"
            type="image/jpg"
            srcSet={tabletParamour}
          />
          <source
            media="(min-width: 992px)"
            type="image/jpg"
            srcSet={currImg}
          />
          <img className="home-project-paramour-img" src={paramour} />
        </picture>
        <div className="home-project-paramour-info">
          <div className="mobile-tablet">
            <h2 className="home-project-paramour-title">Project Paramour</h2>
            <p className="home-project-paramour-text">
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </p>
          </div>
          {generateHomeInfo()}
          <Link to="/portfolio" className="home-portfolio-link">
            See Our Portfolio
            <img className="home-arrow-icon" src={arrowIcon} alt="arrow icon" />
          </Link>
        </div>
        <div className="carousel-btns desktop">{generateBtns()}</div>
      </div>
      <div className="home-welcome">
        <h2 className="home-welcome-big tablet">Welcome</h2>
        <img
          className="home-welcome-rectangle-icon mobile"
          src={rectangleIcon}
          alt=""
          loading="lazy"
        />
        <div className="home-welcome-info">
          <h2 className="home-welcome-title">Welcome to Arch Studio</h2>
          <p className="home-welcome-text">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="home-welcome-text">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="home-welcome-text">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <img src={welcomeDesktop} className="desktop welcome-img" alt="" />
      </div>
      <div className="home-team">
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/jpg"
            srcSet={smallTeam}
          />
          <source
            media="(max-width: 992px)"
            type="image/jpg"
            srcSet={smallTeamTablet}
          />
          <source
            media="(min-width: 992px)"
            type="image/jpg"
            srcSet={smallTeamDesktop}
          />
          <img loading="lazy" className="home-team-img" src={smallTeam} />
        </picture>
        <div className="home-team-info">
          <h2 className="home-team-title">Small team, big ideas</h2>
          <Link to="/about" className="home-team-link">
            About Us
            <img
              loading="lazy"
              className="home-arrow-icon"
              src={arrowIcon}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="home-featured">
        <div className="home-featured-top">
          <h2 className="home-featured-title">Featured</h2>
          <Link to="/portfolio" className="home-featured-top-link tablet">
            See All
            <img
              className="home-arrow-icon tablet-icon"
              src={arrowIcon}
              alt=""
              loading="lazy"
            />
          </Link>
        </div>
        <div className="home-featured-links">
          <Link to="/portfolio" className="home-featured-link">
            <picture>
              <source
                media="(max-width: 768px)"
                type="image/jpg"
                srcSet={delSol}
              />
              <source
                media="(max-width: 992px)"
                type="image/jpg"
                srcSet={delSolTablet}
              />
              <source
                media="(min-width: 992px)"
                type="image/jpg"
                srcSet={delSolDesktop}
              />
              <img
                loading="lazy"
                className="home-project-paramour-img"
                src={delSol}
              />
            </picture>
            <div className="home-featured-info">
              <h3 className="home-featured-name">Project Del Sol</h3>
              <p className="home-featured-text">View All Projects</p>
            </div>
            <p className="home-featured-num tablet">1</p>
          </Link>
          <Link to="/portfolio" className="home-featured-link">
            <picture>
              <source
                media="(max-width: 768px)"
                type="image/jpg"
                srcSet={towerImage}
              />
              <source
                media="(max-width: 992px)"
                type="image/jpg"
                srcSet={towerTablet}
              />
              <source
                media="(min-width: 992px)"
                type="image/jpg"
                srcSet={towerDesktopImage}
              />
              <img
                loading="lazy"
                className="home-project-paramour-img"
                src={towerImage}
              />
            </picture>
            <div className="home-featured-info">
              <h3 className="home-featured-name">228B Tower</h3>
              <p className="home-featured-text">View All Projects</p>
            </div>
            <p className="home-featured-num tablet">2</p>
          </Link>
          <Link to="/portfolio" className="home-featured-link last-link-home">
            <picture>
              <source
                media="(max-width: 768px)"
                type="image/jpg"
                srcSet={lePrototype}
              />
              <source
                media="(max-width: 992px)"
                type="image/jpg"
                srcSet={prototypeTablet}
              />
              <source
                media="(min-width: 992px)"
                type="image/jpg"
                srcSet={prototypeDesktop}
              />
              <img
                loading="lazy"
                className="home-project-paramour-img"
                src={lePrototype}
              />
            </picture>
            <div className="home-featured-info">
              <h3 className="home-featured-name">Le Prototype</h3>
              <p className="home-featured-text">View All Projects</p>
            </div>
            <p className="home-featured-num tablet">3</p>
          </Link>
        </div>
        <Link to="/portfolio" className="home-featured-all-link mobile">
          See All
          <img
            loading="lazy"
            className="home-arrow-icon"
            src={arrowIcon}
            alt=""
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
