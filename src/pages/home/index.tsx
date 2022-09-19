import HomeLayout from "../../components/layout/HomeLayout";
import PromotionBanner from "../../components/PromotionBanner";
import ThemeRecommend from "../../components/ThemeRecommend";
import dummy from "../../services/static/dummy.json";
import TeaRecommend from "../../components/TeaRecommend";
import Margin from "../../components/common/Margin";

const promotionBanners = dummy.promotionBanners;

const themeRecommends = dummy.themeRecommends;

const teaRecommends = dummy.teaRecommends;

const MainPage = () => {
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
