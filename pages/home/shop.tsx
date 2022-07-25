import HomeLayout from "../../components/layout/HomeLayout";
import { HeaderIndex } from "../../components/layout/Header";

const ShopPage = () => {
  return (
    <HomeLayout headerIndex={HeaderIndex.SHOP}>
      <div>샵</div>
    </HomeLayout>
  );
};

export default ShopPage;
