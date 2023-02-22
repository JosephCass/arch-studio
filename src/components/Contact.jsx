import projectImage from "../assets/contact/mobile/image-hero.jpg";
import "../styles/Contact.css";
import sectionBreak from "../assets/icons/home-rectangle-icon.svg";
import mapImage from "../assets/contact/mobile/image-map.png";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import Footer from "../components/Footer.jsx";
import projectTablet from "../assets/contact/tablet/image-hero.jpg";
import sideTitle from "../assets/contact/tablet/CONTACT.svg";
import tabletMap from "../assets/contact/tablet/image-map.png";
import projectDesktop from "../assets/contact/desktop/image-hero.jpg";
import desktopMap from "../assets/contact/desktop/image-map.png";
import { useState } from "react";

export default function Contact() {
  let [inputName, setInputName] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [inputText, setInputText] = useState("");

  let [nameValid, setNameValid] = useState(null);
  let [emailValid, setEmailValid] = useState(null);
  let [textValid, setTextValid] = useState(null);

  let [emailError, setEmailError] = useState("");

  function getEmailError(e) {
    if (e.target.validity.valueMissing) {
      setEmailError("Can't be empty");
    } else if (e.target.validity.typeMismatch) {
      setEmailError("Invalid Email");
    }
  }

  return (
    <div className="contact">
      <img
        src={sideTitle}
        alt="About"
        className="side-route-title about-tablet"
      />
      <div className="contact-project">
        <div className="contact-project-picture">
          <picture>
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
            <source
              media="(min-width: 992px)"
              type="image/jpg"
              srcSet={projectDesktop}
            />
            <img className="contact-project-img" src={projectImage} />
          </picture>
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
        <div className="contact-desktop-container">
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
              <p className="contact-details-data">
                Address : 3399 Wines Lane TX
              </p>
              <p className="contact-details-data">Phone : 832-123-4321</p>
            </div>
            <a className="contact-details-view" href="">
              View on Map <img className="arrow-icon" src={arrowIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="map-container">
          <picture className="contact-details-map">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={mapImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={tabletMap}
            />
            <source
              media="(min-width: 992px)"
              type="image/jpg"
              srcSet={desktopMap}
            />
            <img className="contact-details-map" src={mapImage} />
          </picture>
        </div>
      </div>
      <div className="contact-connect">
        <legend className="contact-connect-title">Connect with us</legend>
        <form onSubmit={(e) => e.preventDefault} className="input-container">
          <div className="input-field">
            <input
              className={`connect-name ${
                nameValid === false ? "invalid-input" : ""
              }`}
              required
              placeholder="Name"
              type="text"
              value={inputName}
              onFocus={(e) => {
                setNameValid(e.target.validity.valid);
              }}
              onChange={(e) => {
                setInputName(e.target.value);
                setNameValid(e.target.validity.valid);
              }}
            />
            {nameValid === false ? (
              <p className="input-error-msg">Can't be empty</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-field">
            <input
              className={`connect-name ${
                emailValid === false ? "invalid-input" : ""
              }`}
              required
              placeholder="Email"
              type="email"
              value={inputEmail}
              onFocus={(e) => {
                setEmailValid(e.target.validity.valid);
                getEmailError(e);
              }}
              onChange={(e) => {
                setInputEmail(e.target.value);
                setEmailValid(e.target.validity.valid);
                getEmailError(e);
              }}
            />
            {emailValid === false ? (
              <p className="input-error-msg">{emailError}</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-field">
            <textarea
              className={`connect-name ${
                textValid === false ? "invalid-input" : ""
              }`}
              value={inputText}
              required
              placeholder="Message"
              onFocus={(e) => {
                setTextValid(e.target.validity.valid);
              }}
              onChange={(e) => {
                setInputText(e.target.value);
                setTextValid(e.target.validity.valid);
              }}
            />
            {textValid === false ? (
              <p className="input-error-msg">Can't be empty</p>
            ) : (
              ""
            )}
          </div>
          <button className="submit-btn">
            <img className="arrow-icon submit-icon" src={arrowIcon} alt="" />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
