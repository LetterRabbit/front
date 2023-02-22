import { SmileOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input } from "antd";
import { useState } from "react";
import styled from "styled-components";

const ScreenEditor = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <StyledWrapper>
      <p>
        사이드 커스텀바를 클릭하세요!
        <br />
        편지지를 커스텀할 수 있어요!
      </p>
      <Input.TextArea
        rows={4}
        placeholder="{}님의 소중함에 담길 편지 내용을 작성해주세요."
      />

      <div className="sidebar" onClick={handleOpenDrawer}>
        <SmileOutlined className="icon" />
        <SmileOutlined className="icon" />
        <SmileOutlined className="icon" />
      </div>

      <Drawer
        placement="right"
        onClose={handleCloseDrawer}
        open={openDrawer}
        getContainer={false}
      >
        <Form>
          <Button className="submit-button">저장</Button>

          <Form.Item name="font">
            {["궁서체", "나눔고딕", "고딕"].map((font) => (
              <button className="font">{font}</button>
            ))}
          </Form.Item>

          <Form.Item name="color">
            {["red", "pink", "blue"].map((color) => (
              <button className="color" style={{ background: color }}>
                {color}
              </button>
            ))}
          </Form.Item>

          <Form.Item name="emoji" className="emoji-wrapper">
            {[<SmileOutlined />, <SmileOutlined />, <SmileOutlined />].map(
              (emoji) => (
                <span className="emoji">{emoji}</span>
              )
            )}
          </Form.Item>
        </Form>
      </Drawer>
    </StyledWrapper>
  );
};

export default ScreenEditor;

const StyledWrapper = styled.div`
  .sidebar {
    position: absolute;
    background: #dfdfdf;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30px;
    text-align: center;
    padding: 30px 0;
    cursor: pointer;

    .icon {
      font-size: 20px;
      margin: 10px 0;
    }
  }

  .submit-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: gray;
    color: #fff;
  }

  .font {
    background: #fff;
    padding: 5px;
    border: 1px solid #dfdfdf;
    color: #333;
    border-radius: 12px;
    width: 70px;
    margin: 5px 5px 5px 0;
    cursor: pointer;
  }

  .color {
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border: none;
    margin: 5px 5px 5px 0;
  }

  .emoji-wrapper {
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    padding: 20px;

    .emoji {
      font-size: 30px;
      margin: 5px 5px 5px 0;
    }
  }
`;
