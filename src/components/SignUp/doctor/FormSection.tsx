import React, { useState } from "react";
import SocialAuthButtons from "../../Patient/SocialAuthButtons";
import TermsCheckbox from "./TermsCheckbox";

const FormSection: React.FC = () => {
  const [registerAs, setRegisterAs] = useState("Doctor");

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Create an account</h2>
      <p className="text-sm text-gray-500">
        Already have an account? <a href="/login" className="text-blue-500">Log in</a>
      </p>

      {/* Registration Options */}
      <div className="mt-4">
        <p className="text-sm text-gray-700">Register as</p>
        <div className="flex items-center space-x-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="registerAs"
              value="Doctor"
              checked={registerAs === "Doctor"}
              onChange={() => setRegisterAs("Doctor")}
              className="form-radio text-blue-500"
            />
            <span className="ml-2 text-gray-700">Doctor</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="registerAs"
              value="Patient"
              checked={registerAs === "Patient"}
              onChange={() => setRegisterAs("Patient")}
              className="form-radio text-blue-500"
            />
            <span className="ml-2 text-gray-700">Patient</span>
          </label>
        </div>
      </div>

      {/* Form Fields */}
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="User name"
          className="w-full bg-white p-2 text-[#666] border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-white p-2 text-[#666] border rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white p-2 text-[#666] border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="absolute right-2 top-2 cursor-pointer text-gray-500">Hide</span>
        </div>
        <p className="text-xs text-red-500">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>

        <SocialAuthButtons />
        <TermsCheckbox />
        
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          Continue
        </button>
      </form>
    </div>
  );
};

export default FormSection;
