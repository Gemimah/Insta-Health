import { Link,useNavigate  } from "react-router-dom";
import logo from "/Group 1000001874.png";
import "./about-us.css";
import ellipse from "/Frame 92.png";
import man1 from "/Frame 1000003760.png";
import man2 from "/Frame 1000003761.png";
import man3 from "/image 1230.png";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Card } from "react-bootstrap";

const AboutUs: React.FC = () => {
  const [activeBox, setActiveBox] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleBoxClick = (index: number) => {
    setActiveBox(index);
  };

  const handleSignUp = () => {
    navigate('/LoginRegister');
  };

  const handleLogin = () => {
    navigate('/LoginRegister');
  };
  const teamMembers = [
    {
      name: "Dennis Albo",
      role: "Ceo & Founder",
      image: "/path-to-image/dennis.jpg",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Steave Harden",
      role: "Doctor Manager",
      image: "/path-to-image/steave.jpg",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Mark Barren",
      role: "HR Director",
      image: "/path-to-image/mark.jpg",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ];
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Insta Health Logo" className="logo2" />
            <span className="brand-name ms-2">Insta Health</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/market">
                Market place
              </Link>
            </li>
            </ul>
            <div className="ms-3">
              <button className="btn btn-outline-primary me-2">Login</button>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid insta-health-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-heading">
              How Insta-health started making medical work?
            </h2>
            <p className="section-paragraph">
              Insta health was an idea of a person who is eagerly wanting to
              make the African lives good and healthy through connecting many
              Africans who get easily attacked by diseases, hence helping them
              to get easy and fast access to medicines.
            </p>
            <p className="section-paragraph">
              Insta health now is a broadband company that offers various health
              and medical programs online for Africans. It helps them live in
              advanced health and disease protection through an automated
              telemedicine app. It’s easy to use for different people, offering
              information about health at affordable prices.
            </p>
            <Button variant="outline-light" className="download-btn">
              Download our mobile app
            </Button>
          </div>

          <div className="col-md-6">
            <img src={ellipse} alt="Team meeting" className="img-fluid-2" />
          </div>
        </div>
      </div>
      <div className="container my-5 mission-values-vision">
        <h2 className="section-heading text-center">What really we are</h2>
        <div className="row justify-content-center">
          {/* Mission Card */}
          <div
            className={`col-md-4 box ${activeBox === 0 ? "active" : ""}`}
            onClick={() => handleBoxClick(0)}
          >
            <div className="card3 shadow-sm">
              <div className="card-body text-center">
                <h4 className="card-title">Mission</h4>
                <ul className="list-unstyled">
                  <li>
                    <span className="number-circle">1</span> Elevating African
                    health through easy connecting of doctors to patients and
                    enabling easy access to health activities for all African
                    countries.
                  </li>
                  <li>
                    <span className="number-circle">2</span> Helping African
                    citizens get easy access to medicines at affordable prices
                    with shipping strategies and work.
                  </li>
                  <li>
                    <span className="number-circle">3</span> Ensuring affordable
                    healthcare services.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div
            className={`col-md-4 box ${activeBox === 1 ? "active" : ""}`}
            onClick={() => handleBoxClick(1)}
          >
            <div className="card3 shadow-sm">
              <div className="card-body text-center">
                <h4 className="card-title">Values</h4>
                <ul className="list-unstyled">
                  <li>
                    <span className="number-circle">1</span> Elevating African
                    health through easy connecting of doctors to patients.
                  </li>
                  <li>
                    <span className="number-circle">2</span> Affordable access
                    to medicines and services.
                  </li>
                  <li>
                    <span className="number-circle">3</span> Commitment to
                    healthcare for all.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className={`col-md-4 box ${activeBox === 2 ? "active" : ""}`}
            onClick={() => handleBoxClick(2)}
          >
            <div className="card3 shadow-sm">
              <div className="card-body text-center">
                <h4 className="card-title">Vision</h4>
                <ul className="list-unstyled">
                  <li>
                    <span className="number-circle">1</span> Connecting patients
                    with medical professionals for accessible healthcare across
                    Africa.
                  </li>
                  <li>
                    <span className="number-circle">2</span> Facilitating cheap
                    and efficient healthcare services.
                  </li>
                  <li>
                    <span className="number-circle">3</span> Partnering with
                    other companies for better healthcare solutions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="team-section">
        <div className="container">
          <h2 className="text-center mb-4">Meet our excellent Team</h2>
          <p className="text-center mb-5">
            Meet our enthusiast team which works more flexibly and very hard to
            make the work easy.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="team-card">
                <div className="image-wrapper">
                  <img src={man3} alt="Dennis Albo" className="team-img" />
                </div>
                <div className="card-body-content">
                  <h5 className="card-title">Dennis Albo</h5>
                  <p className="card-text">CEO & Founder</p>
                  <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <div className="image-wrapper">
                  <img src={man1} alt="Steave Harden" className="team-img" />
                </div>
                <div className="card-body-content">
                  <h5 className="card-title">Steave Harden</h5>
                  <p className="card-text">Doctor Manager</p>
                  <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <div className="image-wrapper">
                  <img src={man2} alt="Mark Barren" className="team-img" />
                </div>
                <div className="card-body-content">
                  <h5 className="card-title">Mark Barren</h5>
                  <p className="card-text">HR Director</p>
                  <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-primary text-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0 tiba-health-column">
              <h4 className="footer-heading">TibaHealth</h4>
              <p>
                Eagerly want to join our community and get daily updates about
                what we do in our daily lives? Just connect with us.
              </p>
              <div className="input-group subscribe-group">
                <input
                  type="email"
                  className="form-control subscribe-input"
                  placeholder="Enter your email"
                />
                <button className="btn btn-light subscribe-btn1" type="button">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="col-md-4 mb-4 mb-md-0 quick-links-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4  mb-md-0 Connect-with-us-column">
              <div>
                <h4 className="footer-heading">Connect with us</h4>

                <ul className="list-unstyled social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-12 text-center">
              <hr className="footer-divider" />
              <p className="mb-0">&copy; 2024 TibaHealth</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
