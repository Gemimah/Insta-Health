import React from "react";

const InsuranceCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0139FE] to-[#40c6cf] to-100% text-white rounded-lg p-[1rem] space-y-[4rem] ">
      <div className="flex items-center space-x-4">
      <img
      src="https://via.placeholder.com/80"
      alt="image"
      className="rounded-[50%] w-[2.5rem] h-[2.5rem]"
      />
      <h3 className="font-bold text-[1.2rem] mb-2">Mac Anderson</h3>
      </div>
      <div className=" items-center contents-center ">
        <div className="flex items-center space-x-[2rem] ">
        <div className="w-[15rem]">1111 5478 6758 6891</div>
      <img src="/logo-w.png" alt="logo" className="w-[40px] h-[40px]" />
        </div>
      <div className="text-[8px] content-center items-center ">Powered by MedHealth Company</div>
      </div>
    </div>
  );
};

export default InsuranceCard;
