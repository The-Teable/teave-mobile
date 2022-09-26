export type TeaRecommendProps = {
  url: string;
  brand: string;
  name: string;
  features: string;
  describe: string;
}[];

export type ThemeRecommends = {
  title: string;
  goods: {
    id: number;
    url: string;
    brand: string;
    name: string;
    price: number;
  }[];
}[];
