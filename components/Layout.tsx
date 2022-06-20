import { ReactElement } from "react";
import Header from "./Header";
import TabBar from "./TabBar";
import styled from "styled-components";

interface props {
  children: ReactElement | ReactElement[];
}

const Container = styled.div``;

const Layout = ({ children }: props) => (
  <Container>
    <Header />
    {children}
    <TabBar />
  </Container>
);

export default Layout;
