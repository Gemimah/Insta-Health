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
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-1">
        <div className="container7">
          {/* Brand Name / Logo Section */}
          <div className="navbar-brand flex flex-row items-center space-x-5">
            <a className="navbar text-lg font-semibold space-x-[5rem] ">
              <img src={logo} alt="Insta Health" className="h-8 w-auto" />
              <p>InstaHealth</p>
              </a>
          </div>

          {/* Navigation Links Section */}
          <div className="navbar-nav ms-auto">
            <ul className="navbar-nav">
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
          </div>

          {/* Right Side Buttons Section */}
          <div className="auth-buttons ms-3">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            <button className="btn btn-outline-primary" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
