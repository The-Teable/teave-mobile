import axios from "axios";
import ThemeRecommend from "../components/ThemeRecommend";

const ThemeRecommendContainer = ({ title, items }: any) => {
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

  return (
    <ThemeRecommend
      title={title}
      items={items}
      onClickProduct={onClickProduct}
      onClickFavorite={onClickFavorite}
    />
  );
};

export default ThemeRecommendContainer;
