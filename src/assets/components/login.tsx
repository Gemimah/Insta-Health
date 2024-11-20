import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //const handleSubmit = (e) => {
    //e.preventDefault();
    //alert(`Email:${email}, Password: ${password}`);
  //};

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h1 className="text-center mb-4">Welcome to Tiba Health</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address or Phone number</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'} 
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility} 
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </form>
          <div className="text-center mt-3">
            <a href="#" className="text-danger">
              Forgot your password?
            </a>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-outline-primary mr-2">
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </button>
            <button className="btn btn-outline-primary">
              <FontAwesomeIcon icon={faGoogle} /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
