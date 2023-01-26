import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import MainBox from "../../../src/components/MainBox/MainBox";

export default function main() {
  const router = useRouter();

  return (
    <LocationWrapper>
      <MainBox>
        반가워요! <br />
        주영님의 소중함이 열렸습니다!
      </MainBox>
      <NextButton onClick={() => router.push("/sign/main/location")}>
        다음 &nbsp;&gt;
      </NextButton>
    </LocationWrapper>
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
