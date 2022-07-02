import type { NextPage } from "next";
import Header from "../components/Header";
import PromotionBanner from "../components/PromotionBanner";
import TabBar from "../components/TabBar";
import ThemeRecommend from "../components/ThemeRecommend";
import dummy from "./api/dummy.json";

const promotionBanners = dummy.promotionBanners;

const themeRecommends = dummy.themeRecommends;

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <PromotionBanner banners={promotionBanners} />
      <>
        {themeRecommends.map(({ title, goods }, i) => (
          <ThemeRecommend key={i} title={title} items={goods} />
        ))}
      </>
      <TabBar />
    </>
  );
};

export default Home;
