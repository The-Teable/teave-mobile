import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import PromotionBanner from "../components/PromotionBanner";
import ThemeRecommend from "../components/ThemeRecommend";
import dummy from "./api/dummy.json";

const promotionBanners = dummy.promotionBanners;

const themeRecommends = dummy.themeRecommends;

const HomePage: NextPage = () => {
  return (
    <Layout>
      <PromotionBanner banners={promotionBanners} />
      <>
        {themeRecommends.map(({ title, goods }, i) => (
          <ThemeRecommend key={i} title={title} items={goods} />
        ))}
      </>
    </Layout>
  );
};

export default HomePage;
