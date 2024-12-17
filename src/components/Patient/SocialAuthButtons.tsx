import React from "react";

const SocialAuthButtons: React.FC = () => {
  return (
    <div className="flex justify-between mt-4">
      <button className="flex text-white items-center justify-center w-full border bg-blue-500 rounded-md py-2 mr-2 hover:bg-gray-100 hover:text-blue-700">
        <img src="/facebook.svg" alt="Facebook" className="h-5 mr-2" />
        Facebook
      </button>
      <button className="flex items-center justify-center w-full border border-[#666] bg-white text-blue-500 rounded-md py-2 ml-2 hover:bg-gray-100">
        <img src="/google.svg" alt="Google" className="h-5 mr-2" />
        Google
      </button>
    </div>
  );
};

export default SocialAuthButtons;
