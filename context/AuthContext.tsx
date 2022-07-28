import { createContext, useState, useEffect, ReactNode } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const baseURL = process.env.NEXT_PUBLIC_LS_URL;

const AuthContext = createContext<any>(null);

export default AuthContext;

const DEFAULT_USER = {
  user_id: null,
  name: null,
  email: null,
  tel: null
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authTokens, setAuthTokens] = useState<any>(null);
  const [user, setUser] = useState<{
    user_id: number | null;
    name: string | null;
    email: string | null;
    tel: string | null;
  }>(DEFAULT_USER);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const loginUser = async (props: { user_id: string; password: string }) => {
    const response = await fetch(`${baseURL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...props
      })
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      router.push("/");
    } else {
      alert(
        `로그인에 실패했습니다. 다시 시도해주세요.\n오류 상태 코드:${response.status}`
      );
    }
  };

  const registerUser = async (props: {
    user_id: string;
    password: string;
    name: string;
    email: string;
    tel: string;
    address: string;
    birth?: Date;
    gender?: number;
  }) => {
    const response = await fetch(`${baseURL}/signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...props })
    });
    if (response.status === 201) {
      alert("회원가입이 완료되었습니다. 로그인 해주세요.");
      router.push("/mypage/login");
    } else {
      alert(
        `회원가입에 실패하였습니다. 다시 시도해주세요.\n오류 상태 코드:${response.status}`
      );
    }
  };

  const logoutUser = async () => {
    const response = await fetch(`${baseURL}/logout/`);
    if (response.status === 401) {
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    } else {
      setAuthTokens(null);
      setUser(DEFAULT_USER);
      localStorage.removeItem("authTokens");
      router.push("/");
    }
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  useEffect(() => {
    setAuthTokens(
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens")!)
        : null
    );
    setUser(
      localStorage.getItem("authTokens")
        ? jwt_decode(localStorage.getItem("authTokens")!)
        : DEFAULT_USER
    );
  }, []);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
