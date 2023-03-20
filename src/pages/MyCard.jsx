import React from "react";
import styled from "styled-components";

const MyCard = () => {
  return (
    <Container>
      <Title>MyCard</Title>
    </Container>
  );
};

export default MyCard;


const Container = styled.div`
  width: 600px;
  background-color: #fff;
  margin: 0 auto;
  height: 250px;
  margin-top: 40px;
  
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  font-size: 30px;
  
`;

