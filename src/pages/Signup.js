import React, { useState } from "react";
import { Container,Title,InputContainer,Input,Button,CustomLink } from "../components/input";
import { useNavigate } from "react-router-dom";
import { register } from "../apis/login"; // 회원가입 API를 import
import { setCookie } from "../cookies/cookies";

const Signup = () => {
  const router = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // 회원가입 API 호출
      const response = await register(id, password);
      setCookie("accessToken", response);
      localStorage.setItem("access", response);
      alert("회원가입에 성공하였습니다!");
      router("/"); // 회원가입 성공 시 로그인 페이지로 이동
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container>
      <Title>회원가입📋</Title>
      <InputContainer>
        <Input
          type="text"
          value={id}
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <Button onClick={handleSignup}>회원가입</Button>
      <CustomLink to="/">로그인하기</CustomLink>
    </Container>
  );
};

export default Signup;

