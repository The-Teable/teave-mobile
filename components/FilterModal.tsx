import Modal from "./common/Modal";
import styled, { css } from "styled-components";
import { color } from "../styles/palette";
import Margin from "./common/Margin";
import teaFilter from "../pages/api/teaFilter.json";
import { useState, Dispatch, SetStateAction } from "react";
import Button from "./common/Button";
import Image from "next/image";

interface FilterModalProps {
  title: string;
  onCancel: () => void;
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
}

const FilterModal = ({
  title: modalTitle,
  onCancel,
  selectedFilters,
  setSelectedFilters
}: FilterModalProps) => {
  const [buffer, setBuffer] = useState(selectedFilters);

  const handleSelectItem = (item: string) => {
    setBuffer(
      buffer.some(e => item === e)
        ? buffer.filter(e => item !== e)
        : buffer.concat(item)
    );
  };

  const handleReset = () => {
    setBuffer([]);
  };

  const handleFilterSubmit = () => {
    setSelectedFilters(buffer);
    onCancel();
  };

  return (
    <Modal title={modalTitle} onCancel={onCancel}>
      <S.Container>
        {teaFilter.map(({ title, filters }) => (
          <S.Wrapper>
            <S.Title>{title}</S.Title>
            <Margin size={1} />
            <S.ItemContainer>
              {filters.map(item => (
                <>
                  <S.Item
                    selected={buffer.some(e => e === item)}
                    onClick={() => handleSelectItem(item)}
                  >
                    {item}
                  </S.Item>
                </>
              ))}
            </S.ItemContainer>
            <Margin size={3} />
          </S.Wrapper>
        ))}
        <S.Footer>
          <S.Reset onClick={handleReset}>
            <Image src={"/image/icon_reset.svg"} width={20} height={20} />
            <Margin row size={0.5} />
            전체 초기화
          </S.Reset>
          <S.Submit onClick={handleFilterSubmit}>상품 찾아보기</S.Submit>
        </S.Footer>
      </S.Container>
    </Modal>
  );
};

export default FilterModal;

const S: any = {};

S.Container = styled.div`
  width: 36rem;
`;

S.Wrapper = styled.div`
  margin: 2rem;
`;

S.Title = styled.div`
  font-size: 1.5rem;
`;

S.ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

S.Item = styled.div<{ selected: boolean }>`
  border-radius: 1.5rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 1rem 1rem 0;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  ${({ selected }: { selected: boolean }) =>
    selected
      ? css`
          background-color: ${color.teaveGreen};
          color: #ffffff;
          border: 1px solid ${color.teaveGreen};
        `
      : css`
          background-color: #ffffff;
          color: #000000;
          border: 1px solid ${color.gray400};
        `}
`;

S.Footer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${color.gray200};

  padding: 2rem;
`;

S.Reset = styled.button`
  display: flex;
  align-items: center;
  color: ${color.gray600};
  border: 0;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

S.Submit = styled(Button)`
  width: 15rem;
`;
