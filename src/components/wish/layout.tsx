import { ReactNode } from "react";
import CenteredContainer from "../common/CenteredContainer";
import TabBar from "../common/TabBar";
import TitleHeader from "../common/TitleHeader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TitleHeader title={"찜한 상품"} />
      <CenteredContainer>{children}</CenteredContainer>
      <TabBar />
    </>
  );
};

export default Layout;
