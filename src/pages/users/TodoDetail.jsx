import React, { useState, useEffect} from 'react'
// import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { detailTodo } from '../../apis/TodoApis/todoAxios'; 


function Detail() {
  const [ todo, setTodo ] = useState();
  // const todos = useSelector((state) => state.todosReducer.todos);
  const param = useParams();
  // const todo = todos.filter((todo) => todo.id === param.id);

  const navigate = useNavigate();
  const HandleGoback = () => {
    navigate("/mypage");
  };
  
  useEffect(() => {
    async function fetchData() {
      const todoData = await detailTodo(param.id);
      setTodo(todoData);
    }
    fetchData();
  }, [param]);

  return (
    <Container>
        {todo ? (
                <>                
                <In>
                  <Box>
                    <Id>ID : {todo.id}</Id>
                    <Button onClick={HandleGoback}>돌아가기</Button>
                  </Box>
                  <Title>{todo.title}</Title>
                </In>
                <Contents>{todo.contents}</Contents>
                </>
        ): (
          <div>로딩중...!</div>
        )}
    </Container>
  );
}

// style-component

const Container = styled.div`
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  background-color: #eee;
  color: black;
`;
const In = styled.div`
  margin: 20px 30px;
`;
const Id = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 15px 30px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: teal;
  &:hover {
    background-color: grey;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 40px;
`;
const Contents = styled.p`
  font-size: 18px;
  font-weight: light;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export default Detail;
