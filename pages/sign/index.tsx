import { Form, Input, Modal } from "antd";
import axios from "axios";
import styled from "styled-components";
import Button from "../../src/components/Button/Button";
import MainBox from "../../src/components/MainBox/MainBox";

const Page_Sign = () => {
  const storageKey = "rabbit_session";

  const kakaoLogin = async () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:4000/sign/kakao",
    });
  };

  const testLogin = (value) => {
    const { id, password } = value;

    if (id === "test" && password === "test") {
      return {
        data: {
          login: true,
          isLoading: false,
        },
      };
    }

    return;
  };

  const onFinish = async (value) => {
    const res = testLogin(value);

    if (!res) {
      return Modal.error({
        title: "error",
        content: <div>로그인 실패! 재시도 해주세요.</div>,
      });
    }

    sessionStorage.setItem(storageKey, `${Date.now()}`);

    try {
      const response = await axios.post("/api/signin", res.data, {
        headers: {
          "content-type": "application/json",
        },
      });

      if (response) return location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper>
      <MainBox>
        당신만을 위한 소중함
        <br />
        마음을 담은 음악과 메시지를 전달해보세요 ~ ❤
      </MainBox>

      <Form onFinish={onFinish} className="test-login">
        <Form.Item name="id">
          <Input placeholder="아이디 입력해주세요" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="비밀번호 입력해주세요" />
        </Form.Item>
        <Button htmlType="submit">임시 로그인</Button>
      </Form>
      <Button width="100%" bgColor="#F9E000" color="#111" onClick={kakaoLogin}>
        카카오로 로그인
      </Button>
    </LoginWrapper>
  );
};

export default Page_Sign;

const LoginWrapper = styled.div`
  display: grid;
  /* grid-template-rows: 80% 10%; */
  place-items: center;
  min-height: 100vh;

  .test-login {
    background-color: #eee;
    padding: 10px;
    border-radius: 10px;

    .ant-form-item {
      margin-bottom: 10px;
    }
  }

  .ant-form {
    width: 200px;
    button {
      width: 100%;
      text-align: center;
      background-color: #f9e000;
    }
  }
`;
