import { useState } from "react";
import EcommerceHeader from "../components/marketplaceHeader";
import Navbar from "../components/navbar";
import Dropdown from "../components/dropdown";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { FaHeart, FaStar } from "react-icons/fa";

export default function Market() {
  const [cartItems, setCartItems] = useState(0);
  const [likedItems, setLikedItems] = useState(0);

  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };

  const addToLikedItems = () => {
    setLikedItems((prev) => prev + 1);
  };

  const products = [
    {
      image: "ph.png",
      title: "Toilet Paper",
      description: {
        category: "Raw Material",
        price: "$100",
        button: "Add to Cart",
      },
      rating: 5,
    },
    {
      image: "ph.png",
      title: "Hand Soap",
      description: {
        category: "Hygiene",
        price: "$20",
        button: "Add to Cart",
      },
      rating: 4,
    },
    {
      image: "ph.png",
      title: "Laundry Detergent",
      description: {
        category: "Cleaning",
        price: "$15",
        button: "Add to Cart",
      },
      rating: 3,
    },
    {
      image: "ph.png",
      title: "Kitchen Towels",
      description: {
        category: "Essentials",
        price: "$30",
        button: "Add to Cart",
      },
      rating: 5,
    },
  ];

  return (
    <div className="mx-auto container">
      <Navbar />
      {/* Pass cart and like handlers and counts to the EcommerceHeader */}
      <EcommerceHeader
        cartItems={cartItems}
        likedItems={likedItems}
        addToCart={addToCart}
        addToLikedItems={addToLikedItems}
      />
      <div className="px-20 py-10 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <Dropdown
            options={["Pharmaceutical", "Home", "Detergents"]}
            height="40px"
            width="150px"
            className="bg-[#0086AD] text-white"
          />
          <Button
            text="Load more"
            className="bg-[#0086AD] text-white rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index}>
              <Card
                image={product.image}
                title={product.title}
                description={
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between gap-2">
                      <div className="flex flex-col items-start gap-2">
                        <p className="text-gray-500">{product.description.category}</p>
                        <Button
                          text={product.description.price}
                          className="bg-[#0086AD] text-white rounded-md"
                        />
                      </div>
                      <div className="flex flex-col items-end gap-5">
                        <div
                          className="text-[#FF0000] cursor-pointer"
                          onClick={addToLikedItems}
                        >
                          <FaHeart size={20} />
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, starIndex) => (
                            <FaStar
                              key={starIndex}
                              size={18}
                              className={
                                starIndex < product.rating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button
                      text={product.description.button}
                      className="bg-[#0086AD] text-white rounded-md"
                      onClick={addToCart}
                    />
                  </div>
                }
                classname="p-4 border-[1.5px] border-gray-300 rounded-lg shadow-sm"
                imagestyle="w-32 h-32 object-cover"
                titlestyle="text-[#0086AD] text-lg text-left font-bold"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
