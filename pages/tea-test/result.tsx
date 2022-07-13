import HomeLayout from "../../components/layout/HomeLayout";
import { HeaderIndex } from "../../components/layout/Header";

const ResultPage = () => {
  return (
    <HomeLayout headerIndex={HeaderIndex.TEST}>
      <div>result</div>
    </HomeLayout>
  );
};

export default ResultPage;
