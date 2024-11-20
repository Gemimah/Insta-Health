import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './servicessection.css';
import { Link } from "react-router-dom";
import logo from "/Group 1000001874.png";
import doctor3 from "/Frame 1000003763.png";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Consultation',
      description: 'We offer a consultation about different diseases like general medicine, kids diseases, and other diseases which may affect any person through a meeting with a doctor at easy and low prices.',
      buttonText: 'Learn more',
      imgSrc: '/path-to-image1.jpg',
    },
    {
      id: 2,
      title: 'Health Monitoring',
      description: 'We provide comprehensive health monitoring services tailored to track and manage your health over time. Our team monitors vital signs, chronic conditions, and general wellness, offering personalized insights to keep you informed about your health.',
      buttonText: 'Learn more',
      imgSrc: '/path-to-image2.jpg',
    },
    {
      id: 3,
      title: 'Second Opinions',
      description: 'Whether you’re managing an ongoing condition or looking to maintain a healthy lifestyle, our service ensures you stay on top of your well-being with regular updates and easy-to-understand reports.',
      buttonText: 'Learn more',
      imgSrc: '/path-to-image3.jpg',
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Insta Health Logo" className="logo3" />
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
        </div>o
        
      </nav>

      <section className="services-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Our services</h2>
          <p>Get access to different medical services that we offer in our daily activities, and also get access to our work through using our website Tiba health.</p>
        </div>
        <Row>
          {services.map((service) => (
            <Col md={4} key={service.id} className="d-flex align-items-stretch mb-4">
              <Card className="service-card1">
                <div className="image-wrapper1">
                  <img src={doctor3} alt={service.title} className="card-img-top service-img" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{service.title}</Card.Title>
                  <Card.Text className="text-center flex-grow-1">
                    {service.description}
                  </Card.Text>
                  <Button variant="primary" className="align-self-center">{service.buttonText}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
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

export default ServicesSection;
