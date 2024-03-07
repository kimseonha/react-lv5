import React, { useState } from "react";
import { Container,Title,InputContainer,Input,Button,CustomLink } from "../components/input";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { setCookie } from "../cookies/cookies";
import { useEffect } from "react";


const Home = () => {
  const router = useNavigate();
  const [id, setId] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePW = (e) => {
    setPassword(e.target.value);
  };
  
  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      alert("이미 로그인 되어있습니다!");
      router("/mypage");
    }
  }, [router]);

  // 로그인
  const onClickLogin = async () => {
    try {
      const token = await login(id, password);
      setCookie("accessToken", token);
      localStorage.setItem("access", token);
      alert("로그인에 성공하였습니다!");
      router("/mypage");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <Container>
      <Title>로그인하기✔️</Title>
      <InputContainer>
          <Input
            type="text"
            value={id}
            placeholder="아이디"
            onChange={onChangeId}
          />
          <Input
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={onChangePW}
          />
      </InputContainer>
        <Button onClick={onClickLogin}>Login</Button>
       <CustomLink to="/signup">회원가입하기</CustomLink>
    </Container>
  );
};

export default Home;