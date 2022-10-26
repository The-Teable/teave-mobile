import { ReactNode } from "react";
import styled from "styled-components";
import CenteredContainer from "../common/CenteredContainer";
import TitleHeader from "../common/TitleHeader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TitleHeader title={"장바구니"} />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default Layout;

const StyledContainer = styled(CenteredContainer)`
  background-color: #f4f4f4;
  padding: 0;
  font-size: 1.5rem;
`;
