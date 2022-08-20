import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import GlobalStyles from "../styles/globalStyles";

function App({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <UserProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
