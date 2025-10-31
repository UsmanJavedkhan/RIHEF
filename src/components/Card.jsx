
import React, { useState } from "react";
import ViewDetailsDialog from "./ViewDetailsDialog";

export default function Card({
  header,
  image,
  description,
  Price,
  children, // "View Courses Folders"
  cartItems = [],
  onAdd, // called when Add to Cart
  onQuantityChange, // called for + / −
}) {
  const [open, setOpen] = useState(false);

  // Check if this item already exists in cart
  const cartItem = cartItems.find((item) => item.header === header);
  const quantity = cartItem?.quantity || 0;

  // Sample tab data (unchanged)
  const tabs = [
    {
      key: "back-of-house",
      label: "Intro to Back of House",
      items: [
        "Intro - Front of House 101",
        "Intro FOH - Barback",
        "Intro FOH - Bartending 101",
        "Intro FOH - Busser",
        "Intro FOH - Food Runner",
        "Intro FOH - Full Hands In/Out",
        "Intro FOH - Greeting Guests",
        "Intro FOH - Host",
        "Intro FOH - How to Ask Open-Ended Questions",
        "Intro - Front of House 101",
        "Intro FOH - Barback",
        "Intro FOH - Bartending 101",
        "Intro FOH - Busser",
        "Intro FOH - Bartending 101",
        "Intro FOH - Busser",
        "Intro FOH - Food Runner",
        "Intro FOH - Full Hands In/Out",
        "Intro FOH - Greeting Guests",
        "Intro FOH - Host",
        "Intro FOH - How to Ask Open-Ended Questions",
      ],
    },
    {
      key: "front-of-house",
      label: "Intro to Front of House",
      items: [
        "Intro FOH - How to Deal with a Difficult Customer",
        "Intro FOH - Restaurant Cashier",
        "Intro FOH - Server",
        "Intro FOH - Soda Machine",
        "Intro FOH - Upselling",
        "Intro FOH - Variations of Beer",
        "Intro FOH - Variations of Liquor",
        "Intro FOH - Variations of Wine",
      ],
    },
    {
      key: "restaurant-basics",
      label: "Intro to Restaurant Basics",
      items: [
        "Intro FOH - Telephone Etiquette",
        "Intro FOH - Server Assistant",
        "Intro FOH - Sidework Essentials",
        "Intro FOH - Health and Safety Basics",
        "Intro FOH - Hygiene and Grooming",
        "Intro FOH - Team Communication",
        "Intro FOH - Shift Readiness",
        "Intro FOH - Dining Room Flow",
        "Intro FOH - Closing Duties",
      ],
    },
  ];

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-[425px] transition-shadow duration-300">
        <p className="text-center p-3 font-bold border-b-2 border-[rgba(254,103,44,1)] text-white bg-[rgba(85,85,85,1)]">
          {header}
        </p>

        <img src={image} alt={header} className="w-full h-48 object-cover" />

        <div className="p-4 flex flex-col space-y-3 text-sm">
          {description && (
            <p className="text-[rgba(0,0,0,0.7)] text-sm">{description}</p>
          )}

          {/* View Courses Folders link */}
          <div className="min-h-[24px]">
            {children ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="font-medium border-b border-[rgba(86,64,150,1)] text-[rgba(86,64,150,1)] text-xs"
              >
                {children}
              </button>
            ) : (
              <span className="invisible text-xs">placeholder</span>
            )}
          </div>

          {/* Footer section with price + Add/Quantity controls */}
          <div className="flex justify-between items-center">
            <span className="text-[rgba(86,64,150,1)] text-2xl font-bold">
              {Price}
            </span>

            {/* Show Add to Cart OR Quantity Counter */}
            {quantity > 0 ? (
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => onQuantityChange(header, -1)}
                  className="px-3 py-2 text-lg font-bold text-[rgba(86,64,150,1)]"
                >
                  −
                </button>
                <span className="px-4 text-base text-gray-700">{quantity}</span>
                <button
                  onClick={() => onQuantityChange(header, 1)}
                  className="px-3 py-2 text-lg font-bold text-[rgba(86,64,150,1)]"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={onAdd}
                className="mt-3 mb-5 bg-[rgba(86,64,150,1)]  text-white text-[16px] py-4 min-w-[164px] rounded-lg hover:bg-[rgba(80,64,150,1)] "
                >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Dialog */}
      <ViewDetailsDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Courses Folders"
        tabs={tabs}
      />
    </>
  );
}
