import React from "react";

const TermsCheckbox: React.FC = () => {
  return (
    <div className="flex items-center mt-4">
      <input type="checkbox" className="form-checkbox bg-white text-blue-500" required />
      <p className="ml-2 text-sm text-gray-600">
        By creating an account, you agree to our{" "}
        <a href="/terms" className="text-blue-500">Terms of use</a> and{" "}
        <a href="/privacy" className="text-blue-500">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default TermsCheckbox;
