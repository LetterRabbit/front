import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export default function Page_All() {
  const router = useRouter();
  const testArr = [
    {
      id: 0,
      content: "안녕하세요1"
    },
    {
      id: 1,
      content: "안녕하세요2"
    },
    {
      id: 2,
      content: "안녕하세요3"
    },
    {
      id: 3,
      content: "안녕하세요4"
    },
    {
      id: 4,
      content: "안녕하세요5"
    },
    {
      id: 5,
      content: "안녕하세요6"
    }
  ];
  return (
    <PageWrapper>
      <Router onClick={() => router.back()}>
        <BackImg src="/img/left-arrow.png" alt="" />
      </Router>
      <ContentWrapper>
        <ContentTitle>To. (주영)</ContentTitle>
        <Content>편지입니다1</Content>
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
  overflow: hidden;
  height: 680px;
`;

const ContentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Content = styled.div`
  background-color: #9d9d9d;
  height: 520px;
  margin-bottom: 12px;
  padding: 12px 14px;
`;
