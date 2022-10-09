import HomeLayout from "../components/layout/HomeLayout";
import PromotionBanner from "../components/PromotionBanner";
import ThemeRecommend from "../components/ThemeRecommend";
import dummy from "../services/static/dummy.json";
import TeaRecommend from "../components/TeaRecommend";
import Margin from "../components/common/Margin";
import useMainProductsQuery from "../services/hooks/useMainProdutsQuery";
import useThemeProductsQuery from "../services/hooks/useThemeProductsQuery";

const promotionBanners = dummy.promotionBanners;

const MainPage = () => {
  const { mainProducts } = useMainProductsQuery();
  const { themeProducts } = useThemeProductsQuery();
  const teaRecommends = mainProducts ? mainProducts : dummy.teaRecommends;
  const themeRecommends = themeProducts ? themeProducts : dummy.themeRecommends;

  return (
    <HomeLayout>
      <PromotionBanner banners={promotionBanners} />
      <Margin size={3} />
      <TeaRecommend items={teaRecommends} />
      <Margin size={3} />
      {themeRecommends.map(({ title, goods }, i) => (
        <ThemeRecommend key={i} title={title} items={goods} />
      ))}
      <Margin size={3} />
    </HomeLayout>
  );
};

export default MainPage;
