import GlobalStyles from "../styles/globalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks");
}

const queryClient = new QueryClient();

function App({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Head>
        <title>Teave</title>
        <meta
          name="description"
          content="Teave, E-commerce site that sells and recommends drinking tea"
        />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
