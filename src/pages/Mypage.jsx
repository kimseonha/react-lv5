import { removeCookie } from "../cookies/cookies";
import { Container, Title, Button } from "../components/input";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Mypage = () => {
  const router = useNavigate();

  // 로그아웃 처리 함수
  const LogoutHandler = () => {
    localStorage.removeItem("access");
    removeCookie("accessToken");
    router("/");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      router("/");
    }
  }, [router]); 

  return (
    <>
      <Container>
        <Title>Todos</Title>
        <Button onClick={LogoutHandler}>로그아웃</Button>
      </Container>
    </>
  );
};

export default Mypage;
