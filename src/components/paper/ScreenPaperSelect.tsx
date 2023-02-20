import styled from "styled-components";
import { Button, Form, Image, Input, Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

const ScreenPaperSelect = () => {
  const router = useRouter();
  const [selectedImage, setSeletedImage] = useState(null);

  console.log("selectedImage", selectedImage);

  const handleClickPaper = (event: any) => {
    setSeletedImage(event.target.value);
  };

  const handleSubmit = () => {
    Modal.confirm({
      content: "선택하시겠습니까?",
      onOk: () => router.push({ pathname: "/paper" }), //onOK하면 api.post하고, 성공하면 링크이동
    });

    console.log("success>>>", selectedImage);
  };

  return (
    <StyledWrapper>
      <ul>
        {_SampleImage.map((image: any) => {
          return (
            <input
              data-select={Number(selectedImage) === image.id}
              key={image.id}
              value={image.id}
              src={image.src}
              type="image"
              onClick={handleClickPaper}
            />
          );
        })}
      </ul>
      <Button onClick={handleSubmit}>편지지 확정하기</Button>
    </StyledWrapper>
  );
};

export default ScreenPaperSelect;

const StyledWrapper = styled.div`
  & ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin-bottom: 20px;
  }

  & input {
    border: 1px solid gray;
    overflow: hidden;
    width: 100%;
  }

  & button {
    width: 100%;
    border-radius: 6px;
    background: gray;
    color: #fff;
  }

  input[data-select="true"] {
    border: 2px solid #333;
  }
`;

export const _SampleImage = [
  {
    id: 1,
    src: "/images/test1.png",
  },
  {
    id: 2,
    src: "/images/test2.png",
  },
  {
    id: 3,
    src: "/images/test3.png",
  },
  {
    id: 4,
    src: "/images/test4.png",
  },
];
