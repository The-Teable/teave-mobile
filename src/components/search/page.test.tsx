import Page from "./page";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("search page", () => {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    require("../../mocks");
  }

  const queryClient = new QueryClient();
  it("matches snapshot", () => {
    const utils = render(
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    );
    expect(utils.container).toMatchSnapshot();
  });
});
