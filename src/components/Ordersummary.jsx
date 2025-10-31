import {useState} from "react";

function Ordersummary({ cartItems, total, onQuantityChange }) {
    const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  return (
    <>
      <div className="lg:w-[34%] lg:mt-[-70px]  sticky top-10 bg-white ">
        <div className=" rounded-xl p-4 h-fit shadow-sm    ">
          <h3 className="text-lg font-semibold pb-2 mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cartItems.map((item, i) => (
              <div
                key={i}
                className="flex justify-between relative  rounded-md border border-[rgba(0,0,0,0.3)]"
              >
                          <button
        onClick={() => onQuantityChange(item.header, -item.quantity)}
        className=" absolute top-0 right-1.5 text-gray-400 hover:text-red-500 text-lg font-bold"
        aria-label="Remove item"
      >
        ×
      </button>
                <div className="flex   space-x-3 ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-20  object-cover rounded-l-md"
                  />
                  <div>
                    <p className="text-sm my-2  text-[rgba(0,0,0,0.5)] truncate w-[180px]">
                      {item.header}
                    </p>

                    <div className="flex gap-2  items-center my-2 ">
                      <div className="flex w-[60px]   items-center border border-[rgba(0,0,0,0.3)] rounded-[3px]">
                        <button
                          onClick={() => onQuantityChange(item.header, -1)}
                          className="px-1  mb-0.5 text-sm font-bold text-[rgba(86,64,150,1)]"
                        >
                          −
                        </button>
                        <span className="px-2 py-0.5 text-sm text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onQuantityChange(item.header, 1)}
                          className="px-1 mb-0.5  text-sm font-bold text-[rgba(86,64,150,1)]"
                        >
                          +
                        </button>
                      </div>
                      
                      {item.hasViewFolder && (
                        <button
                          type="button"
                          className=" hidden md:block  text-[rgba(86,64,150,1)]  border-b text-[10px]"
                          onClick={item.onViewFolders}
                        >
                          View Courses Packages
                        </button>
                      )}
                      <p className="text-[rgba(0,0,0,0.8)]  absolute right-3   ">
                        <span className="text-sm mb-1">$</span>
                        <span className="text-[20px] ml-0.5">
                          {item.Price.replace("$", "")}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" mt-4 pt-4 ">
            <div className="flex justify-between mb-1  text-xs text-[rgba(0,0,0,0.6)]">
              <span>Subtotal:</span>
              <span>{total}</span>
            </div>
            <div className="h-[1.5px] w-full bg-gray-300  mt-2"></div>

            <div className="flex mt-2   text-lg  justify-between  ">
              <span>Total</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      {!showCoupon ? (
        <p className="ml-3 mt-4">
          <button
            className="text-[rgba(86,64,150,1)] border-b border-b-[rgba(86,64,150,1)]"
            onClick={() => setShowCoupon(true)}
          >
            Have a coupon code?
          </button>
        </p>
      ) : (
        <div className=" mt-4 border border-gray-200 rounded-lg p-4 shadow-sm relative ">
          <button
            onClick={() => setShowCoupon(false)}
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-lg font-bold"
          >
            ×
          </button>
          <h4 className="font-semibold text-[18px] mb-3">Coupon Code</h4>
          <div className="flex">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Discount code or gift card"
              className="flex-grow border border-black rounded-l-md p-2 text-sm"
            />
            <button
              onClick={() => alert(`Applied: ${coupon}`)}
              className="bg-[rgba(86,64,150,1)] text-white px-5 rounded-r-md text-sm  hover:bg-[rgba(80,64,150,1)]"
            >
              Apply
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Ordersummary;
