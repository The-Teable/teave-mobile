import GlobalStyles from "../styles/globalStyles";

function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
