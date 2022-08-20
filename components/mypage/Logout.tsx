import { useRouter } from "next/router";
import { fetchLogout } from "../../api/authApi";
import { useAuthContext } from "../../context/AuthContext";
import { DEFAULT_USER, useUserContext } from "../../context/UserContext";

const Logout = ({ name }: { name: string }) => {
  const { setAuthToken } = useAuthContext();
  const { setUser } = useUserContext();
  const router = useRouter();
  const handleLogout = async (e: any) => {
    e.preventDefault();
    const response = await fetchLogout();
    if (!response) {
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
      return;
    }
    setAuthToken(null);
    setUser(DEFAULT_USER);
    localStorage.removeItem("authTokens");
    router.push("/");
  };

  return <button onClick={handleLogout}>{name}</button>;
};

export default Logout;
