import Header, { HOME_HEADER_INDEX_TYPE } from "./HomeHeader";
import Tabbar from "./TabBar";
import CenteredContainer from "./CenteredContainer";
import { ReactNode } from "react";

const HomeLayout = ({
  headerIndex,
  children
}: {
  headerIndex: HOME_HEADER_INDEX_TYPE;
  children?: ReactNode;
}) => (
  <>
    <Header selectedIndex={headerIndex} />
    <CenteredContainer>{children}</CenteredContainer>
    <Tabbar />
  </>
);

export default HomeLayout;
