import React from "react";
import BgImage from "../assets/images/BackgroundImg.png";
function HeroSection() {
  return (
  <div
  className="relative min-h-[350px] flex items-center justify-center bg-cover bg-[center_top_45%]"
  style={{ backgroundImage: `url(${BgImage})` }}
>

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[800px]">
    <h1 className="text-white lg:text-[40px] text-[30px] font-bold mb-4">
      RIHEF LEARNING MANAGEMENT SYSTEM
    </h1>
    <p className="text-[rgba(255,255,255,0.9)] text-xs md:text-sm px-6">
      <span className="font-bold">
        Employees rise to the level of their training, not to the level of your expectations.
      </span>
      Our goal is to provide the best programs possible to train and educate the
      current and future hospitality workforce in our state. We are dedicated to
      professional development and personal growth.
    </p>
  </div>
</div>

  );
}

export default HeroSection;
