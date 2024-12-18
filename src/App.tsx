import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Service from "./pages/service"
import Packages from "./pages/package"
import Cart from "./pages/Patients/Cart"
import Payment from "./pages/Payment";
import ProductCard from "./pages/SingleProduct";
import ContactPage from "./pages/Contact";
import Market from "./pages/Market";
import Dashboard from "./pages/Patients/Dashboard";
import Login from "./pages/Patients/Login";
import AppointmentsPage from "./pages/Patients/AppointmentsPage";
import DoctorList from "./pages/Patients/Doctor-list";
import PaymentsPage from "./pages/Patients/PaymentsPage";
import SignUp from "./pages/Patients/SignUp";
// import SignUpPage from "./pages/Patients/SignUpPage";
// import Documents from "./components/SignUp/Patient/Documents/PrivacyPolicy";
import PDocuments from "./components/SignUp/Patient/Documents/PrivacyPolicy";
import TDocuments from "./components/SignUp/Patient/Documents/TermsOfUse";
import AdminDashboard from "./pages/admin/admin";
import DoctorPage from "./pages/admin/doctors";
import SingleDoctorPage from "./pages/admin/SingleDoctor";
import AdminAppointments from "./pages/admin/appointment";
import AdminPayments from "./pages/admin/payments";
import AdminConsultation from "./pages/admin/consultation";


export default function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/our-doctors/departments" element={<Service/>} />
        <Route path="/package" element={<Packages/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/paymanet" element={<Payment/>} />
        <Route path="/product/:id" element={<ProductCard/>} />
        <Route path="/help/customer" element={<ContactPage />} />
        <Route path="/market" element={<Market />}/>
        {/* <Route path="/patient/register" element={<SignUpPage/>} /> */}
        <Route path="/auth/patient/signup" element={<SignUp />} />
        <Route path="/auth/doctor/signup" element={<SignUp />} />
        <Route path="/auth/patient/login" element={<Login />} />
        <Route path="/patient/doctors" element={<DoctorList/>} />
        <Route path="/patient/dashboard" element={<Dashboard/>} />
        <Route path="/patient/appointments" element={<AppointmentsPage />} />
        <Route path="/patient/payments" element={<PaymentsPage />} />
        <Route path="/privacy" element={<PDocuments />} />
        <Route path="/terms" element={<TDocuments />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/doctors" element={<DoctorPage/>} />
        <Route path="/admin/doctor/:id" element={<SingleDoctorPage/>}/>
        <Route path="/admin/appointment" element={<AdminAppointments/>}/>
        <Route path="/admin/payment" element={<AdminPayments/>}/>
        <Route path="/admin/consultation" element={<AdminConsultation/>}/>




      </Routes>
    </Router>
    </>
  )
}
