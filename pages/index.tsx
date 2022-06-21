import type { NextPage } from "next";
import Layout from "../components/Layout";
import PromotionBanner from "../components/PromotionBanner";

const banners = [
  { url: "image/promotion1.png", href: "/" },
  { url: "image/promotion2.png", href: "/" },
  { url: "image/promotion3.png", href: "/" },
  { url: "image/promotion1.png", href: "/" },
  { url: "image/promotion2.png", href: "/" },
  { url: "image/promotion3.png", href: "/" },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <PromotionBanner banners={banners} />
    </Layout>
  );
};

export default Home;
