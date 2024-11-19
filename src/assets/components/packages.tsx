import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import logo from "./Group 1000001874.png";
=======
import logo from "/Group 1000001874.png";
>>>>>>> 840b595b (new dir)
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./packages.css";


const packages = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Insta Health Logo" className="logo4" />
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
                <Link  className="nav-link" to="/about-us">
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
      <section className="package-info">
      <Container>
        <div className="section-header">
          <h2>Know different packages that most of our customers get in order to have a better life</h2>
          <p>You are getting to know different packages that our customers likely want to get and know how the packages work and the main price that the packages cost for the better health of our customers</p>
        </div>

        <Row>
          <Col md={6}>
            <div className="package-card">
              <h3>Family Package</h3>
              <p className="price">$50 /month</p>
              <ul className="package-features">
                <li>Home caring and health support to all family members</li>
                <li>Reduced insurance money for payment</li>
                <li>Free audio and video call</li>
                <li>Addition of more than five people in family</li>
                <li>Day to day family caring and easy appointments</li>
              </ul>
              <Button variant="primary" className="choose-btn">choose package</Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="package-card">
              <h3>Individual package</h3>
              <p className="price">$20 /month</p>
              <ul className="package-features">
                <li>Individual caring for one person and his payments</li>
                <li>Reduced insurance money for payment</li>
                <li>Free audio and video call</li>
                <li>Addition of more than five people in family</li>
                <li>Day to day family caring and easy appointments</li>
              </ul>
              <Button variant="primary" className="choose-btn">choose package</Button>
            </div>
          </Col>
        </Row>
      </Container>
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
                <button className="btn btn-light subscribe-btn" type="button">
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

export default packages;
