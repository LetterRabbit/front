import { useEffect } from "react";
import { Children } from "react";
import styled from "styled-components";
import Button from "../../src/components/Button/Button";
import MainBox from "../../src/components/MainBox/MainBox";

const Page_Sign = () => {
  const kakaoLogin = async () => {
    console.log("window", window.Kakao);

    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:4000/main"
    });
  };
  return (
    <LoginWrapper>
      <MainBox>
        당신만을 위한 소중함
        <br />
        마음을 담은 음악과 메시지를 전달해보세요 ~ ❤
      </MainBox>
      <Button width="100%" bgColor="#F9E000" color="#111" onClick={kakaoLogin}>
        카카오로 로그인
      </Button>
    </LoginWrapper>
  );
};

export default Page_Sign;

const LoginWrapper = styled.div`
  display: grid;
  grid-template-rows: 80% 10%;
  place-items: center;
  min-height: 100vh;
`;
