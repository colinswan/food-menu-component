import React from "react";
import styled from "styled-components";

const CartCard = () => {
  return (
    <Wrapper>
      <CartCardContent>Cart Card</CartCardContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 178.6322021484375px;
  width: 382.92877197265625px;
  left: 0px;
  top: 0px;
  border-radius: 1px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    float: top;
  }
`;

const CartCardContent = styled.div`
  height: 152.26901245117188px;
  width: 370.27178955078125px;
  left: 12.656982421875px;
  top: 17.4976806640625px;
  border-radius: 20px;
`;

export default CartCard;
