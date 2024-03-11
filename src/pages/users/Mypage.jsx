import { removeCookie } from "../../cookies/cookies";
import { TodoContainer, Content,Title, Button, AllContainer } from "../../components/users/input";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Input from "../../components/todos/Input";
import State from "../../components/todos/State";

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
    <AllContainer>
        <TodoContainer>
        <Title>Todos</Title>
        <Button onClick={LogoutHandler}>로그아웃</Button>
        </TodoContainer>
        <Input />
    </AllContainer>
      <Content>
      <State />
      </Content>
    </>
  );
};

export default Mypage;
