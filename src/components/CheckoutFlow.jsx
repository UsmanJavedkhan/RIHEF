import React, { useState, useEffect } from "react";

import PaymentInfo from "./PaymentInfo";
import backIcon from "../assets/images/solar_arrow-up-line-duotone.svg";
import DoneIcon from "../assets/images/charm_tick (1).svg";
import NotDoneIcon from "../assets/images/charm_tick.svg";
import EyeIcon from "../assets/images/Eye Button.svg";
import Ordersummary from "./Ordersummary";
import EyeOffIcon from "../assets/images/eye-close-icon.6a84ff8b.svg";

export default function CheckoutFlow({
  cartItems,
  total,
  onBack,
  onQuantityChange,
}) {
  const [currentStep, setCurrentStep] = useState(2);
  const [isCompany, setIsCompany] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  // Add these near top of component:

  useEffect(() => {
    if (cartItems.length === 0) {
      setCurrentStep(1);
      onBack();
    }
  }, [cartItems, onBack]);

  const handleBack = () => {
    if (currentStep === 3) setCurrentStep(2);
    else onBack();
  };
  const handleProceedToPayment = () => setCurrentStep(3);

  return (
    <div className="w-full bg-white  ">
      {/* Progress Bar */}
      <div className=" px-5 lg:px-10">
        <button
          onClick={handleBack}
          className="text-[20px] mb-5 flex gap-2.5 text-[rgba(86,64,150,1)]"
        >
          <img src={backIcon} alt="" className="w-6" /> Back
        </button>
      </div>
      <div className="max-w-[63%]  mb-8 hidden lg:block pl-5 xl:px-10">
        <div className="flex items-center gap-2 xl:gap-5 text-sm xl:text-lg  text-[rgba(86,64,150,1)]">
          {/* Step 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex  items-center justify-center">
              <img
                src={currentStep >= 2 ? DoneIcon : NotDoneIcon}
                alt="step status"
                className="w-6 h-6"
              />
            </div>

            <span className="text-black">Select Your Course</span>
          </div>
          <div className={`w-27 h-[2px] ${"bg-gray-300"}`}></div>

          {/* Step 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src={currentStep >= 2 ? DoneIcon : NotDoneIcon}
                alt="step status"
                className="w-6 h-6"
              />
            </div>
            <span className="text-black">Enter Your Details</span>
          </div>
          <div className={`w-27 h-[2px] ${"bg-gray-300"} `}></div>

          {/* Step 3 */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src={currentStep >= 3 ? DoneIcon : NotDoneIcon}
                alt="step status"
                className="w-6 h-6"
              />
            </div>
            <span className="text-black">Payment Info</span>
          </div>
        </div>
      </div>

      {/* Steps */}
      {currentStep === 2 ? (
        <div className="w-full px-5 lg:px-10 flex flex-col lg:flex-row lg:items-start lg:gap-10">
          {/* Left Form */}
          <div className="flex-1 lg:max-w-[63%]">
            {/* Toggle */}
            <div className="  flex flex-col md:flex-row  justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Your Details
              </h2>
              </div>
              
              <div>
                <button
                  onClick={() => setIsCompany(true)}
                  className={`px-7 py-2  rounded-l-lg text-sm font-semibold ${
                    isCompany
                      ? "bg-[rgba(86,64,150,1)] text-white"
                      : " bg-[rgb(242,242,242)] text-[rgba(0,0,0,0.6)]"
                  }`}
                >
                  Company
                </button>
                <button
                  onClick={() => setIsCompany(false)}
                  className={`px-7 py-2  rounded-r-lg  text-sm font-semibold ${
                    !isCompany
                      ? "bg-[rgba(86,64,150,1)] text-white"
                      : " bg-[rgb(242,242,242)] text-[rgba(0,0,0,0.6)]"
                  }`}
                >
                  Individual
                </button>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 ">
                    First Name <span className="text-red-500 text-lg">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter First Name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm">
                    Last Name <span className="text-red-500 text-lg">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>

              {isCompany && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 text-sm">
                        Company Type{" "}
                        <span className="text-red-500 text-lg">*</span>
                      </label>
                      <select className="w-full text-[rgb(127,127,156)] border-1 border-[rgb(192,192,192)] rounded-md p-2 ">
                        <option value="">Select Company Type</option>
                        <option>Restaurant</option>
                        <option>Hotel</option>
                        <option>Bar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm">
                        Company Name{" "}
                        <span className="text-red-500 text-lg">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                        placeholder="Enter Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">
                        Company Website
                      </label>
                      <input
                        type="text"
                        className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                        placeholder="Enter Website"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Company Logo</label>
                      <div className="relative w-full">
                        <input
                          type="text"
                          readOnly
                          placeholder="Select Company Logo"
                          className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2 cursor-default"
                          id="fileName"
                        />
                        <input
                          type="file"
                          id="fileInput"
                          className="hidden"
                          onChange={(e) => {
                            const fileName =
                              e.target.files[0]?.name || "No file chosen";
                            document.getElementById("fileName").value =
                              fileName;
                          }}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById("fileInput").click()
                          }
                          className="absolute right-0 top-1/2 -translate-y-1/2  text-[rgba(0,0,0,0.6)] rounded-r-lg text-sm px-6  py-2.5 bg-[rgb(247,247,247)] border-l-1 mr-0.5  border-l-[rgba(0,0,0,0.25)] transition"
                        >
                          Browse
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Address <span className="text-red-500 text-lg">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter Address"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    City <span className="text-red-500 text-lg">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter City"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    State <span className="text-red-500 text-lg">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter State"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Zip Code <span className="text-red-500 text-lg">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter Zip Code"
                  />
                </div>
              </div>

              <h3 className="font-semibold text-2xl mt-6">Login Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Email <span className="text-red-500 text-lg">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Phone Number <span className="text-red-500 text-lg">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-[rgb(192,192,192)] rounded-md p-2"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2  pr-2">
                <label className="block text-sm mb-1">
                  Password <span className="text-red-500 text-lg">*</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border-2 border-[rgb(192,192,192)] rounded-md p-2 pr-10"
                    placeholder="Enter Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <img
                      src={showPassword ? EyeIcon : EyeOffIcon}
                      alt={showPassword ? "Hide password" : "Show password"}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>

              <div className=" mt-6">
                <h4 className="font-semibold text-2xl mb-1">Authorization</h4>
                <p className=" text-[14px] text-[rgba(0,0,0,0.7)]">
                  By clicking the "Proceed to Payment" button below, you agree
                  that the name you typed in the box above (Your Full Name) will
                  be the electronic representation Of your signature for all
                  purposes in relation to the Train 321, LLC legally binding
                  Service Activation Agreement You agree that your electronic
                  signature is considered an original, for purposes of entering
                  into a contract.
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleProceedToPayment}
                  className="mt-6 bg-[rgba(86,64,150,1)] text-white px-6 py-3 rounded-md hover:bg-[rgba(80,64,150,1)] transition "
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>

          {/* Right Summary */}

          <Ordersummary
            cartItems={cartItems}
            total={total}
            onBack={handleBack}
            onQuantityChange={onQuantityChange}
          />
        </div>
      ) : (
        <PaymentInfo
          cartItems={cartItems}
          total={total}
          onBack={handleBack}
          onQuantityChange={onQuantityChange}
        />
      )}
    </div>
  );
}
