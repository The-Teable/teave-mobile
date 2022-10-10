import Bill from "./Bill";
import { render } from "@testing-library/react";

describe("Bill components", () => {
    it("matches snapshot", () => {
        const utils = render(<Bill productPrice={0} deliveryCost={0} discountPrice={0}/>);
        expect(utils.container).toMatchSnapshot();
    })

    it("shows the props correctly", () => {
        const utils = render(<Bill productPrice={12000} deliveryCost={3000} discountPrice={1500}/>);
        utils.getByText("총 상품 금액");
        utils.getByText("12,000원");
        utils.getByText("총 배송비");
        utils.getByText("3,000원");
        utils.getByText("총 할인 금액");
        utils.getByText("1,500원");
        utils.getByText("결제 금액");
        utils.getByText("13,500원");
    })
})
