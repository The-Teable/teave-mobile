import { Tea } from "./teaSchema";

export type CartProductProps = Pick<
  Tea,
  "id" | "brand" | "name" | "price" | "image_url"
> & {
  count: number;
  is_selected: boolean;
};

export type Delivery = {
  brand: string;
  price: number;
};
