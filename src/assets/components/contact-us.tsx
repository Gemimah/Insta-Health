
import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import "./contact-us.css";
import { Link } from "react-router-dom";
import logo from "/Group 1000001874.png";
import map from "/Component 6.png";

const contactUs = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Insta Health Logo" className="logo5" />
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
    <section className="get-in-touch">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="get-in-touch-title">Get in Touch</h2>
            <p className="get-in-touch-description">Eagerly want to get in touch and talk with us in our day to day activities just fill this form</p>
            <Form className="get-in-touch-form">
              <FormGroup>
                <FormControl type="text" placeholder="Name" required />
              </FormGroup>
              <FormGroup>
                <FormControl type="email" placeholder="Email" required />
              </FormGroup>
              <FormGroup>
                <FormControl type="tel" placeholder="Phone number" required />
              </FormGroup>
              <FormGroup>
                <FormControl as="textarea" rows={5} placeholder="Enter your message here" required />
              </FormGroup>
              <Button type="submit" variant="primary" className="get-in-touch-submit">SEND</Button>
            </Form>
          </Col>
          <Col lg={6}>
            <div className="get-in-touch-map">
              <img src={map} alt="Map" className="img-fluid" />
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
  )
};

export default contactUs;
