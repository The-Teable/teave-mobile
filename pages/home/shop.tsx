import HomeLayout from "../../components/layout/HomeLayout";
import { HOME_HEADER_INDEX } from "../../components/layout/HomeHeader";
import styled from "styled-components";
import CenteredContainer from "../../components/layout/CenteredContainer";
import { useState } from "react";
import { color } from "../../styles/palette";
import Margin from "../../components/common/Margin";
import TeaItem from "../../components/TeaItem";

const SORT_CRITERIA = {
  RECENT: "최신순",
  SAIL: "판매순",
  LOW_PRICE: "낮은 가격순",
  HIGH_PRICE: "높은 가격순",
  REVIEW: "후기순"
};
type SORT_TYPE = typeof SORT_CRITERIA[keyof typeof SORT_CRITERIA];

const ShopPage = () => {
  const [filters, setFilters] = useState([]);
  const [sortCriteria, setSortCriteria] = useState<SORT_TYPE>(
    SORT_CRITERIA.RECENT
  );
  const onClickSort = () => {};
  const onClickFilter = () => {};
  return (
    <HomeLayout headerIndex={HOME_HEADER_INDEX.SHOP}>
      {filters.length > 0 ? <S.SelectedFilter></S.SelectedFilter> : null}
      <Margin size={1} />
      <S.OptionContainer>
        <S.Option onClick={onClickSort}>
          {sortCriteria}
          <S.SortIcon />
        </S.Option>
        <Margin row size={1.3} />
        <S.Option onClick={onClickFilter}>
          필터
          <S.FilterIcon />
        </S.Option>
      </S.OptionContainer>
    </HomeLayout>
  );
};

export default ShopPage;

const S: any = {};

S.SelectedFilter = styled.div``;

S.FilterItem = styled.div`
  background-color: ${color.teaveGreen};
`;

S.OptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

S.Option = styled.div`
  font-size: 1.2rem;
  &:hover,
  &:hover * {
    cursor: pointer;
  }
`;

S.OptionIcon = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border: 0px;
  margin-left: 0.5rem;
`;

S.FilterIcon = styled(S.OptionIcon)`
  background: url("/image/icon_filter.svg") no-repeat center/contain;
`;

S.SortIcon = styled(S.OptionIcon)`
  background: url("/image/icon_sort.svg") no-repeat center/contain;
`;
