import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 500px;
  height: 500px;
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column; /* 요소들을 세로로 정렬 */
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 20px; 
`;

export const Input = styled.input`
  margin-bottom: 10px; 
  width: 250px;
  height: 30px;
`;

export const Button = styled.button`
  background-color: black;
  color: #fff;
  padding: 10px 40px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
export const CustomLink2 = styled(Link)`
  background-color: black;
  color: #fff;
  padding: 10px 40px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  &:visited {
    text-decoration: none;
  }
`;

