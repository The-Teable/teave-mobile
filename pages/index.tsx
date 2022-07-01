import type { NextPage } from "next";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import PromotionBannerContainer from "../container/PromotionBannerContainer";
import ThemeRecommendContainer from "../container/ThemRecommendContainer";
import dummy from "./api/dummy.json";

const promotionBanners = dummy.promotionBanners;

const themeRecommends = dummy.themeRecommends;

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <PromotionBannerContainer banners={promotionBanners} />
      <>
        {themeRecommends.map(({ title, goods }, i) => (
          <ThemeRecommendContainer key={i} title={title} items={goods} />
        ))}
      </>
      <TabBar />
    </>
  );
};

export default Home;
