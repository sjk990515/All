import logo from "./logo.svg";
import React from "react";
import styled from "styled-components";
import "./App.css";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;
const boxList = ["red", "green", "blue"];

// 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "green":
      return "초록 박스";
    case "blue":
      return "파란 박스";
    default:
      return "검정 박스";
  }
};

function App() {
  return (
    <div>
      {boxList.map((item) => {
        return <StBox borderColor={item}>{getBoxName(item)}</StBox>;
      })}
    </div>
  );
}

export default App;
