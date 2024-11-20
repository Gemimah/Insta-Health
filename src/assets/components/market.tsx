import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/Group 1000001874.png";
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import Toiletpaper from "/ph 1.png";
import "../components/market.css";


interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  rating: number;
  imgSrc: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
 {
    id: 2,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 3,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 4,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 5,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 6,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 7,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 8,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 9,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 10,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 11,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 12,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 13,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 14,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 15,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  },
  {
    id: 16,
    title: "Toilet paper",
    category: "Raw Materials",
    price: "$100",
    rating: 5,
    imgSrc: "Toiletpaper",
  }, 
];

interface MarketProps {
  handleAddToCart: (product: Product) => void;
}

const Market: React.FC<MarketProps> = ({ handleAddToCart }) => {
  const navigate = useNavigate();

  const addToCartAndRedirect = (product: Product) => {
    handleAddToCart(product);
    navigate("/market");
  };

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

      <Container className="my-5">
        <Row className="mb-4">
          <Col md={3}>
            <Dropdown className="w-100">
              <Dropdown.Toggle
                variant="primary"
                id="dropdown-basic"
                className="w-100"
              >
                Pharmaceutical
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Medicines</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Supplements</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Medical Devices</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          {products.map((product) => (
            <Col lg={3} sm={10} xs={12} key={product.id} className="mb-4">
              <Card className="product-card h-55">
                <div className="image-wrapper">
                  <img
                    src={Toiletpaper}
                    alt={product.title}
                    className="card-img-top product-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">
                    {product.title}
                  </Card.Title>
                  <p className="text-center text-muted">{product.category}</p>
                  <div className="price-rating-wrapper">
                    <h4 className="text-center">{product.price}</h4>
                    <div className="d-flex justify-content-center">
                      {[...Array(product.rating)].map((_, i) => (
                        <FaStar key={i} color="orange" />
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    className="w-100 mt-3"
                    onClick={() => addToCartAndRedirect(product)}
                  >
                    Add to cart
                  </Button>
                  <FaHeart className="favorite-icon" />
                </Card.Body>
              </Card>
            </Col>
          ))}
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

export default Market;
