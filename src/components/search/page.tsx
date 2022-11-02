import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Margin from "../common/Margin";
import TitleHeader from "../common/TitleHeader";
import useInput from "../../hooks/useInput";
import CenteredContainer from "../common/CenteredContainer";
import TabBar from "../common/TabBar";
import SearchBar from "./components/SearchBar";
import SortModal, { SortKey, SORT_KEY } from "../common/SortModal";
import TeaItem from "../common/TeaItem";
import { shopFilterdTeas } from "../../services/static/dummy.json";

const SearchPage = () => {
  const router = useRouter();
  const searchInput = useInput();
  const [modalSort, setModalSort] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>(SORT_KEY.RECENT);
  const [searchedTeas, setFilteredTeas] = useState(shopFilterdTeas);
  const { word } = Array.isArray(router.query) ? router.query[0] : router.query;

  const handleSort = () => {
    setModalSort(true);
  };
  return (
    <>
      {modalSort ? (
        <SortModal
          title={"정렬"}
          onCancel={() => setModalSort(false)}
          sortKey={sortKey}
          setSortKey={setSortKey}
        />
      ) : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!searchInput.value) return;
          router.push("/search/?word=" + searchInput.value);
        }}
      >
        {!word ? <TitleHeader title={"검색"} /> : null}
        <CenteredContainer>
          <Margin size={3} />
          <SearchBar searchInput={searchInput} />
          {!word ? (
            <>
              <StyledWrapper>
                <StyledTitle>최근 검색어</StyledTitle>
                <StyledItemContainer>
                  <StyledItem>꽃차</StyledItem>
                  <StyledItem>초코맛</StyledItem>
                  <StyledItem>꽃차</StyledItem>
                </StyledItemContainer>
              </StyledWrapper>
              <TabBar />
            </>
          ) : (
            <>
              <Margin size={2} />
              <StyledOptionContainer>
                <StyledCount>전체 {searchedTeas.length}개</StyledCount>
                <StyledOption onClick={handleSort}>
                  {sortKey}
                  <StyledSortIcon />
                </StyledOption>
              </StyledOptionContainer>
              <Margin size={2} />
              <StyledContainer>
                {searchedTeas.map((props) => (
                  <StyledTeaItemWrapper key={props.id}>
                    <TeaItem {...props} width={165} height={210} />
                  </StyledTeaItemWrapper>
                ))}
              </StyledContainer>
            </>
          )}
        </CenteredContainer>
      </form>
      <TabBar />
    </>
  );
};

export default SearchPage;

const StyledWrapper = styled.section``;

const StyledTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1.5rem 0;
`;

const StyledItemContainer = styled.div`
  display: flex;
`;
const StyledItem = styled.div`
  border-radius: 1.5rem;
  padding: 0.7rem;
  font-size: 1.2rem;
  border: 1px solid #808080;
  margin-left: 1.5rem;
  font-weight: 500;
  &:first-child {
    margin-left: 0;
  }
`;

const StyledOptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledCount = styled.div`
  font-size: 1.2rem;
  color: #808080;
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
