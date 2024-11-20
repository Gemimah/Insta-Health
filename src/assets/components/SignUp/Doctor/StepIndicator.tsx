import React from "react";

const StepIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-[2rem]">
      <div className="flex flex-col items-center text-gray-400 text-center">
        <div className="text-lg text-white font-bold bg-blue-500 w-7 h-7 flex items-center justify-center rounded-full">
          1
        </div>
        <p className="text-sm mt-2">Basic Information</p>
      </div>
      <div className="border-t border-gray-300 w-[10rem]"></div>
      <div className="flex flex-col items-center text-gray-400 text-center">
        <div className="text-lg text-white font-bold bg-blue-500 w-7 h-7 flex items-center justify-center rounded-full">
          2
        </div>
        <p className="text-sm mt-2">Personal Information</p>
      </div>
    </div>
  );
};

export default StepIndicator;
