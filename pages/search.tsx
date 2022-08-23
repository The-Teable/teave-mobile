import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Margin from "../components/common/Margin";
import TitleHeader from "../components/common/TitleHeader";
import useInput from "../components/hooks/useInput";
import CenteredContainer from "../components/layout/CenteredContainer";
import TabBar from "../components/layout/TabBar";
import SearchBar from "../components/search/SearchBar";
import SortModal, { SortKey, SORT_KEY } from "../components/SortModal";
import TeaItem from "../components/TeaItem";
import { shopFilterdTeas as tempDummy } from "./api/dummy.json";

const SearchPage = () => {
  const router = useRouter();
  const searchInput = useInput();
  const [modalSort, setModalSort] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>(SORT_KEY.RECENT);
  const [searchedTeas, setFilteredTeas] = useState(tempDummy);
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
              <S.Wrapper>
                <S.Title>최근 검색어</S.Title>
                <S.ItemContainer>
                  <S.Item>꽃차</S.Item>
                  <S.Item>초코맛</S.Item>
                  <S.Item>꽃차</S.Item>
                </S.ItemContainer>
              </S.Wrapper>
              <TabBar />
            </>
          ) : (
            <>
              <Margin size={2} />
              <S.OptionContainer>
                <S.Count>전체 {searchedTeas.length}개</S.Count>
                <S.Option onClick={handleSort}>
                  {sortKey}
                  <S.SortIcon />
                </S.Option>
              </S.OptionContainer>
              <Margin size={2} />
              <S.Container>
                {searchedTeas.map((props) => (
                  <S.TeaItemWrapper key={props.id}>
                    <TeaItem {...props} width={"16.5rem"} height={"21rem"} />
                  </S.TeaItemWrapper>
                ))}
              </S.Container>
            </>
          )}
        </CenteredContainer>
      </form>
    </>
  );
};

export default SearchPage;

const S: any = {};

S.Wrapper = styled.section``;

S.Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1.5rem 0;
`;

S.ItemContainer = styled.div`
  display: flex;
`;
S.Item = styled.div`
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

S.OptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

S.Count = styled.div`
  font-size: 1.2rem;
  color: #808080;
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
