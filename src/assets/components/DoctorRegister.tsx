import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/DoctorRegister.css';  
import countries from './countries.json';
import React, { useState } from 'react';

interface Country {
  name: string;
}

const placeholder = "via.placeholder.com/80"

const DoctorRegistration: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="registration-container">
      <div className="registration-left">
        <img src={placeholder} alt="Doctor" />
        <h2>Welcome to InstaHealth doctor</h2>
        <p>
          Hello doctor, create your account to use at InstaHealth and talk to different patients.
        </p>
        <div className="steps">
          <span>1</span> Basic information
          <span>2</span> Personal Documents
        </div>
      </div>

      <div className="registration-right">
        <h2>Create an account</h2>
        <form>
          <input type="text" className="form-control" placeholder="Doctor Type" />
          <input type="text" className="form-control" placeholder="Upload your CV (Google Drive link)" />
          <input type="text" className="form-control" placeholder="Upload your certificate (Google Drive link)" />

          <div className="form-group">
            <label>What's your gender?</label>
            <div>
              <label>
                <input type="radio" name="gender" value="female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="other" /> Prefer not to say
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Choose your country</label>
            <select className="form-control" value={selectedCountry} onChange={handleCountryChange}>
              <option value="">--Select a Country--</option>
              {countries.map((country: Country, index: number) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Choose your city</label>
            <select className="form-control">
              <option>Kigali</option>
          
            </select>
          </div>

          <button type="submit" className="continue-btn">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;
