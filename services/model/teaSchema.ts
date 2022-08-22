interface Tea {
  id: number;
  name: string;
  flavor: string;
  efficacies: string;
  site_url: string;
  image_url: string;
  create_date: Date;
  update_date: Date;
  sell_count: number;
  price: number;
  brand: string;
  type: string;
  theme: string;
}

type ClickProductProps = Pick<Tea, "id">;

type WishProductProps = Pick<Tea, "id">;

export type { Tea, ClickProductProps, WishProductProps };
