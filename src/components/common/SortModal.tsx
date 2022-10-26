import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Modal from "./Modal";
import { color } from "../../styles/palette";

export const SORT_KEY = {
  RECENT: "최신순",
  SAIL: "판매순",
  LOW_PRICE: "낮은 가격순",
  HIGH_PRICE: "높은 가격순",
  REVIEW: "후기순",
} as const;

export type SortKey = typeof SORT_KEY[keyof typeof SORT_KEY];

interface SortModalProps {
  title: string;
  onCancel: () => void;
  sortKey: string;
  setSortKey: Dispatch<SetStateAction<SortKey>>;
}

const SortModal = ({
  title,
  onCancel,
  sortKey,
  setSortKey,
}: SortModalProps) => {
  const handleSelectItem = (item: SortKey) => {
    setSortKey(item);
    onCancel();
  };

  return (
    <Modal title={title} onCancel={onCancel}>
      <StyledContainer>
        {Object.values(SORT_KEY).map((e, i) => (
          <StyledItem
            key={i}
            onClick={() => handleSelectItem(e)}
            selected={e === sortKey}
          >
            {e}{" "}
            {e === sortKey ? (
              <Image
                src="/image/icon_check.svg"
                width={10}
                height={10}
                alt="check icon"
              />
            ) : null}
          </StyledItem>
        ))}
      </StyledContainer>
    </Modal>
  );
};

export default SortModal;

const StyledContainer = styled.div`
  width: 36rem;
`;

const StyledItem = styled.div<{ selected: boolean }>`
  font-size: 1.4rem;
  padding: 1.5rem 2rem;
  border-bottom: solid 1px ${color.gray300};
  ${({ selected }: { selected: boolean }) =>
    !selected
      ? css`
          color: ${color.gray400};
        `
      : null}
  &:hover {
    cursor: pointer;
  }
`;
