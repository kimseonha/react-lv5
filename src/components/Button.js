// import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  background-color: black;
  color: #fff;
  padding: 10px 40px;
  border-radius: 10px;
  border: none;
`;

export const CustomLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color: #000; 
  /* background-color: black; */
  text-decoration: none;
  &:visited {
    color: #000; 
  }
`;

export default Button;