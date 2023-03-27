import React from "react";
import styled from "styled-components";

import menuItems from "./menuItems.js";

const MenuCard = ({ onAddToCart }) => {
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
              <button onClick={() => onAddToCart(item)}>Add to Cart</button>
            </Content>
          </MenuCardContent>
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 178.6322021484375px;
  width: 382.92877197265625px;
  margin-left: 20px;
  margin-top: 21px;
  border-radius: 1px;
`;

const MenuCardContent = styled.div`
  display: flex;

  height: 152.26901245117188px;
  width: 370.27178955078125px;
  left: 12.656982421875px;
  top: 17.4976806640625px;
  border-radius: 20px;

  background-color: ${(props) => props.bgColor};
`;

const Image = styled.div`
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

const Content = styled.div`
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

export default MenuCard;
