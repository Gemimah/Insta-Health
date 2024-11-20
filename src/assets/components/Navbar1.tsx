import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import logo from "/Group 1000001874.png";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
        <div className="container-fluid">
          {/* Brand Name / Logo Section */}
          <div className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Insta Health" className="h-8 w-auto me-2" />
            <a className="navbar text-lg fw-bold text-primary" href="/">InstaHealth</a>
          </div>

          {/* Navigation Toggle Button for Mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links Section */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Right Side Buttons Section */}
            <div className="d-flex ms-3">
              <button className="btn btn-primary me-2" onClick={handleLogin}>Login</button>
              <button className="btn btn-outline-primary" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
