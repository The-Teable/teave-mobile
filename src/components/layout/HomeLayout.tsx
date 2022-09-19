import Header from "./HomeHeader";
import Tabbar from "./TabBar";
import CenteredContainer from "./CenteredContainer";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <CenteredContainer>{children}</CenteredContainer>
    <Tabbar />
  </>
);

export default HomeLayout;
