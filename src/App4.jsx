/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const buttonStyle = css`
  background-color: #f90;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #f00;
  }
`;
export const App = () => {
  return <button css={buttonStyle}>Click Me</button>;
};
