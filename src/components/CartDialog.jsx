import React, { useState } from "react";
import shop from "../assets/images/bxs_cart.svg";
import downArrow from "../assets/images/weui_arrow-outlined (2).svg";
import upArrow from "../assets/images/weui_arrow-outlined (3).svg";

export default function CartDialog({
  cartItems,
  total,
  onProceedToPayment,
  onQuantityChange, 
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-50 w-full max-w-[738px] mx-auto mt-6 border-2 border-[rgba(86,64,150,1)] shadow-md shadow-[rgba(86,64,150,1)] rounded-xl bg-white transition-all duration-300">
      {showDetails && (
        <div className="relative p-4  border-t border-gray-200">
          <button
            onClick={() => setShowDetails(false)}
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>

          <h2 className="text-center text-lg font-semibold py-5 mb-4">My Order</h2>

          <div className="space-y-9 px-4 mt-2 mb-3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex relative justify-between border border-gray-500 rounded-[5px] "
              >
                
                <div className="flex space-x-3">
                  
                  <img
                    src={item.image}
                    alt={item.header}
                    className="w-50  object-cover rounded-l-[5px]"
                  />
                          <button
        onClick={() => onQuantityChange(item.header, -item.quantity)}
        className=" absolute top-1 right-0 text-gray-400 hover:text-red-500 text-lg font-bold"
        aria-label="Remove item"
      >
        ×
      </button>
                  <div >
               
                    <p className="text-xs pt-3">{item.header}</p>
                   

                    <div className="flex w-[70px] mt-7 items-center border border-gray-700 rounded-[5px]">
                      <button
                        onClick={() => onQuantityChange(item.header, -1)}
                        className="px-2 py-1 text-sm font-bold text-[rgba(86,64,150,1)]"
                      >
                        −
                      </button>
                      <span className="px-1 text-sm text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onQuantityChange(item.header, 1)}
                        className="px-2 py-1 text-sm font-bold text-[rgba(86,64,150,1)]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
            <p className="flex items-end p-3  text-black">
  <span className="text-sm mb-1">$</span>
  <span className="text-[20px] ml-0.5">
    {item.Price.replace("$","")}
  </span>
</p>

              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between p-7   ">
        <div className="flex items-center space-x-4">
          <div className="relative border-1 border-[rgba(86,64,150,1)] rounded-full p-3">
            <img src={shop} alt="" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full min-w-[18px] h-4 flex items-center justify-center px-1">
                {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
              </span>
            )}
          </div>
          <div>
            <p className="text-2xl font-bold text-[rgba(86,64,150,1)]">
              {total}
            </p>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-500 text-sm flex items-center hover:text-[rgba(86,64,150,1)]"
            >
              View details
              <img
                src={showDetails ? downArrow : upArrow}
                alt="toggle"
                className="m-1"
              />
            </button>
          </div>
        </div>

        <button
          onClick={onProceedToPayment}
          className="bg-[rgba(86,64,150,1)] text-white px-10 py-3 rounded-md hover:bg-[rgba(80,64,150,1)] transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
