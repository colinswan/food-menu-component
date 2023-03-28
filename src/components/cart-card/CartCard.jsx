import React from "react";
import styled from "styled-components";

const CartCard = ({
  cartItems,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) => {
  let totalPrice = 0;
  const overallTotal = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  return (
    <Wrapper>
      {cartItems.length === 0 ? (
        <CartCardContent>Your Cart is empty</CartCardContent>
      ) : (
        <>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <CartCardContent>
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
                    <h2>
                      £{(totalPrice = item.price * item.quantity).toFixed(2)}
                    </h2>
                  </QuantityControls>
                </Items>
              </CartCardContent>
              <Separator />
            </React.Fragment>
          ))}
          <OverallTotal>
            <h4>Total:</h4> <h2>£{overallTotal.toFixed(2)}</h2>
          </OverallTotal>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
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

const CartCardContent = styled.div.attrs({
  className: "CartCardContent",
})`
  display: flex;
  height: 152.26901245117188px;
  width: 100%;
  left: 12.656982421875px;
  top: 17.4976806640625px;
  border-radius: 20px;
`;

const ItemImage = styled.div.attrs({
  className: "ItemImage",
})`
  position: relative;
  height: 65px;
  width: 65px;
  left: -15px;
  top: 0;
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
  }
`;

const Items = styled.div.attrs({
  className: "Items",
})`
  float: 1;
  padding-left: 1rem;

  h4 {
    font-size: 16px;
  }

  p {
    font-size: 18px;
    word-wrap: break-word;
    width: 100%;
    overflow-wrap: break-word;
  }
`;

const QuantityControls = styled.div.attrs({
  className: "QuantityControls",
})`
  display: flex;
  align-items: center;

  button {
    background-color: #6b06ef;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    border-radius: 50%;
    min-width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 10px;
    font-size: 1rem;
    width: 24px;
  }

  h2 {
    font-size: 1.5rem;
    margin-left: 21px;
  }
`;

const Separator = styled.span.attrs({
  className: "Separator",
})`
  display: block;
  height: 1px;
  width: 100%;
  background-color: hsl(266, 90%, 48%, 0.2);
  margin-bottom: 2rem;

  &:last-of-type {
    height: 5px;
  }
`;

const OverallTotal = styled.div.attrs({
  className: "OverallTotal",
})`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.2rem;

  h2 {
    margin-left: 1rem;
  }

  h4 {
    font-size: 1.2rem;
  }
`;

export default CartCard;
