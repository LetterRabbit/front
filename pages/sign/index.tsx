import { Children } from "react";
import styled from "styled-components";
import Button from "../../src/components/Button/Button";
import MainBox from "../../src/components/MainBox/MainBox";

const Page_Sign = ({ ...props }) => {
  return (
    <LoginWrapper>
      <MainBox />
      <Button bgColor="#F9E000">카카오로 로그인</Button>
    </LoginWrapper>
  );
};

export default Page_Sign;

const LoginWrapper = styled.div`
  /* background-color: yellow; */
  margin: 0 36px;
  display: grid;
  grid-template-rows: 700px 50px;
  place-items: center;
  min-height: 100vh;
`;
