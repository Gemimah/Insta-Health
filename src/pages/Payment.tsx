
import { useState } from "react";
import Navbar from "../components/navbar";
import EcommerceHeader from "../components/marketplaceHeader";
import Footer from "../components/Footer";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Payment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] =
    useState<string>("Cash on delivery");

  const products: Product[] = [
    { id: 1, name: "Toilet paper", price: 650, image: "/tp.png" },
    { id: 2, name: "Toilet paper", price: 650, image: "/tp.png" },
  ];

  const inputFields = [
    { label: "First Name", name: "firstName", required: true },
    { label: "Second Name", name: "secondName", required: false },
    { label: "Street Address", name: "streetAddress", required: true },
    {
      label: "Apartment, floor, etc (optional)",
      name: "apartment",
      required: false,
    },
    { label: "Town/City", name: "city", required: false },
    { label: "Phone Number", name: "phoneNumber", required: true },
    { label: "Email Address", name: "email", required: true },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mx-auto container">
        <Navbar/>
        <EcommerceHeader/>
        <div className="min-h-screen text-white p-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-semibold mb-6 text-[#0086AD]">
            Payment Details
          </h1>
          <form className="space-y-4">
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="mb-1 text-sm flex space-x-1">
                  <span className="text-gray-400 font-[400] text-[16px]">
                    {field.label}
                  </span>
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="text-black border bg-[#F5F5F5] rounded-md px-4 py-2 outline-none"
                  required={field.required}
                />
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <input type="checkbox" className="bg-red-500" />
              <h1 className="text-black text-[16px]">
                Save this information for faster check-out next time
              </h1>
            </div>
          </form>
        </div>

        <div className="p-6 rounded-md text-gray-400 font-[400] text-[16px] font-poppins">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded"
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 my-5">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>
                ${products.reduce((total, product) => total + product.price, 0)}
              </p>
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="flex justify-between text-lg font-semibold">
              <p>Total:</p>
              <p>
                ${products.reduce((total, product) => total + product.price, 0)}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Bank"
                  checked={paymentMethod === "Bank"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4 text-blue-500 focus:ring focus:ring-blue-400"
                />
                <span>Bank</span>
              </label>
              <div className="flex space-x-2 mt-2">
                <img src="/bkash.svg" alt="Bkash" className="w-10 h-10" />
                <img src="/visa.svg" alt="Visa" className="w-10 h-10" />
                <img src="/master.svg" alt="MasterCard" className="w-10 h-10" />
                <img
                  src="/thirdPayment.svg"
                  alt="Third Payment"
                  className="w-10 h-10"
                />
              </div>
            </div>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on delivery"
                checked={paymentMethod === "Cash on delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4"
              />
              <span>Cash on delivery</span>
            </label>
            <button
              type="button"
              className="mt-6 p-10 bg-[#0086AD] text-white font-semibold py-2 rounded-sm"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

    </div>
  );
};

export default Payment;
