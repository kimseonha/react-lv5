import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deleteTodo, __getTodo, __updateTodo } from "../../redux/modules/todosSlice";

function State() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);


  const onDeleteHandler = (id) => {
    dispatch(__deleteTodo(id));
  };

  const onDoneHandler = (updatedTodo) => {
    dispatch(__updateTodo(updatedTodo));
  };

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  return (
    <>
      <WorkingContainer>
        <h3>Working.. 🔥</h3>
        {todos ? (
          todos.map((item) => {
            return !item.isDone ? (
              <div className="card" key={item.id}>
                <CustomLink to={`/${item.id}`} key={item.id}>
                  <p>상세보기</p>
                </CustomLink>
                <h2>{item.title}</h2>
                <p>{item.contents}</p>
                <div className="switchButton">
                  <button onClick={() => onDoneHandler(item)}>
                    {item.isDone ? "취소" : "완료"}
                  </button>
                  <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
                </div>
              </div>
            ) : null;
          })
        ) : (
          <div>로딩중 이요 .......</div>
        )}
      </WorkingContainer>

      <DoneContainer>
        <h3>Done.. 🎉</h3>
        {todos ? (
          todos.map((item) => {
            return item.isDone ? (
              <div className="card" key={item.id}>
                <CustomLink to={`/${item.id}`} key={item.id}>
                  <p>상세보기</p>
                </CustomLink>
                <h2>{item.title}</h2>
                <p>{item.contents}</p>
                <div className="switchButton">
                  <button onClick={() => onDoneHandler(item)}>
                    {item.isDone ? "취소" : "완료"}
                  </button>
                  <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
                </div>
              </div>
            ) : null;
          })
          ): (
            <div>로딩중 이요 .......</div>
          )}
          </DoneContainer>
    </>
  );
}

// style-component

const WorkingContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 24px;
  }

  .card {
    width: 300px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid green;
  }

  button {
    height: 40px;
    width: 80px;
    margin-right: 10px;
    background-color: red;
    border: 2px solid red;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
  }

  button:first-of-type {
    border: 2px solid green;
  }
`;

const DoneContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 24px;
  }

  .card {
    width: 300px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid green;
  }

  button {
    height: 40px;
    width: 80px;
    margin-right: 10px;
    background-color: red;
    border: 2px solid red;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
  }

  button:first-of-type {
    border: 2px solid green;
  }
`;

const CustomLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;

export default State;
