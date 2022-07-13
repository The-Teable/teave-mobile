import Header from "./Header";
import Tabbar from "./TabBar";
import CenteredContainer from "./CenteredContainer";

interface props {
  headerIndex: number;
  children: any;
}

const HomeLayout = ({ headerIndex, children }: props) => (
  <>
    <Header selectedIndex={headerIndex} />
    <CenteredContainer>{children}</CenteredContainer>
    <Tabbar />
  </>
);

export default HomeLayout;
