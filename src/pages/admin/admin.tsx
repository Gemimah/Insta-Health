import AdminCards from "../../components/admin/Card";
import Header from "../../components/admin/header";
import RevenueInfo from "../../components/admin/revenue";
import Sidebar from "../../components/admin/Sidebar";

export default function AdminDashboard() {
    const users=[
        {
            image:"/patient.jpg",
            title:"Total Patients",
            numbers:"1890"
        },
        {
            image:"/doctors.jpg",
            title:"Total Doctors",
            numbers:"1890"
        },
        {
            image:"/cons.jpg",
            title:"Total Consultations",
            numbers:"1890"
        },{
            image:"/appoint.webp",
            title:"Total Appointments",
            numbers:"1890"
        }
    ]

    return (
        <>
            <div className="flex overflow-x-hidden">
                <Sidebar activeTab={"AdminDashboard"}
                    onTabChange={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                   <div className="flex flex-col  gap-10">
                <Header title="Dashboard"/>
                <div className="flex justify-start  gap-3 px-5">
                    {
                        users.map((item,index)=>(
                            <AdminCards key={index} image={item.image} title={item.title} numbers={item.numbers}/>
                        ))
                    }

                </div>
                <div className="flex px-5">
                    <div className="w-cover">
                    <RevenueInfo/>

                    </div>

                </div>

            </div>

            </div>
         
        </>
    )
}