import { useState } from "react";
import styled from "styled-components";

// background images
import bgLeft from "./assets/images/bg__left.svg";
import bgTopRight from "./assets/images/bg__top-right.svg";
import bgBtmRight from "./assets/images/bg__btm-right.svg";

// components
import MenuCard from "./components/menu-card/MenuCard";
import CartCard from "./components/cart-card/CartCard";
import FoodComponent from "./components/food-component/FoodComponent";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If item is already in the cart, update its quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item is not in the cart, add it with an initial quantity of 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <Wrapper>
      <FoodComponent
        Card={<MenuCard onAddToCart={addToCart} />}
        Title={"To Go Menu"}
      />
      <FoodComponent
        Card={
          <CartCard
            cartItems={cartItems}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
          />
        }
        Title={"Your Cart"}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
  background-image: url(${bgLeft}), url(${bgTopRight}), url(${bgBtmRight});
  background-position: left center, right top, right bottom;
  background-repeat: no-repeat, no-repeat, no-repeat;
  overflow: hidden;

  /* TODO Mobile devices */
  /* mobile devices */
`;

export default App;
