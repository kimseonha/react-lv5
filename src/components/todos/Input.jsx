import React, { useState } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
import { AddBtnStyle } from "../../styles/componentStyles";
import { useDispatch } from "react-redux";
import { __createTodo } from "../../redux/modules/todosSlice";

function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
    if (title === "") return;
    if (contents === "") return;
    const newTodo = {
      title,
      contents,
      isDone: false,
    };
    console.log(newTodo)
    dispatch(__createTodo(newTodo));

    setTitle("");
    setContents("");
  };

  return (
    <StyledInput>
      <form>
        <Row>
          <Label> 제목: </Label>
          <InputText
            type="text"
            value={title}
            placeholder="제목을 입력하세요."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Label> 내용: </Label>
          <InputText2
            type="text"
            value={contents}
            placeholder="내용을 입력하세요."
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
          <AddBtnStyle onClick={handleSubmitButtonClick}>추가하기</AddBtnStyle>
        </Row>
      </form>
    </StyledInput>
  );
}

// styled component 작성 시작

const StyledInput = styled.div`
  width: 1120px;
  background-color: #eee;
  padding: 25px 40px;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 70px;
`;

const InputText = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const InputText2 = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export default Input;
