import React from "react";
import styled from "styled-components";

const CartCard = ({
  cartItems,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) => {
  return (
    <Wrapper>
      {cartItems.length === 0 ? (
        <CartCardContent>Your Cart is empty</CartCardContent>
      ) : (
        cartItems.map((item) => (
          <CartCardContent key={item.id}>
            <ItemImage>
              {item.image && <img src={item.image} alt={item.title} />}
              <p>{item.quantity}</p>
            </ItemImage>
            <Items>
              <p>{item.title} </p>
              <h4>£{item.price.toFixed(2)}</h4>
              <QuantityControls>
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  &lt;
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  &gt;
                </button>
              </QuantityControls>
            </Items>
          </CartCardContent>
        ))
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 178.6322021484375px;
  width: 382.92877197265625px;
  left: 0px;
  top: 0px;
  border-radius: 1px;
  padding: 2.5rem;

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
  display: flex;
  height: 152.26901245117188px;
  width: 370.27178955078125px;
  left: 12.656982421875px;
  top: 17.4976806640625px;
  border-radius: 20px;
`;

const ItemImage = styled.div`
  position: relative;
  height: 65px;
  width: 65px;
  left: -15px;
  top: -15px;
  border-radius: 20px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    border-radius: 50%;
    padding: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;

    z-index: 1;
  }
`;

const Items = styled.div``;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }

  span {
    margin: 0 0.5rem;
    font-size: 1rem;
  }
`;

export default CartCard;
