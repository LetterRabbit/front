import React from "react";
import styled from "styled-components";

export default function Button({ children, ...props }: BUTTON) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}

interface BUTTON {
  width: string;
  bgColor: string;
  color: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const ButtonWrapper = styled.button<BUTTON>`
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
`;
