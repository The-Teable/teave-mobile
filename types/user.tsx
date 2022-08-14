interface UserProps {
  user_id: string | null;
  password: string | null;
  name: string | null;
  tel: string | null;
  birth: Date | null;
  gender: string | null;
}

type LoginProps = Pick<UserProps, "user_id" | "password">;

type SignupProps = Pick<UserProps, "user_id" | "password" | "tel" | "name"> &
  Partial<Pick<UserProps, "birth" | "gender">>;

type TokenProps = Pick<UserProps, "user_id" | "name" | "tel"> | null;

export type { UserProps, LoginProps, SignupProps, TokenProps };
