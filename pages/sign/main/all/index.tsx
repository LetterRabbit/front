import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function Page_All() {
  const router = useRouter();
  const testArr = [
    {
      text: "안녕 안녕 반가워 안녕 안녕 반가워",
      idx: 0,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test2.png?raw=true"
    },
    {
      text: "반갑습니다 222222",
      idx: 1,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test1.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하세요",
      idx: 2,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test3.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까 ?",
      idx: 3,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까2 ?",
      idx: 4,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까3 ?",
      idx: 5,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까4 ?",
      idx: 6,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까5 ?",
      idx: 7,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까6 ?",
      idx: 8,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까7 ?",
      idx: 9,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까8 ?",
      idx: 10,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까9 ?",
      idx: 11,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    }
  ];

  const styledRandom = (idx: number) => {
    const hashKey = (13 / (idx + 1) + 0.2) % 1;
    const x = Math.floor(hashKey * 40);
    const y = Math.floor(hashKey * 40);
    const rotate = Math.floor(hashKey * (idx % 2 === 0 ? 30 : -30));
    return {
      transform:
        "rotate(" +
        rotate +
        "deg) " +
        "translateX(" +
        x +
        "px) " +
        "translateY(" +
        y +
        "px) "
    };
  };
  const bgImage = (idx: number) => {
    const randomBg = testArr[idx];
    return randomBg.url;
  };
  return (
    <PageWrapper>
      <Router onClick={() => router.back()}>
        <BackImg src="/img/left-arrow.png" alt="" />
      </Router>
      <ContentWrapper>
        <ContentTitle>To. (주영)</ContentTitle>
        {/*{testArr.map((item, id) => {
          return <Canvas key={id}>{item.text}</Canvas>;
        })}
        <Content>편지입니다1</Content> */}
        <LettersWrap>
          {testArr.map((item, idx) => {
            return (
              <Random
                key={idx}
                style={styledRandom(idx)}
                data-content={bgImage(idx)}
                className="random"
              >
                {item.text}
              </Random>
            );
          })}
        </LettersWrap>
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

const LettersWrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

const Random = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  height: 150px;
  padding: 20px;
  font-size: 14px;
  background-image: url("https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test1.png?raw=true");
  background-repeat: no-repeat;
  background-size: contain;
`;
