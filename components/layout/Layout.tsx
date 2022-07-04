import Header from "./Header";
import Tabbar from "./TabBar";

const Layout = ({ children }) => (
	<>
		<Header />
		{children}
		<Tabbar />
	</>
)

export default Layout;