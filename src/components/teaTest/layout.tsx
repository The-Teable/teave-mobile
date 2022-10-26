import { ReactNode } from "react";
import CenteredContainer from "../common/CenteredContainer";
import MainNavigator from "../common/MainNavigator";
import TabBar from "../common/TabBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainNavigator />
      <CenteredContainer>{children}</CenteredContainer>
      <TabBar />
    </>
  );
};

export default Layout;
