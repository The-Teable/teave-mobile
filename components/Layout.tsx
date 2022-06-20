import { ReactElement } from "react";
import Header from "./Header";

interface props {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: props) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
