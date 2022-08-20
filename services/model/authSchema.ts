import { User } from "./userSchema";

type LoginProps = Pick<User, "user_id"> & { password: string };

type SignupPropsPartail = Pick<User, "birth" | "gender">;

type SignupProps = Pick<User, "user_id" | "password" | "name" | "tel"> &
  Partial<SignupPropsPartail>;

type LogoutProps = { refresh: string };

export type { LoginProps, SignupProps, LogoutProps };
