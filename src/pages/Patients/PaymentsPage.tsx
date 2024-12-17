import React from "react";
import Sidebar from "../../components/Patient/Sidebar";
import Header from "../../components/Patient/Header";
import AnalyticsCard from "../../components/Patient/AnalyticsCard";
import PaymentTable from "../../components/Patient/PaymentTable";
import InsuranceCard from "../../components/Patient/InsuranceCard";
import UpcomingPayments from "../../components/Patient/UpcomingPayments";
import { FaPlus } from "react-icons/fa";

const PaymentsPage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar
        activeTab={"Payments"}
        onTabChange={function (tab: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex-1 bg-gray-100">
        <Header title={"Payments"} />
        <div className="grid grid-cols-[1fr_24rem] ">
   
          <div className="p-4 grid grid-cols-8 gap-4 overflow-y-auto">
   
            <div className="col-span-8 grid grid-cols-3 gap-4">
              <AnalyticsCard
                title="Total Expenses"
                value="$540.50"
                icon="icon-expense"
              />
              <AnalyticsCard
                title="Appointment Payments"
                value="$350.40"
                icon="icon-appointment"
              />
              <AnalyticsCard
                title="Medical Payments"
                value="$540.50"
                icon="icon-medical"
              />
            </div>

   
            <div className="col-span-8 bg-white shadow rounded-lg p-4">
              <h2 className="font-bold text-lg">Weekly Payment Analytics</h2>
              <div className="h-32 bg-blue-100 rounded-lg"></div>
            </div>

   
            <div className="col-span-8">
              <PaymentTable />
            </div>
          </div>

   
          <div className="w-[23rem] pt-[2rem] bg-white p-4 rounded-lg space-y-4 overflow-y-auto">
   
            <div className="flex justify-between items-center">
              <p className="text-[#0086AD] font-bold">Saved Insurance</p>
              <p className="text-[#808080] text-sm flex items-center gap-2 cursor-pointer">
                <FaPlus /> Add New Insurance
              </p>
            </div>

   
            <InsuranceCard />
            <UpcomingPayments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
