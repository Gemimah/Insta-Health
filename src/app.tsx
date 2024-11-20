import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import AboutUs from "./assets/components/about-us";
import Services from "./assets/components/services";
import Packages from "./assets/components/packages";
import ContactUs from "./assets/components/contact-us";
import Market from "./assets/components/market";
import Cart from "./assets/components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import paymentDetails from "./assets/components/PaymentDetails";
import PaymentDetails from "./assets/components/PaymentDetails";
import LoginRegister from './assets/components/LoginRegister';
import Register from './assets/components/Register';
import DoctorRegister from './assets/components/DoctorRegister';
import Targetpage from './assets/components/target-page';
import Login from './assets/components/login';
import PatientRegistration from "./assets/components/Patient";
import Home from "./assets/components/Navbar"
import SignUpPage from "./Pages/SignUpPage";

const App: React.FC = () => {
  interface Product {
    id: number;
    title: string;
    category: string;
    price: string;
    rating: number;
    imgSrc: string;
  }

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/market" element={<Market handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/PaymentDetails" element={<PaymentDetails cartItems={[]} />}></Route>

          <Route path="/LoginRegister" element={<LoginRegister />} />
          <Route path="/Register" element={<SignUpPage />} />
          <Route path="/DoctorRegister" element={<DoctorRegister />} />
          <Route path="/target-page" element={<Targetpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Patient" element={<PatientRegistration />} />



        </Routes>

      </Router>
    </>
  );
};

export default App;