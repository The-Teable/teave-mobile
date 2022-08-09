import Image from "next/image";
import styled from "styled-components";
import Margin from "../components/common/Margin";
import TitleHeader from "../components/common/TitleHeader";
import CenteredContainer from "../components/layout/CenteredContainer";
import TabBar from "../components/layout/TabBar";

const SearchPage = () => {
  return (
    <>
      <TitleHeader title={"검색"} />
      <CenteredContainer>
        <Margin size={3} />
        <S.SearchBarContainer>
          <Margin size={0.5} row />
          <Image
            src={"/image/icon_search_bar.svg"}
            width={20}
            height={20}
            alt={"search Icon"}
          />
          <Margin size={1} row />
          <S.SearchBar placeholder={"검색어를 입력해주세요"} />
        </S.SearchBarContainer>
        <S.Wrapper>
          <S.Title>최근 검색어</S.Title>
          <S.ItemContainer>
            <S.Item>꽃차</S.Item>
            <S.Item>초코맛</S.Item>
            <S.Item>꽃차</S.Item>
          </S.ItemContainer>
        </S.Wrapper>
        <TabBar />
      </CenteredContainer>
    </>
  );
};

export default SearchPage;

const S: any = {};

S.SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 2rem;
  padding: 1rem;
`;

S.SearchBar = styled.input`
  background-color: #f1f1f1;
  height: 2rem;
  border: 0;
  padding: 0;
  color: #808080;
  font-weight: 500;
`;

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
