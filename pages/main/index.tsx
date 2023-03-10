import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Button, Drawer, message } from "antd";
import styled from "styled-components";
import ComponentButton from "../../src/components/Button/Button";
import MainBox from "../../src/components/MainBox/MainBox";
import ModalButton from "../../src/components/Modal/Modal";
import { logout } from "../../src/modlue/logout";

export default function Page_Main() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(true);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const handleNow = () => {
    setShowButton(!showButton);
  };

  // drawer
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // message
  const success = () => {
    messageApi.open({
      type: "success",
      content: "링크가 복사되었습니다!",
      duration: 2,
    });
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
          <Title>(주영)님의 소중함</Title>
          {showButton ? (
            <ComponentButton
              width="50%"
              bgColor="#3D3D3D"
              onClick={() => handleNow()}
            >
              내 소중함 열어보기
            </ComponentButton>
          ) : (
            <ShowButtonWrap>
              <ComponentButton
                width="25%"
                margin="0 10px 0 0 "
                bgColor="#3D3D3D"
                onClick={() => router.push("/main/all")}
              >
                전체
              </ComponentButton>
              <ComponentButton
                width="25%"
                margin="0 0 0 10px"
                bgColor="#3D3D3D"
                onClick={() => router.push("/main/detail")}
              >
                상세
              </ComponentButton>
            </ShowButtonWrap>
          )}
          <MainBox> </MainBox>
        </ContentWrapper>

        <ComponentButton
          width="100%"
          color="#fff"
          bgColor="#8B8B8B"
          onClick={success}
        >
          내 소중함 링크 공유하기
        </ComponentButton>
        <Button type="primary" onClick={logout} className="logout-btn">
          로그아웃
        </Button>

        {contextHolder}

        <Img
          onClick={showDrawer}
          src="https://cdn-icons-png.flaticon.com/512/2989/2989870.png"
        />

        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
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
  position: relative;
  display: grid;
  grid-template-rows: 80% 10%;
  place-items: center;
  min-height: 100vh;

  .logout-btn {
    bottom: 20px;
  }
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

const Img = styled.img`
  position: absolute;
  width: 34px;
  right: -10px;
  top: 0;
  cursor: pointer;
`;
