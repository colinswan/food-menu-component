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
  return (
    <Wrapper>
      <FoodComponent Card={<MenuCard />} Title={"Menu Card"} />
      <FoodComponent Card={<CartCard />} Title={"Cart Card"} />
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
