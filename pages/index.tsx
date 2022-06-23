import type { NextPage } from "next";
import Layout from "../components/Layout";
import PromotionBanner from "../components/PromotionBanner";
import ThemeRecommend from "../components/ThemeRecommend";

const promotionBanners = [
  { url: "image/promotion1.png", href: "/" },
  { url: "image/promotion2.png", href: "/" },
  { url: "image/promotion3.png", href: "/" },
  { url: "image/promotion1.png", href: "/" },
  { url: "image/promotion2.png", href: "/" },
  { url: "image/promotion3.png", href: "/" },
];

const themeRecommends = [{
  title: "민초단을 위한", goods: [
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
  ]
}
  , {
  title: "고기와 잘 어울리는 티", goods: [
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
  ]
}, {
  title: "아이스 전용", goods: [
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
  ]
}, {
  title: "민초단을 위한", goods: [
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
  ]
}
  , {
  title: "고기와 잘 어울리는 티", goods: [
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
  ]
}, {
  title: "아이스 전용", goods: [
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
    { url: "image/goods1.png", href: "/" },
    { url: "image/goods2.png", href: "/" },
    { url: "image/goods3.png", href: "/" },
  ]
}]

const Home: NextPage = () => {
  return (
    <Layout>
      <PromotionBanner banners={promotionBanners} />
      <>
        {themeRecommends.map(({ title, goods }, i) => <ThemeRecommend key={i} title={title} items={goods} />)}
      </>
    </Layout>
  );
};

export default Home;
