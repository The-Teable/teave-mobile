import Bill from "./Bill";
import { render } from "@testing-library/react";

describe("Bill components", () => {
  it("matches snapshot", () => {
    const utils = render(
      <Bill productPrice={0} deliveryCost={0} discountPrice={0} />
    );
    expect(utils.container).toMatchSnapshot();
  });
});
