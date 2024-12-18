import React from "react";

const UpcomingPayments: React.FC = () => {
  const payments = [
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/5/2024" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 h-full text-[#808080] ">
      <h2 className="font-medium text-[12px] mb-4">Upcoming payments</h2>
      {payments.map((payment, index) => (
        <div key={index} className="flex gap-3 text-sm shadow-md shadow-gray-100 rounded-md py-2 px-6 h-[70px] items-center  ">
          <div className="flex items-center space-x-[1rem]">
            <img src="/patient.jpg" alt="profile" className="rounded-[50%] w-10 h-10 " />
            <div className="flex flex-col ">
              <span className="font-medium">{payment.user}</span>
              <span className="text-[12px]">{payment.date}</span>
            </div>
          </div>
          <span className="font-medium text-[#0086AD] text-[16px] ">{payment.amount}</span>
          
        </div>
      ))}
            {/* <h2 className="font-medium text-[12px] pt-2 text-[#0086AD] text-right">See more</h2> */}

    </div>
  );
};

export default UpcomingPayments;
