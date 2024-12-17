import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import Card from "../../components//Card"; 

export default function Cart() {
  const initialCartItems = [
    {
      image: "ph.png",
      title: "Toilet Paper",
      description: {
        category: "Raw Material",
        price: "$100",
        button: "Add to Cart",
      },
      rating: 5,
      quantity: 2,
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
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateSubtotal = (product) => {
    return parseFloat(product.description.price.replace('$', '')) * product.quantity;
  };

  const updateQuantity = (index, change) => {
    const newQuantity = cartItems[index].quantity + change;
    if (newQuantity > 0) {
      const updatedItems = [...cartItems];
      updatedItems[index].quantity = newQuantity;
      setCartItems(updatedItems);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const calculateShipping = () => {
    return 10;
  };

  const calculateFinalTotal = () => {
    return calculateTotal() + calculateShipping();
  };

  return (
    <div className="mx-auto container">
      <Navbar />
      <div className="px-20 flex flex-col">
        <h1 className="text-2xl font-bold text-center my-6">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="overflow-x-auto px-6 py-4">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-lg font-medium text-[#0086AD]">Product</th>
                  <th className="text-left text-lg font-medium text-[#0086AD]">Price</th>
                  <th className="text-left text-lg font-medium text-[#0086AD]">Quantity</th>
                  <th className="text-left text-lg font-medium text-[#0086AD]">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product, index) => (
                  <tr key={index} className="border-b py-4">
                    <td className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-gray-500 text-sm">{product.description.category}</p>
                      </div>
                    </td>
                    <td className="text-gray-400 font-semibold">{product.description.price}</td>
                    <td className="flex items-center relative -ml-40 mb-10 justify-center space-x-4">
                      <button
                        className="text-gray-500 text-2xl rounded-full"
                        onClick={() => updateQuantity(index, -1)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="text-gray-500 text-2xl rounded-full"
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                    </td>
                    <td className="text-gray-400 font-semibold">
                      ${calculateSubtotal(product).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-6">
              <button className="px-6 py-2 text-sm bg-[#0086AD] text-white rounded-md">
                Return to Shop
              </button>
              <button className="px-6 py-2 text-sm bg-[#0086AD] text-white rounded-md">
                Update Cart
              </button>
            </div>

            <Card
              title="Cart Summary"
              classname="mt-6 bg-white p-6 border w-[400px] border-gray-200"
              titlestyle="text-xl font-semibold text-[#0086AD]"
              pstyle="text-lg font-medium text-[#0086AD]"
              description={
                <div className="space-y-4 flex flex-col text-left">
                  <h1 className="text-[#0086AD] font-semibold">Cart Total</h1>
                  <div className="flex justify-between py-2">
                    <span className="text-lg font-medium text-gray-500">SubTotal</span>
                    <span className="text-lg font-semibold text-gray-400">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <hr className="border-t border-gray-300" />
                  <div className="flex justify-between py-2">
                    <span className="text-lg font-medium text-gray-500">Shipping</span>
                    <span className="text-lg font-semibold text-gray-400">${calculateShipping()}</span>
                  </div>
                  <hr className="border-t border-gray-300" />
                  <div className="flex justify-between py-2">
                    <span className="text-lg font-bold text-gray-500">Total</span>
                    <span className="text-lg font-bold text-gray-400">${calculateFinalTotal().toFixed(2)}</span>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="px-6 py-2 bg-[#0086AD] text-white rounded-md">
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              }
            />
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
