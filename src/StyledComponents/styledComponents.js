import React from "react";
import styled, { css } from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.5em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const TomatoButton = styled(Button)`
  color: tomato;
`;

export const Link = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);
