import React from "react";

interface Payment {
  user: string;
  amount: string;
  date: string;
}

const PaymentTable: React.FC = () => {
  const payments: Payment[] = [
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/6/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/6/2024" },
    { user: "Dr Marc Davis", amount: "$50.0", date: "10/6/2024" },
  ];

  return (
    <div className="bg-white shadow text-[#808080] rounded-lg p-4">
      <div className="flex items-center space-x-[70%] ">
        <h2 className="font-semibold text-[16px] w-[12rem] mb-4 left-0">Latest Payments</h2>
        <h2 className="font-semibold text-[14px] mb-4 right-0"><a href="#">View All</a></h2>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-600 border-b  ">
            <th>Paid user</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index} className="text-sm h-[66px] shadow-inner ">
              <td className="flex items-center font-bold gap-[1rem] pl-[2rem] py-[8px]">
                <img src="https://via.placeholder.com/80" alt="" className="w-[50px] h-[50px] rounded-[50%]" />
                {payment.user}
              </td>
              <td className="py-[8px]">{payment.amount}</td>
              <td className="py-[8px]">{payment.date}</td>
              <td className="py-[8px]">
                <button className="text-blue-500 bg-white border border-blue-500 px-[1.5rem] rounded-[5px]">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
