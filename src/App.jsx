import React, { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import CartDialog from "./components/CartDialog";
import CheckoutFlow from "./components/CheckoutFlow";
import Nav from "./components/Footer";
import ViewDetailsDialog from "./components/ViewDetailsDialog";
import PurchaseTypeModal from "./components/PurchaseTypeModal"; // ✅ new
import courseTabs from "./data/courseTabs";

import Digitalimg from "./assets/images/digitalmarket.png";
import bottleimg from "./assets/images/image 262.png";
import { twMerge } from "tailwind-merge";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [openViewFolders, setOpenViewFolders] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false); // ✅ new modal state
  const cartRef = useRef(null);

  useEffect(() => {
    if (cartItems.length === 0) setShowCart(false);
  }, [cartItems]);

 // ✅ Add to cart logic (shows modal but still adds product)
const handleAddToCart = (item) => {
  // If user adds a second different product → show the modal
  if (
    cartItems.length === 1 &&
    !cartItems.find((i) => i.header === item.header)
  ) {
    setShowPurchaseModal(true); // show the company modal
  }

  // Always proceed to add the product normally
  setCartItems((prev) => {
    const existingItem = prev.find((i) => i.header === item.header);
    if (existingItem) {
      return prev.map((i) =>
        i.header === item.header
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    }
    return [...prev, { ...item, quantity: 1 }];
  });

  setShowCart(true);

  setTimeout(() => {
    cartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 200);
};


  const handleQuantityChange = (header, change) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.header === header
            ? { ...i, quantity: Math.max(0, i.quantity + change) }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const total = `$${cartItems
    .reduce(
      (sum, item) =>
        sum +
        parseFloat(item.Price.replace("$", "")) * (item.quantity || 1),
      0
    )
    .toFixed(2)}`;

  const containerPadding = twMerge(
    "px-5 pt-10 bg-white relative transition-all duration-300",
    cartItems.length > 0 ? "pb-40 mb-10" : "py-10"
  );

  return (
    <>
      <NavBar />

      {!showCheckout && <HeroSection />}

      <div className={containerPadding}>
        {!showCheckout ? (
          <>
            <div className="flex flex-wrap mb-2 gap-10 justify-center">
              <Card
                header="Hemp THC-Infused Beverage Service & Sale Training"
                image={bottleimg}
                description="Comprehensive training on Hemp THC-Infused beverages. Ideal for on-premises service & sale."
                Price="$45.00"
                cartItems={cartItems}
                onAdd={() =>
                  handleAddToCart({
                    header: "Hemp THC-Infused Beverage Service & Sale Training",
                    image: bottleimg,
                    Price: "$45.00",
                  })
                }
                onQuantityChange={handleQuantityChange}
              />

              <Card
                header="Employee Development"
                image={Digitalimg}
                description="Comprehensive training on THC for compliance and professional knowledge. Ideal for individuals and small teams."
                children="View Courses Folders"
                Price="$100.00"
                cartItems={cartItems}
                onAdd={() =>
                  handleAddToCart({
                    header: "Employee Development",
                    image: Digitalimg,
                    Price: "$100.00",
                    hasViewFolder: true,
                    onViewFolders: () => setOpenViewFolders(true),
                  })
                }
                onQuantityChange={handleQuantityChange}
              />
            </div>

            {cartItems.length > 0 && (
              <div ref={cartRef}>
                <CartDialog
                  cartItems={cartItems}
                  total={total}
                  onProceedToPayment={() => setShowCheckout(true)}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
            )}
          </>
        ) : (
          <CheckoutFlow
            cartItems={cartItems}
            total={total}
            onBack={() => setShowCheckout(false)}
            onQuantityChange={handleQuantityChange}
          />
        )}
      </div>

      <ViewDetailsDialog
        isOpen={openViewFolders}
        onClose={() => setOpenViewFolders(false)}
        title="Courses Folders"
        tabs={courseTabs}
      />

      {/* ✅ New Modal */}
      <PurchaseTypeModal
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        onSwitch={() => {
          setShowPurchaseModal(false);
          alert("Switched to Company mode!");
        }}
      />

      <Nav />
    </>
  );
}

export default App;
