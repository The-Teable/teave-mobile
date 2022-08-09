import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useProduct = ({ tea_id }: { tea_id: number }) => {
  const {
    user: { user_id },
  } = useContext(AuthContext);

  const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_LS_URL });

  const onClickProduct = () => {
    instance.post("user-click-product", {
      user_id,
      tea_id,
    });
  };

  const onClickFavorite = () => {
    instance.post("user-wish-product", {
      user_id,
      tea_id,
    });
  };

  return { onClickProduct, onClickFavorite };
};

export default useProduct;
