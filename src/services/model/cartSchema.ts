import { Tea } from "./teaSchema";

export type ProductInCart = Pick<
  Tea,
  "id" | "brand" | "name" | "price" | "image_url"
> & {
  count: number;
};

export type Delivery = {
  brand: string;
  price: number;
};
