import GlobalStyles from "../styles/globalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks");
}

const queryClient = new QueryClient();

function App({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
