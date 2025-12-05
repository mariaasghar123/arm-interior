"use client";
import { useState } from "react";

export default function CartPage() {
  // Dummy cart data (aap backend se load kar sakti ho)
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "China Wallpaper 30",
      price: 1500,
      quantity: 1,
      image: "/media/p1.webp",
    },
    {
      id: 2,
      title: "China Wallpaper 29",
      price: 1700,
      quantity: 2,
      image: "/media/p2.webp",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "maria10") {
      setDiscount(0.1 * subtotal); // 10% OFF
    } else {
      setDiscount(0);
      alert("Invalid coupon!");
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* CART ITEMS SECTION */}
      <div className="lg:col-span-2 bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-2xl text-gray-700 font-semibold mb-4">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex text-gray-600 items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-700">{item.title}</h3>
                  <p className="text-gray-500">Rs {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* QTY */}
                <p className="font-semibold">
                  Qty: {item.quantity}
                </p>

                {/* TOTAL PRICE */}
                <p className="font-semibold">
                  Rs {item.price * item.quantity}
                </p>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* SUMMARY + COUPON SECTION */}
      <div className="bg-white shadow-md p-6 rounded-xl h-fit">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold text-gray-600">Rs {subtotal}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Discount:</span>
          <span className="font-semibold text-gray-600">Rs {discount}</span>
        </div>

        <div className="border-t text-gray-600 pt-3 flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>Rs {subtotal - discount}</span>
        </div>

        {/* APPLY COUPON */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2 text-gray-600">Apply Coupon</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon"
              className="border px-3 py-2 text-gray-500 rounded-lg w-full border"
            />
            <button
              onClick={applyCoupon}
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
            >
              Apply
            </button>
          </div>
        </div>

        {/* PROCEED TO CHECKOUT */}
        <button className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg text-lg font-medium hover:bg-yellow-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
