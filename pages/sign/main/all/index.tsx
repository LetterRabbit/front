import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
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

  // const styledRandom = (idx) => {
  //   const hashKey = (13 / (idx + 1) + 0.2) % 1;
  // const x = Math.floor(hashKey * 40);
  // const y = Math.floor(hashKey * 40);
  // const rotate = Math.floor(hashKey * (idx % 2 === 0 ? 30 : - 30));
  // return {
  // transform: 'rotate(' + rotate + 'deg)' + translateX(' + x + 'px)' + 'translateY(' + y + 'px)',}'
  // };

  return (
    <PageWrapper>
      <Router onClick={() => router.back()}>
        <BackImg src="/img/left-arrow.png" alt="" />
      </Router>
      <ContentWrapper>
        <ContentTitle>To. (주영)</ContentTitle>
        {testArr.map((item, id) => {
          return <Canvas key={id}>{item.content}</Canvas>;
        })}
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

const Canvas = styled.div`
  height: 120px;
  margin-bottom: 20px;
  background-color: #9d9d9d;
  padding: 12px 14px;
`;
