import PromotionBanner from "./components/PromotionBanner";
import ThemeRecommend from "./components/ThemeRecommend";
import dummy from "../../services/static/dummy.json";
import TeaRecommend from "./components/TeaRecommend";
import Margin from "../common/Margin";
import useRecommendProductsQuery from "../../services/hooks/useRecommendProdutsQuery";
import useThemeProductsQuery from "../../services/hooks/useThemeProductsQuery";

const promotionBanners = dummy.promotionBanners;

const MainPage = () => {
  const { recommendProducts } = useRecommendProductsQuery();
  const { themeProducts } = useThemeProductsQuery();

  return (
    <>
      <PromotionBanner banners={promotionBanners} />
      <Margin size={3} />
      {recommendProducts && <TeaRecommend items={recommendProducts} />}
      <Margin size={3} />
      {themeProducts &&
        themeProducts.map(({ title, goods }, i) => (
          <ThemeRecommend key={i} title={title} items={goods} />
        ))}
      <Margin size={3} />
    </>
  );
};

export default MainPage;
