import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/Group 1000001874.png";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "../components/Cart.css";

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  rating: number;
  imgSrc: string;
}

interface CartProps {
  cartItems: Product[];
  handleRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, handleRemoveFromCart }) => {
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      const price = parseFloat(product.price.replace("$", ""));
      return total + price;
    }, 0);
  };

  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/market">Marketplace</Link>
              </li>
            </ul>
            <div className="ms-3">
              <button className="btn btn-outline-primary me-2">Login</button>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

    
      <Container className="my-5">
        <h2 className="text-center mb-4">Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <h5 className="text-center">Your cart is empty!</h5>
        ) : (
          <>
            <Table responsive bordered hover className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={product.imgSrc}
                          alt={product.title}
                          className="cart-product-img"
                        />
                        <span className="ms-3">{product.title}</span>
                      </div>
                    </td>
                    <td>${product.price}</td>
                    <td>
                      <input type="number" min="1" max="10" defaultValue="1" className="form-control quantity-input" />
                    </td>
                    <td>${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Return and Update Cart Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <Button variant="outline-primary" onClick={() => navigate("/market")}>
                Return to Shop
              </Button>
              <Button variant="primary">Update Cart</Button>
            </div>

            {/* Total Price Section */}
            <div className="total-price text-end mt-4">
              <h4>Total Price: ${calculateTotalPrice().toFixed(2)} USD</h4>
              <Button variant="success" onClick={() => navigate("/checkout")}>
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </Container>
      <Container className="my-6">
      <div className="cart-total">
      <h4 className="cart-total-heading">Cart Total</h4>
      <div className="cart-total-row">
        <span>Subtotal:</span>
        <span>$1750</span>
      </div>
      <div className="cart-total-row">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="cart-total-row total">
        <span>Total:</span>
        <span>$1750</span>
      </div>
      <Button variant="success" onClick={() => navigate("/PaymentDetails")}>
  Proceed to Payment
</Button>

    </div>
    </Container>



      
      <footer className="footer bg-primary text-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="footer-heading">Insta Health</h4>
              <p>Stay updated with our latest products and offers!</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-white">Home</Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-white">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-white">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="footer-heading">Connect with us</h4>
              <ul className="list-unstyled social-links">
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Cart;
