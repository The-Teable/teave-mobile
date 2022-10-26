import styled, { css } from "styled-components";
import Image from "next/image";
import Modal from "../../common/Modal";
import Margin from "../../common/Margin";
import Button from "../../common/Button";
import { color } from "../../../styles/palette";
import teaFilter from "../../../services/static/teaFilter.json";
import { FilterModalProps } from "../../../types/filter";
import useFilterModal from "../hooks/useFilterModal";

const FilterModal = (props: FilterModalProps) => {
  const { title: modalTitle, onCancel } = props;
  const {
    caffeine,
    setCaffeine,
    teaType,
    setTeaType,
    handleSelectItem,
    handleReset,
    handleFilterSubmit,
  } = useFilterModal(props);

  return (
    <Modal title={modalTitle} onCancel={onCancel}>
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>카페인</StyledTitle>
          <StyledItemContainer>
            <StyledItem
              selected={caffeine.length === 0}
              onClick={() =>
                handleSelectItem({
                  filterName: "caffeine",
                  itemName: "전체",
                  filter: caffeine,
                  setFilter: setCaffeine,
                  isUnique: true,
                })
              }
            >
              전체
            </StyledItem>
            <>
              {teaFilter.caffeine.filters.map((item) => (
                <>
                  <StyledItem
                    selected={caffeine.some(({ value }) => value === item)}
                    onClick={() =>
                      handleSelectItem({
                        filterName: "caffeine",
                        itemName: item,
                        filter: caffeine,
                        setFilter: setCaffeine,
                        isUnique: true,
                      })
                    }
                  >
                    {item}
                  </StyledItem>
                </>
              ))}
            </>
          </StyledItemContainer>
        </StyledWrapper>
        <StyledWrapper>
          <StyledTitle>티 종류</StyledTitle>
          <StyledItemContainer>
            <StyledItem
              selected={teaType.length === 0}
              onClick={() =>
                handleSelectItem({
                  filterName: "teaType",
                  itemName: "전체",
                  filter: teaType,
                  setFilter: setTeaType,
                  isUnique: false,
                })
              }
            >
              전체
            </StyledItem>
            <>
              {teaFilter.teaType.filters.map((item) => (
                <>
                  <StyledItem
                    selected={teaType.some(({ value }) => value === item)}
                    onClick={() =>
                      handleSelectItem({
                        filterName: "teaType",
                        itemName: item,
                        filter: teaType,
                        setFilter: setTeaType,
                        isUnique: false,
                      })
                    }
                  >
                    {item}
                  </StyledItem>
                </>
              ))}
            </>
          </StyledItemContainer>
        </StyledWrapper>
        <StyledFooter>
          <StyledReset onClick={handleReset}>
            <Image
              src={"/image/icon_reset.svg"}
              width={20}
              height={20}
              alt="reset"
            />
            <Margin row size={0.5} />
            전체 초기화
          </StyledReset>
          <StyledSubmit onClick={handleFilterSubmit}>
            상품 찾아보기
          </StyledSubmit>
        </StyledFooter>
      </StyledContainer>
    </Modal>
  );
};

export default FilterModal;

const StyledContainer = styled.div`
  width: 36rem;
`;

const StyledWrapper = styled.div`
  margin: 2rem;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const StyledItem = styled.div<{ selected: boolean }>`
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

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${color.gray200};

  padding: 2rem;
`;

const StyledReset = styled.button`
  display: flex;
  align-items: center;
  color: ${color.gray600};
  border: 0;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSubmit = styled(Button)`
  width: 15rem;
`;
