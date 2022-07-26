import HomeLayout from "../../components/layout/HomeLayout";
import { HOME_HEADER_INDEX } from "../../components/layout/HomeHeader";
import styled from "styled-components";
import CenteredContainer from "../../components/layout/CenteredContainer";
import { useState } from "react";
import { color } from "../../styles/palette";

const ShopPage = () => {
  const [filter, setFilter] = useState([]);
  return (
    <HomeLayout headerIndex={HOME_HEADER_INDEX.SHOP}>
      {filter.length > 0 ? <S.FilterHeader></S.FilterHeader> : null}
      <div>샵</div>
    </HomeLayout>
  );
};

export default ShopPage;

const S: any = {};

S.FilterHeader = styled.div``;

S.FilterItem = styled.div`
  background-color: ${color.teaveGreen};
`;
