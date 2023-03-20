import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const products = [
  {
    title: "Product 1",
    id: "1",
  },
  {
    title: "Product 2",
    id: "2",
  },
];

const Products = () => {
  return (
    <>
      <StyledUl>
        {products.map((item) => (
          <StyledLi key={item.id}>
            {item.title}
            <StyledLink to={`${item.id}`}>details</StyledLink>
          </StyledLi>
        ))}
      </StyledUl>

      {/* <StyledLink to="/productId">details</StyledLink> */}

      <Link to="/products:productId"></Link>
      <Outlet></Outlet>
    </>
  );
};

export default Products;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  font-weight: 700;
  :hover {
    color: #2b74e2;
  }
  &.active {
    color: #ff0000;
  }
`;

const StyledUl = styled.ul`
  padding-top: 30px;
  display: grid;
  justify-content: center;
  gap: 25px;
  list-style: none;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  background-color: #fff;
  padding: 15px 0;
  width: 800px;
`;
