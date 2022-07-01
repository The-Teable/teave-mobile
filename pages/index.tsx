import type { NextPage } from "next";
import Header from "../src/components/Header";
import TabBar from "../src/components/TabBar";
import PromotionBannerContainer from "../src/containers/PromotionBannerContainer";
import ThemeRecommendContainer from "../src/containers/ThemRecommendContainer";
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
