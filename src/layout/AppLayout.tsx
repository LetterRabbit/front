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
  width: 414px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid #000;
`;

const Layout = styled.div`
  margin: 30px 36px;
`;
