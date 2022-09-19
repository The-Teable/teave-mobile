import { User } from "./userSchema";

export type LoginProps = Pick<User, "user_id"> & { password: string };

export type SignupPropsPartail = Pick<User, "birth" | "gender">;

export type SignupProps = Pick<User, "user_id" | "password" | "name" | "tel"> &
  Partial<SignupPropsPartail>;

export type LogoutProps = { refresh: string };
