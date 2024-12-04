import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate } from 'react-router-dom';
import logo from "/Group 1000001874.png";
import b1 from "/1.png";
import b2 from "/3.png";
import b3 from "/6.png";
import "/Component 6.png";
import "/Frame 1000003760.png";
import "/Frame 1000003761.png";
import "/Frame 92.png";
import doctor1 from "/Group 1000002028.png";
import { FaWhatsappSquare } from "react-icons/fa";
import "./Navbar.css";
import book from "/bbok 1.jpg";
import call from "/aud-removebg-preview 1.png";
import Patient from "/patient-removebg-preview 2.png";
import doctor2 from "/doctor-removebg-preview 7.png";
import Offers from "/Group 20.png";
import insurance from "/insurance 2.png";
import call2 from "/Group 1000002031.png";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import whatsapp from "/Group 39.png";


const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/LoginRegister');
  };

  const handleLogin = () => {
    navigate('/LoginRegister');
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
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
              <button className="btn btn-outline-primary me-2" onClick={handleLogin}>
                Login
              </button>
              <button className="btn btn-primary" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
        </div>
      </div>
    </nav>

      <header className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold text-primary">Insta Health</h1>
            <h2 className="mb-4">
              Revolutionizing Healthcare with Telemedicine
            </h2>
            <p className="lead mb-4">
              Get to know different services that we offer to make your health
              look good and ok through starting with us either you are a doctor
              or a patient.
            </p>
            <button className="btn btn-primary btn-lg me-2">
              Book an Appointment
            </button>
            <button className="btn btn-outline3-primary btn-lg">
              Download our Mobile App
            </button>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="position-relative">
              <img
                src={doctor1}
                alt="Healthcare Illustration"
                className="img-fluid"
              />

              <img
                src={whatsapp}
                alt="WhatsApp"
                className="position-absolute"
                style={{
                  bottom: "10px",
                  right: "10px",
                  width: "70",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <section className="features-section container mt-5">
  <h3 className="text-center mb-4 fw-bold text-primary" style={{ fontSize: "2.5rem" }}>
    Our Features
  </h3>
  <div className="row text-center g-4">
    <div className="col-md-3">
      <div className="card h-100 p-4 shadow feature-card">
        <img
          src={call}
          alt="Feature Icon"
          className="circular-image"
          style={{ width: "80px", height: "80px", margin: "auto" }}
        />
        <h3 className="mt-3 fw-bold">Video Call</h3>
        <p className="text-muted">Schedule easily your video call with doctors.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card h-100 p-4 shadow feature-card">
        <img
          src={book}
          alt="Feature Icon"
          className="circular-image"
          style={{ width: "80px", height: "80px", margin: "auto" }}
        />
        <h3 className="mt-3 fw-bold">Appointment Booking</h3>
        <p className="text-muted">Talk with different specialists and doctors about your health.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card h-100 p-4 shadow feature-card">
        <img
          src={call}
          alt="Feature Icon"
          className="circular-image"
          style={{ width: "80px", height: "80px", margin: "auto" }}
        />
        <h3 className="mt-3 fw-bold">Audio Call</h3>
        <p className="text-muted">Option for voice-only consultations.</p>
      </div>
    </div>
    <div className="col-md-3.5">
      <div className="card h-100 p-4 shadow feature-card">
        <img
          src={call}
          alt="Feature Icon"
          className="circular-image"
          style={{ width: "80px", height: "80px", margin: "auto" }}
        />
        <h3 className="mt-3 fw-bold">Messaging</h3>
        <p className="text-muted">In-app messaging for quick communication with healthcare providers.</p>
      </div>
    </div>
  </div>
</section>


      <section className="partners-section container my-5">
        <h2 className="text-center mb-4 partners-heading">Our Partners</h2>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <img
            src={b1}
            alt="Partner Logo 1"
            className="partner-logo mx-3 my-2"
          />
          <img
            src={b2}
            alt="Partner Logo 2"
            className="partner-logo mx-3 my-2"
          />
          <img
            src={b3}
            alt="Partner Logo 3"
            className="partner-logo mx-3 my-2"
          />
          <img
            src={b2}
            alt="Partner Logo 4"
            className="partner-logo mx-3 my-2"
          />
          <img
            src={b1}
            alt="Partner Logo 5"
            className="partner-logo mx-3 my-2"
          />
        </div>
      </section>
      <section className="container benefits-section my-5">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h1>Benefits of working with us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 benefits-left">
            <img src={Offers} alt="Offer" className="img-fluid medium-image" />
          </div>
          <div className="col-md-6 benefits-right d-flex flex-column align-items-center">
            <img
              src={Patient}
              alt="Patient"
              className="img-fluid small-image mb-3"
            />
            <p className="benefits-paragraph">
              At our core, we strive to unlock the stability and happiness of
              both patients and healthcare professionals. By working together,
              we help patients achieve recovery and lasting well-being, allowing
              them to live healthy, problem-free lives. This strong bond between
              patients and healthcare providers promotes a future of better
              health and lasting happiness.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 benefits-right">
            <img
              src={doctor2}
              alt="Physician"
              className="img-fluid small-image mb-3"
            />
            <p className="benefits-paragraph">
              For doctors and physicians, this mission enables a fulfilling
              career where they can connect deeply with patients, providing
              expert care that leads to meaningful outcomes.
            </p>
          </div>
          <div className="col-md-6 benefits-left d-flex flex-column align-items-center">
            <img
              src={Offers}
              alt="Doctor"
              className="img-fluid medium-image "
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 benefits-left">
            <img src={Offers} alt="Offer" className="img-fluid medium-image" />
          </div>
          <div className="col-md-6 benefits-right d-flex flex-column align-items-center">
            <img
              src={insurance}
              alt="Patient"
              className="img-fluid small-image mb-3"
            />
            <p className="benefits-paragraph">
              At our core, we strive to unlock the stability and happiness of
              both patients and healthcare professionals. By working together,
              we help patients achieve recovery and lasting well-being, allowing
              them to live healthy, problem-free lives. This strong bond between
              patients and healthcare providers promotes a future of better
              health and lasting happiness.
            </p>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 benefits-left">
            <img src={call2} alt="Offer" className="img-fluid large-image" />
          </div>

          <div className="col-md-6 benefits-right">
            <h2 className="custom-heading text-primary">
              Are you at home and you need a doctor?
            </h2>
            <p className="benefits-paragraph">
              You are eagerly want to talk with us, and we are here to provide
              the best medical services right at your doorstep.
            </p>
            <div className="button-container">
              <Button
                variant="primary"
                className="book-doctor-btn"
                onClick={() => alert("Booking a Doctor")}
              >
                Book Doctor
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 contact-form">
        <h2 className="form-heading text-primary">Let’s get in touch!</h2>
        <p className="sub-heading">
          Got a problem working with us in our day-to-day activities in your
          health?
        </p>

        <div className="row">
          <div className="col-md-6 contact-details">
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-phone-alt contact-icon"></i>
              <span className="ml-3 contact-text">+012 345 6789</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-envelope contact-icon"></i>
              <span className="ml-3 contact-text">Tibahealth@gmail.com</span>
            </div>
          </div>

          <div className="col-md-6">
            <Form className="form-section1">
              <Form.Group controlId="formFullName" className="mb-4">
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-btn">
                Submit
              </Button>
            </Form>
          </div>
        </div>

        <div className="media-links mt-4">
          <p>Connect with us:</p>
          <a href="#!" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#!" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <footer className="footer bg-primary text-white">
  <div className="container py-4">
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0 tiba-health-column">
        <h4 className="footer-heading">TibaHealth</h4>
        <p>
          Eagerly want to join our community and get daily updates about
          what we do in our daily lives? Just connect with us.
        </p>
        <div className="input-group subscribe-group d-flex">
          <input
            type="email"
            className="form-control subscribe-input"
            placeholder="Enter your email"
          />
          <button className="btn btn-light subscribe-btn w-100" type="button">
            <span className="text-muted">Subscribe</span>
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

export default Navbar;
