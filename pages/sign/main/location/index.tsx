import { Input } from "antd";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../../../src/components/Button/Button";

function BoxLocation() {
  const locationList = [
    {
      id: 0,
      name: "책상 위",
      selected: false
    },
    {
      id: 1,
      name: "침대 옆 테이블",
      selected: false
    },
    {
      id: 2,
      name: "서랍 안",
      selected: false
    },
    {
      id: 3,
      name: "책장",
      selected: false
    }
  ];
  const [selectedBox, setSelectedBox] = useState();

  const toggleActive = (id: any) => {
    setSelectedBox(id);
  };

  return (
    <BoxLocationWrapper>
      <BoxLocationContent>
        <Title>소중함 위치 지정하기</Title>
        <LocationContent>
          {locationList.map((location, id) => {
            return (
              <StypedInput
                key={id}
                type="image"
                value={id}
                onClick={() => toggleActive(id)}
              />
            );
          })}
        </LocationContent>
      </BoxLocationContent>
      <Button width="100%">소중함 위치 지정하기</Button>
    </BoxLocationWrapper>
  );
}

export default BoxLocation;

const BoxLocationWrapper = styled.div`
  display: grid;
  grid-template-rows: 80% 10%;
  place-items: center;
  min-height: 100vh;
`;

const BoxLocationContent = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 30px;
`;

const LocationContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StypedInput = styled(Input)`
  width: calc(50% - 10px);
  height: 200px;
  margin-bottom: 20px;
  font-size: 12px;
  background-color: skyblue;
  &:hover,
  &:focus {
    border: 2px solid #111;
  }
`;
