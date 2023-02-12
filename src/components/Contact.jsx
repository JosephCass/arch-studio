import projectImage from "../assets/contact/mobile/image-hero.jpg";
import "../styles/Contact.css";
import sectionBreak from "../assets/icons/home-rectangle-icon.svg";
import mapImage from "../assets/contact/mobile/image-map.png";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import Footer from "../components/Footer.jsx";
import projectTablet from "../assets/contact/tablet/image-hero.jpg";
import sideTitle from "../assets/contact/tablet/contact-side.svg";
import tabletMap from "../assets/contact/tablet/image-map.png";

export default function Contact() {
  return (
    <div className="contact">
      <img
        src={sideTitle}
        alt="About"
        className="side-route-title about-tablet"
      />
      <div className="contact-project">
        <div className="contact-project-picture">
          <picture className="contact-project-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={projectImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={projectTablet}
            />
            <img className="contact-project-img" src={projectImage} />
          </picture>
          {/* <div className="contact-project-background"></div> */}
          <div className="contact-project-info">
            <h1 className="contact-section-title contact-tablet">Contact</h1>
            <div className="contact-info-break contact-tablet"></div>
            <h2 className="contact-project-title">
              Your team of professionals
            </h2>
            <p className="contact-project-text">
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>
      </div>
      <img className="break-icon" src={sectionBreak} alt="" />
      <div className="contact-details">
        <h2 className="contact-details-title">Contact Details</h2>
        <div className="contact-container">
          <div className="contact-details-info">
            <h3 className="contact-details-office">Main Office</h3>
            <p className="contact-details-data">Mail : archone@mail.com</p>
            <p className="contact-details-data">
              Address : 1892 Chenoweth Drive TN
            </p>
            <p className="contact-details-data">Phone : 123-456-3451</p>
          </div>
          <a className="contact-details-view" href="">
            View on Map <img className="arrow-icon" src={arrowIcon} alt="" />
          </a>
        </div>
        <div className="contact-container above-map">
          <div className="contact-details-info">
            <h3 className="contact-details-office">Office II</h3>
            <p className="contact-details-data">Mail : archtwo@mail.com</p>
            <p className="contact-details-data">Address : 3399 Wines Lane TX</p>
            <p className="contact-details-data">Phone : 832-123-4321</p>
          </div>
          <a className="contact-details-view" href="">
            View on Map <img className="arrow-icon" src={arrowIcon} alt="" />
          </a>
        </div>
        <div className="map-container">
          <picture className="contact-details-map">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={tabletMap}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={mapImage}
            />
            <img className="contact-details-map" src={mapImage} />
          </picture>
        </div>
      </div>
      <div className="contact-connect">
        <h2 className="contact-connect-title">Connect with us</h2>
        <input className="connect-name" placeholder="Name" type="text" />
        <input className="connect-email" placeholder="Email" type="email" />
        <textarea className="connect-message" placeholder="Message" />
        <button className="submit-btn">
          <img className="arrow-icon submit-icon" src={arrowIcon} alt="" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
