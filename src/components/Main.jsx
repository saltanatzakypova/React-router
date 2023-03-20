import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../pages/Logo";
import MyCard from "../pages/MyCard";
import MyOrder from "../pages/MyOrder";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Routes>
        <Route path="/logo" element={<Logo></Logo>}></Route>
        <Route path="/myCard" element={<MyCard></MyCard>}></Route>
        <Route path="/myorders" element={<MyOrder></MyOrder>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/products/:productId"
          element={<ProductDetail></ProductDetail>}
        ></Route>
      </Routes>
      <StyledButton onClick={() => navigate(-1)}>Go back</StyledButton>
    </main>
  );
};

export default Main;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 20px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #0dc2b9;
  border-radius: 20px;

  :hover {
    background-color: #0caea6;
  }
`;
