import projectImage from "../assets/contact/mobile/image-hero.jpg";
import "../styles/Contact.css";
import sectionBreak from "../assets/icons/home-rectangle-icon.svg";
import mapImage from "../assets/contact/mobile/image-map.png";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import Footer from "../components/Footer.jsx";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-project">
        <div className="contact-project-picture">
          <img className="contact-project-img" src={projectImage} alt="" />
          <div className="contact-project-background"></div>
        </div>
        <div className="contact-project-info">
          <h2 className="contact-project-title">Your team of professionals</h2>
          <p className="contact-project-text">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
      <img className="break-icon" src={sectionBreak} alt="" />
      <div className="contact-details">
        <h2 className="contact-details-title">Contact Details</h2>
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
        <img className="contact-details-map" src="" alt="" />
        <div className="contact-details-info">
          <h3 className="contact-details-office">Office II</h3>
          <p className="contact-details-data">Mail : archtwo@mail.com</p>
          <p className="contact-details-data">Address : 3399 Wines Lane TX</p>
          <p className="contact-details-data">Phone : 832-123-4321</p>
        </div>
        <a className="contact-details-view" href="">
          View on Map <img className="arrow-icon" src={arrowIcon} alt="" />
        </a>
        <div className="map-container">
          <img className="contact-details-map" src={mapImage} alt="" />
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
