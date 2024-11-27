import React from 'react';
import './Patient.css';

const placeholder = "via.placeholdere.com/50"

const PatientRegistration: React.FC = () => {
  return (
    <div className="registration-container">
      <div className="welcome-section">
        <img src="logo.png" alt="Logo" className="logo" /> {/* Replace with your logo path */}
        <h2>Welcome to Insta Health Patient</h2>
        <p>
          Hello patients, welcome to Tiba Health where you will get access to different doctors
          and medicine at a low price.
        </p>
        <img src={placeholder} alt="Doctor and Patient" className="illustration" />
        {/* Replace with your image path */}
      </div>

      <div className="form-section">
        <h2>Create an account</h2>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
        <form>
          <label htmlFor="username">User name</label>
          <input type="text" id="username" placeholder="User name" />

          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Email address" />

          <label htmlFor="insurance">Upload your insurance (Google Drive link)</label>
          <div className="file-upload">
            <input type="file" id="insurance" />
            <span>Drop or upload your file here</span>
          </div>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
          <p className="password-requirements">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>

          <div className="social-login">
            <span>Or</span>
            <button className="social-btn facebook-btn">Facebook</button>
            <button className="social-btn google-btn">Google</button>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By creating an account, you agree to our <a href="/terms">Terms of use</a> and{' '}
              <a href="/privacy">Privacy Policy</a>.
            </label>
          </div>

          <button type="submit" className="create-account-btn">Create an account</button>
        </form>
      </div>
    </div>
  );
};

export default PatientRegistration;
