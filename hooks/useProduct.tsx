import axios from "axios";
import { storage, STORAGE_KEY } from "../util/storage";

const useProduct = ({ tea_id }: { tea_id: number }) => {
  const user_id = storage.get(STORAGE_KEY.USER_ID);
  const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_LS_URL });

  const onClickProduct = () => {
    instance.post("user-click-product", {
      user_id,
      tea_id,
    });
  };

  const onClickFavorite = () => {
    // 찜하기
  };

  return { onClickProduct, onClickFavorite };
};

export default useProduct;
