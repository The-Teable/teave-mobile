import styled from "styled-components";
import { useState } from "react";
import { color } from "../../styles/palette";
import Margin from "../common/Margin";
import TeaItem from "../common/TeaItem";
import { shopFilterdTeas } from "../../services/static/dummy.json";
import FilterModal from "../common/FilterModal";
import SortModal, { SORT_KEY, SortKey } from "../common/SortModal";

const ShopPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<
    { filterName: string; value: string }[]
  >([]);
  const [modalSort, setModalSort] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [filteredTeas, setFilteredTeas] = useState(shopFilterdTeas);
  const [sortKey, setSortKey] = useState<SortKey>(SORT_KEY.RECENT);

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
    <>
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
          sortKey={sortKey}
          setSortKey={setSortKey}
        />
      ) : null}
      {selectedFilters.length > 0 ? (
        <StyledSelectedFilter onClick={handleFilter}>
          {selectedFilters.map(({ value }: any) => (
            <>
              <StyledFilterItem>{value}</StyledFilterItem>
            </>
          ))}
        </StyledSelectedFilter>
      ) : null}
      <Margin size={1} />
      <StyledOptionContainer>
        <StyledOption onClick={handleSort}>
          {sortKey}
          <StyledSortIcon />
        </StyledOption>
        <Margin row size={1.3} />
        <StyledOption onClick={handleFilter}>
          필터
          <StyledFilterIcon />
        </StyledOption>
      </StyledOptionContainer>
      <Margin size={2} />
      <StyledContainer>
        {filteredTeas.map((props) => (
          <StyledTeaItemWrapper key={props.id}>
            <TeaItem {...props} width={165} height={210} />
          </StyledTeaItemWrapper>
        ))}
      </StyledContainer>
    </>
  );
};

export default ShopPage;

const StyledSelectedFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFilterItem = styled.div`
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

const StyledOptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

const StyledOption = styled.div`
  font-size: 1.2rem;
  &:hover,
  &:hover * {
    cursor: pointer;
  }
`;

const StyledOptionIcon = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border: 0px;
  margin-left: 0.5rem;
`;

const StyledFilterIcon = styled(StyledOptionIcon)`
  background: url("/image/icon_filter.svg") no-repeat center/contain;
`;

const StyledSortIcon = styled(StyledOptionIcon)`
  background: url("/image/icon_sort.svg") no-repeat center/contain;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledTeaItemWrapper = styled.div`
  width: 16.4rem;
  margin-bottom: 2.5rem;
  margin-right: 1rem;
`;
