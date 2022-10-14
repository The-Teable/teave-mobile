import CartProductsContainer from "./CartProductsContainer";
import { render } from "@testing-library/react";
import { productInCart } from "../../services/static/dummy.json";
import { ProductInCart } from "../../services/model/cartSchema";

describe("CartProductsContainer", () => {
  it("matches snapshot", () => {
    const dividedByBrand = productInCart.reduce<
      Record<string, ProductInCart[]>
    >((acc: Record<string, ProductInCart[]>, cur: ProductInCart) => {
      acc[cur.brand] = cur.brand in acc ? [...acc[cur.brand], cur] : [cur];
      return acc;
    }, {});

    const utils = render(<CartProductsContainer products={dividedByBrand} />);
    expect(utils.container).toMatchSnapshot();
  });
});
