import React from "react";

const Header: React.FC = () => {
    let wave = "👋";
  return (
    <div className="flex flex-col justify-center items-center text-center h-full">
      <img src="/Group 1000001874.png" alt="InstaHealth Logo" className="h-[150px] mb-4" />
      <h1 className="text-[2.5rem] font-semibold text-blue-600">Welcome to InstaHealth </h1>
      <h4 className="text-gray-600 mt-2 text-[1rem] opacity-[80%]">
        Hello <span className="opacity-[170%] ">{wave}</span>, create your account to use Insta Health and talk to different patients.
      </h4>
    </div>
  );
};

export default Header;
