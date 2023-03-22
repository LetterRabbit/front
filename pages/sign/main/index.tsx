import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Button, Drawer, message } from "antd";
import styled from "styled-components";
import ComponentButton from "../../../src/components/Button/Button";
import MainBox from "../../../src/components/MainBox/MainBox";
import ModalButton from "../../../src/components/Modal/Modal";

export default function main() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const handleNow = () => {
    setShowButton(!showButton);
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
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

  // const url = encodeURI(window.location.href);
  const currentLocation = useRouter();
  // console.log(currentLocation);
  // Facebook
  const shareUrl = () => {
    window.open("http://localhost:4000/" + currentLocation.pathname);
  };

  const copyClipBoard = (URL: any) => {
    // if (window.clipboardData.setData("text", URL))
    //   alert("URL is copied in your clipboard");
    // else alert("Coping URL is failed");
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "링크가 복사되었습니다!",
      duration: 2
    });
  };

  useEffect(() => {}, []);

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
          <Img
            className="sidebar"
            onClick={handleOpenDrawer}
            src="https://cdn-icons-png.flaticon.com/512/2989/2989870.png"
          />
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
                onClick={() => router.push("/sign/main/all")}
              >
                전체
              </ComponentButton>
              <ComponentButton
                width="25%"
                margin="0 0 0 10px"
                bgColor="#3D3D3D"
                onClick={() => router.push("/sign/main/detail")}
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
          onClick={shareUrl}
        >
          내 소중함 링크 공유하기
        </ComponentButton>
        {contextHolder}
        <Drawer
          width="300px"
          placement="right"
          onClose={handleCloseDrawer}
          open={openDrawer}
          getContainer={false}
        >
          <DrawerInner>
            <div className="name">소연이 님</div>
            <div className="inner">
              <img
                className="boxImg"
                src="https://cdn.shopify.com/s/files/1/0555/3537/0263/files/134-1347071_big-gift-box-vector-white-gift-box-logo.png?v=1638895329"
                width="20px"
              />
              <span>내 소중함 보러가기</span>
            </div>
            <div className="info">
              <p>소중함 소개</p>
              <p>문의하기</p>
            </div>
          </DrawerInner>
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
  overflow: hidden;

  .sidebar {
    position: absolute;
    width: 34px;
    right: 0;
    top: 0;
    cursor: pointer;
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

const DrawerInner = styled.div`
  margin-top: 40px;

  .name {
    font-size: 20px;
    margin-bottom: 14px;
  }

  .inner {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    .boxImg {
      margin-right: 8px;
    }
  }

  .info {
    line-height: 2;
  }
`;
