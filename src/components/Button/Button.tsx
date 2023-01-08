import React from "react";
import styled from "styled-components";

export default function Button({ children, ...props }: BUTTON) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}

interface BUTTON {
  bgColor: string;
  color: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const ButtonWrapper = styled.button<BUTTON>`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 12px;
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
`;
