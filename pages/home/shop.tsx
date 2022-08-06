import HomeLayout from "../../components/layout/HomeLayout";
import { HOME_HEADER_INDEX } from "../../components/layout/HomeHeader";
import styled from "styled-components";
import { useState } from "react";
import { color } from "../../styles/palette";
import Margin from "../../components/common/Margin";
import TeaItem from "../../components/TeaItem";
import { shopFilterdTeas as tempDummy } from "../api/dummy.json";
import FilterModal from "../../components/FilterModal";

import SortModal, {
  SORT_CRITERIA,
  SORT_TYPE,
} from "../../components/SortModal";

const ShopPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<
    { filterName: string; value: string }[]
  >([]);
  const [modalSort, setModalSort] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [filteredTeas, setFilteredTeas] = useState(tempDummy);
  const [sortCriteria, setSortCriteria] = useState<SORT_TYPE>(
    SORT_CRITERIA.RECENT
  );

  // 임시 더미파일 tempDummy

  const filterTeas = () => {
    // 필터 api 호출
    // setFilteredTeas( response data )
  };

  const handleFilter = () => {
    setModalFilter(true);

    filterTeas();
  };

  const handleSort = () => {
    setModalSort(true);
  };

  return (
    <HomeLayout headerIndex={HOME_HEADER_INDEX.SHOP}>
      {modalFilter ? (
        <FilterModal
          title={"필터"}
          onCancel={() => setModalFilter(false)}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      ) : null}
      {modalSort ? (
        <SortModal
          title={"정렬"}
          onCancel={() => setModalSort(false)}
          sortCriteria={sortCriteria}
          setSortCriteria={setSortCriteria}
        />
      ) : null}
      {selectedFilters.length > 0 ? (
        <S.SelectedFilter onClick={handleFilter}>
          {selectedFilters.map(({ value }: any) => (
            <>
              <S.FilterItem>{value}</S.FilterItem>
            </>
          ))}
        </S.SelectedFilter>
      ) : null}
      <Margin size={1} />
      <S.OptionContainer>
        <S.Option onClick={handleSort}>
          {sortCriteria}
          <S.SortIcon />
        </S.Option>
        <Margin row size={1.3} />
        <S.Option onClick={handleFilter}>
          필터
          <S.FilterIcon />
        </S.Option>
      </S.OptionContainer>
      <Margin size={2} />
      <S.Container>
        {filteredTeas.map((props) => (
          <S.TeaItemWrapper>
            <TeaItem {...props} width={"16.5rem"} height={"21rem"} />
          </S.TeaItemWrapper>
        ))}
      </S.Container>
    </HomeLayout>
  );
};

export default ShopPage;

const S: any = {};

S.SelectedFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

S.FilterItem = styled.div`
  border-radius: 1.5rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 1rem 1rem 0;
  user-select: none;
  background-color: ${color.teaveGreen};
  color: #ffffff;
  border: 1px solid ${color.teaveGreen};
  &:hover {
    cursor: pointer;
  }
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

S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

S.TeaItemWrapper = styled.div`
  width: 16.4rem;
  margin-bottom: 2.5rem;
  margin-right: 1rem;
`;
