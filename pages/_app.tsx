import { AuthProvider } from "../context/AuthContext";
import GlobalStyles from "../styles/globalStyles";

function App({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
