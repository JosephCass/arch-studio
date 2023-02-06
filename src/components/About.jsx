import Footer from "../components/Footer.jsx";
import heroImage from "../assets/about/mobile/image-hero.jpg";
import "../styles/About.css";
import rectangleIcon from "../assets/icons/home-rectangle-icon.svg";
import jakePic from "../assets/about/desktop/avatar-jake.jpg";
import thompsonPic from "../assets/about/desktop/avatar-thompson.jpg";
import jacksonPic from "../assets/about/desktop/avatar-jackson.jpg";
import mariaPic from "../assets/about/desktop/avatar-maria.jpg";
import sideTitle from "../assets/about/tablet/about-side.svg";
import heroTablet from "../assets/about/tablet/image-hero.jpg";

export default function About() {
  return (
    <div className="about">
      <img
        src={sideTitle}
        alt="About"
        className="side-route-title about-tablet"
      />
      <div className="about-team">
        <div className="about-team-picture">
          <picture className="about-team-img">
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={heroImage}
            />
            <source
              media="(max-width: 992px)"
              type="image/jpg"
              srcSet={heroTablet}
            />
            <img className="about-team-img" src={heroImage} />
          </picture>
          <div className="about-team-info">
            <h1 className="about-section-title about-tablet">About</h1>
            <div className="about-info-break about-tablet"></div>
            <h2 className="about-team-title">Your team of professionals</h2>
            <p className="about-team-text">
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
          {/* <div className="about-team-background"></div> */}
        </div>
      </div>
      <img className="about-break-icon" src={rectangleIcon} alt="" />
      <div className="about-heritage">
        <h2 className="about-heritage-title">Our Heritage</h2>
        <p className="about-heritage-text">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className="about-heritage-text">
          Speciliazing in Urban. Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className="about-heritage-text">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className="about-leaders">
        <h2 className="about-leaders-title">The Leaders</h2>
        <div className="about-leaders-profiles">
          <div className="about-leaders-profiles-container">
            <img className="profile-picture" src={jakePic} alt="" />
            <h3 className="profile-name">Jake Richards</h3>
            <p className="profile-role">Cheif Architecht</p>
          </div>
          <div className="about-leaders-profiles-container">
            <img className="profile-picture" src={thompsonPic} alt="" />
            <h3 className="profile-name">Thompson Smith</h3>
            <p className="profile-role">Head of Finance</p>
          </div>
          <div className="about-leaders-profiles-container">
            <img className="profile-picture" src={jacksonPic} alt="" />
            <h3 className="profile-name">Jackson Rourke</h3>
            <p className="profile-role">Lead Designer</p>
          </div>
          <div className="about-leaders-profiles-container">
            <img className="profile-picture" src={mariaPic} alt="" />
            <h3 className="profile-name">Maria Simpson</h3>
            <p className="profile-role">Senior Architecht</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
