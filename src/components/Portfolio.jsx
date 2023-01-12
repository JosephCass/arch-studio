import "../styles/Portfolio.css";
import Footer from "../components/Footer.jsx";
import seraphImage from "../assets/portfolio/mobile/image-seraph.jpg";
import eeboxImage from "../assets/portfolio/mobile/image-eebox.jpg";
import federalImage from "../assets/portfolio/mobile/image-federal.jpg";
import delSolImage from "../assets/portfolio/mobile/image-del-sol.jpg";
import prototypeImage from "../assets/portfolio/mobile/image-prototype.jpg";
import towerImage from "../assets/portfolio/mobile/image-228b.jpg";
import edelweissImage from "../assets/portfolio/mobile/image-edelweiss.jpg";
import netcryImage from "../assets/portfolio/mobile/image-netcry.jpg";
import hypersImage from "../assets/portfolio/mobile/image-hypers.jpg";
import sxivImage from "../assets/portfolio/mobile/image-sxiv.jpg";
import trinityImage from "../assets/portfolio/mobile/image-trinity.jpg";
import paramourImage from "../assets/portfolio/mobile/image-paramour.jpg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-projects">
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={seraphImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Seraph Station</h2>
            <p className="portfolio-project-date">September 2019</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={eeboxImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Eebox Building</h2>
            <p className="portfolio-project-date">August 2017</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={federalImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Federal II Tower</h2>
            <p className="portfolio-project-date">August 2017</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={delSolImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Project Del Sol</h2>
            <p className="portfolio-project-date">January 2016</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={prototypeImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Le Prototype</h2>
            <p className="portfolio-project-date">October 2015</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={towerImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">228B Tower</h2>
            <p className="portfolio-project-date">April 2015</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={edelweissImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Grand Edelweiss Hote</h2>
            <p className="portfolio-project-date">December 2013</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={netcryImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Netcry Tower</h2>
            <p className="portfolio-project-date">August 2012</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={hypersImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Hypers</h2>
            <p className="portfolio-project-date">January 2012</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={sxivImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">SXIV Tower</h2>
            <p className="portfolio-project-date">March 2011</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={trinityImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Trinity Bank Tower</h2>
            <p className="portfolio-project-date">September 2010</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <img className="portfolio-project-img" src={paramourImage} alt="" />
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Project Peramour</h2>
            <p className="portfolio-project-date">Feburary 2008</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
