import Header from "./Header";
import Tabbar from "./TabBar";
import CenteredContainer from "./CenteredContainer";

const Layout = ({ headerIndex, children }) => (
  <>
    <Header selectedIndex={headerIndex} />
    <CenteredContainer>{children}</CenteredContainer>
    <Tabbar />
  </>
);

export default Layout;
