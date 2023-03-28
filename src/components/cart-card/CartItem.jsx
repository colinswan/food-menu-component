import React from "react";
import styled from "styled-components";

const CartItem = ({ item, handleDecreaseQuantity, handleIncreaseQuantity }) => {
  return (
    <Wrapper>
      <ItemName>{item.name}</ItemName>
      <QuantityControls>
        <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>
          -
        </QuantityButton>
        <Quantity>{item.quantity}</Quantity>
        <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>
          +
        </QuantityButton>
      </QuantityControls>
      <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 0.5rem;
`;

const ItemName = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Quantity = styled.span`
  margin: 0 1rem;
  font-size: 1rem;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
`;

export default CartItem;
