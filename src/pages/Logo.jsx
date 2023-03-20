import React from 'react'
import styled from 'styled-components';

const Logo = () => {
  return (
    <>
      <Title>Welcome</Title>
    </>
  );
}

export default Logo



const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  font-size: 30px;
`;