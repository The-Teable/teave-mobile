import Header from "./Header";
import Tabbar from "./TabBar";
import CenteredContainer from "./CenteredContainer";

const Layout = ({ children }) => (
  <CenteredContainer>
    <Header />
    {children}
    <Tabbar />
  </CenteredContainer>
);

export default Layout;
