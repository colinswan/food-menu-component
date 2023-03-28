import React from "react";
import styled from "styled-components";

const FoodComponent = ({ Card, Title, ...props }) => {
  return (
    <Wrapper>
      <h1>{Title}</h1>
      {React.cloneElement(Card, { ...props })}
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  height: 50.75rem;
  width: 23.44rem;
  left: 320px;
  top: 106px;
  border-radius: 25px 0px 0px 25px;
  background-color: #ffffff;
  margin-right: 2rem;
  overflow: hidden;
  overflow-y: scroll;

  h1 {
    font-weight: 700;
    font-size: 2rem;
    margin-top: 3.06rem;
    margin-left: 2.33rem;
  }

  /* media  */
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    min-height: 100vh;
    border-radius: 0px;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export default FoodComponent;
