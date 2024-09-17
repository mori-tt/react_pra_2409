import classes from "./App.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: #f00;
`;

export const App = () => {
  const onclickButton = () => {
    alert("clicked!");
  };
  return (
    <>
      <h1>React</h1>
      <p>ReactのApp.jsxから表示してます。</p>
      <button onClick={onclickButton}>クリック</button>
      <StyledDiv>スタイルの適用された文字</StyledDiv>
    </>
  );
};
