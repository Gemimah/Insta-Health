
import AdminAppointmentCards from "../../components/admin/appointmentCards";
import AppointmentList from "../../components/admin/appointmentList";
import AdminConsultationCards from "../../components/admin/consultationCard";
import ConsultationList from "../../components/admin/consultationTable";
import Header from "../../components/admin/header";
import Sidebar from "../../components/admin/Sidebar";

export default function AdminConsultation() {

    return (
        <>
            <div className="flex h-screen z-50 ">
                {/* Sidebar */}
                <Sidebar
                    activeTab={"Consultations"}
                    onTabChange={() => { }}
                />

                {/* Main content area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <Header title="Consultations" />
                  <div className="p-5 flex flex-col gap-10">
                  <AdminConsultationCards/>
                  <ConsultationList/>

                  </div>

                </div>
            </div>
        </>
    );
}
