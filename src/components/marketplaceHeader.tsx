import { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";

interface Product {
  name: string;
  price: string;
  image:string;
}

interface EcommerceProps {
  cartItems: number;
  likedItems: number;
  addToCart: () => void;
  addToLikedItems: () => void;
}

export default function EcommerceHeader({
  cartItems,
  likedItems,
}: EcommerceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([
    {image:"ph.png", name: "Toilet Paper", price: "$100" },
    {image:"ph.png", name: "Toilet Paper", price: "$200" },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  const removeItemFromWishlist = (index: number) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="bg-gray-50 py-5 mx-auto container shadow-sm px-20 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-[#0086AD]">Buy Your Home Products</div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[1.5px] focus:border-[#0086AD] w-[300px]"
        />
        <button
          type="submit"
          className="bg-[#0086AD] px-4 h-[41px] text-white rounded-r-md hover:bg-[#005f7a] transition-all"
        >
          <FaSearch />
        </button>
      </form>

      <div className="flex items-center gap-6">
        {/* Heart (Favorite) Icon */}
        <div className="relative text-gray-600 hover:text-[#0086AD] transition-all cursor-pointer" onClick={toggleWishlist}>
          <FaHeart className="text-2xl" />
          {likedItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-400 text-white text-xs rounded-full px-1.5 py-0.5">
              {likedItems}
            </span>
          )}
        </div>

        {/* Shopping Cart Icon */}
        <div className="relative text-gray-600 hover:text-[#0086AD] transition-all">
          <FaShoppingCart className="text-2xl" />
          {cartItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#0086AD] text-white text-xs rounded-full px-1.5 py-0.5">
              {cartItems}
            </span>
          )}
        </div>
      </div>

      {/* Wishlist Popup */}
      {isWishlistOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-[#0086AD] mb-4">Wishlist</h2>
            {wishlistItems.length > 0 ? (
              <div>
                {wishlistItems.map((product, index) => (
                  <div key={index} className="flex mb-4 items-center gap-10">
                    <div className="flex  items-center justify-center gap-16">
                       <div className="flex flex-col gap-1 ">
                       <img src={product.image} alt="" className="w-6 h-6" />
                       <p className="text-md font-semibold">{product.name}</p>

                       </div>
                      <p className="text-sm text-gray-500">{product.price}</p>
                    </div>
                    <button
                      className="text-red-500 text-sm"
                      onClick={() => removeItemFromWishlist(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your wishlist is empty.</p>
            )}
            <div className="mt-4 text-right">
              <button
                className="text-red-500 font-semibold"
                onClick={toggleWishlist}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
