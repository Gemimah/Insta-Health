import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../components/PaymentDetails.css"; 
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link} from "react-router-dom";
import logo from "/logo.png";
import { BsSearch } from "react-icons/bs";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  imgSrc: string;
}


interface PaymentDetailsProps {
  cartItems: Product[];
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ cartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 0; 
  const total = subtotal + shipping;

  return (
    <>
    <nav className="">
        <div className=" flex flex-col">
          <div className="navbar navbar-expand-lg navbar-light py-3">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src={logo} alt="Insta Health Logo" className="logo" />
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
          <div>
            <div className="">
              <div className="d-flex align-items-center ms-auto gap-5">
                <div>
                  <h2 className="text-center">Our Medical Equipments</h2>
                </div>
                <form className="d-flex search-bar">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search here..."
                    aria-label="Search"
                  />
                  <button className="btn btn-light search-btn" type="submit">
                    <BsSearch />
                  </button>
                </form>
                <Link to="/cart" className="btn btn-light position-relative">
                  <FaCartPlus />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    2
                  </span>
                </Link>
                <Link to="/wishlist" className="btn btn-light">
                  <FaHeart />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    <Container className="payment-details-container">
      <Row className="justify-content-center">
        <Col lg={6}>
          <h3 className="payment-details-title mb-4">Payment Details</h3>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" required />
            </Form.Group>
            <Form.Group controlId="secondName">
              <Form.Label>Second Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your second name" />
            </Form.Group>
            <Form.Group controlId="streetAddress">
              <Form.Label>Street Address*</Form.Label>
              <Form.Control type="text" placeholder="Enter your street address" required />
            </Form.Group>
            <Form.Group controlId="apartment">
              <Form.Label>Apartment, floor, etc. (optional)</Form.Label>
              <Form.Control type="text" placeholder="Enter apartment details" />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>Town/City*</Form.Label>
              <Form.Control type="text" placeholder="Enter your town or city" required />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" required />
            </Form.Group>
            <Form.Group controlId="emailAddress">
              <Form.Label>Email Address*</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Form.Group>
            <Form.Group controlId="saveInformation">
              <Form.Check
                type="checkbox"
                label="Save this information for faster check-out next time"
              />
            </Form.Group>
          </Form>
        </Col>

        <Col lg={4}>
          <div className="cart-summary-box p-4 border">
            <h5 className="mb-3">Your Order</h5>
            <div className="cart-items-summary">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <img src={item.imgSrc} alt={item.title} className="cart-item-image" />
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5>Total:</h5>
                <h5>${total}</h5>
              </div>
            </div>
            <div className="mt-4">
              <Form.Check
                type="radio"
                label="Bank"
                name="paymentMethod"
                value="Bank"
                onChange={handlePaymentMethodChange}
                checked={paymentMethod === "Bank"}
              />
              <Form.Check
                type="radio"
                label="Cash on delivery"
                name="paymentMethod"
                value="Cash on delivery"
                onChange={handlePaymentMethodChange}
                checked={paymentMethod === "Cash on delivery"}
              />
            </div>
            <Button variant="primary" className="w-100 mt-3">
              Pay Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
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
        </div>
      </footer>
    </>
  );
};

export default PaymentDetails;
