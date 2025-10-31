import React from "react";
import Ordersummary from "./Ordersummary";

export default function PaymentInfo({ cartItems, total, onQuantityChange  }) {
  return (
    <>    <div className="w-full px-5 lg:px-10 flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Left Form */}
      <div className="flex-1 lg:max-w-[65%]">
     

        <h2 className="text-2xl  mb-6 text-gray-800">Billing Info</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm  mb-2">Address Line 1 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2" placeholder="Enter Address Line 1" />
            </div>
            <div>
              <label className="block text-sm  mb-2">Address Line 2</label>
              <input type="text" className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2" placeholder="Enter Address Line 2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm  mb-2">City <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2" placeholder="Enter City" />
            </div>
            <div>
              <label className="block text-sm mb-2 ">State <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2" placeholder="Enter State" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm  mb-2">Zip Code <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2" placeholder="Enter Zip Code" />
            </div>
            <div>
              <label className="block text-sm  mb-2">Country</label>
              <input type="text" className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2" placeholder="Enter Country" />
            </div>
          </div>

         <div>
  <label className="block text-sm mb-2 font-semibold">Card</label>

 <div>
  <label className="block text-sm mb-2 font-semibold">Card</label>

  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-[rgba(86,64,150,1)]">
    {/* Card Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 7.5h19.5m-16.5 3h13.5m-13.5 3h13.5M2.25 7.5v9a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 002.25 7.5z"
      />
    </svg>

    {/* Card Number */}
    <input
      type="text"
      name="cardNumber"
      placeholder="Card number"
      className="flex-1 border-none outline-none text-sm text-gray-700 placeholder-gray-400 ml-2"
      maxLength={19}
    />

    {/* Expiry (MM/YY) */}
    <input
      type="text"
      name="expiry"
      placeholder="MM / YY"
      className="w-15 text-center border-none outline-none text-sm text-gray-700 placeholder-gray-400"
      maxLength={7}
    />

    {/* CVC */}
    <input
      type="text"
      name="cvc"
      placeholder="CVC"
      className="w-10 text-center border-none outline-none text-sm text-gray-700 placeholder-gray-400"
      maxLength={3}
    />
  </div>
</div>

</div>

           <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="agree"
       
        className="w-4 h-4  text-[rgba(86,64,150,1)] border-gray-300 rounded focus:ring-[rgba(86,64,150,1)]"
      />
      <label htmlFor="agree" className="  text-[rgba(0,0,0,0.6)] text-sm select-none">
       Use previous address for billing.
      </label>
    </div>
<div className="flex justify-end "> 
       <button
            type="button"
            className="mt-6 bg-[rgba(86,64,150,1)] text-white px-20  py-3 rounded-md hover:bg-[rgba(80,64,150,1)] transition"
          >
            Pay Now
          </button>
</div>

       
        </form>
      </div>

      <Ordersummary cartItems={cartItems} total={total}  onQuantityChange={onQuantityChange} />
    </div>

    </>

  );
}
