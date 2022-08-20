import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { storage, STORAGE_KEY } from "../../util/storage";
import { fetchLogin, fetchLogout, fetchSignup } from "../api/authApi";
import jwt_decode from "jwt-decode";

const useAuthQuery = () => {
  const router = useRouter();

  const login = useMutation(fetchLogin, {
    onSuccess: ({ data: { access, refresh } }) => {
      storage.set({ key: STORAGE_KEY.ACCESS_TOKEN, value: access });
      storage.set({ key: STORAGE_KEY.REFRESH_TOKEN, value: refresh });

      const decodedToken = jwt_decode(access);

      const hasUserId = (
        decodedToken: unknown
      ): decodedToken is { user_id: string } =>
        typeof decodedToken === "object" &&
        decodedToken !== null &&
        "user_id" in decodedToken;

      const userId = hasUserId(decodedToken) ? decodedToken.user_id : null;
      if (!userId) throw Error("no user_id in token");

      storage.set({ key: STORAGE_KEY.USER_ID, value: userId });

      router.push("/");
    },
    onError: (error) => {
      if (error instanceof AxiosError) alert(error.response?.data.details);
      // 에러 핸들링 해야함
    },
  }).mutate;

  const signup = useMutation(fetchSignup, {
    onSuccess: (response) => {
      // 상태 201 아닐 때 에러 핸들링 해야함
      if (response.status !== 201) throw Error("fetch는 성공, 잘못된 상태");
      alert("회원가입이 완료되었습니다. 로그인 해주세요.");
      router.push("/mypage/login");
    },
    onError: (error) => {
      if (error instanceof AxiosError) alert(error.response?.data.details);
      // 에러 핸들링 해야함
    },
  }).mutate;

  const logout = useMutation(fetchLogout, {
    onSuccess: (response) => {
      if (response.status === 401) throw Error("로그아웃 실패");

      storage.remove(STORAGE_KEY.ACCESS_TOKEN);
      storage.remove(STORAGE_KEY.REFRESH_TOKEN);
      storage.remove(STORAGE_KEY.USER_ID);

      router.push("/");
    },
    onError: (error) => {
      if (error instanceof AxiosError) alert(error.response?.data.details);
      // 에러 핸들링 해야함
    },
  }).mutate;

  return { login, signup, logout };
};

export default useAuthQuery;
