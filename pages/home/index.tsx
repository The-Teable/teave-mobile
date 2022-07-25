import HomeLayout from "../../components/layout/HomeLayout";
import PromotionBanner from "../../components/PromotionBanner";
import ThemeRecommend from "../../components/ThemeRecommend";
import { HOME_HEADER_INDEX } from "../../components/layout/HomeHeader";
import dummy from "../api/dummy.json";

const promotionBanners = dummy.promotionBanners;

const themeRecommends = dummy.themeRecommends;

const MainPage = () => {
  return (
    <HomeLayout headerIndex={HOME_HEADER_INDEX.MAIN}>
      <PromotionBanner banners={promotionBanners} />
      <>
        {themeRecommends.map(({ title, goods }, i) => (
          <ThemeRecommend key={i} title={title} items={goods} />
        ))}
      </>
    </HomeLayout>
  );
};

export default MainPage;
