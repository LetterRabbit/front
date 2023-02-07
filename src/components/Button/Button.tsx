import React from "react";
import styled from "styled-components";

export default function Button({ children, ...props }: BUTTON) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}

interface BUTTON {
  width: string;
  bgColor?: string;
  color?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: Event) => void;
  margin?: string;
}

const ButtonWrapper = styled.button<BUTTON>`
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  background: ${(props) => props.bgColor};
`;
