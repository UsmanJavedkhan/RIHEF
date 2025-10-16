import React, { useState, useRef } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import CartDialog from "./components/CartDialog";
import Nav from "./components/Footer";
import Digitalimg from "./assets/images/digitalmarket.png";
import bottleimg from "./assets/images/image 262.png";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null); 

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setShowCart(true);

    setTimeout(() => {
      cartRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200); 
  };

  return (
    <>
      <NavBar />
      <HeroSection />
<div className=" pb-30 pt-15  bg-white relative">
  <div className="flex flex-wrap gap-10 justify-center">
        <Card
          header="Hemp THC-Infused Beverage Service & Sale Training"
          image={bottleimg}
          description="Comprehensive training on Hemp THC-Infused beverages. Ideal for on-premises service & sale."
          Price="$45.00"
          buttonText="Add to Cart"
          onButtonClick={() =>
            handleAddToCart({
              header: "Hemp THC-Infused Beverage Service & Sale Training",
              image: bottleimg,
              Price: "$45.00",
            })
          }
        />
        <Card
          header="Employee Development"
          image={Digitalimg}
          description="Comprehensive training on THC for compliance and professional knowledge. Ideal for individuals and small teams."
          children="View Courses Folders"
          Price="$100.00"
          buttonText="Add to Cart"
          onButtonClick={() =>
            handleAddToCart({
              header: "Employee Development",
              image: Digitalimg,
              Price: "$100.00",
            })
          }
        />
      </div>

      {showCart && (
        <div ref={cartRef}>
          <CartDialog
            cartItems={cartItems}
            total={`$${cartItems
              .reduce(
                (sum, item) => sum + parseFloat(item.Price.replace("$", "")),
                0
              )
              .toFixed(2)}`}
            onClose={() => setShowCart(false)}
          />
        </div>
      )}
</div>
      <Nav />
    </>
  );
}

export default App;
