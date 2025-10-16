import React, { useState } from "react";
import { ShoppingCart } from "lucide-react"; 

export default function CartDialog({ cartItems, total, onClose }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className=" absolute left-1/2 -translate-x-1/2 bottom-0  z-50 w-full max-w-3xl mx-auto mt-6 border-2 border-[rgba(86,64,150,1)] shadow-md shadow-[rgba(86,64,150,1)] rounded-xl  bg-white transition-all duration-300">
     
 
      {showDetails && (
        <div className="p-4  border-t border-gray-200">
          <h2 className="text-center text-lg font-semibold mb-4">My Order</h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className=" flex justify-between border border-gray-200 rounded-lg p-3"
              >
                <div className="flex  space-x-3">
                  <img
                    src={item.image}
                    alt={item.header}
                    className="w-50 h-25 object-cover "
                  />
                  <div>
                     <p className="text-xs pt-3">{item.header}</p>
                      <div className="flex pt-9 items-center space-x-2">
                  <button className="border px-2 py-1 rounded">−</button>
                  <span>1</span>
                  <button className="border px-2 py-1 rounded">+</button>
                </div>
                  </div>
                </div>
              
                <p className="text-[rgba(86,64,150,1)] flex items-end font-semibold">
                  {item.Price}
                </p>
                 
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center  justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="relative border-2 border-[rgba(86,64,150,1)] rounded-full p-3">
            <ShoppingCart className="text-[rgba(86,64,150,1)]" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
          <div>
            <p className="text-2xl font-bold text-[rgba(86,64,150,1)]">{total}</p>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-500 text-sm flex items-center hover:text-[rgba(86,64,150,1)]"
            >
              View details
              <span className="ml-1">{showDetails ? "▲" : "▼"}</span>
            </button>
          </div>
        </div>

        <button className="bg-[rgba(86,64,150,1)] text-white px-6 py-3 rounded-md hover:bg-[rgba(80,64,150,1)] transition">
          Proceed to Payment
        </button>
      </div>

    
    </div>
  );
}
