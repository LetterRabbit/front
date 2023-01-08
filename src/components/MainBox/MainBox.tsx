import React from "react";
import styled from "styled-components";

export default function MainBox() {
  return (
    <MainBoxWrapper>
      <MainBoxText>
        당신만을 위한 소중함
        <br />
        마음을 담은 음악과 메시지를 전달해보세요 ~ ❤
      </MainBoxText>
      <MainBoxImg>💌</MainBoxImg>
    </MainBoxWrapper>
  );
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
