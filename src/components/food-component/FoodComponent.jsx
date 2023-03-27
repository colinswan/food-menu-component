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

const Wrapper = styled.div`
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
`;

export default FoodComponent;
