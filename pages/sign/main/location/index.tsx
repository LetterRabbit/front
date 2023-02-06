import { Input } from "antd";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../../../src/components/Button/Button";
import ModalButton from "../../../../src/components/Modal/Modal";

function BoxLocation() {
  const locationList = [
    {
      id: 0,
      name: "책상 위",
      src: "https://www.womansense.co.kr/upload/NPFILE/201911/391137.jpg",
      selected: false
    },
    {
      id: 1,
      name: "침대 옆 테이블",
      src: "https://img.freepik.com/premium-photo/cozy-bedroom-interior-with-book-and-reading-lamp-on-bedside-table_65102-637.jpg",
      selected: false
    },
    {
      id: 2,
      name: "서랍 안",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVERgVFRUYGBgYGBgYGRgYGBgYGBkYGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGTEsJCE0NDE0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0MTQ0NDQ0NDExNDQ0MTQxNDQ0NDQ0MT00NP/AABEIAN4A4wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAD4QAAIBAgMGAggEBQQBBQAAAAECAAMRBCExBRJBUWGBInEGMlKRobHB8BNictEjM0Lh8YKSorLCFBVDU9L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACARAQEBAQACAwEAAwAAAAAAAAABAhEhMQMSUUETImH/2gAMAwEAAhEDEQA/AO+WnJVWC8O9IixtDGAmOAhhXhtEIRKC3Y4LAIrww6KN343ehqS8F42IQHXigtHAQEI8NGyjjdrUqWTuL+yube4ad5NshO1pRTn9l7eatiAioFTdY3Ju2WnQfGdAIll9FlnsYRGwibGHgw3jRDNDrxphgMBhjgYDBDTrxXggMMPvFGXigUIQvOG8V5KhhEbHb0MOgvG3iEB29FFDKAAhtEIYCAhkGJxiUxd3C+ZzPkNTOfx3pQMxSS/5n07KPqZN1I2ZtdMzgC5NgNScgPMzGx3pJSTJPGemS/7uPa84raW2y58blz7I9UdhkJh4raTsLKSg/Lr/ALv2tOV+S306T4/11O1fSZyLO4QewlwSP+x+U5qttgnJFt1bM+7/ADMZ0sb3vfidb9ZPSEznfNb68R2vonit10cnPe3XJ1sde1iDbpPSp47sSpZintC48x/Yn3T1XZOJ/EoI3G1j5rkflfvKxf4nc/q7CDBFOzkeDDeMhgOvFeCCAjGwmAwFFeCAmS0bxQXigZuHxStloeX7Se8wSbZiXsNjeDe/95Gdfqrn8aMUSx1paQtCBDG1KiqLswAHEmw98B1oZg430lppkgLnn6q+/U9pzO1fSJyP4lQIvsLlfsMz3yk3cnpUxa7PG7Zo0rgvvMP6U8R78B3nO7R9KXIO6VpJ7RILf7jkJwmK2+dKaW/M2Z7KMh3vMfEV3c3dix6nTyGg7SbdVckn/XRY/wBI1uSu9Ub2mJA95zMx/wD3KpUdQz2F/VXJdDw497yhaOoZMDyufcCY5JDttajVLmwkoUf50lWmb35iTHTLvObpYGIIt8fjbKClG4lrn3R1KVPSde2hhqm6wbkQf3npPonivXTydfgG/wDGeZpOr9GMZuOjE+q2436Tl8jftEvL1NnZx6LDBDOziMQgvFeUHRQXivAUBivATARjTDAZLQiiigcu/COC5Rp4d5Iuk5OqXDYtkNtRy/aXK21KSLvM4HT+rsozMymmLtqkxdSLZra/kTw4684+1kPrLWljvSnhTWwvbeYFjoTki+XEzldp+kCk3d2dvZBBt7vCvkJzu2K1T8V0ZsgcgMgVIut7a5EazPAm+55PE9NPFbaqPkvgHTNv937Wmaczc5k6mK0Nok4d6aRG2klpNhlG9nFJES4cyVMLnr92l5KPST0qF9JF06zMUkpEa/CPJNsge3QTXTB2UljKlWlZN4NnbjpMz5ZrwoVhbXico6lGohbM6yZaJGktFqxTmpsp7MV4MPiP7XmVTMt0am6wbkb/ALyaR61srE/iUUbjazfqXInva/eXZzXonifXS/J1+Ab/AMZ0k7ZvY5anKMMEMtJRRRQEYIrxSWgY0xxjTAEUUUDmG0ki6SG8lTScnU15T2kl0vxU37aH5j3S5UjCu8pU8QR75lbHnnpRhrOjjiCh81zHwP8AxmGFnZbcw29QcH1k8XdPW+G9OSVZub4Zr2Zuw7smCR34c0V7Q0hr5SY04aSZ25i3fX6QJqNcrxy65y9RxrGwXdHkpMqKiotyQxOQHLpbhL+yz4MuZmXMVPksizhkcsN7Q8WyPkqD5nnKVLDrbO5JHG+XleaZdVzOZ4fSNp0o5J6T9rq9qlSwtpMKEvrRjn3V115TBmvhbyK1jYybH7RRBY6+yubHt/iZOH2hvsTaw4Dj3me2847P0axm69M8m3D5N4fkQe09Dnlewzd1/WnxInqkv4/6j5P4cIYyOvOyBigigGCKNkgmNMMBgCKCKBy4P32MmSQcR9/esmpzi7U2pAsVWBOEMZWPpAVDfRhf3ix++s4Srh9x2T2SR2Ghnou1Uuob2TY+Tf3AnJbZoWqBvaA94y+Vpk8Vt8xlJTkq0pOlOTpSldYqCjD/AOlvNFKUmWjHRjthHPAHzy+UloUKoFgoHcn9pt0sNfhLAdE/M3IaDvHTnVTAbKYnec3PAaAdpedqaZankPqZWr4p2GZ3V93v5zOrYoDJc+p07CPNPE9pdqbYCKSQQPZQXY+Z4fCcvX2075L4F6Zt3b9rTWUscyLgxj7DSpmh3H6+oT15HrHCaZ2CezX+ec2VwqVjl4H5jRvPn85jPhXpPuVFKnhyI5qRkRLlJ5z17dZyx0exMK6VUVxY/ipY6g+JdDPT55lsbbhQgVBvqCCDqykZg562noOBx6VFDKwIPEaeR5HoZ0+PTl8kq7FBeGdXIooooCiMV4LwDGmIwQFFBFA5eSpIjoZIs4upVY1frDUgWFBWTeRl5j48JzG0ae8l7Zqb+/Ij75TqpjY6l42Xgc+zZ/Mn3TKyMCnTlulQk1GgBrHviVXJcz8PfNJLUlPDDjA9ZF0G8emnvmFtHb6Llvb7ewmg8z/kzBxOPq1bgncX2V+p1MzzW/Wf10eP28ind3gT7CaD9R4feUqYLbW8d1kCvwF7gjoeM56iu6QHFhwYer/q9k+eU1V2azC6rvDW31U85XJGXtnhps7Ocz25dpKuDuM4zZWIUeGqTbQPbxL0qDiOvvnUUdm7yghgQdGGYPUSo5XwxaVBQPFYDmchM7ZW1GrVGT8OmpGag1GVmQ5gqChDZWOo14Tb9IdjI1NFIBu6AE6gswBz6jLvKw9EU3fASp5hjvKeBU8DL4zqy266bjpdR6yNkyE9Re3mCQeczcT6PtYvhyXXih9dfL2hKq7SqYatuVSawW6VDvAlQxBQXtcvk/hY6N1nQ4bG0m8dFyVFiTuOFTjZn3d1T0Jmax1ud3LlaTkGxyIyIORB5ETY2btF6bbyNbmNQehHGbmKwdHEjxjce2VRAL9N8aMJzmP2ZVw58Yuh9V1zU8r8j0Pxnn1m5ejOs68O/wBjbfSpZT4X9knX9J+k3UcHSeR4ZyzBVBLHQAEk+QE9A2IK6p/GI6XN3A/MdPrOmNX057xJ5bxMifEqMybAak5ATDx23kU2Txtzv4B349vfOfxmLepm7X5DRR5L9dZV3z0iZtegXijUFgByAhvLSN4DBBeAYoIoHM/2jk0l7HYH+pR5qPmP2lBTOPOOvewKh+cCGOqRiwo8ShtRc1b/AEn3XHyPvmhKW1T/AAmP6T/yH7zKye3Ibb2stJ90hmJG8FGQ4jM+YPOc7icdVq5E7q+yuQ78T3nT4mhSqsEfJiPA3EZ8D9DKJ2K6NYi44NwP7HpJmo6crGw+E6TUwuzyeE0sJhUva98rjkeGR49uYmiCq5ZDp+/IcLmLqkkVMPsxbWcBr6jgeh5yNcG9HxUPElzeix05/hOfVP5Tl5S4od+aLnfS+uVufy1Gesu0aNhYafenIdBHeHOsyiaeIuyEq65MpG66n2XT6/EyTBYqrhmsMgTcofUbmUP9J+yOMs4zZaVCGBZaqjw1FyYdDwZejZSEYxktTxiqFbJayj+Cx4b/ABpv55cjKl/Ean66bD16WJplbcPEhyZeR/YjtM7FbGrFSoxFYLpdPww1uW+ULDzveZ+MpLQCv+IEF7IxYKwJ4KT6w6ctbze2btoNZKpCk5Bx6jcr+yfgeedp1zr9cdZ56c9trZoobPajh0O/WdEzO87MxJuzH9J5DMzVfYVXDU9/CsQ5sXQneuo/pBOq6+E6XNiJtY/ZxcBktvqwYX0uOfxHkTLOGxDuLuhQjKxKnTiCDmvXLynTvEe3FDbNNSham1Mu4V0AJUkllL0gM7hgN5PzXzIN+sw+CbNXsUORUi4YdRIquIo0C1hdyxcquZDEAE55JkByv1mTjNpPUyJ3V9hTw/M2rfAdJz1qLzmtJa+Gw28tFAWN77vyZzew6C9uUysbj6lX1msvsrkvf2u8r27CNZgJytdZAtFfhzyjC0fhhd1HNlH/ACHumKekGNMTQXnoecYICYrwBFBFAZeUsZg97xLk3EcD/eXSY0mTZ1svGC9xkY0TWxWGDi+jc+fQzKdCpsRa337pzs46S9OGsp7V/kt/p/7LLZ+/dKm1P5L/AH/WP2mVs9uH2qxFRSM7A3HG19ROh2PXFRAGNxbX95y21qjLiKZXkQbi4sSNZ0+zsGHUVsN639dHM2I1KcSPiPzaCv8AH9szh9/rb1Pidmsgult3jz7n62kNDCgc2Nybsbm5vpwGRt5Wm7gsSHHIjVTqL/MRYjBD1kHmo+n7TnZYualZqJbMnt95kydEJ6D4/wBpJTpjX4zP2vt6hhsnbefhTTN/9XBR59rxJ30W89tJKYA5DX+5nMbc9K6ahqdFVqsQVZmF6Q//AH2y68JhYnaWKx7fhop3f/rS4UDnUc697DpedV6P+hSJZ61nfW3/AMa9j6588uk6zMz7c7q305HZ+wcTiE31QlFB3d47oIvcrSByt7l6zvdibGQ4dQi1UtcH8YMHuMiChyt+nLkZvuadIXcjpfjb2VGszMZtl2yQFBzy3z9F+84urfbJn8aK1aeGphGdjyXVvILwXlfITKxm1nfJfAvIHxHzbh298zwM7njmScyepJhvJulTMIDlFcRpaNH3/YSVHExv307f2i+/884oaEsYBb1aY/On/YS5gNi1KlifAnNtSPyr9TadPgNnU6I8C58WObHvwHQWl5zajWpFy8V42G86uJQQ3gMBXijYpjUH4kBaQhot+YJS0groHFj2MJaAtFbGc6FTY/5lPaf8h/If9hNeoARYzH2shWk/Kwz7ic9Tjpm9cDth2WqjLnkRbW+Y4TvNhBalBjh1VKxUkU2uF3wvh3bnQm2WvU8OaWjc3tnzP05TqsDs1KYuCSxHrXtbyGnzlY1Yz5MyoNm49MSWR1bD4qmbOjZENxN9GU89Dle3rTSSoytuON1+B/pcDiOvMaj4k4qimJAFRtyqv8uuuR8nPESttWrUSkaLqjPuKQzAhQRq6kG9hYkZ5eVwe2s51OxwmtZvKnxuCFVGUMyMwIJRireYI0PWcRgvQP8AjEVat0vcAZO98/GxyHmL36TssAH3FLuGYjJ1zVra26ixuOh1EsYpwUzHiBE8/wDtm8d/Gp03CYChhqYUBUQcNLn5u3U3JlbF7YJypiw9o69l4d/dM2s5Lkkk2JUXJNgOAvoIwmZ1v1/RZix3iSSdSTcnvGXgZowCYo4vFB5Q3hpff3zgJk2Gwzu26iknj06k8O86HAbCRfFU8Z9n+keftTZm1N1IxMDs56p8K+HixyX38T5TpsBsanTsSN9/aYZA/lXQfOXlyyGg5R150zmRy1q0+8V4wGGWk68EEUB14LwRsNG8UEUwUICYCY1jJaJaMLxrNI2aGnl5DiQDTYEX84i0Y58DeUzXpWfbnKi+LuJ0rNOcP8wdSvzm4zTnl01/D2Mr45WdchvtZUBdmsiBiW3QDqbkd5LvRoM6Z3c3sc9ZmpylsXBNRpMvrqz7xN/CPEBuspI3GtmGGROWR3d6ziDdN4BrE28Q3XGdrMp8tRr7rtw1co11NufIjkRxEftXEBwm6LZtvi2lgN0BvZzNvLlkL1rOs2325ZxrGpJ6YFQ+Nv1N84wmOf12/U3zjN7l9+U4PSJ++cbeCaGG2Y7Zt4V66nyHDvEnWW8UZe2Xgt9/HfdHLK/SWHoKo3VHfUnvNDZ9LdEqZ8puvDRoIqLuqAo5CTAyFTHgzq5JAYbxgMN5ofeG8jvCDAfeKNvHQBeGNimA3hjIoGdeNJhJjDIUaxkZMe0YwhRhMa3qN5COMZU9RvISb6bGEo/ir+ofAzZMyqAvVXzP1mo0nK9BeDeiMaZrDwY4tlaRXjgYYyqvrt+pvmZJhsKz6Cw5nTtzlpMMu8WOdyT0zN9OMtK8SFqTCYREz1bmfoOEsPUlXfi3pfpJyi5l+jKdIS4kRmllTHgyJTHAy0JRDeMBhvND7wxgMdMBvDeC8V4BgvFeAmAbxRu9FMGeY0xxEaZKzDGESUiNMNRkSKt6jeQk5EgxPqN2k302MfB/zB/q+RmoZlYBv4hvyP0mi1USYu+yMbGtUjC81iS8W/It6K8CXfhDyIGLems4nDRwMrB5MjR04uUjLSGUqZllDNiKtK0kBkCmSKZaEgMcDIwY4GaHx14wGG8B14rxt4rwH3gvBBAMUEUwUjGmEwGSs0xpjjGmY00mVMerlGCEBrZXFxfqLi47y2ZGwgcthMLiA5NQr0CAgW7kkzSRDxmkyCRsklfVUJDuyUiNIgM3YrR8BEBpjTHwEQGCTU4wCPWBbpGWklKmZbpmVEVZWPEiUx4MpFSgwiRgxwM1h4aG8aI4QCDCIAIrwHiC8EEAxQRQP//Z",
      selected: false
    },
    {
      id: 3,
      name: "책장",
      src: "https://bgagu.com/web/product/big/201902/2431af5ae2a2685b20bf0404489403aa.jpg",
      selected: false
    }
  ];
  const [selectedBox, setSelectedBox] = useState();

  const toggleActive = (id: any) => {
    setSelectedBox(id);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
                src={location.src}
                value={id}
                onClick={() => toggleActive(id)}
              />
            );
          })}
        </LocationContent>
      </BoxLocationContent>
      <Button width="100%" onClick={showModal}>
        소중함 위치 지정하기
      </Button>
      <ModalButton
        title="위치를 확정하시겠습니까?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
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
  :where(.css-dev-only-do-not-override-sk7ap8).ant-input {
    padding: 0px;
  }
`;
