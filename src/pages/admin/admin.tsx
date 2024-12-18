import AdminCards from "../../components/admin/Card";
import DoctorList from "../../components/admin/doctors";
import Header from "../../components/admin/header";
import PatientTable from "../../components/admin/patientList";
import RevenueInfo from "../../components/admin/revenue";
import Sidebar from "../../components/admin/Sidebar";

export default function AdminDashboard() {
    const users = [
        {
            image: "/patient.jpg",
            title: "Total Patients",
            numbers: "1890"
        },
        {
            image: "/doctors.jpg",
            title: "Total Doctors",
            numbers: "1890"
        },
        {
            image: "/cons.jpg",
            title: "Total Consultations",
            numbers: "1890"
        }, {
            image: "/appoint.webp",
            title: "Total Appointments",
            numbers: "1890"
        }
    ];

    return (
        <>
            <div className="flex h-screen z-50 ">
                {/* Sidebar */}
                <Sidebar 
                    activeTab={"Dashboard"}
                    onTabChange={() => {}} 
                />

                {/* Main content area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <Header title="Dashboard" />

                    {/* Cards Section */}
                    <div className="flex justify-start gap-3 mb-10 p-5">
                        {
                            users.map((item, index) => (
                                <AdminCards key={index} image={item.image} title={item.title} numbers={item.numbers} />
                            ))
                        }
                    </div>

                    {/* Revenue Info and Doctor List */}
                    <div className="flex gap-10 p- z-50">
                        <div className="flex-1">
                            <RevenueInfo />
                        </div>
                        <div className="flex-1">
                            <DoctorList />
                        </div>
                    </div>

                    {/* Patient Table */}
                    <PatientTable />
                </div>
            </div>
        </>
    );
}
