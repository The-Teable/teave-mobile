interface User {
  user_id: number;
  name: string;
  email: string;
  tel: string;
  birth?: Date;
  gender?: number;
}

export type { User };
