import React from "react";
import { Form, Button, Col, Row, Image } from "react-bootstrap";
import "./Register.css"; 
<<<<<<< HEAD
import doctor5 from "./doctor-removebg-preview 7.png";
import small from "./Group 1000001896.png";
=======
import doctor5 from "/doctor-removebg-preview 7.png";
import small from "/Group 1000001896.png";
>>>>>>> 840b595b (new dir)
import { useNavigate } from "react-router-dom";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();  

  const handleContinue = () => {
    
    navigate("/target-page");
  };

  return (
    <div className="container mt-5">
      <Row className="justify-content-center align-items-center">
      
        <Col md={6} className="welcome-section text-center">
          
          <div className="Header">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <img
                src={small} 
                alt="Logo"
                className="small-logo me-2"
              />
              <h2>Welcome to InstaHealth doctor</h2>
            </div>
            <p>
              Hello doctor, create your account to use InstaHealth and talk to different patients.
            </p>
          </div>

          
          <div className="progress-indicator my-4">
            <span className="step active">1</span>
            <span className="step">2</span>
          </div>
          <p className="step-labels">
            Basic Information &nbsp;&nbsp;&nbsp; Personal Information
          </p>

          
          <Image
            src={doctor5} 
            alt="Doctor"
            className="img-fluid doctor-image mt-4"
          />
        </Col>

        
        <Col md={6} className="form-section">
          <h3 className="mb-4 text-primary">Create an account</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              <Form.Text className="text-muted">
                Use 8 or more characters with a mix of letters, numbers & symbols.
              </Form.Text>
            </Form.Group>

            <p className="text-center mt-3">Or</p>

            
            <div className="d-flex justify-content-center mb-3">
              <Button variant="outline-primary" className="me-2">
                Facebook
              </Button>
              <Button variant="outline-danger">Google</Button>
            </div>

            <Form.Group className="mb-3" controlId="formTerms">
              <Form.Check
                type="checkbox"
                label="By creating an account, you agree to our Terms of use and Privacy Policy"
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="btn-lg w-100" onClick={handleContinue}>
                Continue
              </Button>
            </div>
          </Form>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CreateAccount;
