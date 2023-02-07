import React from "react";
import styled from "styled-components";

export default function MainBox({ children }: MAIN_BOX_DATA) {
  return (
    <MainBoxWrapper>
      <MainBoxText>{children}</MainBoxText>
      <MainBoxImg>💌</MainBoxImg>
    </MainBoxWrapper>
  );
}

interface MAIN_BOX_DATA {
  children?: React.ReactNode;
}

const MainBoxWrapper = styled.div`
  text-align: center;
`;

const MainBoxText = styled.div`
  margin-bottom: 60px;
`;

const MainBoxImg = styled.div`
  font-size: 100px;
`;
