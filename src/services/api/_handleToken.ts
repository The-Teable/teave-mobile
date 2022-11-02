import { storage } from "../../util/storage";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import axios from "axios";
import Router from "next/router";

const handleInvalidToken = () => {
  alert("유효하지 않은 토큰입니다. 다시 로그인 바랍니다.");
  removeToken();
  Router.push("/");
  return null;
};

export const getToken = async () => {
  const token = storage.get("ACCESS_TOKEN");
  if (!token) return handleInvalidToken();

  const decodedToken = jwt_decode(token);
  if (!decodedToken) return handleInvalidToken();

  const hasExp = (decodedToken: unknown): decodedToken is { exp: number } =>
    typeof decodedToken === "object" &&
    decodedToken !== null &&
    "exp" in decodedToken;

  const isExpired = hasExp(decodedToken)
    ? dayjs.unix(decodedToken.exp).diff(dayjs()) < 1
    : true;

  if (isExpired) {
    const http = axios.create({
      baseURL: process.env.NEXT_PUBLIC_LS_URL,
    });

    const {
      data: { token: accessToken },
    } = await http.get("/token/refresh/");
    return accessToken;
  }

  return token;
};

export const removeToken = () => {
  storage.remove("ACCESS_TOKEN");
};
