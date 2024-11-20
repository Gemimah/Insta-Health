import React from "react";
import { Form, Button, Col, Row, Image } from "react-bootstrap";
import "./target-page.css";  // For custom styles
import log from "/Group 1000001896.png";
import doctor7 from "/doctor-removebg-preview 7.png";

const TargetPage: React.FC = () => {
  return (
    <div className="container mt-5">
        
      <Row className="justify-content-center align-items-center">
        
        <Col md={6} className="welcome-section text-center">
        
          <div className="d-flex justify-content-center align-items-center mb-4">
            <img
              src={log} 
              alt="Logo"
              className="small-logo me-2"
            />
            <h2>Welcome to InstaHealth <span className="">👋</span></h2>
          </div>
          
          <p>InstaHealth is a user-friendly app offering quick access to healthcare services, including consultations, appointment scheduling, and personalized health insights. Simplify your wellness journey with InstaHealth.</p>
          

          
          <div className="progress-indicator my-4">
            <span className="step">1</span>
            <span className="step active">2</span>
          </div>
          <p className="step-labels">
            Basic information &nbsp;&nbsp;&nbsp; Personal Documents
          </p>
          

          
          <Image
            src={doctor7} 
            alt="Doctor"
            className="img-fluid doctor-image mt-4"
          />
        </Col>

        {/* Right Side: Form Section */}
        <Col md={6} className="form-section">
          <h3 className="mb-4 text-primary">Create an account</h3>
          <Form>
            {/* Doctor Type */}
            <Form.Group className="mb-3" controlId="formDoctorType">
              <Form.Label>Doctor Type</Form.Label>
              <Form.Control type="text" placeholder="Enter doctor type" />
            </Form.Group>

            {/* CV Upload */}
            <Form.Group className="mb-3" controlId="formCVUpload">
              <Form.Label>
                Upload your CV (or enter Google Drive link)
              </Form.Label>
              <Form.Control type="text" placeholder="Drop or upload your file here" />
            </Form.Group>

            {/* Certificate Upload */}
            <Form.Group className="mb-3" controlId="formCertificateUpload">
              <Form.Label>
                Upload your certificate (or enter Google Drive link)
              </Form.Label>
              <Form.Control type="text" placeholder="Drop or upload your file here" />
            </Form.Group>

            {/* Gender Radio Options */}
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>What's your gender?</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  id="female"
                />
                <Form.Check type="radio" label="Male" name="gender" id="male" />
                <Form.Check type="radio" label="Prefer not to say" name="gender" id="preferNotToSay" />
              </div>
            </Form.Group>

            {/* Location: Country and City */}
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCountry">
                  <Form.Label>Choose your location</Form.Label>
                  <Form.Control as="select">
                    <option>Rwanda</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control as="select">
                    <option>Kigali</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <Button variant="primary" type="submit" className="btn-lg w-100">
                Create an account
              </Button>
            </div>

            <p className="text-center mt-3">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default TargetPage;
