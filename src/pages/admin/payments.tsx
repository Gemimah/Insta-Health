
import Header from "../../components/admin/header";
import PaymentCards from "../../components/admin/paymentCards";
import PaymentChart from "../../components/admin/paymentsChart";
import Sidebar from "../../components/admin/Sidebar";
import PaymentTable from "../../components/Patient/PaymentTable";
import UpcomingPayments from "../../components/Patient/UpcomingPayments";

export default function AdminPayments() {

    return (
        <>
            <div className="flex h-screen z-50 ">
                {/* Sidebar */}
                <Sidebar
                    activeTab={"Payments"}
                    onTabChange={() => { }}
                />

                {/* Main content area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <Header title="Payments" />
                  <div className="p-5 flex  gap-10">
                    <div className="flex flex-col gap-10">
                        <PaymentCards/>
                        <PaymentChart/>
                        <PaymentTable/>

                    </div>
                    <UpcomingPayments/>

                  

                  </div>

                </div>
            </div>
        </>
    );
}
