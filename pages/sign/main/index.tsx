import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Button from "../../../src/components/Button/Button";
import MainBox from "../../../src/components/MainBox/MainBox";

export default function main() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(true);
  const handleNow = () => {
    setShowButton(!showButton);
  };

  return (
    <div>
      {/* <LocationWrapper> */}
      {/* 첫 로그인 후  */}
      {/* <MainBox>
        반가워요! <br />
        주영님의 소중함이 열렸습니다!
      </MainBox>
      <NextButton onClick={() => router.push("/sign/main/location")}>
        다음 &nbsp;&gt;
      </NextButton> */}
      {/* 위치 지정 후  */}
      {/* </LocationWrapper> */}
      <MainWrapper>
        <ContentWrapper>
          <Title>님의 소중함</Title>
          {showButton ? (
            <Button width="50%" bgColor="#3D3D3D" onClick={() => handleNow()}>
              내 소중함 열어보기
            </Button>
          ) : (
            <ShowButtonWrap>
              <Button width="25%" margin="0 10px 0 0 " bgColor="#3D3D3D">
                전체
              </Button>
              <Button width="25%" margin="0 0 0 10px" bgColor="#3D3D3D">
                상세
              </Button>
            </ShowButtonWrap>
          )}
          <MainBox> </MainBox>
        </ContentWrapper>
        <Button width="100%" color="#fff" bgColor="#8B8B8B">
          내 소중함 링크 공유하기
        </Button>
      </MainWrapper>
    </div>
  );
}

const LocationWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 80% 10%;
  place-items: center;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ShowButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;
