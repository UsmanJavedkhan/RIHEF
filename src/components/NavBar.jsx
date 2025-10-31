import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { X, Menu } from "lucide-react"; 

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>

      <div className="flex justify-between items-center px-12   py-6 bg-white shadow-sm">
     
        <img src={Logo} alt="Logo" className="h-20 md:h-12 xl:h-20" />

        <div className="hidden lg:flex text-sm font-bold text-[rgba(86,64,150,1)] gap-3 lg:gap-10">
          <a href="#">About</a>
          <a href="#">Membership</a>
          <a href="#">Advocacy</a>
          <a href="#">Foundation</a>
          <a href="#">Training</a>
          <a href="#">Events</a>
          <a href="#">Resources</a>
        </div>

        <button className="hidden font-semibold lg:block rounded-lg bg-[rgba(86,64,150,1)] text-white text-base min-w-[123px] h-[50px]">
          Log in
        </button>

        <button
          onClick={toggleDrawer}
          className="lg:hidden text-[rgba(86,64,150,1)]"
        >
          <Menu size={30} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center p-5 border-b">
         
          <button onClick={toggleDrawer}>
            <X size={28} className="text-[rgba(86,64,150,1)]" />
          </button>
        </div>

        <div className="flex flex-col text-[rgba(86,64,150,1)] font-bold text-base px-5  mt-5 space-y-4">
          <a href="#" className="border-b pb-2">
            About
          </a>
          <a href="#" className="border-b pb-2">
            Membership
          </a>
          <a href="#" className="border-b pb-2">
            Advocacy
          </a>
          <a href="#" className="border-b pb-2">
            Foundation
          </a>
          <a href="#" className="border-b pb-2">
            Training
          </a>
          <a href="#" className="border-b pb-2">
            Events
          </a>
          <a href="#" className="border-b pb-2">
            Resources
          </a>

          <button className="mt-6 rounded bg-[rgba(86,64,150,1)] text-white text-base w-full h-[50px]">
            Log In
          </button>
        </div>
      </div>

      {drawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black/40  z-40"
        ></div>
      )}
    </>
  );
}

export default NavBar;
