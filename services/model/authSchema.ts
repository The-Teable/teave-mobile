import { User } from "./userSchema";

type LoginProps = Pick<User, "user_id"> & { password: string };

type SignupProps = User;

type LogoutProps = { refresh: string };

export type { User, LoginProps, SignupProps, LogoutProps };
