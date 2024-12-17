import React from "react";

const Header: React.FC = () => {
    let wave = "👋";
  return (
    <div className="flex flex-col justify-center items-center text-center h-full">
      <img src="/Group 1000001874.png" alt="InstaHealth Logo" className="h-[150px] mb-4" />
      <h1 className="text-[2.5rem] font-semibold text-blue-600">Welcome to InstaHealth </h1>
      <p className="text-gray-600 mt-2 text-[1rem] opacity-[80%]">
        Hello <span className="opacity-[170%] ">{wave}</span>, welcome to tiba health where you will get access to
        different doctors and medecine on low price</p>
    </div>
  );
};

export default Header;