export interface User {
  user_id: string;
  password: string;
  name: string;
  email: string;
  tel: string;
  birth: Date;
  gender: string;
  rank: string;
  mileage: number;
  couponCount: number;
  orderCount: number;
  deliveryCount: number;
  reviewCount: number;
}

export type MypageUserInfo = Pick<
  User,
  | "name"
  | "rank"
  | "mileage"
  | "couponCount"
  | "orderCount"
  | "deliveryCount"
  | "reviewCount"
>;
