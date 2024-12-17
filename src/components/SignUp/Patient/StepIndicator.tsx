import React from "react";

const StepIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-[2rem]">
      <div className="text-gray-400 justify-center items-center text-center ">
      <div className="text-lg font-bold">1</div>
        <p className="text-sm">Basic Information</p>
      </div>
      <div className="border-t border-gray-300 w-[10rem]"></div>
      <div className="text-gray-400 justify-center items-center text-center ">
        <div className="text-lg font-bold">2</div>
        <p className="text-sm">Personal Information</p>
      </div>
    </div>
  );
};

export default StepIndicator;
