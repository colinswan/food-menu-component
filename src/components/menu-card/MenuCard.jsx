import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

import menuItems from "./menuItems.js";

const MenuCard = ({ onAddToCart }) => {
  const [animation, setAnimation] = useState(null);

  console.log(menuItems);
  const handleAddToCart = (item) => {
    setAnimation(item.id);
    onAddToCart(item);

    setTimeout(() => {
      setAnimation(null);
    }, 1000);
  };
  return (
    <>
      {/* Loop through the menuItems array */}
      {menuItems.map((item) => (
        <Wrapper key={item.id}>
          {/* Render a separate card for each item */}
          <MenuCardContent bgColor={item.bgColor}>
            <Image>
              <img src={item.image} alt={item.alt} />
            </Image>
            <Content>
              <p>{item.title}</p>
              <h3>£{item.price.toFixed(2)}</h3>
              <AnimatedButton
                onClick={() => handleAddToCart(item)}
                animate={animation === item.id}
              >
                Add to Cart
              </AnimatedButton>
            </Content>
          </MenuCardContent>
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  position: relative;
  height: 178.6322021484375px;
  width: 382.92877197265625px;
  margin-left: 20px;
  margin-top: 21px;
  border-radius: 1px;
`;

const MenuCardContent = styled.div.attrs({
  className: "Wrapper",
})`
  display: flex;

  height: 152.26901245117188px;
  width: 370.27178955078125px;
  left: 12.656982421875px;
  top: 17.4976806640625px;
  border-radius: 20px;

  background-color: ${(props) => props.bgColor};
`;

const Image = styled.div.attrs({
  className: "Image",
})`
  position: absolute;
  height: 149px;
  width: 144px;
  left: -15px;
  top: -15px;
  border-radius: 20px;

  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div.attrs({
  className: "Content",
})`
  position: absolute;
  height: 149px;
  width: 144px;
  left: 150px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  button {
    position: absolute;
    height: 32px;
    width: 130px;
    left: 0px;
    bottom: -15px;
    border-radius: 20px;
    background-color: #6b06ef;
    color: #fff;
    border: none;
    font-size: 16px;
    font-weight: 700;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedButton = styled.button.attrs({
  className: "AnimatedButton",
})`
  position: absolute;
  height: 32px;
  width: 130px;
  left: 0px;
  bottom: -15px;
  border-radius: 20px;
  background-color: #6b06ef;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 700;
  animation: ${(props) =>
    props.animate
      ? css`
          ${bounce} 0.6s ease infinite
        `
      : "none"};
`;

export default MenuCard;
