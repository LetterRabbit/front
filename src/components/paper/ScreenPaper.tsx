import styled from "styled-components";
import { Button, Input } from "antd";
import Link from "next/link";

const ScreenPaper = () => {
  return (
    <StyledWrapper>
      <div className="btn-wrapper">
        <p>편지지 선택하기를 눌러 마음에드는 편지지를 선택해보세요.</p>
        <Link href="/paper/select">
          <Button>편지지 선택하기</Button>
        </Link>
      </div>
      <Input readOnly type="image" src={_SampleImage[0].src} />
      <Link href="/editor">
        <Button>편지 쓰기</Button>
      </Link>
    </StyledWrapper>
  );
};

export default ScreenPaper;

const StyledWrapper = styled.div`
  p {
    font-size: 10px;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-input {
    padding: 0;
    height: 300px;
    overflow: hidden;
  }
`;

export const _SampleImage = [
  {
    id: 1,
    src: "/images/test.jpeg",
  },
];
