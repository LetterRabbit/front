import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export default function index() {
  const router = useRouter();
  return (
    <PageWrapper>
      <Router onClick={() => router.back()}>
        <BackImg src="/img/left-arrow.png" alt="" />
      </Router>
      <ContentWrapper>
        <ContentTitle>To. (주영)</ContentTitle>
        <Canvas>ㅎㅇㅎㅇㅎㅇㅎㅇ</Canvas>
      </ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: relative;
`;

const Router = styled.div`
  font-size: 30px;
`;

const BackImg = styled.img`
  width: 20px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  margin-top: 30px;
`;

const ContentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Canvas = styled.div`
  height: 580px;
  background-color: blue;
`;