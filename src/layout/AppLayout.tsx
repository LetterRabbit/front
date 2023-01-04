import styled from "styled-components";

const AppLayout: any = ({ component }: any) => {
  return <StyledWrapper>{component}</StyledWrapper>;
};

export default AppLayout;

const StyledWrapper = styled.div`
  width: 414px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid #000;
`;
