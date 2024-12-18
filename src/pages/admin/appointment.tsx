
import AdminAppointmentCards from "../../components/admin/appointmentCards";
import AppointmentList from "../../components/admin/appointmentList";
import Header from "../../components/admin/header";
import Sidebar from "../../components/admin/Sidebar";

export default function AdminAppointments() {

    return (
        <>
            <div className="flex h-screen z-50 ">
                {/* Sidebar */}
                <Sidebar
                    activeTab={"Appointments "}
                    onTabChange={() => { }}
                />

                {/* Main content area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <Header title="Appointments" />
                  <div className="p-5 flex flex-col gap-10">
                  <AdminAppointmentCards/>
                  <AppointmentList/>

                  </div>

                </div>
            </div>
        </>
    );
}
