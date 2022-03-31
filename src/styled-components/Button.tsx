import styled, { css } from "styled-components";

interface IButtonProps {
  primary?: boolean;
}

export const Button = styled.button`
  background-color: #2c2c2c;
  color: white;
  padding: 5px 10px;
  border-right: 2px solid #575353;
  border-bottom: 2px solid #575353;
  border-top: #403b3b;
  border-left: #403b3b;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: #242222;
  }

  :focus-visible {
    border: 2px solid red;
    outline: red;
  }
  ${(props: IButtonProps) =>
    props.primary &&
    css`
      border: 2px solid #ffffff;
      background-color: #ececec;
      padding: 2px 8px;
      color: black;
      :hover {
        background-color: #dbdbdb;
        border-color: #e7e4e4;
      }
    `}
`;
