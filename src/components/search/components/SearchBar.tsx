import Image from "next/image";
import styled from "styled-components";
import { searchBarProps } from "../../../types/search";
import Margin from "../../common/Margin";

const SearchBar = ({ searchInput }: searchBarProps) => {
  return (
    <>
      <S.SearchBarContainer>
        <Margin size={0.5} row />
        <Image
          src={"/image/icon_search_bar.svg"}
          width={20}
          height={20}
          alt={"search Icon"}
        />
        <Margin size={1} row />
        <S.SearchBar placeholder={"검색어를 입력해주세요"} {...searchInput} />
        <Margin size={1} row />
        <Image
          src={"/image/icon_cancel.svg"}
          width={15}
          height={15}
          alt={"cancel Icon"}
          onClick={() => searchInput.reset()}
        />
      </S.SearchBarContainer>
    </>
  );
};

export default SearchBar;

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
  width: 100%;
  border: 0;
  padding: 0;
  color: #808080;
  font-weight: 500;
`;
