import HomeLayout from "../layout/HomeLayout";
import PromotionBanner from "../PromotionBanner";
import ThemeRecommend from "../ThemeRecommend";
import dummy from "../../services/static/dummy.json";
import TeaRecommend from "../TeaRecommend";
import Margin from "../common/Margin";
import useMainProductsQuery from "../../services/hooks/useMainProdutsQuery";
import useThemeProductsQuery from "../../services/hooks/useThemeProductsQuery";

const promotionBanners = dummy.promotionBanners;

const MainPage = () => {
  const { mainProducts } = useMainProductsQuery();
  const { themeProducts } = useThemeProductsQuery();
  const teaRecommends = mainProducts ? mainProducts : dummy.teaRecommends;

  console.log(themeProducts);
  return (
    <HomeLayout>
      <PromotionBanner banners={promotionBanners} />
      <Margin size={3} />
      <TeaRecommend items={teaRecommends} />
      <Margin size={3} />
      {themeProducts &&
        themeProducts.map(({ title, goods }, i) => (
          <ThemeRecommend key={i} title={title} items={goods} />
        ))}
      <Margin size={3} />
    </HomeLayout>
  );
};

export default MainPage;
