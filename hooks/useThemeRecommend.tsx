import axios from "axios";

const useThemeRecommend = () => {
  const userId = 123; // temp
  const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_LS_URL });

  const onClickProduct = (teaId: any) => {
    instance.post("user-click-product", {
      userId,
      teaId,
    });
  };

  const onClickFavorite = (teaId: any) => {
    console.log(teaId, userId); // temp
  };

  return [onClickProduct, onClickFavorite];
};

export default useThemeRecommend;
