import { FC } from "react";
import Sidebar from "../../components/Patient/Sidebar";
import Header from "../../components/Patient/Header";
import UserInfoCard from "../../components/Patient/UserInfoCard";
import AppointmentsCard from "../../components/Patient/AppointmentsCard";
import HealthConditionChart from "../../components/Patient/HealthConditionChart";
import HeartRateChart from "../../components/Patient/HeartRateChart";
import Status from "../../components/Patient/Status";
import MyAppointments from "../../components/Patient/MyAppointments";

const user = {
  age: 24,
  bloodType: "A",
  height: 168,
  name: "Kyrie Philipes",
  pic: "https://via.placeholder.com/80",
  weight: 69,
};

const Dashboard: FC = () => {
  return (
    <div className="flex">
      <Sidebar
        activeTab={"Dashboard"}
        onTabChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex-1">
        <Header title={"Dashboard"} />
        <div>
        <div className="grid grid-cols-2 p-6 gap-6 mt-8">
          <UserInfoCard user={user} />
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex justify-center space-x-[35%]">
              <div className="text-center ">
                <h2 className="text-[#808080] text-[1.3rem] font-bold whitespace-nowrap">
                  General Health
                </h2>
                <Status />
              </div>
              <div className="text-center ">
                <h2 className="text-[#808080] text-[1.3rem] font-bold whitespace-nowrap">
                  Water Balance
                </h2>
                <Status />
              </div>
            </div>
            <HeartRateChart />
          </div>
          <AppointmentsCard />
          <HealthConditionChart />
        </div>
        <div>
          <MyAppointments />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
