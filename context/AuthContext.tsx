import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const baseURL = process.env.NEXT_PUBLIC_LS_URL;

const AuthContext = createContext<any>(null);

export default AuthContext;

export const AuthProvider = ({ children }: any) => {
  const [authTokens, setAuthTokens] = useState<any>(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const loginUser = async (userid: string, password: string) => {
    const response = await fetch(`${baseURL}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid,
        password,
      }),
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

  const registerUser = async (props: any) => {
    const response = await fetch(`${baseURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...props }),
    });
    if (response.status === 201) {
      alert("회원가입이 완료되었습니다. 로그인 해주세요.");
      router.push("/login");
    } else {
      alert(
        `회원가입에 실패하였습니다. 다시 시도해주세요.\n오류 상태 코드:${response.status}`
      );
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    router.push("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
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
        : null
    );
  }, []);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
