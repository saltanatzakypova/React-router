import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";

const Header = () => {
  return (
    <div>
      <Container>
        <StyledNav>
          <NavList>
            <StyledLink to="/logo">Logo</StyledLink>
            <StyledLink to="/products">Products</StyledLink>
            <StyledLink to="/myCard">My Card</StyledLink>
            <StyledLink to="/myorders">My Orders</StyledLink>
          </NavList>
        </StyledNav>
      </Container>
      <Main></Main>
    </div>
  );
};

export default Header;

const Container = styled.div`
  background-color: #24231a;
  width: 100%;
  padding: 20px 0;
  height: 80px;

`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #fff;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  :hover {
    color: #2b74e2;
  }
  &.active {
    color: #ff0000;
  }
`;


const NavList = styled.ul`
  display: flex;
  font-size: 20px;
  width: 400px;
  justify-content: space-between;
`;


