import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa6";
import { FiRefreshCcw, FiTruck } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import EcommerceHeader from "../components/marketplaceHeader";

interface Product {
  name: string;
  price: number;
  description: string;
  stockStatus: string;
  images: string[];
  sizes: string[];
  rating: number;
  deliveryInfo: string;
  returnPolicy: string;
}

const ProductCard: React.FC = () => {
  const product = {
    name: "Supa Toilet Paper",
    price: 192.0,
    description:
      "Supa toilet paper is the best toilet paper brought to you by Egidia Papers, which aims at improving your wellbeing and life.",
    stockStatus: "In Stock",
    images: ["/supa1.png", "/master.svg", "/supa2.png", "/bkash.svg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4,
    deliveryInfo: "Free Delivery! Enter your postal code for availability.",
    returnPolicy: "Free 30-day delivery returns.",
  };

  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
  <div className="mx-auto container">
    <Navbar/>
    <EcommerceHeader/>
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg text-[#808080]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
  
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <div className="flex flex-row sm:flex-col gap-5 items-center sm:space-y-2  mx-3">
            {product.images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                className={`w-16 h-16 cursor-pointer rounded flex items-center justify-center ${
                  selectedImage === image
                    ? "border-2 border-[#0086AD] bg-[#F3F3F3]"
                    : "border-none bg-[#F3F3F3] opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index}`}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="ml-4 flex-grow bg-[#F3F3F3] p-5 h-full max-w-full">
            <div className="w-full h-full bg-[#F3F3F3] rounded flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-[24px] font-bold text-[#0086AD]">
              {product.name}
            </h2>
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-5 h-5 ${
                    index < product.rating ? "text-[#dbcb3f]" : "text-gray-300"
                  }`}
                >
                  <FaStar />
                </span>
              ))}
              <div className="flex items-center space-x-4">
                <p className="ml-2 text-sm text-gray-600">
                  ({product.rating} Reviews)
                </p>
                <div className="w-px h-4 bg-gray-300"></div>
                <p className="text-green-500 font-medium">
                  {product.stockStatus}
                </p>
              </div>
            </div>
            <p className="text-lg text-[#0086AD] font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>

          <div>
            <div className="flex flex-col xs:flex-row items-center xs:items-start gap-y-4 mt-4 space-x-2">
              <p className="text-lg font-semibold ">Size:</p>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`border rounded-md px-4 py-1 text-sm ${
                    size === selectedSize
                      ? "bg-[#0086AD] text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex items-center mt-4 space-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  -
                </button>
                <p className="px-4 py-2 bg-white text-center">{quantity}</p>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 bg-[#0086AD] text-white hover:bg-[#006b8a]"
                >
                  +
                </button>
              </div>

              <button className="flex-1 py-2 bg-[#0086AD] text-white rounded hover:bg-[#006b8a]">
                Buy Now
              </button>

              <button className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100">
                <FaHeart />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 rounded-lg">
            {/* Free Delivery Card */}
            <div className="flex flex-1 items-center gap-4 p-4 bg-white rounded-md rounded-b-none border border-gray-200">
              <FiTruck size={40} className="text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold text-gray-600">
                  Free Delivery
                </h3>
                <p className="text-sm text-gray-500">
                  <a
                    href="#"
                    className="text-gray-500 underline hover:text-gray-600"
                  >
                    Enter your postal code for Delivery Availability
                  </a>
                </p>
              </div>
            </div>

            {/* Return Delivery Card */}
            <div className="flex flex-1 items-center gap-4 p-4 bg-white rounded-t-none rounded-md border border-gray-200">
              <FiRefreshCcw size={40} className="text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold text-gray-600">
                  Return Delivery
                </h3>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns.{" "}
                  <a
                    href="#"
                    className="text-gray-500 underline hover:text-gray-600"
                  >
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

  </div>
  );
};

export default ProductCard;
