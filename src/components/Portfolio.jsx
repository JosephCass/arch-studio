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
import portfolioSide from "../assets/portfolio/tablet/side-portfolio.svg";
import seraphTablet from "../assets/portfolio/tablet/image-seraph.jpg";
import eeboxTablet from "../assets/portfolio/tablet/image-eebox.jpg";
import federalTablet from "../assets/portfolio/tablet/image-federal.jpg";
import delSolTablet from "../assets/portfolio/tablet/image-del-sol.jpg";
import prototypeTablet from "../assets/portfolio/tablet/image-prototype.jpg";
import towerTablet from "../assets/portfolio/tablet/image-228b.jpg";
import edelweissTablet from "../assets/portfolio/tablet/image-edelweiss.jpg";
import netcryTablet from "../assets/portfolio/tablet/image-netcry.jpg";
import hypersTablet from "../assets/portfolio/tablet/image-hypers.jpg";
import sxivTablet from "../assets/portfolio/tablet/image-sxiv.jpg";
import trinityTablet from "../assets/portfolio/tablet/image-trinity.jpg";
import paramourTablet from "../assets/portfolio/tablet/image-paramour.jpg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <img
        className="side-route-title tablet"
        src={portfolioSide}
        alt="Portfolio"
      />
      <div className="portfolio-projects">
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={seraphImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={seraphTablet}
            />
            <img src={seraphImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Seraph Station</h2>
            <p className="portfolio-project-date">September 2019</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={eeboxImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={eeboxTablet}
            />
            <img src={eeboxImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Eebox Building</h2>
            <p className="portfolio-project-date">August 2017</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={federalImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={federalTablet}
            />
            <img src={federalImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Federal II Tower</h2>
            <p className="portfolio-project-date">August 2017</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={delSolImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={delSolTablet}
            />
            <img src={delSolImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Project Del Sol</h2>
            <p className="portfolio-project-date">January 2016</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={prototypeImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={prototypeTablet}
            />
            <img src={prototypeImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Le Prototype</h2>
            <p className="portfolio-project-date">October 2015</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
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
            <img src={towerImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">228B Tower</h2>
            <p className="portfolio-project-date">April 2015</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={edelweissImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={edelweissTablet}
            />
            <img src={edelweissImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Grand Edelweiss Hotel</h2>
            <p className="portfolio-project-date">December 2013</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={netcryImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={netcryTablet}
            />
            <img src={netcryImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Netcry Tower</h2>
            <p className="portfolio-project-date">August 2012</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={hypersImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={hypersTablet}
            />
            <img src={hypersImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Hypers</h2>
            <p className="portfolio-project-date">January 2012</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={sxivImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={sxivTablet}
            />
            <img src={sxivImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">SXIV Tower</h2>
            <p className="portfolio-project-date">March 2011</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={trinityImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={trinityTablet}
            />
            <img src={trinityImage} />
          </picture>
          <div className="portfolio-project-info">
            <h2 className="portfolio-project-name">Trinity Bank Tower</h2>
            <p className="portfolio-project-date">September 2010</p>
          </div>
        </div>
        <div className="portfolio-project-container">
          <picture className="portfolio-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={paramourImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={paramourTablet}
            />
            <img src={paramourImage} />
          </picture>
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
