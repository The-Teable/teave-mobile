import HomeLayout from "../../components/layout/HomeLayout";
import { HOME_HEADER_INDEX } from "../../components/layout/HomeHeader";

const ShopPage = () => {
  return (
    <HomeLayout headerIndex={HOME_HEADER_INDEX.SHOP}>
      <div>샵</div>
    </HomeLayout>
  );
};

export default ShopPage;
