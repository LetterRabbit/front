import styled from "styled-components";

const AppLayout: any = ({ component }: any) => {
  return (
    <StyledWrapper>
      <Layout>{component}</Layout>
    </StyledWrapper>
  );
};

export default AppLayout;

const StyledWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 100vh;
  min-height: 700px;
  margin: 0 auto;
  border: 1px solid #000;
  overflow: hidden;
`;

const Layout = styled.div`
  margin: 30px 36px;
`;
