import HomeLayout from "../components/layout/HomeLayout";
import PromotionBanner from "../components/PromotionBanner";
import ThemeRecommend from "../components/ThemeRecommend";
import { HeaderIndex } from "../components/layout/Header";
import dummy from "./api/dummy.json";

const promotionBanners = dummy.promotionBanners;

const themeRecommends = dummy.themeRecommends;

const HomePage = () => {
  return (
    <HomeLayout headerIndex={HeaderIndex.MAIN}>
      <PromotionBanner banners={promotionBanners} />
      <>
        {themeRecommends.map(({ title, goods }, i) => (
          <ThemeRecommend key={i} title={title} items={goods} />
        ))}
      </>
    </HomeLayout>
  );
};

export default HomePage;
