import React from "react";

const UpcomingPayments: React.FC = () => {
  const payments = [
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 text-[#808080] ">
      <h2 className="font-medium text-[12px] mb-4">Upcoming payments</h2>
      {payments.map((payment, index) => (
        <div key={index} className="flex justify-between text-sm shadow-md py-2 px-3 rounded items-center  ">
          <div className="flex items-center space-x-[1rem]">
            <img src="https://via.placeholder.com/50" alt="profile" className="rounded-[50%] " />
            <div className="flex flex-col ">
              <span className="font-medium">{payment.user}</span>
              <span className="text-[12px]">{payment.date}</span>
            </div>
          </div>
          <span className="font-medium text-[#0086AD] text-[20px] ">{payment.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default UpcomingPayments;
