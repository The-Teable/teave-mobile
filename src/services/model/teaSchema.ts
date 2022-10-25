export interface Tea {
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

export type ClickProductProps = Pick<Tea, "id">;

export type WishProductProps = Pick<Tea, "id">;

export type MainFilteringResults = {
  id: number;
  name: string;
  brand: string;
  type: string;
  flavor: string;
  caffeine: string;
  efficacies: string;
  price: number;
  description: string;
  image_url: string;
}[];

export type ThemeFiltering = {
  theme: string;
  tea_info: {
    id: number;
    name: string;
    brand: string;
    type: string;
    flavor: string;
    caffeine: string;
    efficacies: string;
    price: number;
    image_url: string;
  }[];
}[];
