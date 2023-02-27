import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Pagination } from "antd";

export default function Page_Detail() {
  const router = useRouter();
  const testArr = [
    {
      id: 0,
      content: "편지입니다1"
    },
    {
      id: 1,
      content: "편지입니다2"
    },
    {
      id: 2,
      content: "편지입니다3"
    },
    {
      id: 3,
      content: "편지입니다4"
    },
    {
      id: 4,
      content: "편지입니다5"
    },
    {
      id: 5,
      content: "편지입니다6"
    }
  ];
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
      </ContentWrapper>
      <ContentPagination>
        <Pagination defaultCurrent={1} total={50} />
      </ContentPagination>
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
  height: 700px;
  overflow-y: hidden;
`;

const ContentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Canvas = styled.div`
  height: 120px;
  margin-bottom: 20px;
  background-color: #9d9d9d;
  padding: 12px 14px;
`;

const ContentPagination = styled.div`
  margin-top: 20px;
  text-align: center;
`;
