import React from "react";
import Header from "../../components/SignUp/doctor/Header";
import StepIndicator from "../../components/SignUp/doctor/StepIndicator";
import FormSection from "../../components/SignUp/doctor/FormSection";

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen w-[95rem] flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 ">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Header and Image */}
          <div className="flex-1 flex flex-col items-center justify-center mb-14 p-4 border-r border-gray-200 ">
            <Header />
            <StepIndicator />
          </div>
          {/* Right Section - Form */}
          <div className="flex-1 p-6">
            <FormSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
